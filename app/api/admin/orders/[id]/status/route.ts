import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const VALID_STATUSES = ["pending", "paid", "shipped", "delivered", "failed", "cancelled"];

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => null);
  const status = body?.status;

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const order = await prisma.order.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json({ ok: true, status: order.status });
}
