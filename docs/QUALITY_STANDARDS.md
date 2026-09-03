# Quality Standards — Bahçe-i Firdevs

These standards are enforced. Violations require an ADR.

## Code shape

- El yazısı fonksiyonlar en fazla 30 satır, dosyalar 200 satır ve karmaşıklık 8 olur. Küçük modüller bağımsız test edilir.
- İç içe blok derinliği 3'ü geçmez. Erken dönüş kullanılır.
- Her modül başlığı sorumluluğunu ve yapmadığı işi belirtir.
- Üretilen Next.js tipleri ve kilit dosyası satır sınırından muaftır.

## Type safety

- `tsconfig.json` strict kalır; genel API'lerde `any` kullanılmaz.
- Ürün, telefon ve para değerleri merkezi tipli sözleşmelerden gelir.
- `pnpm typecheck` her commit öncesinde çalışır.

## Testing

- Test commit'i uygulama commit'inden önce gelir ve kırmızı→yeşil geçmişi korunur.
- Proje geneli satır kapsamı en az yüzde 85, dal kapsamı yüzde 80'dir.
- Test piramidi yaklaşık yüzde 80 unit, yüzde 15 component/integration ve yüzde 5 uçtan uca olur.
- Her hata düzeltmesi önce gerileme testi alır.

### Critical paths

- WhatsApp numarasının normalleştirilmesi
- Ürün adının mesaja güvenli biçimde eklenmesi
- Bilinmeyen ürün slug'ının 404 üretmesi
- Tüm sipariş CTA'larının doğru ürüne yönlenmesi

Bu yollar yüzde 100 dal kapsamı ve en az bir başarısızlık senaryosu gerektirir.

## Version control hygiene

- Commitler `<type>(<scope>): <subject>` biçimindedir.
- Bir commit tek mantıksal değişiklik taşır; diff hedefi en fazla 400 satırdır.
- Yorum içine alınmış kod ve sihirli sayı tutulmaz.

## Dependency discipline

- Yeni her bağımlılık `.genesis/DECISIONS.md` içinde `ADR-DEP-*` ister.
- Üretim bağımlılığı bütçesi 5, geliştirme bağımlılığı bütçesi 12 doğrudan pakettir.
- Kilit dosyası commit edilir; beş satırda çözülen sorun için paket eklenmez.

## Operability

- Sessiz hata ve yakalanmamış Promise reddi kabul edilmez.
- MVP durum değiştirmediği için özel logger eklenmez; yeni durumlu işlem JSON log gerektirir.
- Riskli yayınlar önce önizleme deployment'ında doğrulanır ve önceki commit'e döndürülebilir.

## Security baseline

- Sırlar yalnız ortam değişkeninde tutulur; `.env` dosyaları gitignored kalır.
- Dış girdiler sınırda doğrulanır ve URL'ler güvenli API'lerle oluşturulur.
- CI, bağımlılık denetimi ve basit sır taraması çalıştırır.

## Documentation requirements

- Genel fonksiyonlar amaç, girdi, çıktı, yan etki ve hata davranışını açıklar.
- Mimari değişiklikten önce ADR yazılır; anlamlı değişiklikten sonra PROGRESS güncellenir.
- README, boş bir makinede kurulumdan çalışan teste kadar somut komutlar içerir.

## AI-readability

- Kuralların gerekçesi yakınında bulunur; dosya ve ADR referansları çözümlenir.
- Tekrarlanan alan terimleri `.genesis/GLOSSARY.md` içinde tanımlanır.
- `AGENTS.md` ilk 30 satırda güvenli başlangıç sözleşmesini verir.

## CI/CD enforcement

- Yerel Git kancası format, lint, tip, test ve sır taramasını çalıştırır.
- GitHub Actions her push/PR'da aynı kontrolleri, build'i ve bağımlılık denetimini çalıştırır.
- Ekip çalışması başladığında `main` için yeşil CI ve inceleme zorunlu kılınır.

## Rationale notes

ADR-005 uyarınca sunucu loglama bağımlılığı eklenmemiştir; uygulama kişisel veri veya sipariş durumu işlemez. Kilit ve üretilen dosya muafiyeti, el yazısı kodun okunabilirlik sınırını gevşetmez.

## See also

- `.genesis/CONSTITUTION.md` — yürürlükteki ilkeler
- `docs/DEFINITION_OF_DONE.md` — tamamlanma kontrolü
- `.genesis/DECISIONS.md` — ayar gerekçeleri
