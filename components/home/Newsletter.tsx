"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/lib/api";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/newsletter`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      toast.success("Thanks for subscribing! Check your inbox for 10% off.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 text-center">
      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-maroon mb-2">
        A Golden 10% Off Your First Order
      </h2>
      <p className="text-foreground/60 mb-6">
        No spam — just new launches, recipes and the occasional discount.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 rounded-full border border-gold/40 bg-white px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-maroon text-cream font-semibold px-6 py-3 hover:bg-maroon-dark transition-colors disabled:opacity-60"
        >
          {submitting ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
    </section>
  );
}
