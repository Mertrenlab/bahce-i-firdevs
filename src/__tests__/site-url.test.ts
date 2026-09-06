import { describe, expect, it } from "vitest";

import { resolveSiteUrl } from "@/lib/site-url";

describe("resolveSiteUrl", () => {
  it("uses localhost when no deployment URL is configured", () => {
    expect(resolveSiteUrl()).toBe("http://localhost:3000");
  });

  it("removes a trailing slash from the configured URL", () => {
    expect(resolveSiteUrl("https://flowers.example/ ")).toBe(
      "https://flowers.example",
    );
  });

  it("rejects non-http protocols", () => {
    expect(() => resolveSiteUrl("javascript:alert(1)")).toThrow(
      "Site URL must use HTTP or HTTPS",
    );
  });
});
