"use client";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { TaskBoard } from "../../components/tasks/TaskBoard";

export default function TasksPage() {
  const sp = useSearchParams();
  const initialTaskId = sp.get("taskId") || undefined;
  const initialStatus = (sp.get("status") as any) || undefined;
  const initialSeekSeconds = sp.get("seek") ? Number(sp.get("seek")) : undefined;

  // memoize so TaskBoard doesn't re-init on every render
  const init = useMemo(() => ({ initialTaskId, initialStatus, initialSeekSeconds }), [initialTaskId, initialStatus, initialSeekSeconds]);

  return <TaskBoard initialTaskId={init.initialTaskId} initialStatus={init.initialStatus} initialSeekSeconds={init.initialSeekSeconds} />;
}
