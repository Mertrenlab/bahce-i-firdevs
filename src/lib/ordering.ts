/**
 * Builds public contact targets for the stateless order flow.
 * Not responsible for sending messages or persisting orders.
 */
import { brand } from "@/data/brand";

const WHATSAPP_BASE_URL = "https://wa.me";

function orderMessage(productName?: string): string {
  if (productName) {
    return `Merhaba Bahçe-i Firdevs, “${productName}” ürünü için sipariş vermek istiyorum.`;
  }

  return "Merhaba Bahçe-i Firdevs, çiçek siparişi hakkında bilgi almak istiyorum.";
}

/** Build an encoded wa.me target with an optional product name. */
export function buildWhatsAppUrl(productName?: string): string {
  const number = brand.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(orderMessage(productName));

  return `${WHATSAPP_BASE_URL}/${number}?text=${message}`;
}

/** Build the international telephone fallback target. */
export function buildPhoneUrl(): string {
  return `tel:${brand.phoneE164}`;
}
