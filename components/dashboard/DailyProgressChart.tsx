"use client";
import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export function DailyProgressChart({ data, onDayClick }: { data: { day: number; completed: number }[]; onDayClick: (day: number) => void }) {
  return (
    <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="cardInner">
        <div className="h2">Daily Progress</div>
        <div className="small">Lessons completed per day.</div>
        <div style={{ height: 260, marginTop: 12 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="#8b5cf6" strokeWidth={2} onClick={(d: any) => onDayClick(d.day)} style={{ cursor: "pointer" }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
