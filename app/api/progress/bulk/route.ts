import { NextResponse } from "next/server";
import { dbConnect, hasMongoConfigured } from "../../../../lib/db";
import { VideoProgress } from "../../../../models/VideoProgress";
import { getSession } from "../../../../lib/auth_server";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const url = new URL(req.url);
  const idsParam = String(url.searchParams.get("videoIds") || "");
  const videoIds = idsParam.split(",").map(s => s.trim()).filter(Boolean);
  if (videoIds.length === 0) return NextResponse.json({ progressByVideo: {} });
  if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB not configured" }, { status: 503 });

  await dbConnect();
  const docs = await VideoProgress.find({ userId: session.sub, videoId: { $in: videoIds } }).lean();
  const map: Record<string, any> = {};
  for (const d of docs) map[d.videoId] = d;
  return NextResponse.json({ progressByVideo: map });
}
