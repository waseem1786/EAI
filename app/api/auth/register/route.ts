import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { dbConnect, hasMongoConfigured } from "../../../../lib/db";
import { User } from "../../../../models/User";
import { signSession } from "../../../../lib/jwt";
import { cookies } from "next/headers";
import { SESSION_COOKIE } from "../../../../lib/auth_server";

export async function POST(req: Request) {
  try {
    if (!hasMongoConfigured()) return NextResponse.json({ message: "MongoDB is not configured. Set MONGODB_URI in .env.local." }, { status: 503 });

    const body = await req.json().catch(() => null);
    const email = String(body?.email || "").trim().toLowerCase();
    const password = String(body?.password || "");

    if (!email || !password) return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    if (password.length < 6) return NextResponse.json({ message: "Password must be at least 6 characters." }, { status: 400 });

    await dbConnect();
    const existing = await User.findOne({ email }).lean();
    if (existing) return NextResponse.json({ message: "User already exists." }, { status: 409 });

    const passwordHash = await bcrypt.hash(password, 10);
    const created = await User.create({ email, passwordHash });

    const token = await signSession({ sub: String(created._id), email: created.email });
    const secure = process.env.NODE_ENV === "production";
    cookies().set(SESSION_COOKIE, token, { httpOnly: true, sameSite: "lax", secure, path: "/", maxAge: 60 * 60 * 24 * 30 });

    return NextResponse.json({ user: { id: String(created._id), email: created.email } });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message || "An unknown error occurred." }, { status: 500 });
  }
}
