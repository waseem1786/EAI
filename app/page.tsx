"use client";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { type Task } from "../lib/tasks";
import { DashboardSkeleton } from "../components/dashboard/DashboardSkeleton";
import { StatCard } from "../components/dashboard/StatCard";
import { ProgressPieChart } from "../components/dashboard/ProgressPieChart";
import { DailyProgressChart } from "../components/dashboard/DailyProgressChart";
import { TimeComparisonChart } from "../components/dashboard/TimeComparisonChart";
import { DrillDownModal } from "../components/dashboard/DrillDownModal";
import { useAuth } from "../components/auth/AuthContext";
import { loadLocalProgress } from "../lib/local_fallback";

type Progress = { videoId: string; watchedSecondsTotal: number; durationSeconds: number; lastPositionSeconds: number };

async function getAllProgressFromAPI(tasks: Task[]): Promise<Record<string, Progress>> {
  const entries: Array<[string, Progress] | null> = await Promise.all(
    tasks.map(async (t) => {
      try {
        const r = await fetch(`/api/progress?videoId=${encodeURIComponent(t.videoId)}`, { cache: "no-store" });
        if (!r.ok) return null;
        const j = await r.json().catch(() => ({} as any));
        return j?.progress ? [t.videoId, j.progress] as [string, Progress] : null;
      } catch {
        return null;
      }
    })
  );
  const map: Record<string, Progress> = {};
  for (const pair of entries) {
    if (!pair) continue;
    const [key, value] = pair;
    map[key] = value;
  }
  return map;
}

function DashboardContent() {
  const router = useRouter();
  const goTask = (taskId: string) => router.push(`/tasks?taskId=${encodeURIComponent(taskId)}`);
  const goTaskStatus = (status: string) => router.push(`/tasks?status=${encodeURIComponent(status)}`);
  const { user, loading } = useAuth();
  const [progressMap, setProgressMap] = useState<Record<string, Progress>>({});
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [drillDown, setDrillDown] = useState<{ title: string; tasks: Task[] } | null>(null);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const res = await fetch("/api/tasks");
      const json = await res.json();
      const fetchedTasks = json.tasks as Task[];
      setTasks(fetchedTasks);

      if (user) {
        const m = await getAllProgressFromAPI(fetchedTasks);
        setProgressMap(m);
      } else {
        const m: Record<string, Progress> = {};
        for (const t of fetchedTasks) {
          const p = loadLocalProgress(t.videoId);
          if (p) m[t.videoId] = p as any;
        }
        setProgressMap(m);
      }
      setIsLoading(false);
    };
    load().catch(() => {});
  }, [user]);

  const { stats, dailyProgress, timeComparison, tasksByStatus } = useMemo(() => {
    const total = tasks.length;
    let watched = 0, done = 0, inProgress = 0;
    for (const t of tasks) {
      const p = progressMap[t.videoId];
      if (p?.watchedSecondsTotal) watched += p.watchedSecondsTotal;
      const pct = p?.durationSeconds ? (p.lastPositionSeconds / p.durationSeconds) : 0;
      if (pct >= 0.9) done++;
      else if ((p?.lastPositionSeconds || 0) > 0) inProgress++;
    }
    const todo = total - done - inProgress;

    const dailyProgressMap: Record<number, number> = {};
    for (const t of tasks) {
      const p = progressMap[t.videoId];
      const pct = p?.durationSeconds ? p.lastPositionSeconds / p.durationSeconds : 0;
      if (pct >= 0.9) {
        dailyProgressMap[t.day] = (dailyProgressMap[t.day] || 0) + 1;
      }
    }
    const dailyProgress = Object.keys(dailyProgressMap).map(day => ({ day: Number(day), completed: dailyProgressMap[Number(day)] })).sort((a, b) => a.day - b.day);

    const timeComparison = tasks.map(t => ({
      name: t.id,
      estimated: t.estimatedMinutes,
      watched: Math.round((progressMap[t.videoId]?.watchedSecondsTotal || 0) / 60),
    }));

    const tasksByStatus = {
      "To Do": tasks.filter(t => {
        const p = progressMap[t.videoId];
        const pct = p?.durationSeconds ? p.lastPositionSeconds / p.durationSeconds : 0;
        return pct < 0.9 && (p?.lastPositionSeconds || 0) === 0;
      }),
      "In Progress": tasks.filter(t => {
        const p = progressMap[t.videoId];
        const pct = p?.durationSeconds ? p.lastPositionSeconds / p.durationSeconds : 0;
        return pct < 0.9 && (p?.lastPositionSeconds || 0) > 0;
      }),
      "Done": tasks.filter(t => {
        const p = progressMap[t.videoId];
        const pct = p?.durationSeconds ? p.lastPositionSeconds / p.durationSeconds : 0;
        return pct >= 0.9;
      }),
    };

    return {
      stats: { total, done, inProgress, todo, watchedMin: Math.round(watched / 60) },
      dailyProgress,
      timeComparison,
      tasksByStatus,
    };
  }, [progressMap, tasks]);

  const pie = [{ name: "To Do", value: stats.todo }, { name: "In Progress", value: stats.inProgress }, { name: "Done", value: stats.done }];
  if (!pie.some(p => p.value > 0)) {
    pie[0].value = 1;
  }
  const colors = ["#06b6d4", "#f59e0b", "#16a34a"];

  if (isLoading) return <DashboardSkeleton />;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="cardInner" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 className="h1">Dashboard</h1>
            <p className="p">A focused learning workspace: plan lessons, track watch time, and build consistency.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
            {loading ? (
              <span className="pill">Loading…</span>
            ) : user ? (
              <span className="badge">Signed in as <b>{user.email}</b></span>
            ) : (
              <span className="badge">Not signed in — tracking is saved locally in this browser.</span>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div className="card cardSoft" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}>
        <div className="cardInner" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ minWidth: 260, flex: 1 }}>
              <div className="h2" style={{ fontSize: 18 }}>Learn faster with a system</div>
              <div className="p" style={{ marginTop: 6 }}>Board + Grid + Gantt views, auto-resume playback, and a timeline of sessions — all in one place.</div>
            </div>
            <div className="btnRow" style={{ marginTop: 4 }}>
              <button className="btn btnPrimary" onClick={() => router.push("/tasks")}>Open Tasks</button>
              <button className="btn btnGhost" onClick={() => router.push("/timeline")}>View Timeline</button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <motion.div className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.12 }}>
              <div className="cardInner">
                <div className="h2">Momentum</div>
                <div className="p">Turn lessons into a daily habit with visible progress and clear next steps.</div>
              </div>
            </motion.div>
            <motion.div className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.18 }}>
              <div className="cardInner">
                <div className="h2">Clarity</div>
                <div className="p">See your plan in Board, Grid, or Gantt — whatever matches how you think.</div>
              </div>
            </motion.div>
            <motion.div className="card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.24 }}>
              <div className="cardInner">
                <div className="h2">Continuity</div>
                <div className="p">Resume right where you left off, and review your sessions in Timeline.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="grid3">
        <StatCard title="Lessons" value={stats.total} description="AI learning tasks" />
        <StatCard title="Watched" value={stats.watchedMin} unit="m" description="Counted only while playing" />
        <StatCard title="Completed" value={stats.done} description="Auto at ~90%" />
      </div>

      <div className="grid2">
        <ProgressPieChart data={pie} onPieClick={(name) => {
          const statusMap: Record<string, string> = { "To Do": "todo", "In Progress": "doing", "Done": "done" };
          goTaskStatus(statusMap[name]);
        }} />
        <TimeComparisonChart data={timeComparison} onBarClick={(name) => {
          const task = tasks.find(t => t.id === name);
          if (task) {
            setDrillDown({ title: `Task: ${name}`, tasks: [task] });
          }
        }} />
      </div>
      <div className="grid1">
        <DailyProgressChart data={dailyProgress} onDayClick={(day) => {
          const tasksForDay = tasks.filter(t => t.day === day && tasksByStatus.Done.some(dt => dt.id === t.id));
          setDrillDown({ title: `Tasks Completed on Day ${day}`, tasks: tasksForDay });
        }} />
      </div>
      {drillDown && (
        <DrillDownModal title={drillDown.title} onClose={() => setDrillDown(null)}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 400, overflowY: "auto" }}>
            {drillDown.tasks.map(t => (
              <div key={t.id} className="card cardSoft" style={{ cursor: "pointer" }} onClick={() => goTask(t.id)}>
                <div className="cardInner">
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.title}</div>
                  <div className="small">Day {t.day} · {t.estimatedMinutes} min</div>
                </div>
              </div>
            ))}
            {drillDown.tasks.length === 0 && <div className="small">No tasks in this category.</div>}
          </div>
        </DrillDownModal>
      )}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="card"><div className="cardInner">Loading dashboard...</div></div>}>
      <DashboardContent />
    </Suspense>
  );
}