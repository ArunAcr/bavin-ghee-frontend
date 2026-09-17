import Link from "next/link";
import Logo from "@/components/brand/Logo";
import {
  BUSINESS_ADDRESS,
  BUSINESS_EMAIL,
  BUSINESS_SUPPORT_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-green text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Logo className="h-12 w-12 sm:h-14 sm:w-14" />
              <span className="hidden sm:flex flex-col leading-tight">
                <span className="font-display font-extrabold text-lg text-white tracking-wide">
                  <span className="block">Bavin Ghee</span>
                </span>
                <span className="text-[11px] uppercase tracking-widest text-white">
                  The Taste of Heaven
                </span>
              </span>
            </Link>
          </div>
          <p className="text-sm text-cream/80 leading-relaxed">
            Rooted in tradition and crafted with care, Bavin brings authentic Cow and Buffalo Ghee to your family kitchen - rich in taste, made with care, and inspired by generations of dairy goodness.
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
            <li><Link href="/shipping-delivery" className="hover:text-gold transition-colors">Shipping &amp; Delivery</Link></li>
            <li><Link href="/returns-refunds" className="hover:text-gold transition-colors">Return &amp; Refund Policy</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-use" className="hover:text-gold transition-colors">Terms of Use</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-base mb-4">Get in Touch</h3>
          <address className="not-italic text-sm text-cream/80 leading-relaxed space-y-2">
            {/* <p>Bavin Ghee</p> */}
             <p><b className="pb-2">JAIWIN DAIRY FARM </b></p>
            <p>
              <span>Bavin Ghee</span>, {BUSINESS_ADDRESS.line1}, {BUSINESS_ADDRESS.city} - {BUSINESS_ADDRESS.postalCode},{" "}
              {BUSINESS_ADDRESS.state}
            </p>
            <p>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="hover:text-gold transition-colors">
                {BUSINESS_EMAIL}
              </a>
            </p>
            <p>
              <a href={`mailto:${BUSINESS_SUPPORT_EMAIL}`} className="hover:text-gold transition-colors">
                {BUSINESS_SUPPORT_EMAIL}
              </a>
            </p>
            <p>
              <a href={`tel:${BUSINESS_PHONE_TEL}`} className="hover:text-gold transition-colors">
                {BUSINESS_PHONE_DISPLAY}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/70">
          <p>&copy; 2026 Jaiwin Dairy Farm. All rights reserved.</p>
          <p>Made with care, for your family&apos;s table.</p>
        </div>
      </div>
    </footer>
  );
}
