import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import { brand } from "@/data/brand";
import { products } from "@/data/products";
import { buildPhoneUrl, buildWhatsAppUrl } from "@/lib/ordering";

describe("brand contact surfaces", () => {
  it("shows the official Instagram and phone targets in the footer", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: brand.instagramLabel }),
    ).toHaveAttribute("href", brand.instagramUrl);
    expect(
      screen.getByRole("link", { name: brand.phoneDisplay }),
    ).toHaveAttribute("href", buildPhoneUrl());
  });

  it("keeps the general WhatsApp action available", () => {
    render(<FloatingWhatsApp />);

    expect(
      screen.getByRole("link", { name: "WhatsApp'tan sipariş ver" }),
    ).toHaveAttribute("href", buildWhatsAppUrl());
  });
});

describe("home discovery", () => {
  it("explains the order channel in the hero", () => {
    render(<Hero />);

    expect(screen.getByText("WhatsApp ile kolay sipariş")).toBeVisible();
    expect(
      screen.getByRole("link", { name: "Çiçekleri keşfet" }),
    ).toHaveAttribute("href", "/urunler");
  });

  it("renders every catalog product", () => {
    render(<ProductGrid products={products} />);

    for (const product of products) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    }
  });
});
