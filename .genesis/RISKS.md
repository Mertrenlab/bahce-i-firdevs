# Risks — Bahçe-i Firdevs

## Conceptual risks (the Adversary's three deaths)

### RISK-C1: WhatsApp dönüşümü oluşmuyor

- **Source:** Adversary (Phase 1)
- **Severity:** high
- **Description:** Ziyaretçi siteyi inceler ama WhatsApp'a geçişi satın alma yöntemi olarak güvenilir bulmaz.
- **Mitigation:** Ürün adı dolu tek adımlı CTA, görünür telefon ve ilk hafta gerçek mobil testleri.
- **Kill criterion:** İlk 20 nitelikli mobil testte hiç WhatsApp görüşmesi açılmazsa mevcut akış durur.

### RISK-C2: İçerik güven vermiyor

- **Source:** Adversary (Phase 1)
- **Severity:** high
- **Description:** Temsili görseller ve belirsiz fiyatlar müşteride yanlış beklenti yaratabilir.
- **Mitigation:** Her temsili görsel etiketlenir; firma onayı gelmeden kesin teslimat veya fiyat vaadi yazılmaz.
- **Kill criterion:** Firma doğrulanmış ürün içeriği sağlayamazsa katalog yayına alınmaz.

### RISK-C3: Katalog güncelliğini kaybediyor

- **Source:** Adversary (Phase 1)
- **Severity:** medium
- **Description:** Statik katalog firma tarafından düzenli kontrol edilmezse yanlış ürün/fiyat gösterebilir.
- **Mitigation:** Tek veri dosyası, kısa güncelleme talimatı ve aylık doğrulama sorumlusu.
- **Kill criterion:** Firma ayda bir kontrol yapamıyorsa fiyat gösterimi kaldırılır veya katalog kapatılır.

## Operational risks (the Operator's failure modes)

### RISK-O1: Yanlış WhatsApp numarası

- **Source:** Operator (Phase 1)
- **Severity:** high
- **Description:** Tek hanelik hata tüm siparişleri yanlış hedefe taşır.
- **Mitigation:** Merkezi yapılandırma ve yüzde 100 dal kapsamlı URL testi.
- **Detection:** Otomatik test ve yayın öncesi gerçek telefon denemesi.

### RISK-O2: Ağır görseller mobil siteyi yavaşlatır

- **Source:** Operator (Phase 1)
- **Severity:** medium
- **Description:** Firma fotoğrafları optimize edilmeden eklenebilir.
- **Mitigation:** Next Image, boyut bütçesi ve Lighthouse kontrolü.
- **Detection:** Build sonrası görsel boyutu ve mobil performans ölçümü.

## User-experience risks (the User Advocate's friction moments)

### RISK-U1: Sipariş yolu anlaşılmıyor

- **Source:** User Advocate (Phase 1)
- **Severity:** high
- **Description:** Ziyaretçi sepet arayabilir veya butonun yalnız danışma için olduğunu sanabilir.
- **Mitigation:** “WhatsApp'tan Sipariş Ver” dili, nasıl çalışır alanı ve görünür yedek telefon.

### RISK-U2: Fiyat/teslimat belirsizliği

- **Source:** User Advocate (Phase 1)
- **Severity:** medium
- **Description:** Kullanıcı WhatsApp'a geçmeden önce temel beklentisini kuramaz.
- **Mitigation:** Doğrulanmayan değerlerde “fiyat ve teslimat için yazın” ifadesi kullanılır.

## See also

- `.genesis/CONSTITUTION.md` — kill criteria
- `docs/ARCHITECTURE.md` — operasyonel sınırlar
- `docs/ROADMAP.md` — riskleri azaltan aşamalar
