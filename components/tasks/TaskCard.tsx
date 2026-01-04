"use client";
import { motion } from "framer-motion";
import { Task } from "../../lib/tasks";

function fmt(sec: number) {
  const s = Math.max(0, Math.floor(sec));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

export type TaskWithProgress = Task & { pct: number; watched: number; status: string; duration: number };

export function TaskCard({ task, onPlay, progress }: { task: TaskWithProgress; onPlay: (taskId: string) => void; progress?: { lastPositionSeconds?: number } }) {
  return (
    <motion.div key={task.id} className="taskCard" whileHover={{ y: -2 }} layout onClick={() => onPlay(task.id)} style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>
          <p className="taskTitle">{task.title}</p>
          <div className="taskMeta">Day {task.day} · {task.estimatedMinutes} min · {task.id}</div>
        </div>
        <span
          className="badge"
          style={{
            borderColor: task.status === "done" ? "rgba(34,197,94,.35)" : task.status === "doing" ? "rgba(59,130,246,.35)" : "var(--border)",
            background: task.status === "done" ? "rgba(34,197,94,.12)" : task.status === "doing" ? "rgba(59,130,246,.10)" : "rgba(255,255,255,.92)",
            color: task.status === "done" ? "#166534" : task.status === "doing" ? "#1d4ed8" : "rgba(15,23,42,.82)",
            fontWeight: 600
          }}
        >
          {task.status}
        </span>
      </div>
      <div className="taskDesc">{task.description}</div>
      <div className="split" />
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ minWidth: 220, flex: 1 }}>
          <div className="progressBar">
            <div className="progressFill" style={{ width: `${task.pct}%` }} />
          </div>
          <div className="small" style={{ marginTop: 6 }}>
            Resume <b>{fmt(progress?.lastPositionSeconds || 0)}</b> / {fmt(task.duration)} · Watched <b>{fmt(task.watched)}</b>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
