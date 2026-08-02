import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";

export default function Bestsellers() {
  return (
    <section className="bg-cream-dark py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="uppercase tracking-widest text-sm font-bold text-terracotta mb-2">
              Our Bestsellers
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
              Ghee Must-Haves
            </h2>
          </div>
          <Link href="/shop" className="font-semibold text-maroon hover:text-maroon-dark transition-colors">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
