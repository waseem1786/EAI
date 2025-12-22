"use client";
import { TaskWithProgress } from "./TaskCard";

export function TaskGanttItem({ task, onPlay }: { task: TaskWithProgress; onPlay: (taskId: string) => void }) {
  return (
    <div key={task.id} style={{ marginBottom: 14, cursor: "pointer" }} onClick={() => onPlay(task.id)}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 950 }}>{task.title}</span>
        <span className="badge">{task.pct}%</span>
      </div>
      <div className="timelineBar" style={{ height: 12 }}>
        <div className="progressFill" style={{ width: `${task.pct}%` }} />
      </div>
    </div>
  );
}
