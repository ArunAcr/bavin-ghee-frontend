import Link from "next/link";

export default function HeroGlass() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/products/banner_video_poster.jpg"
          className="h-full w-full object-cover object-center"
        >
          <source src="/images/products/banner_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-maroon-dark/20" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="max-w-md rounded-3xl border border-white/25 bg-white/10 backdrop-blur-lg p-8 sm:p-10 shadow-xl">
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-cream">
            Pure Cow & Buffalo Ghee Traditionally Made in India
          </h1>
          <p className="mt-4 text-cream/85 text-lg">
            No Preservatives. No Additives. Just Purity.
          </p>
          {/* <p className="mt-2 text-cream/70 text-sm">
            Made fresh on our family farm in Oddanchatram, Tamil Nadu.
          </p> */}
          <div className="mt-8">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-gold text-maroon-dark font-bold px-8 py-3.5 hover:bg-gold-dark transition-colors"
            >
              Shop All Purity
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
