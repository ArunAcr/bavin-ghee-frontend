import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, getAdminSessionToken } from "@/lib/adminAuth";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const expected = await getAdminSessionToken();

  if (!process.env.ADMIN_PASSWORD || !cookie || cookie !== expected) {
    if (pathname.startsWith("/api/")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
