
import { tasks } from "../lib/data";
import { ChartsSection } from "../components/Charts";

export default function DashboardPage() {
  const total = tasks.length;
  const done = tasks.filter((t) => t.status === "done").length;
  const inProgress = tasks.filter((t) => t.status === "in-progress").length;
  const completion = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Visual overview of your AI learning playlist, task progress and timeline.
          </p>
        </div>
        <div className="flex gap-2 text-[11px] text-slate-400">
          <span className="badge">4-week plan</span>
          <span className="badge">28 tasks</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="glass rounded-2xl p-4 shadow-soft-glow">
          <h2 className="text-sm text-slate-300">Total tasks</h2>
          <p className="mt-1 text-2xl font-semibold">{total}</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Every item is 1 step in your AI roadmap.
          </p>
        </div>
        <div className="glass rounded-2xl p-4">
          <h2 className="text-sm text-slate-300">Completed</h2>
          <p className="mt-1 text-2xl font-semibold">{done}</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Mark tasks as <span className="text-sky-300">Done</span> from the Tasks page.
          </p>
        </div>
        <div className="glass rounded-2xl p-4">
          <h2 className="text-sm text-slate-300">In progress</h2>
          <p className="mt-1 text-2xl font-semibold">{inProgress}</p>
          <p className="text-[11px] text-slate-400 mt-1">
            Automatically updated when you play tutorials in the app.
          </p>
        </div>
      </div>

      <ChartsSection />

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        <div className="glass rounded-2xl p-4">
          <h3 className="text-sm font-semibold mb-1">How to use</h3>
          <p className="text-sm text-slate-300">
            Go to <a href="/tasks" className="text-sky-400">Tasks</a> and start from Week 1,
            Day 1. Each task has a tutorial link. You can play it directly inside
            the app or open it in YouTube. Status is automatically set to{" "}
            <span className="text-sky-300">In Progress</span> when you start playing.
          </p>
        </div>
        <div className="glass rounded-2xl p-4">
          <h3 className="text-sm font-semibold mb-1">Timeline</h3>
          <p className="text-sm text-slate-300">
            <a href="/timeline" className="text-sky-400">Timeline</a> shows a graphical,
            Facebook-style vertical feed of your key achievements: finishing Python,
            training your first ML model, understanding transformers, and more.
          </p>
        </div>
      </div>
    </div>
  );
}
