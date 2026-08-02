import Link from "next/link";
import Image from "next/image";

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M5 19c9 0 14-5 14-14-9 0-14 5-14 14Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 19c0-4 2-8 6-10.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 21c4 0 6.5-2.5 6.5-6 0-2.5-1.3-4-2.5-5.5.2 2-.6 3-1.5 3.5.3-3-1-5.3-3-7-0.3 2.3-1.2 3.8-2.8 5.3C7.2 12.7 6 14.2 6 16c0 3 2.5 5 6 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 3l7 3v5c0 4.5-3 7.7-7 10-4-2.3-7-5.5-7-10V6l7-3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12.2l2 2 4-4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  {
    icon: DropletIcon,
    title: "Wholesome Source of Fat",
    text: "Cleanest, healthiest source of fat for daily energy",
  },
  {
    icon: SparkleIcon,
    title: "Nourishing, Rich Moisturiser",
    text: "Leaves your skin soft and buttery smooth",
  },
  {
    icon: LeafIcon,
    title: "Digestion & Gut Health",
    text: "Traditionally used to aid digestion and support gut health",
  },
  {
    icon: FlameIcon,
    title: "High Smoke Point",
    text: "Cook, fry and temper without breaking down into harmful compounds",
  },
  {
    icon: ShieldCheckIcon,
    title: "No Shortcuts, Ever",
    text: "Slow-simmered in small batches — zero preservatives, zero additives",
  },
];

export default function ProductHighlight() {
  return (
    <section className="bg-green py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-cream leading-tight">
            Pure Cow Ghee — Inside-Out Goodness
          </h2>
          <p className="mt-4 text-lg italic text-cream/70">
            Your must-have kitchen essential with 15+ uses
          </p>
          <Link
            href="/shop/pure-cow-ghee"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-cream text-green font-semibold px-8 py-3.5 hover:bg-white transition-colors"
          >
            Shop Now
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-t-[9999px] rounded-b-3xl bg-cream/95 flex items-end justify-center overflow-hidden">
              <div className="relative h-[85%] w-[62%] mb-0">
                <Image
                  src="/images/products/cow-ghee-bottle.png"
                  alt="Bavin Pure Cow Ghee"
                  fill
                  sizes="(min-width: 768px) 24rem, 80vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-full bg-cream/10 text-gold flex items-center justify-center">
                  <b.icon />
                </div>
                <div>
                  <h3 className="font-display font-bold text-cream text-base sm:text-lg">
                    {b.title}
                  </h3>
                  <p className="text-cream/65 text-sm mt-1 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
