"use client";
import { motion } from "framer-motion";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

export function TimeComparisonChart({ data, onBarClick }: { data: { name: string; estimated: number; watched: number }[]; onBarClick: (name: string) => void }) {
  return (
    <motion.div className="card" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
      <div className="cardInner">
        <div className="h2">Estimated vs. Watched Time</div>
        <div className="small">Comparison of estimated and actual watch time per lesson.</div>
        <div style={{ height: 260, marginTop: 12 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="estimated" fill="#8884d8" name="Estimated (min)" onClick={(d) => onBarClick(d.name)} style={{ cursor: "pointer" }} />
              <Bar dataKey="watched" fill="#82ca9d" name="Watched (min)" onClick={(d) => onBarClick(d.name)} style={{ cursor: "pointer" }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
