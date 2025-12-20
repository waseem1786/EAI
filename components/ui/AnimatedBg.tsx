"use client";
import { motion } from "framer-motion";

export function AnimatedBg() {
  return (
    <div aria-hidden style={{ position:"fixed", inset:0, zIndex:-1, pointerEvents:"none" }}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9}} style={{position:"absolute", inset:0}} />
      <motion.div animate={{ y:[0,-16,0], x:[0,10,0], rotate:[0,6,0] }} transition={{ duration:12, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute", left:"6%", top:"34%", width:260, height:260, borderRadius:999, background:"rgba(6,182,212,.10)" }} />
      <motion.div animate={{ y:[0,18,0], x:[0,-12,0], rotate:[0,-5,0] }} transition={{ duration:14, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute", right:"10%", top:"56%", width:280, height:280, borderRadius:999, background:"rgba(139,92,246,.10)" }} />
      <motion.div animate={{ y:[0,10,0], x:[0,6,0] }} transition={{ duration:16, repeat:Infinity, ease:"easeInOut" }}
        style={{ position:"absolute", left:"45%", top:"80%", width:320, height:120, borderRadius:999, filter:"blur(10px)", background:"rgba(244,63,94,.10)" }} />
    </div>
  );
}
