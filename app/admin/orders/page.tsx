import Link from "next/link";
import { prisma } from "@/lib/prisma";
import StatusBadge from "@/components/admin/StatusBadge";
import LogoutButton from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: { items: true },
  });

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 w-full">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display font-extrabold text-3xl text-maroon">Orders</h1>
        <div className="flex items-center gap-4">
          <Link href="/admin/contact" className="text-sm font-semibold text-maroon hover:text-maroon-dark transition-colors">
            Contact Messages
          </Link>
          <LogoutButton />
        </div>
      </div>

      {orders.length === 0 ? (
        <p className="text-foreground/60">No orders yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-gold/30 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/30 text-left text-foreground/60">
                <th className="px-4 py-3 font-semibold">Order #</th>
                <th className="px-4 py-3 font-semibold">Customer</th>
                <th className="px-4 py-3 font-semibold">Items</th>
                <th className="px-4 py-3 font-semibold">Total</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gold/10 last:border-0">
                  <td className="px-4 py-3 font-semibold text-maroon">{order.orderNumber}</td>
                  <td className="px-4 py-3">
                    <div>{order.customerName}</div>
                    <div className="text-foreground/50 text-xs">{order.email}</div>
                  </td>
                  <td className="px-4 py-3 text-foreground/70">
                    {order.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </td>
                  <td className="px-4 py-3 font-semibold">₹{order.total}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-4 py-3 text-foreground/60 whitespace-nowrap">
                    {order.createdAt.toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/orders/${order.id}`}
                      className="text-maroon font-semibold hover:text-maroon-dark transition-colors"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
