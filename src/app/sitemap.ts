/** Sitemap for the static routes and every catalog product. */
import type { MetadataRoute } from "next";

import { products } from "@/data/products";
import { siteUrl } from "@/lib/site-url";

const staticPaths = ["", "/urunler", "/hakkimizda", "/iletisim"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date();
  const pages = staticPaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: updatedAt,
  }));
  const productPages = products.map((product) => ({
    url: `${siteUrl}/urunler/${product.slug}`,
    lastModified: updatedAt,
  }));

  return [...pages, ...productPages];
}
