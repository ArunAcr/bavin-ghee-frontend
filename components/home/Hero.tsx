import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-cream-dark to-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 order-2 md:order-1 text-center md:text-left">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta">
            Introducing
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-maroon">
            Pure Cow &amp; Buffalo Ghee,
            <span className="block italic text-gold-dark">The Taste of Heaven</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-md mx-auto md:mx-0">
            Traditionally made, slow-simmered and never cut with shortcuts.
            All of the good, none of the bad.
          </p>
          <div>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-maroon text-cream font-semibold px-8 py-3.5 hover:bg-maroon-dark transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative h-80 sm:h-[28rem] w-full max-w-xs">
            <Image
              src="/images/products/banner_img_bavin.png"
              alt="Bavin Ghee & Butter — Pure Cow and Buffalo Ghee, Cow and Buffalo Butter"
              fill
              sizes="(min-width: 768px) 40vw, 80vw"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
