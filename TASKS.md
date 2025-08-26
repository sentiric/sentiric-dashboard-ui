# 🖥️ Sentiric Dashboard UI - Geliştirme Yol Haritası (v4.0)

Bu belge, `dashboard-ui`'nin geliştirme görevlerini projenin genel fazlarına uygun olarak listeler.

---
### **FAZ 1: Temel Arayüz İskeleti (Mevcut Durum)**
**Amaç:** Arayüzün temel yapısını, navigasyonunu ve görsel kimliğini oluşturmak.
-   [x] **Görev ID: UI-D-CORE-01 - Proje Kurulumu ve Layout**
    -   **Durum:** ✅ **Tamamlandı**

---
### **FAZ 2: Veri Görselleştirme ve API Entegrasyonu (Sıradaki Öncelik)**

**Amaç:** Arayüzü statik bir iskeletten, `api-gateway` üzerinden gelen canlı verilerle çalışan dinamik bir uygulamaya dönüştürmek.

-   [ ] **Görev ID: UI-D-001 - Kimlik Doğrulama Akışı**
    -   **Açıklama:** Kullanıcıların platforma güvenli bir şekilde giriş yapmasını sağlayan bir login sayfası ve oturum yönetimi mekanizması oluştur.
    -   **Kabul Kriterleri:**
        -   [ ] `/login` adında bir sayfa oluşturulmalı.
        -   [ ] Kullanıcı adı ve şifre ile `POST /api/v1/auth/login` endpoint'ine istek gönderilmeli.
        -   [ ] Başarılı girişte, dönen JWT token güvenli bir şekilde (örn: `httpOnly` cookie) saklanmalı ve kullanıcı `/dashboard` sayfasına yönlendirilmeli.
        -   [ ] Sonraki tüm API istekleri, bu token'ı `Authorization` başlığında göndermelidir.

-   [ ] **Görev ID: UI-D-002 - CDR (Çağrı Kayıtları) Sayfası**
    -   **Açıklama:** `api-gateway` üzerinden `cdr-service`'e bağlanarak çağrı kayıtlarını listeleyen, sıralanabilir ve filtrelenebilir bir veri tablosu oluştur.
    -   **Kabul Kriterleri:**
        -   [ ] Sayfa yüklendiğinde, `GET /api/v1/cdrs` endpoint'inden veriler çekilmeli ve `Tremor Table` bileşeninde gösterilmelidir.
        -   [ ] Tablo başlıklarına tıklandığında, API'ye sıralama parametreleri (`?sort_by=start_time&order=desc`) ile yeni bir istek atılmalı ve tablo güncellenmelidir.
        -   [ ] Bir arama kutusu, `?filter=...` parametresi ile API'ye istek göndererek sonuçları filtreleyebilmelidir.

-   [ ] **Görev ID: UI-D-003 - Canlı Metrikler Dashboard'u**
    -   **Açıklama:** `/dashboard` sayfasındaki statik metrik kartlarını, periyodik olarak API'den gelen gerçek verilerle güncelleyen bir mekanizma kur.
    -   **Kabul Kriterleri:**
        -   [ ] Sayfa, her 15 saniyede bir `GET /api/v1/metrics/summary` gibi bir endpoint'e istek atmalıdır.
        -   [ ] "Aktif Çağrılar", "Bugünkü Toplam Çağrı" gibi metrik kartları, API'den dönen verilerle güncellenmelidir.

-   [ ] **Görev ID: UI-D-004 - Kullanıcı Yönetimi (CRUD)**
    -   **Açıklama:** `user-service`'i yönetmek için tam bir CRUD arayüzü oluştur.
    -   **Kabul Kriterleri:**
        -   [ ] `/users` sayfasında, `GET /api/v1/users`'dan gelen tüm kullanıcılar listelenmelidir.
        -   [ ] "Yeni Kullanıcı Ekle" butonu, `POST /api/v1/users`'a istek gönderen bir formu açmalıdır.
        -   [ ] Her kullanıcı satırındaki "Düzenle" butonu, `PUT /api/v1/users/{id}`'ye istek gönderen bir düzenleme formunu açmalıdır.

---
### **FAZ 3: Low-Code Platform Yönetimi**

**Amaç:** Platformun "Genesis Bloğu" felsefesini, yani her şeyin arayüzden yönetilebilmesi vizyonunu hayata geçirmek.

-   [ ] **Görev ID: UI-D-005 - Low-Code Dialplan Editörü**
    -   **Açıklama:** Yöneticilerin sürükle-bırak yöntemiyle görsel olarak yeni dialplan'ler oluşturmasına ve mevcutları düzenlemesine olanak tanıyan bir arayüz geliştir.
    -   **Kabul Kriterleri:**
        -   [ ] `react-flow` gibi bir kütüphane kullanarak görsel bir akış diyagramı editörü oluşturulmalı.
        -   [ ] Kenar çubuğunda "Anons Çal", "AI Diyaloğu Başlat" gibi sürüklenip bırakılabilir "düğüm" (node) seçenekleri bulunmalı.
        -   [ ] "Kaydet" butonuna basıldığında, görsel diyagram standart bir JSON formatına çevrilmeli ve `POST /api/v1/dialplans` endpoint'ine gönderilmelidir.