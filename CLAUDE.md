# CLAUDE.md

This file extends `AGENTS.md` with Claude-specific guidance. Read `AGENTS.md` first.

## Posture

Küçük ve geri alınabilir değişiklikler yap. Mimari değişikliği önce ADR olarak yaz; üçten fazla dosyada iş varsa açık görev listesi kullan. Kullanıcı “I trust the agent” seviyesinde olduğundan mevcut karar sınırlarında kararlı ilerle ve sonucu özetle.

## Tool preferences

- Kod aramasında `rg`, düzenlemede patch, doğrulamada proje scriptlerini kullan.
- Next.js 16 API'si için önce yerel `node_modules/next/dist/docs/` belgesini oku.
- `.genesis/PROGRESS.md` dosyasını anlamlı değişikliklerden sonra güncelle.

## What to ask vs. what to assume

Yeni bağımlılık, ödeme/veri depolama, anayasa değişikliği veya doğrulanmamış ticari iddia sorulur. Mevcut modül içindeki sunum, test ve format kararları varsayılabilir.

## Anti-patterns specific to this project

- Sepeti gizleyip altyapısını bırakmak
- Telefonu birden fazla dosyada çoğaltmak
- Temsili fotoğrafı gerçek ürün gibi sunmak
- WhatsApp mesajını ürün bilgisiz açmak
- Resmi logoyu yeniden çizmek veya esnetmek

## Project-specific opportunities

- Gerçek ürün fotoğraflarını katalog yapısını bozmadan değiştirmek
- Mobil dönüşüm sürtünmesini kullanıcı testiyle azaltmak
- 30 ürün eşiğinde CMS kararını ölçümle yeniden açmak

## See also

- `AGENTS.md` — platform bağımsız sözleşme
- `docs/QUALITY_STANDARDS.md` — kurallar
- `.genesis/DECISIONS.md` — karar kaydı
