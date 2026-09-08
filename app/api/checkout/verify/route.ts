import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendOrderConfirmationEmail } from "@/lib/email";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const razorpayOrderId = body?.razorpay_order_id;
  const razorpayPaymentId = body?.razorpay_payment_id;
  const razorpaySignature = body?.razorpay_signature;

  if (!razorpayOrderId || !razorpayPaymentId || !razorpaySignature) {
    return NextResponse.json({ error: "Missing payment details" }, { status: 400 });
  }

  const secret = process.env.RAZORPAY_KEY_SECRET ?? "";
  const expectedSignature = createHmac("sha256", secret)
    .update(`${razorpayOrderId}|${razorpayPaymentId}`)
    .digest("hex");

  const expected = Buffer.from(expectedSignature, "hex");
  const actual = Buffer.from(razorpaySignature, "hex");

  const isValid =
    expected.length === actual.length && timingSafeEqual(expected, actual);

  if (!isValid) {
    return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
  }

  const order = await prisma.order.update({
    where: { razorpayOrderId },
    data: {
      status: "paid",
      razorpayPaymentId,
      razorpaySignature,
    },
    include: { items: true },
  });

  try {
    await sendOrderConfirmationEmail({
      to: order.email,
      customerName: order.customerName,
      orderNumber: order.orderNumber,
      items: order.items,
      subtotal: order.subtotal,
      shipping: order.shipping,
      total: order.total,
      addressLine1: order.addressLine1,
      addressLine2: order.addressLine2,
      city: order.city,
      state: order.state,
      postalCode: order.postalCode,
    });
  } catch (error) {
    console.error("Failed to send order confirmation email", error);
  }

  return NextResponse.json({ ok: true, orderNumber: order.orderNumber });
}
