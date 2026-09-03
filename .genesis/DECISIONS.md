# Decision Log — Bahçe-i Firdevs

Bu kayıt append-only'dir. Bir kararı değiştirmek için eski gövdeyi düzenlemek yerine yeni bir ADR yazılır.

## Index

| ID | Date | Title | Status |
|---|---|---|---|
| ADR-001 | 2026-09-03 | Genesis Protocol kitini benimse | accepted |
| ADR-002 | 2026-09-03 | Open Ecommerce Next tabanını küçült | accepted |
| ADR-003 | 2026-09-03 | Statik katalog ve WhatsApp siparişi kullan | accepted |
| ADR-004 | 2026-09-03 | Türkçe, TRY ve resmi logo ile tek pazar kur | accepted |
| ADR-005 | 2026-09-03 | WhatsApp akışını kritik yol say | accepted |
| ADR-006 | 2026-09-03 | Vercel önizleme ve commit rollback kullan | accepted |
| ADR-DEP-001 | 2026-09-03 | Vitest V8 coverage sağlayıcısını ekle | accepted |
| ADR-DEP-002 | 2026-09-03 | Prettier biçim denetimini ekle | accepted |

---

## ADR-001: Genesis Protocol kitini benimse

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Proje ücretli müşteri işi olarak birden fazla geliştirici veya ajan tarafından sürdürülebilir olmalıdır.

**Decision.** Genesis kitinin yapısı, kalite kuralları, ADR ve ilerleme kayıtları proje sözleşmesi olarak benimsenmiştir.

**Consequences.** TDD, tip güvenliği, ölçülebilir kapsam ve belgeli kararlar zorunludur.

**Considered alternatives.** Yalnız README kullanmak, kararların kaybolması ve ajan devrinin zorlaşması nedeniyle reddedildi.

---

## ADR-002: Open Ecommerce Next tabanını küçült

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Open Ecommerce çalışan en güçlü demo olmasına rağmen ödeme, veritabanı ve hesap modülleri bu iş için gereksizdir.

**Decision.** Next.js 16.2.1, React 19.2.4, TypeScript, CSS Modules, Vitest ve Testing Library yaklaşımı korunur; ticaret servisleri çıkarılır.

**Consequences.** Görsel geliştirme hızlı kalır ve zorunlu env değişkeni oluşmaz. Üretim bağımlılık bütçesi 5 paketle sınırlıdır.

**Considered alternatives.** Repoyu tüm modülleriyle yeniden markalamak gereksiz risk; sıfırdan farklı stack kurmak seçilmiş tabanı boşa çıkardığı için reddedildi.

---

## ADR-003: Statik katalog ve WhatsApp siparişi kullan

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Firma yalnız çiçek göstermek ve siparişi WhatsApp'a yönlendirmek istiyor.

**Decision.** Ürünler tipli yerel katalogda tutulur; her CTA ürün adını içeren `wa.me` URL'si üretir. Sepet, ödeme, hesap, admin ve veritabanı yoktur.

**Consequences.** Site hızlı ve düşük operasyon maliyetli olur; katalog değişiklikleri deploy gerektirir. 30 ürün veya haftalık değişiklik eşiğinde CMS kararı yeniden açılır.

**Considered alternatives.** MongoDB admin ve üçüncü taraf CMS, mevcut içerik hacmine göre fazla karmaşık bulundu.

---

## ADR-004: Türkçe, TRY ve resmi logo ile tek pazar kur

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Marka Bahçe-i Firdevs, iletişim ve hedef pazar Türkiye'dir.

**Decision.** UI Türkçe, para biçimi `tr-TR`/TRY ve marka işareti sağlanan Canva PDF'sinden oranı korunarak çıkarılan raster dosyadır. Palet krem, bakır ve koyu botanik yeşildir.

**Consequences.** Çoklu dil ve pazar ertelenir. PDF vektör kaynak olabilir; ancak web tesliminde yeniden çizilmiş SVG iddia edilmez.

**Considered alternatives.** Yeni logo üretmek, resmi varlığı değiştireceği için reddedildi.

---

## ADR-005: WhatsApp akışını kritik yol say

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Çevrim içi checkout olmadığı için dönüşümün tamamı WhatsApp bağlantısına bağlıdır.

**Decision.** Numara normalleştirme, mesaj kodlama, ürün eşleme ve CTA hedefleri yüzde 100 dal kapsamı gerektirir.

**Consequences.** Testler uygulama kodundan önce commit edilir. Ayrı üretim logger'ı kişisel veri işlemeyen bu statik MVP için eklenmez.

**Considered alternatives.** Yalnız manuel tıklama testi, numara veya encoding hatasını sessizce yayına taşıyabileceği için reddedildi.

---

## ADR-006: Vercel önizleme ve commit rollback kullan

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Müşteri onayı için paylaşılabilir önizleme ve hızlı geri dönüş gerekir.

**Decision.** Her yayın önce önizleme ortamında doğrulanır; üretim bir Git commit'ine bağlıdır ve sorun halinde önceki başarılı deployment yeniden etkinleştirilir.

**Consequences.** Ortam sırrı olmayan build taşınabilir kalır. Domain bağlantısı yayın aşamasında ayrıca yapılır.

**Considered alternatives.** Sunucuyu elle yönetmek gereksiz bakım yükü nedeniyle reddedildi.

---

## ADR-DEP-001: Vitest V8 coverage sağlayıcısını ekle

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Genesis kalite sözleşmesi satır ve dal kapsam eşiklerinin otomatik ölçülmesini gerektirir.

**Decision.** Vitest ile aynı `4.1.2` sürümündeki `@vitest/coverage-v8` geliştirme bağımlılığı kullanılır.

**Consequences.** CI kapsam eşiklerini bloklayabilir; paket yalnız geliştirme aşamasında çalışır.

**Considered alternatives.** Kapsamı elle takip etmek tekrarlanabilir olmadığı, başka coverage motoru eklemek ise gereksiz olduğu için reddedildi.

---

## ADR-DEP-002: Prettier biçim denetimini ekle

- **Status:** accepted
- **Date:** 2026-09-03

**Context.** Yerel kanca ve CI, tekrar üretilebilir bir biçim kontrolü gerektirir.

**Decision.** Prettier yalnız geliştirme bağımlılığı olarak eklenir ve `format:check` scriptiyle çalışır.

**Consequences.** Biçim tartışması otomasyona devredilir; çalışma zamanı paketi büyümez.

**Considered alternatives.** Yalnız ESLint kullanmak CSS ve Markdown dosyalarını kapsamadığı için reddedildi.

## How to add a new ADR

Bir sonraki kalıcı ID'yi seç, index'e ekle, Context/Decision/Consequences/Considered alternatives alanlarını yaz ve `.genesis/PROGRESS.md` kaydı ekle.

## See also

- `.genesis/CONSTITUTION.md` — karar sınırları
- `docs/ARCHITECTURE.md` — kararların teknik sonucu
- `.genesis/PROGRESS.md` — uygulama günlüğü
