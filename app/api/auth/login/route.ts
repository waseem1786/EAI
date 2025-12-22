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

    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return NextResponse.json({ message: "Invalid email or password." }, { status: 401 });

    const token = await signSession({ sub: String(user._id), email: user.email });
    const secure = process.env.NODE_ENV === "production";
    cookies().set(SESSION_COOKIE, token, { httpOnly: true, sameSite: "lax", secure, path: "/", maxAge: 60 * 60 * 24 * 30 });

    return NextResponse.json({ user: { id: String(user._id), email: user.email } });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message || "An unknown error occurred." }, { status: 500 });
  }
}
