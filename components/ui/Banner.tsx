"use client";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

export function Banner() {
  return (
    <motion.div 
      className="banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="bannerInner">
                <PartyPopper size={20} style={{ color: 'var(--teal)' }} />
        <p style={{ flex: 1 }}>The 30-Day AI Challenge is now live! Complete all tasks to earn your certificate.</p>
        <a href="/tasks" className="btn btnTeal" style={{ marginLeft: 'auto' }}>Start Now</a>
      </div>
    </motion.div>
  );
}
