"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thanks for subscribing! Check your inbox for 10% off.");
    setEmail("");
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
          className="rounded-full bg-maroon text-cream font-semibold px-6 py-3 hover:bg-maroon-dark transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
