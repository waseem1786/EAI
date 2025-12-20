import { SignJWT, jwtVerify } from "jose";
const raw = process.env.JWT_SECRET || "dev_only_change_me";
const secret = new TextEncoder().encode(raw);

export type SessionPayload = { sub: string; email: string };

export async function signSession(payload: SessionPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("30d")
    .sign(secret);
}

export async function verifySession(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload as any as SessionPayload;
}
