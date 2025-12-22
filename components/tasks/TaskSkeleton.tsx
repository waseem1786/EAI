"use client";

export function TaskSkeleton() {
  return (
    <div className="taskCard" style={{ pointerEvents: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
        <div>
          <p className="taskTitle skeleton" style={{ width: 200, height: 20 }} />
          <div className="taskMeta skeleton" style={{ width: 100, height: 16, marginTop: 6 }} />
        </div>
        <span className="badge skeleton" style={{ width: 60, height: 24 }} />
      </div>
      <div className="taskDesc skeleton" style={{ width: "100%", height: 32, marginTop: 12 }} />
      <div className="split" />
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ minWidth: 220, flex: 1 }}>
          <div className="progressBar skeleton" style={{ height: 12 }} />
          <div className="small skeleton" style={{ width: 150, height: 16, marginTop: 6 }} />
        </div>
        <div className="btnRow">
          <div className="btn btnPrimary skeleton" style={{ width: 80, height: 36 }} />
          <div className="btn btnGhost skeleton" style={{ width: 100, height: 36 }} />
        </div>
      </div>
    </div>
  );
}
