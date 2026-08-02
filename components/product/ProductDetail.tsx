"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import ProductVisual from "@/components/product/ProductVisual";

export default function ProductDetail({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  const variant = product.variants.find((v) => v.id === variantId)!;

  function handleAddToCart() {
    addItem(
      {
        productSlug: product.slug,
        productName: product.name,
        variantId: variant.id,
        variantLabel: variant.label,
        price: variant.price,
      },
      quantity
    );
    toast.success(`${product.name} (${variant.label}) added to cart`);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16 grid md:grid-cols-2 gap-12 w-full">
      <div className="flex flex-col gap-4">
        <div className="bg-cream-dark rounded-3xl flex items-center justify-center p-10">
          <div className="h-80 sm:h-[26rem] w-full">
            <ProductVisual
              category={product.category}
              label={product.categoryLabel}
              image={product.images?.[activeImage]}
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>

        {product.images && product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`h-20 w-20 rounded-xl bg-cream-dark p-2 border-2 transition-colors ${
                  i === activeImage ? "border-maroon" : "border-transparent"
                }`}
                aria-label={`Show image ${i + 1}`}
              >
                <ProductVisual category={product.category} label={product.categoryLabel} image={img} sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-5">
        <div>
          {product.badge && (
            <span className="inline-block bg-maroon text-cream text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-maroon">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-sm">
            <span className="text-gold-dark" aria-hidden>
              {"★".repeat(Math.round(product.rating))}
              {"☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="text-foreground/50">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>
        </div>

        <p className="text-foreground/70 leading-relaxed">{product.description}</p>

        <div>
          <p className="text-sm font-semibold text-foreground/80 mb-2">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setVariantId(v.id)}
                className={`px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
                  v.id === variantId
                    ? "bg-maroon text-cream border-maroon"
                    : "border-gold/40 text-foreground/70 hover:border-maroon"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-maroon">₹{variant.price}</span>
          {variant.compareAtPrice && (
            <span className="text-foreground/40 line-through">₹{variant.compareAtPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gold/40 rounded-full">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="h-11 w-11 flex items-center justify-center text-maroon font-bold"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="w-8 text-center font-semibold">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="h-11 w-11 flex items-center justify-center text-maroon font-bold"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex-1 rounded-full bg-maroon text-cream font-semibold px-8 py-3 hover:bg-maroon-dark transition-colors"
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-4 border-t border-gold/30 pt-6">
          <p className="text-sm font-semibold text-foreground/80 mb-3">Why you&apos;ll love it</p>
          <ul className="space-y-2">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-dark shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
