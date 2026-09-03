/**
 * Renders a consistently labeled external WhatsApp action.
 * Not responsible for order persistence or analytics.
 */
import type { ReactNode } from "react";

import { buildWhatsAppUrl } from "@/lib/ordering";

type WhatsAppLinkProps = {
  children: ReactNode;
  className?: string;
  productName?: string;
  ariaLabel?: string;
};

export default function WhatsAppLink({
  children,
  className,
  productName,
  ariaLabel,
}: WhatsAppLinkProps) {
  return (
    <a
      className={className}
      href={buildWhatsAppUrl(productName)}
      aria-label={ariaLabel}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
