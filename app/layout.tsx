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
                <Link className="navLink" href="/">Dashboard</Link>
                <Link className="navLink" href="/tasks">Tasks</Link>
                <Link className="navLink" href="/timeline">Timeline</Link>
                <NavUser />
              </nav>
            </div>
          </div>
          <AnimatedBg />
          <div className="container">{children}</div>
          <div className="footer">
            <div className="footerInner">
              <span>AI Learning Tracker</span>
              <span>Plain CSS · MongoDB Atlas · Auto Resume</span>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
