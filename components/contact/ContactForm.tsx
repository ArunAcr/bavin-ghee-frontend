"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { API_BASE_URL } from "@/lib/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", inquiryType: "retail" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      toast.success("Thanks for reaching out — we'll get back to you soon!");
      setForm({ name: "", email: "", message: "", inquiryType: "retail" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-foreground/80 mb-1 block">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-semibold text-foreground/80 mb-1 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>

      <div>
        <span className="text-sm font-semibold text-foreground/80 mb-1 block">I am a...</span>
        <div className="flex gap-2">
          {[
            { value: "retail", label: "Retail Customer" },
            { value: "wholesale", label: "Wholesale / Bulk Buyer" },
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setForm((f) => ({ ...f, inquiryType: option.value }))}
              className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                form.inquiryType === option.value
                  ? "bg-maroon text-cream border-maroon"
                  : "border-gold/40 text-foreground/70 hover:border-maroon"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-foreground/80 mb-1 block">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="w-full rounded-xl border border-gold/40 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors self-start disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
