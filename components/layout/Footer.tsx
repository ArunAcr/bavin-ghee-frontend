import Link from "next/link";
import Logo from "@/components/brand/Logo";

export default function Footer() {
  return (
    <footer className="bg-green text-cream mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo className="h-12 w-12" />
            <span className="font-display font-extrabold text-lg">Bavin Ghee</span>
          </div>
          <p className="text-sm text-cream/80 leading-relaxed">
            Once upon a time, a family kitchen started making ghee the traditional way —
            no shortcuts, no additives. Today, we bring that same purity to yours.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li><Link href="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
            <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Help</h3>
          <ul className="space-y-2 text-sm text-cream/80">
            <li><Link href="/contact" className="hover:text-gold transition-colors">Shipping &amp; Delivery</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Return &amp; Refund Policy</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition-colors">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Get in Touch</h3>
          <address className="not-italic text-sm text-cream/80 leading-relaxed space-y-2">
            <p>Bavin Ghee Pvt. Ltd.</p>
            <p>123 Gaushala Road, Your City, India</p>
            <p>
              <a href="mailto:hello@bavinghee.com" className="hover:text-gold transition-colors">
                hello@bavinghee.com
              </a>
            </p>
            <p>
              <a href="tel:+911234567890" className="hover:text-gold transition-colors">
                +91 12345 67890
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/70">
          <p>&copy; 2026 Bavin Ghee. All rights reserved.</p>
          <p>Made with care, for your family&apos;s table.</p>
        </div>
      </div>
    </footer>
  );
}
