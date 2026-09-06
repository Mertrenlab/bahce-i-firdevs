/**
 * Resolves the canonical site origin used by metadata and sitemaps.
 * Not responsible for deployment discovery or environment validation.
 */
const LOCAL_SITE_URL = "http://localhost:3000";

/** Return a normalized HTTP(S) site URL without a trailing slash. */
export function resolveSiteUrl(value?: string): string {
  const candidate = value?.trim() || LOCAL_SITE_URL;
  const parsed = new URL(candidate);

  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    throw new Error("Site URL must use HTTP or HTTPS");
  }

  return candidate.replace(/\/+$/, "");
}

export const siteUrl = resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
