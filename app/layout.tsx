
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "AI Learning Tracker",
  description: "Track your AI learning tasks, tutorials and graphical timeline"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-dark text-slate-50">
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-emerald-400 shadow-soft-glow" />
                <div>
                  <div className="text-sm font-semibold tracking-tight">
                    AI Learning Tracker
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Playlist · Tasks · Timeline · Charts
                  </div>
                </div>
              </div>
              <nav className="flex gap-4 text-xs sm:text-sm">
                <a href="/" className="hover:text-sky-400">Dashboard</a>
                <a href="/tasks" className="hover:text-sky-400">Tasks</a>
                <a href="/timeline" className="hover:text-sky-400">Timeline</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 mx-auto max-w-5xl w-full px-4 py-6">
            {children}
          </main>
          <footer className="border-t border-slate-900 bg-slate-950/90 text-xs text-slate-500">
            <div className="mx-auto max-w-5xl px-4 py-3 flex justify-between">
              <span>AI Learning Playlist Tracker</span>
              <span>Built with Next.js · Tailwind · Recharts</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
