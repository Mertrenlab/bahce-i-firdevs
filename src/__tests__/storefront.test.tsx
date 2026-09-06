import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/ordering";

describe("storefront navigation", () => {
  it("shows the flower routes without cart or account links", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Çiçekler" })).toHaveAttribute(
      "href",
      "/urunler",
    );
    expect(screen.queryByText("Sepet")).not.toBeInTheDocument();
    expect(screen.queryByText("Hesabım")).not.toBeInTheDocument();
  });
});

describe("ProductCard", () => {
  it("labels temporary imagery and links the selected flower", () => {
    const product = products[0];

    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("Temsili görsel")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: `${product.name} için WhatsApp'tan yaz`,
      }),
    ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
  });
});

describe("ProductDetail", () => {
  it("makes WhatsApp ordering the primary action", () => {
    const product = products[1];

    render(<ProductDetail product={product} />);

    expect(
      screen.getByRole("link", { name: "WhatsApp'tan Sipariş Ver" }),
    ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
    expect(screen.getByText("Fiyat ve teslimat için bize yazın")).toBeVisible();
  });
});
