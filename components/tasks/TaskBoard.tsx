"use client";
import { motion, AnimatePresence } from "framer-motion";
import { TaskGridItem } from "./TaskGridItem";
import { TaskGanttItem } from "./TaskGanttItem";
import { KanbanBoard } from "./KanbanBoard";
import { DropResult } from "react-beautiful-dnd";
import { VideoModal } from "./VideoModal";
import { TaskSkeleton } from "./TaskSkeleton";
import { useEffect, useMemo, useRef, useState } from "react";
import { type Task } from "../../lib/tasks";
import { PlayerState } from "../video/YouTubePlayer";
import { Toast } from "../ui/Toast";
import { useAuth } from "../auth/AuthContext";
import { loadLocalProgress, saveLocalProgress } from "../../lib/local_fallback";

type Segment = { start: number; end: number };
type Progress = { videoId: string; lastPositionSeconds: number; watchedSecondsTotal: number; durationSeconds: number; segments: Segment[] };
type ViewMode = "board" | "grid" | "gantt";

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

export function TaskBoard({ initialTaskId, initialStatus, initialSeekSeconds }: { initialTaskId?: string; initialStatus?: string; initialSeekSeconds?: number }) {
  const { user } = useAuth();
  const [toast, setToast] = useState<string | null>(null);
  const initialFilter: "all" | "todo" | "in-progress" | "done" = initialStatus === "todo" ? "todo" : initialStatus === "doing" ? "in-progress" : initialStatus === "done" ? "done" : "all";
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "done">(initialFilter);
  const [viewMode, setViewMode] = useState<ViewMode>("board");
  const [playingTaskId, setPlayingTaskId] = useState<string | null>(null);
  const [progressByVideo, setProgressByVideo] = useState<Record<string, Progress>>({});
  const [playerState, setPlayerState] = useState<PlayerState>("idle");
  const [isLoading, setIsLoading] = useState(true);
  const [tasks, setTasks] = useState<Task[]>([]);

  const seekFnRef = useRef<((s: number) => void) | null>(null);
  const sessionStartRef = useRef<number | null>(null);
  const lastTickRef = useRef<number>(0);

  useEffect(() => {
    const t = window.setTimeout(() => setToast(null), toast ? 2600 : 0);
    return () => window.clearTimeout(t);
  }, [toast]);

  const loadProgress = async (videoId: string) => {
    if (!user) {
      const local = loadLocalProgress(videoId);
      if (local) setProgressByVideo((m) => ({ ...m, [videoId]: local as any }));
      return local as any as Progress | null;
    }
    const r = await apiJson<{ progress: Progress | null }>(`/api/progress?videoId=${encodeURIComponent(videoId)}`, { method: "GET", cache: "no-store" as any });
    if (!r.ok) {
      const local = loadLocalProgress(videoId);
      if (local) setProgressByVideo((m) => ({ ...m, [videoId]: local as any }));
      if (r.status === 503) setToast("MongoDB not configured. Saving locally.");
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
      setToast("MongoDB not configured. Saving locally.");
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
    if (!user) return;
    await apiJson("/api/events", { method: "POST", body: JSON.stringify({ taskId: task.id, videoId: task.videoId, type, data }) });
  };

  const startPlayTask = async (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId)!;
    await loadProgress(task.videoId);
    setPlayingTaskId(taskId);
    await postEvent(task, "play_opened");
  };

  useEffect(() => {
    if (!initialTaskId || tasks.length === 0) return;
    const exists = tasks.some((t) => t.id === initialTaskId);
    if (!exists) return;
    startPlayTask(initialTaskId).catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTaskId, tasks]);

  const visibleTasks = useMemo(() => {
    const all = tasks.map((t) => {
      const p = progressByVideo[t.videoId];
      const pct = p?.durationSeconds ? Math.min(100, Math.round((p.lastPositionSeconds / p.durationSeconds) * 100)) : 0;
      return { ...t, pct, watched: p?.watchedSecondsTotal || 0, duration: p?.durationSeconds || 0 };
    });
    if (viewMode === 'board') return all;
    return filter === "all" ? all : all.filter((t) => t.status === filter);
  }, [progressByVideo, filter, tasks, viewMode]);

  const playingTask = playingTaskId ? tasks.find((t) => t.id === playingTaskId)! : null;

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
    if (Math.abs(p.seconds - lastTickRef.current) < 0.9) return;
    lastTickRef.current = p.seconds;
    await postProgress(playingTask.videoId, { lastPositionSeconds: p.seconds, watchedSecondsDelta: p.deltaWatched, durationSeconds: p.duration });
    if (p.duration > 0 && p.seconds / p.duration >= 0.9) await postEvent(playingTask, "auto_done");
  };

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

  useEffect(() => {
    if (!initialSeekSeconds || !initialTaskId || !seekFnRef.current || playingTaskId !== initialTaskId) return;
    try {
      seekFnRef.current(Math.max(0, initialSeekSeconds));
      setToast(`Seeking to ${fmt(initialSeekSeconds)}`);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialSeekSeconds, initialTaskId, playingTaskId]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await apiJson<{ tasks: Task[] }>("/api/tasks");
      if (res.ok && res.data?.tasks) {
        const fetchedTasks = res.data.tasks;
        setTasks(fetchedTasks);
        const map: Record<string, Progress> = {};
        for (const t of fetchedTasks) {
          const p = loadLocalProgress(t.videoId);
          if (p) map[t.videoId] = p as any;
        }
        setProgressByVideo((m) => ({ ...map, ...m }));
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newTasks = Array.from(tasks);
    const task = newTasks.find(t => t.id === draggableId)!;
    task.status = destination.droppableId;
    setTasks(newTasks);

    await apiJson(`/api/task-status`, { method: "POST", body: JSON.stringify({ taskId: draggableId, status: destination.droppableId }) });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Toast message={toast} />

      <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="cardInner" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 className="h1">Tasks</h1>
            <p className="p">View as Board, Grid or Gantt. All synced to MongoDB.</p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge">Player: {playerState}</span>
            {!user && <span className="badge">Local mode</span>}
            <select className="input" style={{ width: 140 }} value={filter} onChange={(e) => setFilter(e.target.value as any)}>
              <option value="all">All</option>
              <option value="todo">To Do</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <div className="btnRow">
              <button className={`btn ${viewMode === "board" ? "btnPrimary" : "btnGhost"}`} onClick={() => setViewMode("board")}>Board</button>
              <button className={`btn ${viewMode === "grid" ? "btnPrimary" : "btnGhost"}`} onClick={() => setViewMode("grid")}>Grid</button>
              <button className={`btn ${viewMode === "gantt" ? "btnPrimary" : "btnGhost"}`} onClick={() => setViewMode("gantt")}>Gantt</button>
            </div>
          </div>
        </div>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto", paddingRight: 12 }}>
          <AnimatePresence mode="wait">
            {isLoading && viewMode === "board" && (
              <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {[...Array(3)].map((_, i) => <TaskSkeleton key={i} />)}
              </motion.div>
            )}
            {!isLoading && viewMode === "board" && (
              <KanbanBoard tasks={visibleTasks} onDragEnd={onDragEnd} onPlay={startPlayTask} />
            )}

            {isLoading && viewMode === "grid" && (
              <motion.div key="skeleton-grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                {[...Array(6)].map((_, i) => <div key={i} className="card skeleton" style={{ padding: 12, height: 120 }} />)}
              </motion.div>
            )}
            {!isLoading && viewMode === "grid" && (
              <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
                {visibleTasks.map((t) => <TaskGridItem key={t.id} task={t} onPlay={startPlayTask} />)}
                {visibleTasks.length === 0 && <div className="card" style={{ gridColumn: "1 / -1" }}><div className="cardInner">No tasks match your filter.</div></div>}
              </motion.div>
            )}

            {isLoading && viewMode === "gantt" && (
              <motion.div key="skeleton-gantt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="card">
                <div className="cardInner">
                  <div className="h2">Gantt Chart View</div>
                  <div className="split" />
                  {[...Array(5)].map((_, i) => (
                    <div key={i} style={{ marginBottom: 14 }}>
                      <div className="skeleton" style={{ width: "70%", height: 14, marginBottom: 4 }} />
                      <div className="timelineBar skeleton" style={{ height: 12 }} />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {!isLoading && viewMode === "gantt" && (
              <motion.div key="gantt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="card">
                <div className="cardInner">
                  <div className="h2">Gantt Chart View</div>
                  <div className="split" />
                  {visibleTasks.map((t) => <TaskGanttItem key={t.id} task={t} onPlay={startPlayTask} />)}
                  {visibleTasks.length === 0 && <div style={{ marginTop: 8 }}>No tasks match your filter.</div>}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {playingTask && (
        <VideoModal
          task={playingTask}
          startSeconds={progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0}
          onClose={async () => {
            const endAt = progressByVideo[playingTask.videoId]?.lastPositionSeconds || 0;
            if (playingTask) {
              await closeSegmentIfOpen(playingTask, endAt);
            }
            setPlayingTaskId(null);
          }}
          onTick={onTick}
          onState={onPlayerState}
          onSeekRequest={(seekTo: (s: number) => void) => {
            seekFnRef.current = seekTo;
          }}
        />
      )}
    </div>
  );
}