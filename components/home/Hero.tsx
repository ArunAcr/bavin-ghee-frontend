"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { products } from "@/lib/products";
import { ProductCategory } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import ProductVisual from "@/components/product/ProductVisual";

const tabs: { key: ProductCategory; label: string }[] = [
  { key: "cow-ghee", label: "A2 Cow Ghee" },
  { key: "buffalo-ghee", label: "Buffalo Ghee" },
  { key: "cow-butter", label: "Cow Butter" },
  { key: "buffalo-butter", label: "Buffalo Butter" },
];

export default function Hero() {
  const [active, setActive] = useState<ProductCategory>(tabs[0].key);
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.category === active)!;
  const variant = product.variants[0];

  function handleAddToCart() {
    addItem(
      {
        productSlug: product.slug,
        productName: product.name,
        variantId: variant.id,
        variantLabel: variant.label,
        price: variant.price,
      },
      1
    );
    toast.success(`${product.name} (${variant.label}) added to cart`);
  }

  return (
    <section className="bg-cream-dark/40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14 sm:py-20 flex flex-col items-center text-center gap-8">
        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-maroon max-w-3xl">
          Pure Dairy, Crafted the Traditional Way.
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActive(tab.key)}
              aria-pressed={active === tab.key}
              className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold border transition-colors ${
                active === tab.key
                  ? "bg-maroon text-cream border-maroon"
                  : "border-maroon/25 text-maroon/70 hover:border-maroon"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          className="animate-fade-in-up w-full bg-cream rounded-3xl border border-gold/20 shadow-sm p-6 sm:p-10 grid sm:grid-cols-2 gap-8 items-center text-left"
        >
          <div className="h-56 sm:h-72 order-2 sm:order-1">
            <ProductVisual
              category={product.category}
              label={product.categoryLabel}
              image={product.images?.[0]}
              sizes="(min-width: 640px) 30vw, 80vw"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 order-1 sm:order-2">
            {product.badge && (
              <span className="inline-block w-fit bg-maroon text-cream text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                {product.badge}
              </span>
            )}
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-maroon">
              {product.name}
            </h2>
            <p className="text-foreground/70">{product.shortDescription}</p>

            <ul className="flex flex-col gap-2">
              {product.benefits.slice(0, 3).map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm font-medium text-foreground/80"
                >
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-dark shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-maroon">₹{variant.price}</span>
              <span className="text-sm text-foreground/50">/ {variant.label}</span>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors"
              >
                Add to Cart
              </button>
              <Link
                href={`/shop/${product.slug}`}
                className="rounded-full border border-maroon/30 text-maroon font-semibold px-8 py-3 hover:border-maroon transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
