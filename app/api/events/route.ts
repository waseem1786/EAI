import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../lib/db";
import { TimelineEvent } from "../../../models/TimelineEvent";
import { getSession } from "../../../lib/auth_server";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  await dbConnect();
  const url = new URL(req.url);
  const limit = Math.min(500, Math.max(10, Number(url.searchParams.get("limit") || 200)));
  const items = await TimelineEvent.find({ userId: session.sub }).sort({ createdAt: -1 }).limit(limit).lean();
  return NextResponse.json({ events: items });
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  const body = await req.json().catch(() => null);
  const videoId = String(body?.videoId || "");
  const taskId = String(body?.taskId || "");
  const type = String(body?.type || "");
  const data = body?.data;

  if (!videoId || !taskId || !type) return NextResponse.json({ message: "videoId, taskId, type required" }, { status: 400 });

  await dbConnect();
  const created = await TimelineEvent.create({ userId: session.sub, videoId, taskId, type, data });
  return NextResponse.json({ event: created });
}
