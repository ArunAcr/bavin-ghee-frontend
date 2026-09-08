import "dotenv/config";
import { prisma } from "@/lib/prisma";
import { products } from "@/lib/products";
import { toPrismaCategory } from "@/lib/productCategory";

async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {
        name: product.name,
        shortDescription: product.shortDescription,
        description: product.description,
        category: toPrismaCategory(product.category),
        categoryLabel: product.categoryLabel,
        images: product.images ?? [],
        benefits: product.benefits,
        badge: product.badge,
        rating: product.rating,
        reviewCount: product.reviewCount,
        variants: {
          deleteMany: {},
          create: product.variants.map((v) => ({
            label: v.label,
            price: v.price,
            compareAtPrice: v.compareAtPrice,
          })),
        },
      },
      create: {
        slug: product.slug,
        name: product.name,
        shortDescription: product.shortDescription,
        description: product.description,
        category: toPrismaCategory(product.category),
        categoryLabel: product.categoryLabel,
        images: product.images ?? [],
        benefits: product.benefits,
        badge: product.badge,
        rating: product.rating,
        reviewCount: product.reviewCount,
        variants: {
          create: product.variants.map((v) => ({
            label: v.label,
            price: v.price,
            compareAtPrice: v.compareAtPrice,
          })),
        },
      },
    });
    console.log(`Seeded: ${product.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
