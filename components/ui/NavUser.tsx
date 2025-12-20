"use client";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import { motion } from "framer-motion";

export function NavUser() {
  const { user, loading, logout } = useAuth();
  if (loading) return <span className="pill">Loading…</span>;
  if (!user) {
    return (
      <>
        <Link className="navLink" href="/login">Login</Link>
        <Link className="navLink" href="/register">Register</Link>
      </>
    );
  }
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
      style={{ display: "flex", gap: 10, alignItems: "center" }}>
      <span className="pill">{user.email}</span>
      <button className="btn btnRose" onClick={() => logout()}>Logout</button>
    </motion.div>
  );
}
