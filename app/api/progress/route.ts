import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../lib/db";
import { VideoProgress } from "../../../models/VideoProgress";
import { getSession } from "../../../lib/auth_server";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const videoId = String(url.searchParams.get("videoId") || "");
  if (!videoId) return NextResponse.json({ message: "videoId required" }, { status: 400 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  await dbConnect();
  const doc = await VideoProgress.findOne({ userId: session.sub, videoId }).lean();
  return NextResponse.json({ progress: doc || null });
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const body = await req.json().catch(() => null);
  const videoId = String(body?.videoId || "");
  const lastPositionSeconds = Number(body?.lastPositionSeconds || 0);
  const watchedSecondsDelta = Number(body?.watchedSecondsDelta || 0);
  const durationSeconds = Number(body?.durationSeconds || 0);
  const segment = body?.segment || null;

  if (!videoId) return NextResponse.json({ message: "videoId required" }, { status: 400 });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  await dbConnect();

  const update: any = {
    $set: { lastPositionSeconds: Math.max(0, lastPositionSeconds), durationSeconds: Math.max(0, durationSeconds) },
    $inc: { watchedSecondsTotal: Math.max(0, watchedSecondsDelta) }
  };

  if (segment?.start !== undefined && segment?.end !== undefined && Number(segment.end) > Number(segment.start)) {
    update.$push = { segments: { start: Number(segment.start), end: Number(segment.end) } };
  }

  const doc = await VideoProgress.findOneAndUpdate(
    { userId: session.sub, videoId },
    update,
    { upsert: true, new: true, setDefaultsOnInsert: true }
  ).lean();

  return NextResponse.json({ progress: doc });
}
