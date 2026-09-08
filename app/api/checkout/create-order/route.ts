import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getRazorpayClient } from "@/lib/razorpay";
import {
  CartValidationError,
  computeShipping,
  generateOrderNumber,
  validateCartItems,
} from "@/lib/checkout";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  const items = body?.items;
  const customer = body?.customer;
  const address = body?.address;

  const name = customer?.name?.trim();
  const email = customer?.email?.trim();
  const phone = customer?.phone?.trim();
  const addressLine1 = address?.line1?.trim();
  const addressLine2 = address?.line2?.trim() || null;
  const city = address?.city?.trim();
  const state = address?.state?.trim();
  const postalCode = address?.postalCode?.trim();

  if (!name || !email || !phone || !addressLine1 || !city || !state || !postalCode) {
    return NextResponse.json(
      { error: "All contact and address fields are required" },
      { status: 400 }
    );
  }

  let orderItems, subtotal;
  try {
    ({ orderItems, subtotal } = validateCartItems(items));
  } catch (error) {
    if (error instanceof CartValidationError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    throw error;
  }

  const shipping = computeShipping(subtotal);
  const total = subtotal + shipping;
  const orderNumber = generateOrderNumber();

  const razorpayOrder = await getRazorpayClient().orders.create({
    amount: total * 100,
    currency: "INR",
    receipt: orderNumber,
  });

  await prisma.order.create({
    data: {
      orderNumber,
      customerName: name,
      email,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      subtotal,
      shipping,
      total,
      razorpayOrderId: razorpayOrder.id,
      items: { create: orderItems },
    },
  });

  return NextResponse.json({
    orderNumber,
    razorpayOrderId: razorpayOrder.id,
    amount: total * 100,
    currency: "INR",
    keyId: process.env.RAZORPAY_KEY_ID,
    subtotal,
    shipping,
    total,
    customer: { name, email, phone },
  });
}
