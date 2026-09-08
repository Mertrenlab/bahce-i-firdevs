# Bahçe-i Firdevs

Bahçe-i Firdevs için çiçekleri sergileyen ve sipariş talebini hazır mesajla WhatsApp'a taşıyan mobil öncelikli Türkçe vitrin.

## What this is

Bu proje, MIT lisanslı Open Ecommerce `storefront-single` yaklaşımından küçültülmüş bir Next.js vitrindir. Ticaret servisleri yerine tipli yerel katalog ve WhatsApp sipariş bağlantıları kullanır.

Ürün fotoğrafları beklenirken sayfalar temsili botanik görsellerle çalışır. Firma görselleri geldiğinde `public/products` ve `src/data/products.ts` güncellenir.

## Status

Yerel önizleme hazır: ana sayfa, altı örnek çiçek, ürün detayları, hikâye ve iletişim sayfaları çalışır. Ürün adıyla hazırlanan WhatsApp bağlantıları `+90 540 638 34 34` numarasına gider. Sepet, ödeme ve üyelik yoktur.

Yayın öncesi firma fotoğrafları, gerçek ürün adları/açıklamaları ve alan adı bekleniyor. Mevcut ürün adları ve çizimler örnek katalogdur; fiyat veya teslimat sözü verilmez.

## Quick start

Node.js 24 ve package.json içinde sabitlenen pnpm sürümü önerilir.

```bash
pnpm install
pnpm test
pnpm dev
```

Sonra `http://127.0.0.1:3000` adresini açın. Çalışma zamanı env değişkeni gerekmez.

Üretim önizlemesi: `pnpm build` ardından `pnpm start --hostname 127.0.0.1 --port 3000`.
Yayında `.env.example` içindeki `NEXT_PUBLIC_SITE_URL` değerini gerçek HTTPS alan adıyla ayarlayın; aksi halde sitemap yerel adres kullanır.

## İçerikleri tamamlama

- Fotoğrafları `public/products/` altına koyun, ürünlerin `image` ve `imageAlt` alanlarını `src/data/products.ts` içinde güncelleyin.
- Gerçek fotoğrafı olan üründe `isPlaceholder: false` yapın; temsili görsel etiketi kalkar.
- Ürün adlarını, açıklamalarını ve sıralamayı firma onayına göre aynı katalog dosyasında düzenleyin.
- Telefon ve Instagram bilgileri `src/data/brand.ts` içinde tek yerden yönetilir.
- Adres, çalışma saatleri ve teslimat kapsamı doğrulanmadan eklenmez.

## Doğrulama

`pnpm quality` biçim, lint, tip, dosya uzunluğu, temel secret taraması, test ve üretim derlemesini çalıştırır. 45 uygulama testi ve 5 araç testi bulunur. Kapsam ölçümü sayfalar, bileşenler, katalog ve yardımcıları içerir; Next belge kabuğu (`layout.tsx`) ve CSS bu ölçümün dışındadır. Görsel kalite ve gerçek WhatsApp mesaj teslimi bu yüzdeyle ölçülmez.

## Project structure

```text
src/app/         sayfalar ve metadata
src/components/  tekrar kullanılan arayüz
src/data/        marka ve ürün kataloğu
src/lib/         WhatsApp ve site adresi yardımcıları
public/brand/    resmi logo kaynakları
public/products/ geçici/gerçek ürün görselleri
docs/            kapsam, mimari ve kalite kuralları
.genesis/        karar, risk ve ilerleme kayıtları
```

## How to contribute

Önce `AGENTS.md` ve `.genesis/DECISIONS.md` dosyalarını okuyun. Testi uygulamadan önce yazın ve anlamlı değişiklikten sonra `.genesis/PROGRESS.md` kaydı ekleyin.

## Documentation map

- `.genesis/CONSTITUTION.md` — değişmez kurucu ilkeler
- `docs/CHARTER.md` — misyon ve kapsam
- `docs/ARCHITECTURE.md` — teknik tasarım
- `docs/QUALITY_STANDARDS.md` — uygulanan kalite kuralları
- `docs/ROADMAP.md` — aşamalı plan
- `docs/DEFINITION_OF_DONE.md` — tamamlanma listeleri
- `.genesis/DECISIONS.md` — karar kaydı
- `.genesis/RISKS.md` — bilinen riskler
- `.genesis/PROGRESS.md` — çalışma günlüğü
- `AGENTS.md` — ajan sözleşmesi

## License

MIT. Open Ecommerce telif bildirimi `LICENSE` içinde korunmuştur.

## See also

- `docs/CHARTER.md` — ürün amacı
- `docs/ROADMAP.md` — sıradaki işler
- `AGENTS.md` — geliştirme kuralları
