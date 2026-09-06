/**
 * Typed, versioned flower catalog consumed by pages and order links.
 * Not responsible for inventory, checkout, or remote content loading.
 */
export type Product = {
  slug: string;
  name: string;
  category: "Çiçekler";
  occasion: string;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  isPlaceholder: boolean;
  palette: readonly [string, string, string];
};

export const products: readonly Product[] = [
  {
    slug: "firdevs-buketi",
    name: "Firdevs Buketi",
    category: "Çiçekler",
    occasion: "Zarif bir jest",
    shortDescription: "Krem ve pudra tonlarında, yumuşak dokulu özel buket.",
    description:
      "Doğal yeşillikler ve romantik tonları bir araya getiren dengeli bir aranjman. Çiçek içeriği mevsim ve tazeliğe göre özenle uyarlanır.",
    image: "/products/firdevs-buketi.svg",
    imageAlt: "Krem ve pudra tonlarında temsili Firdevs buketi",
    isPlaceholder: true,
    palette: ["#f0c6bd", "#fff3dd", "#a1aa87"],
  },
  {
    slug: "beyaz-dus",
    name: "Beyaz Düş",
    category: "Çiçekler",
    occasion: "Saf ve sakin",
    shortDescription:
      "Beyaz çiçekler ve zarif yeşilliklerle ferah bir görünüm.",
    description:
      "Sade ama etkileyici bir hediye arayanlar için açık tonlu, dingin bir kompozisyon. Güncel çiçek seçimi sipariş sırasında paylaşılır.",
    image: "/products/beyaz-dus.svg",
    imageAlt: "Beyaz çiçeklerden oluşan temsili aranjman",
    isPlaceholder: true,
    palette: ["#fffaf0", "#dfd8c7", "#81906f"],
  },
  {
    slug: "gul-vakti",
    name: "Gül Vakti",
    category: "Çiçekler",
    occasion: "Kalpten gelen",
    shortDescription:
      "Gül tonlarının sıcaklığını modern bir bukette buluşturur.",
    description:
      "Romantik anlar ve içten kutlamalar için hazırlanan gül ağırlıklı bir seçki. Ton ve adet seçenekleri WhatsApp görüşmesinde netleştirilir.",
    image: "/products/gul-vakti.svg",
    imageAlt: "Gül tonlarında temsili romantik buket",
    isPlaceholder: true,
    palette: ["#b45553", "#eab7ab", "#6f8063"],
  },
  {
    slug: "gun-batimi",
    name: "Gün Batımı",
    category: "Çiçekler",
    occasion: "Kutlama zamanı",
    shortDescription: "Şeftali ve sıcak turuncu tonlarında enerjik aranjman.",
    description:
      "Yeni başlangıçları ve güzel haberleri kutlamak için canlı, sıcak tonların bir araya geldiği mevsimsel bir düzenleme.",
    image: "/products/gun-batimi.svg",
    imageAlt: "Şeftali ve turuncu tonlarında temsili çiçek aranjmanı",
    isPlaceholder: true,
    palette: ["#e99a62", "#f6c58f", "#6c7f58"],
  },
  {
    slug: "lavanta-esintisi",
    name: "Lavanta Esintisi",
    category: "Çiçekler",
    occasion: "İnce bir teşekkür",
    shortDescription: "Lila dokunuşlarıyla sakin ve rafine bir buket.",
    description:
      "Teşekkür, geçmiş olsun ve içten bir merhaba için lila tonlarını doğal yeşilliklerle dengeler. İçerik mevsime göre hazırlanır.",
    image: "/products/lavanta-esintisi.svg",
    imageAlt: "Lila tonlarında temsili zarif buket",
    isPlaceholder: true,
    palette: ["#b7a0c8", "#e4d7ea", "#738066"],
  },
  {
    slug: "bahar-sepeti",
    name: "Bahar Sepeti",
    category: "Çiçekler",
    occasion: "Neşeli sürpriz",
    shortDescription: "Renkli mevsim çiçekleriyle canlı ve samimi bir seçim.",
    description:
      "Farklı renkleri doğal bir sepet görünümünde buluşturan neşeli aranjman. Mevsimin en taze çiçekleriyle yeniden yorumlanır.",
    image: "/products/bahar-sepeti.svg",
    imageAlt: "Renkli mevsim çiçeklerinden temsili sepet",
    isPlaceholder: true,
    palette: ["#e9a3a4", "#e6c86e", "#7f9a70"],
  },
];

/** Return a catalog product when the slug is known. */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
