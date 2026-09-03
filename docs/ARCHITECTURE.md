# Architecture — Bahçe-i Firdevs

## Architectural style

Uygulama, Next.js App Router üzerinde veri odaklı modüler bir vitrin olarak çalışır. Sayfalar ve bileşenler tek bir tipli katalog ile marka yapılandırmasını tüketir; sunucu, veritabanı veya ödeme bağımlılığı yoktur. Bu dar yapı, gerçek ürün içeriğinin görsel tasarımdan bağımsız değişmesini sağlar.

## Module boundaries

| Module | Responsibility | Not responsible for |
|---|---|---|
| `src/data` | Ürünler ve marka bilgileri | Sipariş kaydı, stok senkronizasyonu |
| `src/lib` | URL, fiyat ve katalog yardımcıları | Görsel sunum |
| `src/components` | Tekrar kullanılan erişilebilir arayüz | Ticari kural saklamak |
| `src/app` | Rotalar, metadata ve sayfa kompozisyonu | Katalog verisini çoğaltmak |

### Module: catalog

- **Responsibility:** doğrulanmış ürün sözleşmesini ve sorgularını sunmak.
- **Not responsible for:** kalıcı veri veya uzaktan içerik çekmek.
- **Public interface:** `products`, `getProductBySlug`, `Product`.
- **Dependencies:** yalnız TypeScript veri tanımları.

### Module: ordering

- **Responsibility:** ürün ve genel iletişim için güvenli WhatsApp/telefon bağlantıları üretmek.
- **Not responsible for:** mesaj göndermek veya sipariş kaydetmek.
- **Public interface:** `buildWhatsAppUrl`, `buildPhoneUrl`.
- **Dependencies:** marka yapılandırması.

### Module: presentation

- **Responsibility:** katalog verisini erişilebilir ve duyarlı arayüze dönüştürmek.
- **Not responsible for:** fiyat/telefon gibi ticari bilgileri tanımlamak.
- **Public interface:** sayfalar ve paylaşılan bileşenler.
- **Dependencies:** catalog ve ordering.

## The narrow waist

`Product` tipi dar boğazdır. Sayfa, kart, metadata ve WhatsApp mesajı aynı `slug`, `name`, `category`, `price`, `description`, `image` ve `imageAlt` alanlarını tüketir. Alan değişiklikleri önce tip, test ve ADR ile yapılır.

## Tech stack

| Layer | Choice | Rationale | ADR |
|---|---|---|---|
| Language | TypeScript strict | Yapılandırma ve katalog hatalarını derleme anında yakalar | ADR-002 |
| Framework | Next.js 16.2.1 | Seçilen Open Ecommerce tabanıyla uyumludur | ADR-002 |
| UI | React 19.2.4 + CSS Modules | Mevcut tabanın hafif ve bağımlılıksız sunum katmanıdır | ADR-002 |
| Database | None | MVP statik katalog ve WhatsApp yönlendirmesidir | ADR-003 |
| Tests | Vitest + Testing Library | Saf URL mantığı ve bileşen akışını hızlı doğrular | ADR-005 |

## Data model

`Product`, bir ürün kartı ve detay sayfasının doğrulanmış içeriğidir. `BrandConfig`, telefon, Instagram, site adı ve iletişim mesajlarını tek yerde toplar. Veriler `src/data` altında kodla sürümlenir.

## Logging strategy

MVP sunucuda durum değiştirmez; üretim çalışma zamanı günlüğü yazılmaz. Hatalar Next.js barındırma günlüğünde yakalanır. Ölçüm eklendiğinde yalnız rızalı ve kişisel veri içermeyen olaylar ADR ile tanımlanacaktır.

## Secrets management

MVP sır kullanmaz. Gelecekte sır gerekirse yalnız barındırma ortamı değişkenleriyle sağlanır ve `.env` commit edilmez (ADR-003).

## Deployment & rollback

Önerilen yayın hedefi Vercel'dir. Her yayın bir Git commit'ine bağlanır; sorun halinde önceki başarılı deployment yeniden etkinleştirilir (ADR-006).

## Observability

- Logs: Vercel build/runtime logs
- Metrics: ilk sürümde yapılandırılmadı
- Traces: not yet instrumented
- Alerting: not yet configured

## What this architecture deliberately does not support

- Sepet, ödeme ve üyelik
- Sunucu tarafı ürün yönetimi veya stok senkronizasyonu
- Çoklu dil, çoklu pazar veya çoklu mağaza
- Kişisel veri depolama

## See also

- `.genesis/DECISIONS.md` — mimari kararlar
- `docs/QUALITY_STANDARDS.md` — kod kuralları
- `.genesis/RISKS.md` — operasyonel riskler
- `.genesis/CONSTITUTION.md` — kurucu ilkeler
