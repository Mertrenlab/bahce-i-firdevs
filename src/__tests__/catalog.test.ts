import { describe, expect, it } from "vitest";

import { getProductBySlug, products } from "@/data/products";

describe("flower catalog", () => {
  it("contains only flowers and has enough products for the demo", () => {
    expect(products).toHaveLength(6);
    expect(products.every((product) => product.category === "Çiçekler")).toBe(
      true,
    );
  });

  it("uses unique slugs", () => {
    const slugs = products.map((product) => product.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("resolves a known product and rejects an unknown slug", () => {
    expect(getProductBySlug(products[0].slug)).toEqual(products[0]);
    expect(getProductBySlug("olmayan-urun")).toBeUndefined();
  });

  it("marks every temporary image as representative", () => {
    expect(products.every((product) => product.isPlaceholder)).toBe(true);
  });
});
