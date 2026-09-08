import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AboutPage from "@/app/hakkimizda/page";
import ContactPage from "@/app/iletisim/page";
import NotFound from "@/app/not-found";
import HomePage from "@/app/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import ProductsPage from "@/app/urunler/page";
import { brand } from "@/data/brand";
import { products } from "@/data/products";
import { buildPhoneUrl, buildWhatsAppUrl } from "@/lib/ordering";
import { siteUrl } from "@/lib/site-url";

describe("storefront pages", () => {
  it("offers featured flowers, the complete catalog, and the order channel", () => {
    render(<HomePage />);

    for (const product of products.slice(0, 3)) {
      expect(screen.getByRole("heading", { name: product.name })).toBeVisible();
    }
    expect(screen.getByRole("link", { name: "Tüm çiçekler" })).toHaveAttribute(
      "href",
      "/urunler",
    );
    expect(
      screen.getByRole("link", { name: "Siparişe başla" }),
    ).toHaveAttribute("href", buildWhatsAppUrl());
  });

  it("lists every catalog flower with a product-specific order link", () => {
    render(<ProductsPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Çiçekler",
    );
    for (const product of products) {
      expect(
        screen.getByRole("link", {
          name: `${product.name} için WhatsApp'tan yaz`,
        }),
      ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
    }
  });

  it("provides the brand story without transactional controls", () => {
    render(<AboutPage />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Çiçeklerin diliyle",
    );
    expect(
      screen.queryByRole("button", { name: /satın al|sepete/i }),
    ).toBeNull();
  });

  it("exposes only the configured contact destinations", () => {
    render(<ContactPage />);

    const expectedTargets = [
      buildWhatsAppUrl(),
      buildPhoneUrl(),
      brand.instagramUrl,
    ];
    expect(
      screen.getAllByRole("link").map((link) => link.getAttribute("href")),
    ).toEqual(expectedTargets);
  });

  it("recovers from a missing page through the flower catalog", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Bu çiçek burada değil.",
    );
    expect(
      screen.getByRole("link", { name: "Tüm çiçeklere dönün" }),
    ).toHaveAttribute("href", "/urunler");
  });
});

describe("search discovery", () => {
  it("includes every product and public page in the sitemap once", () => {
    const paths = ["", "/urunler", "/hakkimizda", "/iletisim"];
    const expectedUrls = [
      ...paths.map((path) => `${siteUrl}${path}`),
      ...products.map(({ slug }) => `${siteUrl}/urunler/${slug}`),
    ];

    expect(sitemap().map(({ url }) => url)).toEqual(expectedUrls);
    expect(new Set(expectedUrls).size).toBe(expectedUrls.length);
  });

  it("points crawlers to the site's actual sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
  });
});
