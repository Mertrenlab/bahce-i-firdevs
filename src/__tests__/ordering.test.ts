import { describe, expect, it } from "vitest";

import { buildPhoneUrl, buildWhatsAppUrl } from "@/lib/ordering";

describe("buildWhatsAppUrl", () => {
  it("normalizes the Turkish phone number", () => {
    const url = new URL(buildWhatsAppUrl());

    expect(url.origin).toBe("https://wa.me");
    expect(url.pathname).toBe("/905406383434");
  });

  it("adds the selected product to the message", () => {
    const url = new URL(buildWhatsAppUrl("Lal Bahçesi"));

    expect(url.searchParams.get("text")).toContain("Lal Bahçesi");
    expect(url.searchParams.get("text")).toContain("sipariş vermek istiyorum");
  });

  it("uses a general message when no product is selected", () => {
    const url = new URL(buildWhatsAppUrl());

    expect(url.searchParams.get("text")).toContain("çiçek siparişi");
  });
});

describe("buildPhoneUrl", () => {
  it("returns the international tel target", () => {
    expect(buildPhoneUrl()).toBe("tel:+905406383434");
  });
});
