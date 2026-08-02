import Image from "next/image";
import { ProductCategory } from "@/types/product";
import ProductJar from "@/components/brand/ProductJar";

interface ProductVisualProps {
  category: ProductCategory;
  label: string;
  image?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ProductVisual({
  category,
  label,
  image,
  className = "h-full w-full",
  sizes = "(min-width: 1024px) 25vw, 50vw",
  priority = false,
}: ProductVisualProps) {
  if (image) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={image}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain"
        />
      </div>
    );
  }

  return <ProductJar category={category} label={label} className={className} />;
}
