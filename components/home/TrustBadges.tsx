const badges = [
  "SMALL BATCHES",
  "TRADITIONAL BILONA METHOD",
  "NO PRESERVATIVES",
  "FAMILY OWNED",
  "100% NATURAL",
];

export default function TrustBadges() {
  const doubled = [...badges, ...badges];

  return (
    <div className="bg-maroon py-3 overflow-hidden">
      <div className="flex gap-10 animate-marquee whitespace-nowrap w-max">
        {doubled.map((badge, i) => (
          <span key={i} className="text-cream text-xs sm:text-sm font-bold tracking-widest flex items-center gap-10">
            {badge}
            <span className="text-gold" aria-hidden>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
