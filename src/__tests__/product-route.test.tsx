import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ProductPage, {
  generateMetadata,
  generateStaticParams,
} from "@/app/urunler/[slug]/page";
import { products } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/ordering";

vi.mock("next/navigation", () => ({
  notFound: () => {
    throw new Error("NEXT_NOT_FOUND");
  },
}));

describe("static product routes", () => {
  it("prebuilds exactly the catalog routes", () => {
    expect(generateStaticParams()).toEqual(
      products.map(({ slug }) => ({ slug })),
    );
  });

  it.each(products)(
    "resolves $slug to its own product and CTA",
    async (product) => {
      const params = Promise.resolve({ slug: product.slug });

      render(await ProductPage({ params }));

      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
        product.name,
      );
      expect(
        screen.getByRole("link", { name: "WhatsApp'tan Sipariş Ver" }),
      ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
      expect(await generateMetadata({ params })).toEqual({
        title: product.name,
        description: product.shortDescription,
      });
    },
  );

  it("uses Next's 404 boundary for an unknown product", async () => {
    const params = Promise.resolve({ slug: "olmayan-cicek" });

    await expect(ProductPage({ params })).rejects.toThrow("NEXT_NOT_FOUND");
    expect(await generateMetadata({ params })).toEqual({
      title: "Çiçek bulunamadı",
    });
  });
});
