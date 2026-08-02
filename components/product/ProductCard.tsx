import Link from "next/link";
import { Product } from "@/types/product";
import ProductVisual from "@/components/product/ProductVisual";

export default function ProductCard({ product }: { product: Product }) {
  const cheapestVariant = product.variants[0];

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col rounded-2xl border border-gold/30 bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
    >
      <div className="relative bg-cream-dark aspect-square flex items-center justify-center p-6">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-maroon text-cream text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
        <div className="h-full w-full group-hover:scale-105 transition-transform duration-200">
          <ProductVisual
            category={product.category}
            label={product.categoryLabel}
            image={product.images?.[0]}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-1 text-xs text-gold-dark">
          <span aria-hidden>{"★".repeat(Math.round(product.rating))}</span>
          <span className="text-foreground/50">({product.reviewCount})</span>
        </div>
        <h3 className="font-display font-bold text-lg text-foreground">{product.name}</h3>
        <p className="text-sm text-foreground/60">{product.shortDescription}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="font-bold text-maroon">From ₹{cheapestVariant.price}</span>
          {cheapestVariant.compareAtPrice && (
            <span className="text-sm text-foreground/40 line-through">
              ₹{cheapestVariant.compareAtPrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
