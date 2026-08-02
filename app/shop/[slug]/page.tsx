import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProductBySlug, products } from "@/lib/products";
import ProductDetail from "@/components/product/ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return {
    title: product ? `${product.name} | Bavin Ghee` : "Product | Bavin Ghee",
    description: product?.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
