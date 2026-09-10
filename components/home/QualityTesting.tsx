const checks = [
  {
    title: "Sourced from Trusted Farms",
    text: "Milk is collected fresh from local farms we know personally, with no shortcuts in between.",
  },
  {
    title: "Traditional Bilona Process",
    text: "Curd is hand-churned and slow-simmered — a process that can't be rushed without losing quality.",
  },
  {
    title: "Batch-Checked for Purity",
    text: "Every batch is checked for aroma, texture and consistency before it's packed and sealed.",
  },
  {
    title: "FSSAI Registered",
    text: "Made and packaged in compliance with Indian food safety standards.",
  },
];

export default function QualityTesting() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            Quality You Can Trust
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Quality &amp; Testing
          </h2>
          <p className="mt-3 text-foreground/60">
            Purity isn&apos;t a claim we make lightly — here&apos;s how we back it up.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {checks.map((check) => (
            <div key={check.title} className="rounded-2xl border border-gold/30 bg-white p-6 text-center">
              <h3 className="font-display font-bold text-maroon mb-2">{check.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{check.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
