
"use client";

import { format } from "date-fns";
import type { TimelineItem } from "../lib/data";

interface TimelineProps {
  items: TimelineItem[];
}

const tagColor: Record<string, string> = {
  Milestone: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40",
  Python: "bg-yellow-500/10 text-yellow-200 border-yellow-500/40",
  "Machine Learning": "bg-sky-500/10 text-sky-200 border-sky-500/40"
};

export function Timeline({ items }: TimelineProps) {
  const sorted = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Learning Timeline
        </h1>
        <p className="text-sm text-slate-300">
          Facebook-style graphical timeline of your key AI learning events.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-10">
        <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500/80 via-slate-700 to-transparent rounded-full" />
        <div className="space-y-6">
          {sorted.map((item) => (
            <div key={item.id} className="relative flex gap-4">
              <div className="flex flex-col items-center">
                <div className="mt-1 h-5 w-5 rounded-full bg-slate-900 border-2 border-sky-400 shadow-soft-glow flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-sky-300" />
                </div>
              </div>
              <div className="flex-1">
                <div className="glass rounded-2xl p-4 shadow-soft-glow">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="font-semibold text-base sm:text-lg">
                      {item.title}
                    </h2>
                    <span className="text-xs text-slate-400">
                      {format(new Date(item.date), "dd MMM yyyy, HH:mm")}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    {item.tag && (
                      <span
                        className={`badge ${tagColor[item.tag] ?? ""}`.trim()}
                      >
                        {item.tag}
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400">
                      Event #{item.id}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {sorted.length === 0 && (
            <p className="text-sm text-slate-400">
              No timeline events yet. As you hit milestones, add them here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
