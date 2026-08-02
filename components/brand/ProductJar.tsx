import { ProductCategory } from "@/types/product";

interface ProductJarProps {
  category: ProductCategory;
  label: string;
  className?: string;
}

const isButter = (category: ProductCategory) =>
  category === "cow-butter" || category === "buffalo-butter";

export default function ProductJar({ category, label, className = "h-full w-full" }: ProductJarProps) {
  const [line1, line2] = label.split(" ").reduce<[string, string]>(
    (acc, word, i, arr) => {
      if (i < Math.ceil(arr.length / 2)) acc[0] += (acc[0] ? " " : "") + word;
      else acc[1] += (acc[1] ? " " : "") + word;
      return acc;
    },
    ["", ""]
  );

  if (isButter(category)) {
    return (
      <svg viewBox="0 0 220 260" className={className} role="img" aria-label={label}>
        <ellipse cx="110" cy="228" rx="72" ry="14" fill="#2b1810" opacity="0.08" />
        <path d="M46 100 h128 l-10 118 a14 14 0 0 1 -14 13 H70 a14 14 0 0 1 -14 -13 Z" fill="#fdf0d5" stroke="#c1642e" strokeWidth="3" />
        <path d="M46 100 h128 l3 22 h-134 Z" fill="#f6c320" stroke="#c1642e" strokeWidth="3" />
        <ellipse cx="110" cy="100" rx="64" ry="16" fill="#fff6de" stroke="#c1642e" strokeWidth="3" />
        <rect x="38" y="76" width="144" height="26" rx="13" fill="#9c1848" stroke="#7a1237" strokeWidth="2" />
        <ellipse cx="110" cy="76" rx="72" ry="14" fill="#c22a5f" stroke="#7a1237" strokeWidth="2" />
        <text x="110" y="168" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontWeight={800} fontSize="20" fill="#9c1848">
          {line1}
        </text>
        <text x="110" y="192" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontWeight={800} fontSize="20" fill="#9c1848">
          {line2}
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 320" className={className} role="img" aria-label={label}>
      <ellipse cx="110" cy="296" rx="66" ry="14" fill="#2b1810" opacity="0.08" />

      <rect x="82" y="10" width="56" height="34" rx="8" fill="#f6c320" stroke="#dba60f" strokeWidth="3" />
      <rect x="90" y="40" width="40" height="18" fill="#fff6de" opacity="0.6" />

      <path
        d="M70 58 h80 v34 c18 10 26 26 26 46 v128 a16 16 0 0 1 -16 16 H60 a16 16 0 0 1 -16 -16 V138 c0 -20 8 -36 26 -46 Z"
        fill="#f6c320"
        stroke="#dba60f"
        strokeWidth="3"
      />

      <path
        d="M44 168 c14 14 34 18 66 18 s52 -4 66 -18 v104 a16 16 0 0 1 -16 16 H60 a16 16 0 0 1 -16 -16 Z"
        fill="#9c1848"
        stroke="#7a1237"
        strokeWidth="3"
      />
      <path
        d="M44 168 c14 14 34 18 66 18 s52 -4 66 -18"
        fill="none"
        stroke="#dba60f"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="110" cy="100" r="26" fill="#fdf0d5" stroke="#1e4620" strokeWidth="2" />
      <text x="110" y="105" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontWeight={800} fontSize="11" fill="#1e4620">
        BAVIN
      </text>

      <text x="110" y="212" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontStyle="italic" fontWeight={600} fontSize="13" fill="#f6c320">
        Pure
      </text>
      <text x="110" y="238" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontWeight={800} fontSize="22" fill="#ffffff">
        {line1}
      </text>
      <text x="110" y="262" textAnchor="middle" fontFamily="var(--font-playfair), Georgia, serif" fontWeight={800} fontSize="22" fill="#ffffff">
        {line2}
      </text>
    </svg>
  );
}
