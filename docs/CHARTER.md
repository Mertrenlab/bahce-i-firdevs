# Charter — Bahçe-i Firdevs

## One-line description

Bahçe-i Firdevs için yalnızca çiçekleri sergileyen ve sipariş talebini hazır mesajla WhatsApp'a taşıyan hızlı, mobil öncelikli Türkçe vitrin.

## Primary user

Bir kutlama, özür, doğum günü veya özel gün için telefondan hızla çiçek arayan; uzun kayıt ve ödeme adımlarıyla uğraşmadan ürünü görüp gerçek bir yetkiliyle konuşmak isteyen kişi.

## Mission

Ziyaretçi ilk ekranda markayı, hizmeti ve nasıl sipariş vereceğini anlamalıdır. Ürün kartından veya detay sayfasından bir dokunuşla ürün adı eklenmiş WhatsApp mesajına geçebilmelidir.

Firma tarafı gerçek fotoğraflar geldiğinde kod yapısını değiştirmeden yalnız katalog varlıklarını güncelleyebilmelidir. Bilinmeyen fiyat ve teslimat bilgileri kesinmiş gibi gösterilmemelidir.

## Scope

### In scope (MVP)

- Ana sayfa, tüm çiçekler, ürün detay, hakkımızda ve iletişim sayfaları
- Türkçe içerik, TRY biçimlendirme ve mobil öncelikli arayüz
- Ürüne özel hazır mesaj üreten WhatsApp butonları
- Sabit WhatsApp ve yedek telefon bağlantıları
- Resmi logo, Instagram bağlantısı ve temsili ürün görselleri
- Statik ürün kataloğu, SEO metadatası, sitemap ve robots çıktısı

### Post-MVP (ordered)

1. Firma fotoğrafları ve kesin ürün/fiyat bilgilerinin yerleştirilmesi
2. Teslimat bölgesi ve aynı gün teslimat bilgisinin doğrulanıp eklenmesi
3. Basit dönüşüm ölçümü ve açık rıza planı
4. Ürün sayısı 30'u aşarsa veya haftalık güncelleme gerekirse yönetim paneli

### Non-goals

- Sepet, çevrim içi ödeme, üyelik ve sipariş veritabanı
- Çiçek dışı ürünler
- Firma onayı olmayan kampanya, fiyat veya teslimat vaadi
- İlk sürümde çoklu dil ve çoklu mağaza

## Success criteria

- İlk haftadaki 20 nitelikli mobil testin en az 6'sı bir ürün WhatsApp bağlantısını açar.
- Tüm ürünler en fazla iki dokunuşla WhatsApp mesajına ulaşır.
- Lighthouse mobil performans hedefi en az 90'dır.
- Kritik WhatsApp URL oluşturucu yüzde 100 dal kapsamına ulaşır.
- Firma yetkilisi örnek bir ürünün metnini ve görselini 10 dakikadan kısa sürede değiştirebilir.

İlk haftada ölçülebilen ana sinyal, nitelikli mobil testlerde WhatsApp bağlantısı açılma oranıdır.

## First user

> Firma yetkilisi ve müşterinin seçtiği üç gerçek kullanıcı, 2026-09-17'den önce telefondan ürün bulup WhatsApp mesajını açmayı dener.

## Most-fragile assumption

> Ziyaretçiler satın alma niyetini WhatsApp görüşmesine taşımayı yeterince kolay ve güvenilir bulur.

## Timeline

- MVP target: 2026-09-17
- Post-MVP phasing: see `docs/ROADMAP.md`

## See also

- `.genesis/CONSTITUTION.md` — kurucu ilkeler
- `docs/ROADMAP.md` — aşamalı teslim planı
- `.genesis/RISKS.md` — bilinen riskler
- `docs/DEFINITION_OF_DONE.md` — tamamlanma ölçütleri
