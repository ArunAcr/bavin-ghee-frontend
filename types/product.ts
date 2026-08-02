export type ProductCategory =
  | "cow-ghee"
  | "buffalo-ghee"
  | "cow-butter"
  | "buffalo-butter";

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  compareAtPrice?: number;
}

export interface Product {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  categoryLabel: string;
  variants: ProductVariant[];
  benefits: string[];
  images?: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
}
