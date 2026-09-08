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
  it.each(products)("links $name to its own message and detail", (product) => {
    render(<ProductCard product={product} />);

    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText("Temsili görsel")).toBeInTheDocument();
    expect(
      screen.getByRole("link", {
        name: `${product.name} için WhatsApp'tan yaz`,
      }),
    ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
    expect(screen.getByRole("link", { name: "İncele" })).toHaveAttribute(
      "href",
      `/urunler/${product.slug}`,
    );
  });

  it("does not label a real product image as a placeholder", () => {
    render(<ProductCard product={{ ...products[0], isPlaceholder: false }} />);

    expect(screen.queryByText("Temsili görsel")).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      products[0].imageAlt,
    );
  });
});

describe("ProductDetail", () => {
  it.each(products)("prepares a WhatsApp order for $name", (product) => {
    render(<ProductDetail product={product} />);

    expect(
      screen.getByRole("link", { name: "WhatsApp'tan Sipariş Ver" }),
    ).toHaveAttribute("href", buildWhatsAppUrl(product.name));
    expect(screen.getByText("Fiyat ve teslimat için bize yazın")).toBeVisible();
    expect(screen.getByText("Temsili görsel")).toBeVisible();
  });

  it("removes the temporary-image label when a real photo is supplied", () => {
    render(
      <ProductDetail product={{ ...products[0], isPlaceholder: false }} />,
    );

    expect(screen.queryByText("Temsili görsel")).not.toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      products[0].imageAlt,
    );
  });
});
