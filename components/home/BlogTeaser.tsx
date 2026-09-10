import Link from "next/link";

const posts = [
  {
    title: "Cow Ghee vs Buffalo Ghee — What's the Difference?",
    excerpt:
      "Both are pure, both are traditional — but they taste and cook differently. Here's how to pick the right one for your kitchen.",
  },
  {
    title: "5 Everyday Uses for Ghee Beyond Cooking",
    excerpt:
      "From oil pulling to skincare, ghee has been a household essential for centuries. Here's how to make the most of every jar.",
  },
  {
    title: "How Traditional Bilona Ghee Is Actually Made",
    excerpt:
      "A behind-the-scenes look at the slow, patient process that gives Bavin Ghee its grainy texture and rich aroma.",
  },
];

export default function BlogTeaser() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
              Ghee Knowledge
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
              Recipes &amp; Ghee Wisdom
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-maroon hover:text-maroon-dark transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href="/blog"
              className="rounded-2xl border border-gold/30 bg-white p-6 flex flex-col gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-display font-bold text-base text-foreground leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{post.excerpt}</p>
              <span className="text-sm font-semibold text-maroon mt-2">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
