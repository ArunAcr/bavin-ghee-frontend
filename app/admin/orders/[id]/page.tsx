import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/admin/StatusBadge";
import OrderStatusForm from "@/components/admin/OrderStatusForm";

export const dynamic = "force-dynamic";

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await prisma.order.findUnique({
    where: { id },
    include: { items: true },
  });

  if (!order) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 w-full">
      <Link href="/admin/orders" className="text-sm text-foreground/60 hover:text-maroon transition-colors">
        ← Back to Orders
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-4 mb-8">
        <div>
          <h1 className="font-display font-extrabold text-3xl text-maroon">{order.orderNumber}</h1>
          <p className="text-foreground/50 text-sm">
            Placed on{" "}
            {order.createdAt.toLocaleString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="rounded-2xl border border-gold/30 bg-white p-6">
          <h2 className="font-display font-bold text-lg mb-3">Customer</h2>
          <p className="text-sm text-foreground/80">{order.customerName}</p>
          <p className="text-sm text-foreground/60">{order.email}</p>
          <p className="text-sm text-foreground/60">{order.phone}</p>
        </div>

        <div className="rounded-2xl border border-gold/30 bg-white p-6">
          <h2 className="font-display font-bold text-lg mb-3">Shipping Address</h2>
          <p className="text-sm text-foreground/80">{order.addressLine1}</p>
          {order.addressLine2 && <p className="text-sm text-foreground/80">{order.addressLine2}</p>}
          <p className="text-sm text-foreground/80">
            {order.city}, {order.state} {order.postalCode}
          </p>
          <p className="text-sm text-foreground/80">{order.country}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-gold/30 bg-white p-6 mb-8">
        <h2 className="font-display font-bold text-lg mb-4">Items</h2>
        <div className="flex flex-col gap-3 mb-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex items-center justify-between text-sm">
              <span className="text-foreground/80">
                {item.productName}{" "}
                <span className="text-foreground/50">
                  ({item.variantLabel} × {item.quantity})
                </span>
              </span>
              <span className="font-semibold text-maroon">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gold/30 pt-4 flex flex-col gap-2">
          <div className="flex justify-between text-sm text-foreground/70">
            <span>Subtotal</span>
            <span>₹{order.subtotal}</span>
          </div>
          <div className="flex justify-between text-sm text-foreground/70">
            <span>Shipping</span>
            <span>{order.shipping === 0 ? "Free" : `₹${order.shipping}`}</span>
          </div>
          <div className="flex justify-between font-bold text-maroon">
            <span>Total</span>
            <span>₹{order.total}</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gold/30 bg-white p-6 mb-8">
        <h2 className="font-display font-bold text-lg mb-3">Payment</h2>
        <p className="text-sm text-foreground/70">
          Razorpay Order ID: <span className="font-mono">{order.razorpayOrderId ?? "—"}</span>
        </p>
        <p className="text-sm text-foreground/70">
          Razorpay Payment ID: <span className="font-mono">{order.razorpayPaymentId ?? "—"}</span>
        </p>
      </div>

      <div className="rounded-2xl border border-gold/30 bg-white p-6">
        <h2 className="font-display font-bold text-lg mb-3">Update Status</h2>
        <OrderStatusForm orderId={order.id} currentStatus={order.status} />
      </div>
    </div>
  );
}
