import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../lib/db";
import { getSession } from "../../../lib/auth_server";
import { Task } from "../../../models/Task";
import { TaskStatus } from "../../../models/TaskStatus";

export async function GET() {
  const session = await getSession();
  const authed = Boolean(session);

  if (!hasMongoConfigured()) {
    await dbConnect().catch(() => {});
    const docs = await Task.find({}).sort({ day: 1 }).lean();
    return NextResponse.json({ tasks: docs });
  }

  await dbConnect();
  const tasks = await Task.find({}).sort({ day: 1 }).lean();

  if (!authed) {
    return NextResponse.json({ tasks });
  }

  const statuses = await TaskStatus.find({ userId: session!.sub }).lean();
  const statusMap = new Map<string, string>();
  for (const s of statuses) statusMap.set(s.taskId, s.status);

  const merged = tasks.map(t => ({
    ...t,
    status: statusMap.get(t.id) || t.status || "todo",
  }));

  return NextResponse.json({ tasks: merged });
}
