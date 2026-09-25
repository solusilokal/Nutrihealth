# Nutrihealth - Mini Website Konselor Gizi Profesional & Terpercaya

Website landing page interaktif & mobile-first untuk **Nutrihealth** (Layanan Konselor Gizi & Dietisien Profesional di Palangka Raya). Dilengkapi dengan ringkasan profil, jadwal klinik & online, katalog paket konsultasi gizi (Weight Management, Gizi Klinis & Medis, Sports Nutrition, Gizi Ibu & Anak), galeri foto interaktif dengan lightbox, testimoni klien, FAQ akordeon, form booking WhatsApp otomatis, dan tombol bagikan profil.

- **🌐 Live Demo (GitHub Pages):** [https://solusilokal.github.io/Nutrihealth/](https://solusilokal.github.io/Nutrihealth/)
- **📁 GitHub Repository:** [https://github.com/solusilokal/Nutrihealth](https://github.com/solusilokal/Nutrihealth)

---

## 🚀 Cara Menjalankan & Preview

Tersedia **2 cara praktis** untuk melihat preview website ini:

### 1. Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `jasa konselor gizi` di Windows Explorer.
- Cukup **klik dua kali (double-click)** pada file **`standalone.html`**.
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan tampilan styling, gambar, font, dan semua fitur interaktif tanpa perlu menjalankan server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara A:** Klik dua kali file **`preview.bat`**, lalu pilih opsi `[2]` untuk menjalankan Vite Dev Server (otomatis membuka browser di `http://localhost:3000`).
- **Cara B:** Buka terminal (PowerShell / Command Prompt) di folder ini dan jalankan:
  ```bash
  npm.cmd run dev
  ```
- Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
jasa konselor gizi/
├── public/
│   ├── Gemini_Generated_Image_7kruip7kruip7kru.jpg   # Gambar hero banner
│   ├── logo-nutrihealth.png                          # Logo resmi Nutrihealth
│   ├── gambarSEO.jpg                                 # Banner preview SEO (kompresi <100KB untuk WhatsApp)
│   ├── gambarSEO.png                                 # Banner preview SEO resolusi asli
│   ├── galeri-1.webp                                 # Foto galeri: Konsultasi Meal Plan
│   ├── galeri-2.webp                                 # Foto galeri: Edukasi Gizi Isi Piringku
│   ├── galeri-3.webp                                 # Foto galeri: Pendampingan Sports Nutrition
│   ├── galeri-4.webp                                 # Foto galeri: Konsultasi Gizi Ibu & Anak
│   └── galeri-5.webp                                 # Foto galeri: Healthy Meal Counseling
├── src/
│   ├── App.jsx                                      # Komponen utama React Nutrihealth
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Plus Jakarta Sans
│   └── main.jsx                                     # Entry point aplikasi React
├── dist/                                            # Hasil kompilasi siap deploy
├── standalone.html                                  # File mandiri (bisa dibuka langsung via double-click)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── deploy_github.bat                                # Script deploy 1-klik ke GitHub
├── index.html                                       # File HTML utama untuk Vite
├── package.json                                     # Konfigurasi dependensi npm
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
├── build_standalone.cjs                             # Script bundler untuk generate standalone.html
├── Gemini_Generated_Image_7kruip7kruip7kru.jpg       # Gambar hero banner (root)
├── logo-nutrihealth.png                             # Logo resmi Nutrihealth (root)
├── gambarSEO.jpg                                    # Banner preview SEO (root)
├── gambarSEO.png                                    # Banner preview SEO resolusi asli (root)
├── galeri-1.webp s/d galeri-5.webp                  # Foto galeri resolusi optimal (root)
└── nutrihealth_landing_page.tsx                     # File source code asli
```
