import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE } from "../../../../lib/auth_server";

export async function POST() {
  cookies().set(SESSION_COOKIE, "", { httpOnly: true, sameSite: "lax", secure: false, path: "/", maxAge: 0 });
  return NextResponse.json({ ok: true });
}
