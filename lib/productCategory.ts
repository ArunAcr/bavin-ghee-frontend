import { ProductCategory as PrismaProductCategory } from "@/lib/generated/prisma/enums";
import { ProductCategory } from "@/types/product";

const toPrismaMap: Record<ProductCategory, PrismaProductCategory> = {
  "cow-ghee": "cow_ghee",
  "buffalo-ghee": "buffalo_ghee",
  "cow-butter": "cow_butter",
  "buffalo-butter": "buffalo_butter",
};

const fromPrismaMap: Record<PrismaProductCategory, ProductCategory> = {
  cow_ghee: "cow-ghee",
  buffalo_ghee: "buffalo-ghee",
  cow_butter: "cow-butter",
  buffalo_butter: "buffalo-butter",
};

export function toPrismaCategory(category: ProductCategory): PrismaProductCategory {
  return toPrismaMap[category];
}

export function fromPrismaCategory(category: PrismaProductCategory): ProductCategory {
  return fromPrismaMap[category];
}
