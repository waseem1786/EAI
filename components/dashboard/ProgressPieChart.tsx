"use client";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#06b6d4", "#f59e0b", "#16a34a"];

export function ProgressPieChart({ data, onPieClick }: { data: { name: string; value: number }[]; onPieClick: (name: string) => void }) {
  return (
    <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="cardInner">
        <div className="h2">Progress distribution</div>
        <div className="small">Updates automatically.</div>
        <div style={{ height: 260, marginTop: 12 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={2} onClick={(d) => onPieClick(d.name)} style={{ cursor: "pointer" }}>
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
