import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../lib/db";
import { getSession } from "../../../lib/auth_server";
import { Task } from "../../../models/Task";

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
  await Task.updateOne(
    { id: taskId },
    { $set: { status } }
  );

  return NextResponse.json({ ok: true });
}
