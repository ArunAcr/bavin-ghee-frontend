"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCartStore, useCartHasHydrated } from "@/store/cartStore";
import { API_BASE_URL } from "@/lib/api";
import { loadRazorpayScript } from "@/lib/loadRazorpayScript";
import { computeShipping } from "@/lib/checkout";

const inputClass =
  "w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold";
const labelClass = "text-sm font-semibold text-foreground/80 mb-1 block";

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.totalPrice());
  const clearCart = useCartStore((state) => state.clearCart);
  const hydrated = useCartHasHydrated();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (hydrated && items.length === 0) {
      router.replace("/cart");
    }
  }, [hydrated, items.length, router]);

  if (!hydrated || items.length === 0) {
    return null;
  }

  const shipping = computeShipping(subtotal);
  const total = subtotal + shipping;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const requiredFields: (keyof typeof form)[] = [
      "name",
      "email",
      "phone",
      "addressLine1",
      "city",
      "state",
      "postalCode",
    ];
    if (requiredFields.some((field) => !form[field].trim())) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        toast.error("Couldn't load payment gateway. Please try again.");
        setSubmitting(false);
        return;
      }

      const res = await fetch(`${API_BASE_URL}/checkout/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productSlug: item.productSlug,
            variantId: item.variantId,
            quantity: item.quantity,
          })),
          customer: { name: form.name, email: form.email, phone: form.phone },
          address: {
            line1: form.addressLine1,
            line2: form.addressLine2,
            city: form.city,
            state: form.state,
            postalCode: form.postalCode,
          },
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Could not create order");
      }

      const order = await res.json();

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Bavin Ghee",
        description: `Order ${order.orderNumber}`,
        order_id: order.razorpayOrderId,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone,
        },
        theme: { color: "#9c1848" },
        handler: async (response) => {
          try {
            const verifyRes = await fetch(`${API_BASE_URL}/checkout/verify`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(response),
            });

            if (!verifyRes.ok) throw new Error("Verification failed");

            clearCart();
            router.push(`/checkout/success?order=${order.orderNumber}`);
          } catch {
            toast.error("Payment verification failed. Please contact support.");
            setSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setSubmitting(false);
            toast("Payment cancelled", { icon: "⚠️" });
          },
        },
      });

      razorpay.open();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 w-full">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon mb-8">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <form onSubmit={handleSubmit} className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="font-display font-bold text-lg">Shipping Details</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="addressLine1" className={labelClass}>
              Address Line 1
            </label>
            <input
              id="addressLine1"
              required
              value={form.addressLine1}
              onChange={(e) => setForm((f) => ({ ...f, addressLine1: e.target.value }))}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="addressLine2" className={labelClass}>
              Address Line 2 (optional)
            </label>
            <input
              id="addressLine2"
              value={form.addressLine2}
              onChange={(e) => setForm((f) => ({ ...f, addressLine2: e.target.value }))}
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label htmlFor="city" className={labelClass}>
                City
              </label>
              <input
                id="city"
                required
                value={form.city}
                onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="state" className={labelClass}>
                State
              </label>
              <input
                id="state"
                required
                value={form.state}
                onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="postalCode" className={labelClass}>
                Postal Code
              </label>
              <input
                id="postalCode"
                required
                value={form.postalCode}
                onChange={(e) => setForm((f) => ({ ...f, postalCode: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 w-full sm:w-auto self-start rounded-full bg-maroon text-cream font-semibold px-8 py-3.5 hover:bg-maroon-dark transition-colors disabled:opacity-60"
          >
            {submitting ? "Processing…" : `Pay ₹${total}`}
          </button>
        </form>

        <div className="rounded-2xl border border-gold/30 bg-white p-6 h-fit sticky top-28">
          <h2 className="font-display font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex flex-col gap-3 mb-4">
            {items.map((item) => (
              <div key={`${item.productSlug}-${item.variantId}`} className="flex justify-between text-sm">
                <span className="text-foreground/70">
                  <Link href={`/shop/${item.productSlug}`} className="hover:text-maroon transition-colors">
                    {item.productName}
                  </Link>{" "}
                  <span className="text-foreground/50">
                    ({item.variantLabel} × {item.quantity})
                  </span>
                </span>
                <span className="font-semibold text-maroon whitespace-nowrap ml-2">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm text-foreground/70 mb-2 border-t border-gold/30 pt-4">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-foreground/70 mb-4">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
          </div>
          <div className="flex items-center justify-between font-bold text-maroon border-t border-gold/30 pt-4">
            <span>Total</span>
            <span>₹{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
