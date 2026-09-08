import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminSessionToken } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const password = body?.password;

  if (!password || !process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await getAdminSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
