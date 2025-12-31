"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function StatCard({ title, value, unit, description, icon }: { title: string; value: string | number; unit?: string; description: string; icon: ReactNode }) {
  return (
    <motion.div className="card cardSoft" whileHover={{ y: -2 }}>
      <div className="cardInner">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="h2">{title}</div>
          {icon}
        </div>
        <div style={{ fontSize: 28, fontWeight: 950, letterSpacing: "-0.03em" }}>
          {value}
          {unit && <span style={{ fontSize: 18, fontWeight: 600, marginLeft: 4 }}>{unit}</span>}
        </div>
        <div className="small">{description}</div>
      </div>
    </motion.div>
  );
}
