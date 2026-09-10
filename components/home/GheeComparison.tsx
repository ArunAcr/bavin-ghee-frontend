const rows = [
  { label: "Colour", cow: "Golden yellow", buffalo: "Creamy white" },
  { label: "Texture", cow: "Grainy, granular", buffalo: "Smooth, dense" },
  { label: "Flavour", cow: "Light, aromatic", buffalo: "Rich, deep" },
  { label: "Fat Content", cow: "Moderate", buffalo: "Higher" },
  { label: "Best For", cow: "Daily cooking, tempering", buffalo: "Sweets, festive dishes" },
];

export default function GheeComparison() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
            Which One Is Right For You?
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Cow Ghee vs Buffalo Ghee
          </h2>
          <p className="mt-3 text-foreground/60">
            Both are pure and traditionally made — here&apos;s how they differ.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gold/30 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/30 text-left">
                <th className="px-4 sm:px-6 py-4 font-semibold text-foreground/60"> </th>
                <th className="px-4 sm:px-6 py-4 font-display font-bold text-maroon">Cow Ghee</th>
                <th className="px-4 sm:px-6 py-4 font-display font-bold text-maroon">Buffalo Ghee</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-gold/10 last:border-0">
                  <td className="px-4 sm:px-6 py-4 font-semibold text-foreground/70 whitespace-nowrap">
                    {row.label}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-foreground/70">{row.cow}</td>
                  <td className="px-4 sm:px-6 py-4 text-foreground/70">{row.buffalo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
