import Link from "next/link";
import { Metadata } from "next";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Shop | Bavin Ghee",
  description: "Shop pure cow ghee, buffalo ghee, cow butter and buffalo butter from Bavin Ghee.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category as ProductCategory | undefined;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 w-full">
      <div className="text-center max-w-xl mx-auto mb-10">
        <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">Shop</p>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
          Pure Ghee &amp; Butter
        </h1>
        <p className="mt-3 text-foreground/60">
          Traditionally made, delivered fresh. Choose your favourite.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-10">
        <Link
          href="/shop"
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
            !activeCategory
              ? "bg-maroon text-cream border-maroon"
              : "border-gold/40 text-foreground/70 hover:border-maroon"
          }`}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.key}
            href={`/shop?category=${cat.key}`}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeCategory === cat.key
                ? "bg-maroon text-cream border-maroon"
                : "border-gold/40 text-foreground/70 hover:border-maroon"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-foreground/60">No products found in this category.</p>
      )}
    </div>
  );
}
