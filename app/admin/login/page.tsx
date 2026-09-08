"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Login failed");
      }

      router.push("/admin/orders");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Login failed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-sm px-4 sm:px-6 py-24 w-full">
      <h1 className="font-display font-extrabold text-2xl text-maroon mb-6 text-center">
        Admin Login
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="password" className="text-sm font-semibold text-foreground/80 mb-1 block">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors disabled:opacity-60"
        >
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
