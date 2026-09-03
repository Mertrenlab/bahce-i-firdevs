/**
 * Small decorative and action icons used by the storefront.
 * Not responsible for labels; callers provide accessible text.
 */
type IconProps = { className?: string };

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="fill" cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3H4.8C3.8 3 3 3.8 3 4.8 3 13.7 10.3 21 19.2 21c1 0 1.8-.8 1.8-1.8V17l-4.4-1-1.2 2a15 15 0 0 1-9.3-9.3l2-1.2L7 3Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.5L3 20.6l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" />
      <path d="M8 7.7c.3-.5.6-.5.9-.5h.4c.2 0 .4.1.5.4l1 2.2c.1.3 0 .5-.2.8l-.8.9c-.2.2-.1.5 0 .7.8 1.4 2 2.5 3.4 3.2.3.1.5.1.7-.1l1-1.2c.2-.2.5-.3.8-.2l2 .9c.3.1.5.3.5.5 0 .4-.2 1.7-1.1 2.4-.7.6-1.7.9-2.8.6-1.2-.3-2.8-.9-4.8-2.7-2.3-2.1-3.7-4.7-4.1-6.1-.4-1.3.1-2.7.8-3.4.5-.5 1.1-.6 1.8-.4Z" />
    </svg>
  );
}
