"use client";
import { TaskWithProgress } from "./TaskCard";

export function TaskGridItem({ task, onPlay }: { task: TaskWithProgress; onPlay: (taskId: string) => void }) {
  return (
    <div key={task.id} className="card" style={{ padding: 12, cursor: "pointer" }} onClick={() => onPlay(task.id)}>
      <div className="h2" style={{ fontSize: 13 }}>{task.title}</div>
      <div className="small">Day {task.day} · {task.pct}%</div>
      <div className="progressBar" style={{ marginTop: 8 }}>
        <div className="progressFill" style={{ width: `${task.pct}%` }} />
      </div>
    </div>
  );
}
