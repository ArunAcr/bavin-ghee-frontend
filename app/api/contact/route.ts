import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendContactNotificationEmail } from "@/lib/email";

const VALID_INQUIRY_TYPES = ["retail", "wholesale"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name?.trim();
  const email = body?.email?.trim();
  const message = body?.message?.trim();
  const inquiryType = VALID_INQUIRY_TYPES.includes(body?.inquiryType) ? body.inquiryType : "retail";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  await prisma.contactMessage.create({ data: { name, email, message, inquiryType } });

  try {
    await sendContactNotificationEmail({ name, email, message, inquiryType });
  } catch (error) {
    console.error("Failed to send contact notification email", error);
  }

  return NextResponse.json({ ok: true });
}
