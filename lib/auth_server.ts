import { cookies } from "next/headers";
import { verifySession } from "./jwt";
export const SESSION_COOKIE = "alt_session";

export async function getSession() {
  const c = cookies().get(SESSION_COOKIE);
  if (!c?.value) return null;
  try { return await verifySession(c.value); } catch { return null; }
}
