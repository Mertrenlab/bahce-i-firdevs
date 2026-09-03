# Definition of Done — Bahçe-i Firdevs

A unit of work is done when all applicable checks are true.

## For a function or class

- [ ] Test commit'i uygulamadan önce gelir ve kırmızı→yeşil geçmişi gösterir
- [ ] Satır kapsamı ≥85%, dal kapsamı ≥80%; kritik yolda dal kapsamı %100
- [ ] Genel API tipli ve `pnpm typecheck` başarılıdır
- [ ] Fonksiyon ≤30 satır, dosya ≤200 satır, karmaşıklık ≤8
- [ ] Açıklama amaç, girdi, çıktı, yan etki ve hata davranışını belirtir
- [ ] Sihirli sayı ve yorum içine alınmış kod yoktur

## For a feature

- [ ] Birim ve bileşen testleri ana akışı ve en az bir hata yolunu kapsar
- [ ] Mobil 360 px ve masaüstü görünümü gözle doğrulanır
- [ ] Etkileşimler klavye ile erişilebilir ve odak durumu görünürdür
- [ ] WhatsApp/telefon bağlantıları doğru numaraya gider
- [ ] Yeni bağımlılık varsa ADR vardır
- [ ] `.genesis/PROGRESS.md` güncellenmiştir

## For a release

- [ ] Lint, tip kontrolü, test, build ve sır taraması geçer
- [ ] Gerçek olmayan görseller temsili olarak işaretlidir
- [ ] Firma telefon, Instagram ve yayınlanan ürün metnini doğrulamıştır
- [ ] Önizleme bağlantısı mobilde denenmiştir
- [ ] Önceki başarılı deployment'a dönüş yolu hazırdır
- [ ] Değişiklik özeti conventional commit geçmişinden üretilebilir

## See also

- `docs/QUALITY_STANDARDS.md` — bu kontrollerin kuralları
- `.genesis/PROGRESS.md` — tamamlanan iş günlüğü
- `.genesis/RISKS.md` — yayın öncesi riskler
