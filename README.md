# 📊 Sentiric Dashboard UI

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Framework](https://img.shields.io/badge/framework-Next.js_14-black.svg)](https://nextjs.org/)
[![Styling](https://img.shields.io/badge/styling-Tailwind_CSS_&_Tremor-blue.svg)]()

**Sentiric Dashboard UI**, sistem yöneticileri ve süpervizörler için platformu izleme, yönetme ve raporlama arayüzüdür. Modern, reaktif ve kullanıcı dostu bir deneyim sunmak için **Next.js (React)** ve **TypeScript** ile geliştirilmiştir.

## 🎯 Temel Sorumluluklar

*   **Canlı İzleme (Monitoring):** Aktif çağrıları, agent durumlarını ve sistem sağlığını gösteren canlı dashboard'lar sunar.
*   **Yönetim (Management):** Kullanıcılar, dialplan'ler, anonslar ve diğer platform kaynakları için CRUD (Oluştur, Oku, Güncelle, Sil) arayüzleri sağlar.
*   **Raporlama (Reporting):** `cdr-service`'ten alınan verileri kullanarak, çağrı hacimleri, ortalama konuşma süreleri ve agent performansı gibi metrikleri görselleştiren detaylı raporlar sunar.

## 🛠️ Teknoloji Yığını

*   **Framework:** Next.js 14 (App Router)
*   **Dil:** TypeScript
*   **Styling:** Tailwind CSS
*   **UI Bileşenleri:** Tremor (Veri görselleştirme için), Headless UI
*   **State Management:** Zustand (basit ve güçlü durum yönetimi için)

## 🔌 API Etkileşimleri

Bu arayüz, platformla **sadece** `sentiric-api-gateway-service` üzerinden konuşur.

*   **Giden (İstemci):**
    *   `sentiric-api-gateway-service` (REST/JSON): Tüm veri ve yönetim isteklerini bu merkezi kapıya yapar.

## 🚀 Yerel Geliştirme

1.  **Bağımlılıkları Yükleyin:** `npm install`
2.  **Geliştirme Sunucusunu Başlatın:** `npm run dev`
3.  Tarayıcınızda `http://localhost:3000` adresini açın.

## 🐳 Docker ile Dağıtım

`Dockerfile`, multi-stage build tekniğini kullanarak statik olarak export edilmiş Next.js çıktılarını minimal bir **Nginx** imajı üzerinde sunar. Bu, son derece küçük ve güvenli bir üretim imajı oluşturur.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen projenin ana [Sentiric Governance](https://github.com/sentiric/sentiric-governance) reposundaki kodlama standartlarına ve katkıda bulunma rehberine göz atın.

---
## 🏛️ Anayasal Konum

Bu servis, [Sentiric Anayasası'nın (v11.0)](https://github.com/sentiric/sentiric-governance/blob/main/docs/blueprint/Architecture-Overview.md) **Zeka & Orkestrasyon Katmanı**'nda yer alan merkezi bir bileşendir.