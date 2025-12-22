"use client";

import { motion } from "framer-motion";

export function StatCard({ title, value, unit, description }: { title: string; value: string | number; unit?: string; description: string }) {
  return (
    <motion.div className="card cardSoft" whileHover={{ y: -2 }}>
      <div className="cardInner">
        <div className="h2">{title}</div>
        <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-0.03em" }}>
          {value}
          {unit && <span style={{ fontSize: 18, fontWeight: 600, marginLeft: 4 }}>{unit}</span>}
        </div>
        <div className="small">{description}</div>
      </div>
    </motion.div>
  );
}
