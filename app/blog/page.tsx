import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bavin Ghee",
  description: "Recipes, tips and everything you want to know about pure ghee and butter.",
};

const posts = [
  {
    title: "Cow Ghee vs Buffalo Ghee — What's the Difference?",
    excerpt:
      "Both are pure, both are traditional — but they taste and cook differently. Here's how to pick the right one for your kitchen.",
    date: "March 30, 2026",
  },
  {
    title: "5 Everyday Uses for Ghee Beyond Cooking",
    excerpt:
      "From oil pulling to skincare, ghee has been a household essential for centuries. Here's how to make the most of every jar.",
    date: "March 22, 2026",
  },
  {
    title: "How Traditional Bilona Ghee Is Actually Made",
    excerpt:
      "A behind-the-scenes look at the slow, patient process that gives Bavin Ghee its grainy texture and rich aroma.",
    date: "March 10, 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16 w-full">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
          Our Blog
        </p>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
          Recipes, Tips &amp; Ghee Wisdom
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="rounded-2xl border border-gold/30 bg-white overflow-hidden flex flex-col">
            <div className="aspect-video bg-cream-dark" aria-hidden />
            <div className="p-5 flex flex-col gap-2">
              <p className="text-xs text-foreground/50">{post.date}</p>
              <h2 className="font-display font-bold text-base text-foreground leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-foreground/60 leading-relaxed">{post.excerpt}</p>
              <span className="text-sm font-semibold text-maroon mt-2">Read More →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
