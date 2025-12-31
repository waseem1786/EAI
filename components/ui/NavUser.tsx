"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../auth/AuthContext";
import { motion } from "framer-motion";

export function NavUser() {
  const { user, loading, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (loading) return <span className="pill">Loading…</span>;
  
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      {/* Mobile Menu Toggle */}
      <button 
        className="mobileMenuToggle" 
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div className={`mobileMenu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link className="navLink" href="/" onClick={closeMobileMenu}>Dashboard</Link>
        <Link className="navLink" href="/tasks" onClick={closeMobileMenu}>Tasks</Link>
        <Link className="navLink" href="/timeline" onClick={closeMobileMenu}>Timeline</Link>
        {user ? (
          <>
            <span className="navLink" style={{ cursor: 'default', opacity: 0.7 }}>{user.email}</span>
            <button className="btn btnRose" onClick={() => { logout(); closeMobileMenu(); }} style={{ width: '100%', marginTop: 8 }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="navLink" href="/login" onClick={closeMobileMenu}>Login</Link>
            <Link className="navLink" href="/register" onClick={closeMobileMenu}>Register</Link>
          </>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="desktopNav" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Link className="navLink" href="/">Dashboard</Link>
        <Link className="navLink" href="/tasks">Tasks</Link>
        <Link className="navLink" href="/timeline">Timeline</Link>
        {user ? (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
            style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="pill">{user.email}</span>
            <button className="btn btnRose" onClick={() => logout()}>Logout</button>
          </motion.div>
        ) : (
          <>
            <Link className="navLink" href="/login">Login</Link>
            <Link className="navLink" href="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}
