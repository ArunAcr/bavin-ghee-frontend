import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = body?.email?.trim();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  // TODO: store the subscriber once a provider/database is chosen.
  console.log("Newsletter signup:", email);

  return NextResponse.json({ ok: true });
}
