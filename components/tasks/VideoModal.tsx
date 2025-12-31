"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { YouTubePlayer } from "../video/YouTubePlayer";
import { type Task } from "../../lib/tasks";

export function VideoModal({
  task,
  startSeconds,
  onClose,
  onTick,
  onState,
  onSeekRequest,
}: {
  task: Task;
  startSeconds: number;
  onClose: () => void;
  onTick: (p: { seconds: number; duration: number; deltaWatched: number }) => void;
  onState: (s: any) => void;
  onSeekRequest: (seekTo: (s: number) => void) => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);
  return (
    <AnimatePresence>
      <motion.div
        className="modalBackdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modalContent"
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 20, opacity: 0, scale: 0.95 }}
        >
          <div style={{ position: "relative" }}>
            <div className="modalHeader">
              <div>
                <div className="h2" style={{ color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>{task.title}</div>
                <div className="small" style={{ color: "#eee", textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>Day {task.day} · {task.estimatedMinutes} min</div>
              </div>
            </div>
            <div className="modalVideoContainer">
              <div className="modalVideo">
                <YouTubePlayer videoId={task.videoId} startSeconds={startSeconds} onTick={onTick} onState={onState} onSeekRequest={onSeekRequest} />
              </div>
            </div>
            <button className="btn btnRose" onClick={onClose} style={{ position: "absolute", top: -16, right: -16, borderRadius: "50%", width: 32, height: 32, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
