"use client";

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import Logo from "@/components/brand/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-green text-cream text-center text-xs sm:text-sm py-2 px-4 font-medium">
        Free shipping on orders above ₹999 — Pure, traditional ghee delivered to your door.
      </div>

      <header className="bg-cream border-b border-gold/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-extrabold text-lg text-maroon tracking-wide">
                Bavin Ghee
              </span>
              <span className="text-[11px] uppercase tracking-widest text-green">
                The Taste of Heaven
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground/80 hover:text-maroon transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/cart"
              className="relative flex items-center justify-center h-10 w-10 rounded-full bg-maroon text-cream hover:bg-maroon-dark transition-colors"
              aria-label="View cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d="M3 3h2l.4 2M7 13h10l3-8H5.4M7 13L5.4 5M7 13l-1.6 4H17M10 21a1 1 0 100-2 1 1 0 000 2zM17 21a1 1 0 100-2 1 1 0 000 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gold text-green text-[11px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            <button
              className="md:hidden flex items-center justify-center h-10 w-10 text-maroon"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                {menuOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-gold/40 bg-cream px-4 py-3 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-foreground/80 hover:text-maroon transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </div>
  );
}
