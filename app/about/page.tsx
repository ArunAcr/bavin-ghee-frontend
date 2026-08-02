import { Metadata } from "next";
import Logo from "@/components/brand/Logo";

export const metadata: Metadata = {
  title: "About Us | Bavin Ghee",
  description: "The story behind Bavin Ghee — pure, traditional ghee and butter made the way your grandmother intended.",
};

const values = [
  {
    title: "Traditional Bilona Method",
    text: "We slow-churn curd into butter and simmer it into ghee, exactly the way it's been done for generations.",
  },
  {
    title: "Small Batches",
    text: "No mass production. Every batch is made in small quantities so quality never slips.",
  },
  {
    title: "Honest Ingredients",
    text: "Just milk. No preservatives, no additives, no shortcuts — ever.",
  },
  {
    title: "Family Owned",
    text: "Bavin Ghee is run by a family that grew up on this same ghee, and still eats it every day.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full">
      <section className="bg-cream-dark py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center gap-6">
          <Logo className="h-20 w-20" />
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            Meet the Family Behind Bavin Ghee
          </h1>
          <p className="text-foreground/70 leading-relaxed max-w-2xl">
            Once upon a time, a small family kitchen started making ghee for
            neighbours and friends. Word travelled fast — the aroma, the
            grainy texture, the taste of something made with real care. Today
            Bavin Ghee brings that same recipe to your table, unchanged.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid sm:grid-cols-2 gap-6">
        {values.map((v) => (
          <div key={v.title} className="rounded-2xl border border-gold/30 bg-white p-6">
            <h3 className="font-display font-bold text-lg text-maroon mb-2">{v.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-green py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-cream mb-4">
            The Taste of Heaven, in Every Jar
          </h2>
          <p className="text-cream/80 leading-relaxed">
            We believe good food starts with honest ingredients. That&apos;s
            why every jar of Bavin Ghee carries the same promise: pure,
            traditional, and made with the same love as the very first batch.
          </p>
        </div>
      </section>
    </div>
  );
}
