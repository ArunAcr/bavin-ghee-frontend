const testimonials = [
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

export default function Testimonials() {
  return (
    <section className="bg-green py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-gold mb-2">
            From Our Community
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-cream">
            Loved by Families Everywhere
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.handle} className="rounded-2xl bg-cream/5 border border-cream/15 p-6">
              <p className="text-gold text-sm mb-3" aria-hidden>★★★★★</p>
              <p className="text-cream/90 text-sm leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-cream font-semibold text-sm">{t.name}</p>
              <p className="text-cream/50 text-xs">{t.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
