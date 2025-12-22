"use client";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { TaskBoard } from "../../components/tasks/TaskBoard";

function TasksContent() {
  const sp = useSearchParams();
  const initialTaskId = sp.get("taskId") || undefined;
  const initialStatus = (sp.get("status") as any) || undefined;
  const initialSeekSeconds = sp.get("seek") ? Number(sp.get("seek")) : undefined;
  const init = useMemo(() => ({ initialTaskId, initialStatus, initialSeekSeconds }), [initialTaskId, initialStatus, initialSeekSeconds]);
  return <TaskBoard initialTaskId={init.initialTaskId} initialStatus={init.initialStatus} initialSeekSeconds={init.initialSeekSeconds} />;
}

export default function TasksPage() {
  return (
    <Suspense fallback={<div className="card"><div className="cardInner">Loading...</div></div>}>
      <TasksContent />
    </Suspense>
  );
}