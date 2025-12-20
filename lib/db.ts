import mongoose from "mongoose";

type Cache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
const g = global as any;
const cached: Cache = g.__mongoose_cache || (g.__mongoose_cache = { conn: null, promise: null });

export function hasMongoConfigured() {
  return Boolean(process.env.MONGODB_URI);
}

export async function dbConnect() {
  const uri = process.env.MONGODB_URI || "";
  if (!uri) throw new Error("Missing MONGODB_URI. Add it to .env.local (MongoDB Atlas).");
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(uri, { dbName: "AI_Learning_Tracker" }).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
