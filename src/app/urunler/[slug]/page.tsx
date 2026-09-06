/** Static flower detail route and product metadata. */
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug, products } from "@/data/products";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug((await params).slug);

  return product
    ? { title: product.name, description: product.shortDescription }
    : { title: "Çiçek bulunamadı" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug((await params).slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
