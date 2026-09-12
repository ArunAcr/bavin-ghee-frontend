"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Priya Sekar",
    handle: "Google Review · Local Guide",
    quote:
      "Very reasonable price for it's best Quality. Received product the next day of order. super fast delivery. Customer care was very nice they politely updated all the details till I receive the product in hand. Must buy product.",
  },
  {
    name: "Swathiga Anbuselvi",
    handle: "Google Review · Local Guide",
    quote:
      "The quality of the ghee is too good. They offer home delivery also. Packaging is good.",
  },
  {
    name: "Meenakshi Sundaram",
    handle: "Madurai, Tamil Nadu",
    quote:
      "Ordered for a family function in Madurai and the ghee tasted just like my paatti used to make. Rich aroma, perfect for festival sweets.",
  },
  {
    name: "Nagaraj Gowda",
    handle: "Bengaluru, Karnataka",
    quote:
      "Genuine A2 ghee, hard to find in Bengaluru. Delivery was quick and the aroma when you open the jar says it all.",
  },
  {
    name: "Anjali Mehra",
    handle: "@anjali.eats",
    quote:
      "The aroma hits you the moment you open the jar. Tastes exactly like the ghee my grandmother used to make.",
  },
  {
    name: "Ravi Kulkarni",
    handle: "@ravikcooks",
    quote:
      "Been using Bavin Ghee for six months now — my dal and rotis have never tasted better. Worth every rupee.",
  },
  {
    name: "Sunita Rao",
    handle: "@sunita.wellness",
    quote:
      "Switched to this for oil pulling and cooking both. Grainy texture, rich flavour, zero weird aftertaste.",
  },
];

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 32 24" fill="none" className="h-7 w-7 text-gold/50">
      <path
        d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.6C9.6 4.8 7.2 7.6 6.8 11.6H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.6C27.2 4.8 24.8 7.6 24.4 11.6H30.4V24H17.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const card = track?.children[index] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const scrollByStep = (direction: 1 | -1) => {
    scrollToIndex(Math.max(0, Math.min(testimonials.length - 1, activeIndex + direction)));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      scrollToIndex((activeIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex, isPaused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame: number;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let closest = 0;
        let minDistance = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const distance = Math.abs(el.offsetLeft - track.offsetLeft - track.scrollLeft);
          if (distance < minDistance) {
            minDistance = distance;
            closest = i;
          }
        });
        setActiveIndex(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      className="bg-green py-16 sm:py-24 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-gold mb-2">
            From Our Community
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-cream">
            Loved by Families Everywhere
          </h2>
        </div>

        <div
          ref={trackRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0 pb-2"
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="shrink-0 snap-start w-full sm:w-[55%] lg:w-[31%] rounded-3xl bg-cream/[0.06] border border-cream/15 p-7 flex flex-col"
            >
              <QuoteIcon />
              <p className="text-gold text-sm my-3" aria-hidden>
                ★★★★★
              </p>
              <p className="text-cream/90 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-full bg-gold/15 text-gold font-display font-bold flex items-center justify-center text-sm">
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="text-cream font-semibold text-sm">{t.name}</p>
                  <p className="text-cream/50 text-xs">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-end gap-6">
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-cream/25 text-cream flex items-center justify-center hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? "w-6 bg-gold" : "w-1.5 bg-cream/30"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollByStep(1)}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-cream/25 text-cream flex items-center justify-center hover:bg-cream/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
