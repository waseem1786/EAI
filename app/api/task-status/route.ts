import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../lib/db";
import { getSession } from "../../../lib/auth_server";
import { TaskStatus } from "../../../models/TaskStatus";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  await dbConnect();
  const items = await TaskStatus.find({ userId: session.sub }).lean();
  const map: Record<string, string> = {};
  for (const i of items) map[i.taskId] = i.status;
  return NextResponse.json({ statuses: map });
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  const body = await req.json().catch(() => null);
  const taskId = String(body?.taskId || "");
  const status = String(body?.status || "");

  if (!taskId) return NextResponse.json({ message: "taskId required" }, { status: 400 });
  if (!["todo", "doing", "done"].includes(status)) return NextResponse.json({ message: "status must be todo|doing|done" }, { status: 400 });

  await dbConnect();
  await TaskStatus.updateOne(
    { userId: session.sub, taskId },
    { $set: { status } },
    { upsert: true }
  );

  return NextResponse.json({ ok: true });
}
