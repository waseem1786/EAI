
"use client";

import { useMemo } from "react";
import { tasks } from "../lib/data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const COLORS = ["#38bdf8", "#22c55e", "#f97316"];

export function ChartsSection() {
  const byWeek = useMemo(() => {
    const map: Record<number, number> = {};
    for (const t of tasks) {
      map[t.week] = (map[t.week] || 0) + 1;
    }
    return Object.entries(map).map(([week, count]) => ({
      week: `W${week}`,
      tasks: count
    }));
  }, []);

  const byStatus = useMemo(() => {
    const counts: Record<string, number> = { "todo": 0, "in-progress": 0, "done": 0 };
    for (const t of tasks) {
      counts[t.status]++;
    }
    return [
      { name: "To Do", value: counts["todo"] },
      { name: "In Progress", value: counts["in-progress"] },
      { name: "Done", value: counts["done"] }
    ];
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 mt-4">
      <div className="glass rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-slate-100 mb-2">
          Tasks per week
        </h3>
        <p className="text-xs text-slate-400 mb-3">
          Visual breakdown of how many items you have in each week of the playlist.
        </p>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={byWeek}>
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  fontSize: 12
                }}
              />
              <Bar dataKey="tasks" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="glass rounded-2xl p-4">
        <h3 className="text-sm font-semibold text-slate-100 mb-2">
          Status distribution
        </h3>
        <p className="text-xs text-slate-400 mb-3">
          Pie chart for To Do, In Progress and Done tasks.
        </p>
        <div className="h-56 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={byStatus}
                dataKey="value"
                nameKey="name"
                innerRadius={45}
                outerRadius={70}
                paddingAngle={2}
              >
                {byStatus.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#020617",
                  border: "1px solid #1e293b",
                  borderRadius: 12,
                  fontSize: 12
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-3 mt-1">
          {byStatus.map((s, i) => (
            <div key={s.name} className="flex items-center gap-1 text-[11px] text-slate-300">
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              {s.name} ({s.value})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
