# Bahçe-i Firdevs

Bahçe-i Firdevs için çiçekleri sergileyen ve sipariş talebini hazır mesajla WhatsApp'a taşıyan mobil öncelikli Türkçe vitrin.

## What this is

Bu proje, MIT lisanslı Open Ecommerce `storefront-single` yaklaşımından küçültülmüş bir Next.js vitrindir. Ticaret servisleri yerine tipli yerel katalog ve WhatsApp sipariş bağlantıları kullanır.

Ürün fotoğrafları beklenirken sayfalar temsili botanik görsellerle çalışır. Firma görselleri geldiğinde `public/products` ve `src/data/products.ts` güncellenir.

## Status

MVP in progress.

## Quick start

Node.js 20+ ve pnpm gerekir.

```bash
pnpm install
pnpm test
pnpm dev
```

Sonra `http://127.0.0.1:3000` adresini açın. Çalışma zamanı env değişkeni gerekmez.

## Project structure

```text
src/app/         sayfalar ve metadata
src/components/  tekrar kullanılan arayüz
src/data/        marka ve ürün kataloğu
src/lib/         WhatsApp, fiyat ve katalog yardımcıları
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
