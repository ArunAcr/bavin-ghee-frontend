"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const STATUS_OPTIONS = ["pending", "paid", "shipped", "delivered", "failed", "cancelled"];

export default function OrderStatusForm({
  orderId,
  currentStatus,
}: {
  orderId: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState(currentStatus);
  const [submitting, setSubmitting] = useState(false);

  async function handleUpdate() {
    setSubmitting(true);
    try {
      const res = await fetch(`/api/admin/orders/${orderId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Could not update status");

      toast.success("Order status updated");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-xl border border-gold/40 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
      >
        {STATUS_OPTIONS.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
      <button
        onClick={handleUpdate}
        disabled={submitting || status === currentStatus}
        className="rounded-full bg-maroon text-cream font-semibold px-6 py-2 text-sm hover:bg-maroon-dark transition-colors disabled:opacity-60"
      >
        {submitting ? "Updating…" : "Update"}
      </button>
    </div>
  );
}
