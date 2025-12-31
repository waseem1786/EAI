import "./globals.css";
import type { ReactNode } from "react";
import Link from "next/link";
import { AuthProvider } from "../components/auth/AuthContext";
import { AnimatedBg } from "../components/ui/AnimatedBg";
import { NavUser } from "../components/ui/NavUser";

export const metadata = { title: "AI Learning Tracker", description: "Track watch time and resume across AI lessons" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="header">
            <div className="headerInner">
              <div className="brand">
                <div className="logo" />
                <div>
                  <div className="brandTitle">AI Learning Tracker</div>
                  <div className="brandSub">Watch · Resume · Segments · Timeline</div>
                </div>
              </div>
              <nav className="nav" aria-label="Primary">
                <NavUser />
              </nav>
            </div>
          </div>
          <AnimatedBg />
          <div className="container">{children}</div>
          <div className="footer">
            <div className="footerInner">
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontWeight: 800, color: "rgba(11,18,32,.78)" }}>AI Learning Tracker</span>
                <span>Plan lessons, watch with auto-resume, and review sessions over time.</span>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "flex-end" }}>
                <Link className="navLink" href="/">Dashboard</Link>
                <Link className="navLink" href="/tasks">Tasks</Link>
                <Link className="navLink" href="/timeline">Timeline</Link>
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
