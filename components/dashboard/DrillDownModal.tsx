"use client";
import { motion, AnimatePresence } from "framer-motion";

export function DrillDownModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="modalBackdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modalContent"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          style={{ maxWidth: 600 }}
        >
          <div className="card" style={{ padding: 0, overflow: "hidden" }}>
            <div className="cardInner">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <div className="h2">{title}</div>
                <button className="btn btnRose" onClick={onClose}>Close</button>
              </div>
              <div className="split" />
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
