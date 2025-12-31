"use client";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Alex D.",
    role: "ML Engineer",
    review: "This tracker is exactly what I needed to stay focused. The timeline view is a game-changer for seeing my progress.",
  },
  {
    name: "Sara K.",
    role: "Data Scientist",
    review: "I love the simplicity. It helps me break down huge learning goals into manageable daily tasks. The UI is clean and fast.",
  },
  {
    name: "Mike P.",
    role: "Student",
    review: "As someone new to AI, this tool has been invaluable. It keeps me accountable and the auto-resume is a lifesaver.",
  },
];

export function Reviews() {
  return (
    <div className="reviewsSection">
      <h2 className="h2" style={{ textAlign: 'center', marginBottom: 16 }}>What Learners Are Saying</h2>
      <div className="grid3">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            className="card cardSoft"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
          >
            <div className="cardInner">
              <p className="p" style={{ fontStyle: 'italic' }}>“{r.review}”</p>
              <div className="small" style={{ marginTop: 10, textAlign: 'right' }}>
                <strong>{r.name}</strong>, {r.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
