# 📊 Sentiric Dashboard UI - Görev Listesi

Bu belge, `dashboard-ui`'nin geliştirme yol haritasını ve önceliklerini tanımlar.

---

### Faz 1: Temel Arayüz İskeleti (Mevcut Durum)

Bu faz, arayüzün temel yapısını, navigasyonunu ve görsel kimliğini oluşturmayı hedefler.

-   [x] **Next.js Proje Kurulumu:** TypeScript, Tailwind CSS ve ESLint/Prettier ile modern bir proje yapısı.
-   [x] **Layout ve Navigasyon:** Sidebar ve TopBar'ı içeren ana layout bileşeni.
-   [x] **Sayfa İskeletleri:** `/dashboard`, `/cdrs`, `/users`, `/settings` için boş sayfa bileşenleri.
-   [x] **Dark Mode Desteği:** `ThemeContext` ile açık ve koyu tema arasında geçiş yapabilme.
-   [x] **Statik Dağıtım:** `next export` ve Nginx ile statik olarak sunulabilen bir yapı.

---

### Faz 2: Veri Görselleştirme ve API Entegrasyonu (Sıradaki Öncelik)

Bu faz, arayüzü statik bir iskeletten, canlı veri gösteren dinamik bir uygulamaya dönüştürmeyi hedefler.

-   [ ] **Görev ID: UI-D-001 - CDR Tablosu**
    -   **Açıklama:** `api-gateway` üzerinden `cdr-service`'e bağlanarak çağrı kayıtlarını listeleyen, sıralanabilir ve filtrelenebilir bir veri tablosu oluştur. Tremor'un `Table` bileşenini kullan.
    -   **Durum:** ⬜ Planlandı.

-   [ ] **Görev ID: UI-D-002 - Canlı Metrikler**
    -   **Açıklama:** `/dashboard` sayfasındaki statik metrik kartlarını (Aktif Çağrılar vb.) periyodik olarak API'den gelen gerçek verilerle güncelleyen bir mekanizma kur.
    -   **Durum:** ⬜ Planlandı.

-   [ ] **Görev ID: UI-D-003 - Kullanıcı Yönetimi Arayüzü**
    -   **Açıklama:** `user-service`'i yönetmek için bir arayüz oluştur: Kullanıcı listeleme, yeni kullanıcı ekleme formu, kullanıcı detaylarını düzenleme.
    -   **Durum:** ⬜ Planlandı.

---

### Faz 3: Gelişmiş Özellikler ve Low-Code

Bu faz, platformun "Genesis Bloğu" felsefesini arayüze taşımayı hedefler.

-   [ ] **Görev ID: UI-D-004 - Low-Code Dialplan Editörü**
    -   **Açıklama:** Yöneticilerin sürükle-bırak yöntemiyle görsel olarak yeni dialplan'ler oluşturmasına ve mevcutları düzenlemesine olanak tanıyan bir arayüz geliştir.
    -   **Durum:** ⬜ Planlandı.