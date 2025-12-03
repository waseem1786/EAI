
"use client";

import { useEffect, useState } from "react";
import type { Task, TaskStatus } from "../lib/data";

interface TaskListProps {
  initialTasks: Task[];
}

const statusLabel: Record<TaskStatus, string> = {
  "todo": "To Do",
  "in-progress": "In Progress",
  "done": "Done"
};

function toEmbedUrl(url?: string): string | undefined {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") && u.searchParams.get("v")) {
      const id = u.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}`;
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace("/", "");
      return `https://www.youtube.com/embed/${id}`;
    }
    return url;
  } catch {
    return url;
  }
}

export function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === "undefined") return initialTasks;
    try {
      const stored = window.localStorage.getItem("ai-tracker-tasks");
      if (stored) {
        const parsed = JSON.parse(stored) as Task[];
        return parsed.length ? parsed : initialTasks;
      }
    } catch {}
    return initialTasks;
  });

  const [filterStatus, setFilterStatus] = useState<TaskStatus | "all">("all");
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem("ai-tracker-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filtered = filterStatus === "all"
    ? tasks
    : tasks.filter((t) => t.status === filterStatus);

  const updateStatus = (id: number, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  const handleOpenTutorial = (task: Task, inApp: boolean) => {
    if (!task.url) return;
    updateStatus(task.id, "in-progress");

    if (inApp) {
      const embed = toEmbedUrl(task.url);
      setActiveTaskId(task.id);
      setActiveEmbedUrl(embed);
    } else {
      window.open(task.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            AI Study Tasks
          </h1>
          <p className="text-sm text-slate-300">
            4-week AI learning playlist converted into interactive, trackable tasks.
          </p>
        </div>
        <select
          value={filterStatus}
          onChange={(e) =>
            setFilterStatus(e.target.value as TaskStatus | "all")
          }
          className="bg-slate-900/80 border border-slate-700 rounded-lg px-3 py-2 text-sm outline-none shadow-sm"
        >
          <option value="all">All statuses</option>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>

      <div className="grid gap-3">
        {filtered.map((task) => (
          <div
            key={task.id}
            className="glass rounded-2xl p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between shadow-soft-glow"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-semibold text-base md:text-lg">
                  {task.title}
                </h2>
                <span className="badge text-slate-300">
                  Week {task.week}, Day {task.day}
                </span>
              </div>
              <p className="text-sm text-slate-200">
                {task.description}
              </p>
              <p className="text-xs text-slate-400">
                Estimated {task.estimatedMinutes} mins
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="flex flex-wrap items-center gap-2">
                {(["todo", "in-progress", "done"] as TaskStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => updateStatus(task.id, st)}
                    className={`text-xs px-3 py-1 rounded-full border transition
                      ${
                        task.status === st
                          ? "border-sky-400 bg-sky-500/10 text-sky-300"
                          : "border-slate-700 text-slate-200 hover:border-sky-400"
                      }`}
                  >
                    {statusLabel[st]}
                  </button>
                ))}
              </div>

              {task.url && (
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleOpenTutorial(task, true)}
                    className="text-xs px-3 py-1.5 rounded-full bg-sky-500/90 text-slate-950 font-medium hover:bg-sky-400 transition shadow-soft-glow"
                  >
                    ▶ Play in app
                  </button>
                  <button
                    onClick={() => handleOpenTutorial(task, false)}
                    className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-100 border border-slate-600 hover:border-sky-400 transition"
                  >
                    ↗ Open on YouTube
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-sm text-slate-400">
            No tasks match this filter.
          </p>
        )}
      </div>

      {activeEmbedUrl && (
        <div className="fixed inset-x-0 bottom-0 z-40">
          <div className="mx-auto max-w-5xl px-4 pb-4">
            <div className="glass rounded-2xl p-3 shadow-soft-glow">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-300">
                  Playing task #{activeTaskId}
                </span>
                <button
                  onClick={() => {
                    setActiveTaskId(null);
                    setActiveEmbedUrl(undefined);
                  }}
                  className="text-xs px-2 py-1 rounded-full border border-slate-600 hover:border-rose-400 hover:text-rose-300"
                >
                  ✕ Close player
                </button>
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-800">
                <iframe
                  src={activeEmbedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Tutorial player"
                />
              </div>
              <p className="mt-1 text-[11px] text-slate-400">
                Status for this task is automatically set to{" "}
                <span className="text-sky-300">In Progress</span> when you start playing. 
                You can manually switch it to{" "}
                <span className="text-sky-300">Done</span> when you finish.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
