"use client";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { TASKS, Task } from "../../lib/tasks";
import { YouTubePlayer, PlayerState } from "../video/YouTubePlayer";
import { Toast } from "../ui/Toast";
import { useAuth } from "../auth/AuthContext";
import { loadLocalProgress, saveLocalProgress } from "../../lib/local_fallback";

type Segment = { start: number; end: number };
type Progress = { videoId: string; lastPositionSeconds: number; watchedSecondsTotal: number; durationSeconds: number; segments: Segment[] };

function fmt(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

async function apiJson<T>(url: string, init?: RequestInit): Promise<{ ok: boolean; data?: T; message?: string; status?: number }> {
  try {
    const res = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...(init?.headers || {}) } });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) return { ok: false, message: body?.message || "Request failed", status: res.status };
    return { ok: true, data: body as T, status: res.status };
  } catch (e: any) {
    return { ok: false, message: e?.message || "Network error", status: 0 };
  }
}

export function TaskBoard() {
  const { user } = useAuth();
  const [toast, setToast] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "done">("all");
  const [playingTaskId, setPlayingTaskId] = useState<string | null>(null);
  const [progressByVideo, setProgressByVideo] = useState<Record<string, Progress>>({});
  const [playerState, setPlayerState] = useState<PlayerState>("idle");

  const seekFnRef = useRef<((s: number) => void) | null>(null);
  const sessionStartRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  useEffect(() => {
    const t = window.setTimeout(() => setToast(null), toast ? 2600 : 0);
    return () => window.clearTimeout(t);
  }, [toast]);

  const loadProgress = async (videoId: string) => {
    // If not logged in -> local
    if (!user) {
      const local = loadLocalProgress(videoId);
      if (local) setProgressByVideo((m) => ({ ...m, [videoId]: local as any }));
      return local as any as Progress | null;
    }

    const r = await apiJson<{ progress: Progress | null }>(`/api/progress?videoId=${encodeURIComponent(videoId)}`, { method: "GET", cache: "no-store" as any });
    if (!r.ok) {
      const local = loadLocalProgress(videoId);
      if (local) setProgressByVideo((m) => ({ ...m, [videoId]: local as any }));
      if (r.status === 503) setToast("MongoDB is not configured. Progress is saved locally.");
      return local as any as Progress | null;
    }
    const p = r.data?.progress || null;
    if (p) setProgressByVideo((m) => ({ ...m, [videoId]: p }));
    return p;
  };

  const postProgress = async (videoId: string, payload: { lastPositionSeconds: number; watchedSecondsDelta: number; durationSeconds: number; segment?: Segment }) => {
    if (!user) {
      const cur = loadLocalProgress(videoId) || { videoId, lastPositionSeconds: 0, watchedSecondsTotal: 0, durationSeconds: 0, segments: [], updatedAt: Date.now() };
      const next = saveLocalProgress(videoId, {
        lastPositionSeconds: payload.lastPositionSeconds,
        durationSeconds: payload.durationSeconds,
        watchedSecondsTotal: (cur.watchedSecondsTotal || 0) + Math.max(0, payload.watchedSecondsDelta),
        segments: payload.segment ? [...(cur.segments || []), payload.segment] : (cur.segments || [])
      });
      setProgressByVideo((m) => ({ ...m, [videoId]: next as any }));
      return;
    }

    const r = await apiJson<{ progress: Progress }>("/api/progress", { method: "POST", body: JSON.stringify({ videoId, ...payload }) });
    if (r.ok && r.data?.progress) setProgressByVideo((m) => ({ ...m, [videoId]: r.data!.progress }));
    if (!r.ok && r.status === 503) {
      // fallback to local
      setToast("MongoDB not configured. Saving progress locally.");
      const cur = loadLocalProgress(videoId) || { videoId, lastPositionSeconds: 0, watchedSecondsTotal: 0, durationSeconds: 0, segments: [], updatedAt: Date.now() };
      const next = saveLocalProgress(videoId, {
        lastPositionSeconds: payload.lastPositionSeconds,
        durationSeconds: payload.durationSeconds,
        watchedSecondsTotal: (cur.watchedSecondsTotal || 0) + Math.max(0, payload.watchedSecondsDelta),
        segments: payload.segment ? [...(cur.segments || []), payload.segment] : (cur.segments || [])
      });
      setProgressByVideo((m) => ({ ...m, [videoId]: next as any }));
    }
  };

  const postEvent = async (task: Task, type: string, data?: any) => {
    if (!user) return; // local-only mode
    const r = await apiJson("/api/events", { method: "POST", body: JSON.stringify({ taskId: task.id, videoId: task.videoId, type, data }) });
    if (!r.ok && r.status === 503) setToast("MongoDB not configured. Events are not saved server-side.");
  };

  const startPlayTask = async (taskId: string) => {
    const task = TASKS.find((t) => t.id === taskId)!;
    await loadProgress(task.videoId);
    setPlayingTaskId(taskId);
    await postEvent(task, "play_opened");
  };

  const statusOf = (task: Task) => {
    const p = progressByVideo[task.videoId];
    const pct = p?.durationSeconds ? (p.lastPositionSeconds / p.durationSeconds) : 0;
    if (pct >= 0.9) return "done";
    if ((p?.lastPositionSeconds || 0) > 0) return "in-progress";
    return "todo";
  };

  const visibleTasks = useMemo(() => {
    const all = TASKS.map((t) => {
      const p = progressByVideo[t.videoId];
      const pct = p?.durationSeconds ? Math.min(100, Math.round((p.lastPositionSeconds / p.durationSeconds) * 100)) : 0;
      return { ...t, pct, watched: p?.watchedSecondsTotal || 0, status: statusOf(t), duration: p?.durationSeconds || 0 };
    });
    return filter === "all" ? all : all.filter((t) => t.status === filter);
  }, [progressByVideo, filter]);

  const playingTask = playingTaskId ? TASKS.find((t) => t.id === playingTaskId)! : null;

  const closeSegmentIfOpen = async (task: Task, endAt: number) => {
    if (sessionStartRef.current === null) return;
    const start = sessionStartRef.current;
    sessionStartRef.current = null;
    const seg = { start, end: Math.max(start, endAt) };
    if (seg.end > seg.start + 0.5) {
      await postProgress(task.videoId, { lastPositionSeconds: endAt, watchedSecondsDelta: 0, durationSeconds: progressByVideo[task.videoId]?.durationSeconds || 0, segment: seg });
      await postEvent(task, "segment", seg);
    }
  };

  const onPlayerState = async (s: PlayerState) => {
    setPlayerState(s);
    if (!playingTask) return;

    if (s === "playing") {
      const last = progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0;
      sessionStartRef.current = last;
      await postEvent(playingTask, "playing");
    }

    if (s === "paused" || s === "ended") {
      const endAt = progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0;
      await closeSegmentIfOpen(playingTask, endAt);
      await postEvent(playingTask, s);
    }
  };

  const onTick = async (p: { seconds: number; duration: number; deltaWatched: number }) => {
    if (!playingTask) return;

    // Avoid heavy writes (only if time actually moved)
    if (Math.abs(p.seconds - lastTickRef.current) < 0.9) return;
    lastTickRef.current = p.seconds;

    await postProgress(playingTask.videoId, { lastPositionSeconds: p.seconds, watchedSecondsDelta: p.deltaWatched, durationSeconds: p.duration });

    if (p.duration > 0 && p.seconds / p.duration >= 0.9) {
      await postEvent(playingTask, "auto_done");
    }
  };

  const onClickSegment = (seg: Segment, duration: number) => {
    if (!seekFnRef.current) return;
    const seekTo = Math.max(0, Math.min(duration || seg.end, seg.start));
    seekFnRef.current(seekTo);
    setToast(`Seeking to ${fmt(seekTo)}`);
  };

  useEffect(() => {
    // prime local progress so tasks show instantly
    const map: Record<string, Progress> = {};
    for (const t of TASKS) {
      const p = loadLocalProgress(t.videoId);
      if (p) map[t.videoId] = p as any;
    }
    setProgressByVideo((m) => ({ ...map, ...m }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Toast message={toast} />

      <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="cardInner" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 className="h1">Tasks</h1>
            <p className="p">Pick a lesson, play inside the app, and your resume position + watch time will update automatically.</p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge">Player: {playerState}</span>
            {!user && <span className="badge">Local mode (login to sync to MongoDB)</span>}
            <select className="input" style={{ width: 220 }} value={filter} onChange={(e) => setFilter(e.target.value as any)}>
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid2">
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {visibleTasks.map((t) => (
            <motion.div key={t.id} className="taskCard" whileHover={{ y: -2 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                <div>
                  <p className="taskTitle">{t.title}</p>
                  <div className="taskMeta">Day {t.day} · {t.estimatedMinutes} min · {t.id}</div>
                </div>
                <span className="badge">{t.status}</span>
              </div>

              <div className="taskDesc">{t.description}</div>
              <div className="split" />

              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ minWidth: 220, flex: 1 }}>
                  <div className="progressBar" aria-label="Progress bar">
                    <div className="progressFill" style={{ width: `${t.pct}%` }} />
                  </div>
                  <div className="small" style={{ marginTop: 6 }}>
                    Resume <b>{fmt(progressByVideo[t.videoId]?.lastPositionSeconds || 0)}</b> / {fmt(t.duration)} · Watched <b>{fmt(t.watched)}</b>
                  </div>
                </div>

                <div className="btnRow">
                  <button className="btn btnPrimary" onClick={() => startPlayTask(t.id)}>▶ Play</button>
                  <a className="btn btnGhost" href={t.url} target="_blank" rel="noreferrer">↗ YouTube</a>
                </div>
              </div>

              <div className="split" />
              <div className="small" style={{ marginBottom: 6 }}>Lesson notes</div>
              <div className="card cardSoft" style={{ borderRadius: 16 }}>
                <div className="cardInner" style={{ padding: 12 }}>
                  <div style={{ fontSize: 13, lineHeight: 1.6, color: "rgba(11,18,32,0.85)" }}>{t.lessonText}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {playingTask && (
            <motion.div className="card cardSoft" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
              <div className="cardInner">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <div>
                    <div className="h2">Now playing</div>
                    <div className="small">{playingTask.title}</div>
                  </div>
                  <div className="btnRow">
                    <a className="btn btnGhost" href={playingTask.url} target="_blank" rel="noreferrer">Open YouTube</a>
                    <button className="btn btnRose" onClick={async () => {
                      const endAt = progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0;
                      await closeSegmentIfOpen(playingTask, endAt);
                      setPlayingTaskId(null);
                    }}>Close</button>
                  </div>
                </div>

                <div className="split" />

                <YouTubePlayer
                  videoId={playingTask.videoId}
                  startSeconds={progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0}
                  onTick={onTick}
                  onState={onPlayerState}
                  onSeekRequest={(seekTo) => { seekFnRef.current = seekTo; }}
                />

                <div className="split" />
                <div className="h2">Watched segments</div>
                <div className="small">Hover to see time range. Click a segment to seek.</div>

                <div style={{ marginTop: 10 }}>
                  <div className="timelineBar" role="list" aria-label="Watched segments timeline">
                    {((progressByVideo[playingTask.videoId]?.segments || []) as Segment[]).map((seg, i) => {
                      const dur = progressByVideo[playingTask.videoId]?.durationSeconds || 0;
                      const left = dur > 0 ? (seg.start / dur) * 100 : 0;
                      const width = dur > 0 ? Math.max(0.5, ((seg.end - seg.start) / dur) * 100) : 0;
                      return (
                        <span
                          key={i}
                          className="segment"
                          style={{ left: `${left}%`, width: `${width}%`, cursor: "pointer" }}
                          title={`${fmt(seg.start)} → ${fmt(seg.end)}`}
                          onClick={() => onClickSegment(seg, dur)}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="split" />
                <div className="small">
                  Auto resume is always on. Watch time is counted only while playing; backward seeks are not double-counted.
                </div>
              </div>
            </motion.div>
          )}

          {!playingTask && (
            <div className="card">
              <div className="cardInner">
                <div className="h2">Player</div>
                <div className="small">Choose any task and click “Play”.</div>
                <div className="split" />
                <div className="small">Tip: login to sync everything to MongoDB Atlas, then Timeline tree view will be enabled.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
