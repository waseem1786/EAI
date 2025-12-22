"use client";

export function TimelineSkeleton() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="card skeleton" style={{ height: 120 }} />
      <div className="card cardSoft skeleton" style={{ height: 300 }} />
      <div className="card cardSoft skeleton" style={{ height: 400 }} />
    </div>
  );
}
