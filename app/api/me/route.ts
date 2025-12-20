import { NextResponse } from "next/server";
import { getSession } from "../../../lib/auth_server";

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ user: null });
  return NextResponse.json({ user: { id: session.sub, email: session.email } });
}
