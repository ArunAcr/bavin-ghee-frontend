"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    toast.success("Thanks for reaching out — we'll get back to you soon!");
    setForm({ name: "", email: "", message: "" });
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
        className="rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors self-start"
      >
        Send Message
      </button>
    </form>
  );
}
