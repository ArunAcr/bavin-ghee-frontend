import Link from "next/link";
import { categories, products } from "@/lib/products";
import ProductVisual from "@/components/product/ProductVisual";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-xl mx-auto mb-12">
        <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
          Our Range
        </p>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
          Pure Goodness, Every Jar
        </h2>
        <p className="mt-3 text-foreground/60">
          If it&apos;s ghee and butter, made the traditional way, it has to be us.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((cat) => {
          const product = products.find((p) => p.category === cat.key);
          return (
            <Link
              key={cat.key}
              href={`/shop?category=${cat.key}`}
              className="group flex flex-col items-center text-center rounded-2xl border border-gold/30 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-full h-32 sm:h-40 mb-4 group-hover:scale-105 transition-transform duration-200">
                <ProductVisual
                  category={cat.key}
                  label={cat.label.replace("Pure ", "")}
                  image={product?.images?.[0]}
                  sizes="(min-width: 1024px) 20vw, 40vw"
                />
              </div>
              <h3 className="font-display font-bold text-base text-foreground">{cat.label}</h3>
              <p className="text-xs text-foreground/50 mt-1">{cat.blurb}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
