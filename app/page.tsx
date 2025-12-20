"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TASKS } from "../lib/tasks";
import { useAuth } from "../components/auth/AuthContext";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";
import { loadLocalProgress } from "../lib/local_fallback";

type Progress = { videoId: string; watchedSecondsTotal: number; durationSeconds: number; lastPositionSeconds: number };

async function getAllProgressFromAPI(): Promise<Record<string, Progress>> {
  const map: Record<string, Progress> = {};
  for (const t of TASKS) {
    const r = await fetch(`/api/progress?videoId=${encodeURIComponent(t.videoId)}`, { cache: "no-store" });
    if (!r.ok) continue;
    const j = await r.json().catch(() => ({}));
    if (j?.progress) map[t.videoId] = j.progress;
  }
  return map;
}

export default function DashboardPage() {
  const router = useRouter();
  const goTask = (taskId: string) => router.push(`/tasks?taskId=${encodeURIComponent(taskId)}`);
  const goStatus = (status: string) => router.push(`/tasks?status=${encodeURIComponent(status)}`);

  const { user, loading } = useAuth();
  const [progressMap, setProgressMap] = useState<Record<string, Progress>>({});

  useEffect(() => {
    const load = async () => {
      if (user) {
        const m = await getAllProgressFromAPI();
        setProgressMap(m);
      } else {
        const m: Record<string, Progress> = {};
        for (const t of TASKS) {
          const p = loadLocalProgress(t.videoId);
          if (p) m[t.videoId] = p as any;
        }
        setProgressMap(m);
      }
    };
    load().catch(() => {});
  }, [user]);

  const stats = useMemo(() => {
    const total = TASKS.length;
    let watched = 0, done = 0, inProgress = 0;
    for (const t of TASKS) {
      const p = progressMap[t.videoId];
      if (p?.watchedSecondsTotal) watched += p.watchedSecondsTotal;
      const pct = p?.durationSeconds ? (p.lastPositionSeconds / p.durationSeconds) : 0;
      if (pct >= 0.9) done++;
      else if ((p?.lastPositionSeconds || 0) > 0) inProgress++;
    }
    const todo = total - done - inProgress;
    return { total, done, inProgress, todo, watchedMin: Math.round(watched / 60) };
  }, [progressMap]);

  const pie = [{ name: "To Do", value: stats.todo }, { name: "In Progress", value: stats.inProgress }, { name: "Done", value: stats.done }];
  const colors = ["#06b6d4", "#f59e0b", "#16a34a"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="cardInner" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h1 className="h1">Dashboard</h1>
            <p className="p">World-class UI. Click-to-play, resume, watch-time tracking, segments, and timeline tree view.</p>
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

      <div className="grid3">
        <div className="card cardSoft"><div className="cardInner"><div className="h2">Lessons</div><div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-0.03em" }}>{stats.total}</div><div className="small">AI learning tasks</div></div></div>
        <div className="card cardSoft"><div className="cardInner"><div className="h2">Watched</div><div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-0.03em" }}>{stats.watchedMin}m</div><div className="small">Counted only while playing</div></div></div>
        <div className="card cardSoft"><div className="cardInner"><div className="h2">Completed</div><div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-0.03em" }}>{stats.done}</div><div className="small">Auto at ~90%</div></div></div>
      </div>

      <div className="grid2">
        <div className="card"><div className="cardInner">
          <div className="h2">Progress distribution</div>
          <div className="small">Updates automatically.</div>
          <div style={{ height: 260, marginTop: 12 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2}>
                  {pie.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div></div>
        <div className="card"><div className="cardInner">
          <div className="h2">Watch minutes per lesson</div>
          <div className="small">Per user when logged in. Local fallback otherwise.</div>
          <div style={{ height: 260, marginTop: 12 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TASKS.map(t => ({ name: t.id, minutes: Math.round((progressMap[t.videoId]?.watchedSecondsTotal || 0)/60) }))}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="minutes" fill="#8b5cf6" radius={[8,8,0,0]} onClick={(d:any) => { const tid = d?.payload?.name; if (tid) goTask(String(tid)); }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div></div>
      </div>
    </div>
  );
}
