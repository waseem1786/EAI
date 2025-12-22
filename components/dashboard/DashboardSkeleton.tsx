"use client";

export function DashboardSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="card skeleton" style={{ height: 100 }} />
      <div className="grid3">
        <div className="card cardSoft skeleton" style={{ height: 120 }} />
        <div className="card cardSoft skeleton" style={{ height: 120 }} />
        <div className="card cardSoft skeleton" style={{ height: 120 }} />
      </div>
      <div className="grid2">
        <div className="card skeleton" style={{ height: 320 }} />
        <div className="card skeleton" style={{ height: 320 }} />
      </div>
    </div>
  );
}
