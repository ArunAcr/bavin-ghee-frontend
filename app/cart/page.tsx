"use client";

import Link from "next/link";
import toast from "react-hot-toast";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalPrice = useCartStore((state) => state.totalPrice());

  function handleCheckout() {
    toast("Checkout is coming soon — we'll be in touch!", { icon: "🛒" });
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-24 text-center w-full">
        <h1 className="font-display font-extrabold text-3xl text-maroon mb-3">Your Cart is Empty</h1>
        <p className="text-foreground/60 mb-8">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/shop"
          className="inline-flex items-center justify-center rounded-full bg-maroon text-cream font-semibold px-8 py-3.5 hover:bg-maroon-dark transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 w-full">
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={`${item.productSlug}-${item.variantId}`}
              className="flex items-center gap-4 rounded-2xl border border-gold/30 bg-white p-4"
            >
              <div className="h-16 w-16 rounded-xl bg-cream-dark shrink-0" aria-hidden />

              <div className="flex-1 min-w-0">
                <Link
                  href={`/shop/${item.productSlug}`}
                  className="font-display font-bold text-foreground hover:text-maroon transition-colors"
                >
                  {item.productName}
                </Link>
                <p className="text-sm text-foreground/50">{item.variantLabel}</p>
              </div>

              <div className="flex items-center border border-gold/40 rounded-full">
                <button
                  onClick={() =>
                    updateQuantity(item.productSlug, item.variantId, item.quantity - 1)
                  }
                  className="h-9 w-9 flex items-center justify-center text-maroon font-bold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="w-7 text-center text-sm font-semibold">{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item.productSlug, item.variantId, item.quantity + 1)
                  }
                  className="h-9 w-9 flex items-center justify-center text-maroon font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <p className="w-20 text-right font-semibold text-maroon">
                ₹{item.price * item.quantity}
              </p>

              <button
                onClick={() => removeItem(item.productSlug, item.variantId)}
                className="text-foreground/40 hover:text-maroon transition-colors"
                aria-label="Remove item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gold/30 bg-white p-6 h-fit sticky top-28">
          <h2 className="font-display font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex items-center justify-between text-sm text-foreground/70 mb-2">
            <span>Subtotal</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-foreground/70 mb-4">
            <span>Shipping</span>
            <span>{totalPrice >= 999 ? "Free" : "Calculated at checkout"}</span>
          </div>
          <div className="flex items-center justify-between font-bold text-maroon border-t border-gold/30 pt-4 mb-6">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
