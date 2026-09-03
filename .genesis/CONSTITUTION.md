# Constitution — Bahçe-i Firdevs

Adopted: 2026-09-03
Amendments: see `ADR-CON-*` entries in `.genesis/DECISIONS.md`

## Article I — Purpose

Bahçe-i Firdevs, telefondan çiçek arayan bir ziyaretçinin ürünü güvenle seçip hazır bir mesajla WhatsApp üzerinden firmaya ulaşmasını sağlayan hızlı Türkçe bir ürün vitrini olarak var olur.

## Article II — Non-purposes

- İlk sürümde sepet, çevrim içi ödeme, üyelik veya sipariş veritabanı işletmek.
- Stok ve fiyatı otomatik yöneten bir yönetim paneli sunmak.
- Çiçek dışı ürün kategorilerini sergilemek.
- Firma tarafından doğrulanmamış teslimat, fiyat veya ürün görsellerini kesin bilgi gibi sunmak.

## Article III — Founding constraints

- Open Ecommerce `storefront-single` yaklaşımı ve MIT lisansı temel alınır.
- Arayüz Türkçe, para birimi TRY ve birincil cihaz mobildir.
- Sipariş kanalı `+90 540 638 34 34` numaralı WhatsApp hesabıdır.
- Resmi logo, sağlanan PDF'deki geometri bozulmadan kullanılır.
- Ürün fotoğrafları teslim edilene kadar görseller açıkça temsili kalır.
- MVP hedefi 2026-09-17'dir; bütçe bilgisi verilmemiştir.

## Article IV — Standing principles

- WhatsApp sipariş bağlantısı kritik yoldur ve testleri yüzde 100 dal kapsamına ulaşır.
- Test önce yazılır; commit geçmişi kırmızıdan yeşile ilerlemeyi gösterir.
- Mobil hız ve okunabilirlik masaüstü süslemesinden önce gelir.
- Doğrulanmamış ticari bilgi sessizce varsayılmaz.
- Kullanıcı hataları ne olduğunu ve sonraki adımı açıklar.
- Gereksiz bağımlılık ve soyutlama yerine küçük, silinebilir modüller tercih edilir.
- Resmi logo yeniden çizilmez, esnetilmez veya farklı oranla kullanılmaz.
- Anlamlı her değişiklik karar ve ilerleme kayıtlarıyla izlenebilir kalır.

## Article V — Most-fragile assumption

Ziyaretçilerin satın alma niyetini WhatsApp görüşmesine taşımayı yeterince kolay ve güvenilir bulacağı varsayımı projenin en kırılgan temelidir.

## Article VI — Kill criteria

- Gerçek fotoğraflarla yayından sonraki ilk 20 nitelikli mobil testte hiç WhatsApp görüşmesi başlatılmazsa mevcut akış durdurulup yeniden tasarlanır.
- Firma ürün/fiyat bilgisini en az ayda bir doğrulayamayacaksa katalog yayından kaldırılır.
- Firma çevrim içi ödeme ve otomatik sipariş takibini zorunlu kılarsa bu MVP sona erer ve yeni kapsam için konsey yeniden çalıştırılır.

## Amendment procedure

Bu anayasa yalnızca önerilen değişiklik için Genesis Protocol konsey aşaması yeniden çalıştırılarak değiştirilir. Değişiklikler `.genesis/DECISIONS.md` içinde `ADR-CON-*` olarak kaydedilir ve açık kullanıcı onayı gerektirir.

## See also

- `docs/CHARTER.md` — operasyonel kapsam
- `docs/QUALITY_STANDARDS.md` — yürürlükteki kalite kuralları
- `.genesis/DECISIONS.md` — bu çerçevede alınan kararlar
