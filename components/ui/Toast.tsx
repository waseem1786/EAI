"use client";
import { AnimatePresence, motion } from "framer-motion";

export function Toast({ message }: { message: string | null }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          style={{
            position: "fixed",
            right: 16,
            bottom: 16,
            zIndex: 50,
            borderRadius: 14,
            border: "1px solid rgba(15,23,42,0.10)",
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 18px 60px rgba(15,23,42,0.10)",
            padding: "10px 12px",
            fontSize: 12,
            color: "rgba(11,18,32,0.85)",
            maxWidth: 380
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
