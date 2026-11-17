# Syed M Hafiz Firdaus - Professional Engineering Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

Platform portofolio web modern, interaktif, dan berarsitektur responsif tinggi yang menampilkan karya rekayasa perangkat lunak dan infrastruktur jaringan oleh **Syed M Hafiz Firdaus** (Software Engineer & Network Engineer spesialis Web Full-Stack dan Mobile Apps).

## SEO dan penemuan oleh AI

Domain utama: **https://syed.my.id**. Atur `NEXT_PUBLIC_SITE_URL=https://syed.my.id`
di environment deployment sebelum build. Nilai ini dipakai untuk canonical, sitemap,
Open Graph, dan data terstruktur. Perubahan environment memerlukan redeploy.

- `/` menyajikan nama lengkap, ringkasan profil, tautan CV, serta JSON-LD
  `ProfilePage`, `Person`, dan `WebSite` dalam HTML awal.
- `/cv` mempunyai canonical sendiri. `/dark`, `/white`, dan `/mobile` memakai
  canonical `/` karena merupakan tampilan alternatif dari portfolio yang sama.
- `/sitemap.xml` hanya memuat halaman utama dan CV. `/robots.txt` mengizinkan
  crawler publik termasuk OAI-SearchBot; API dan login dikecualikan. Login juga
  memakai `noindex` (robots.txt bukan pengamanan akses).
- `/opengraph-image` menghasilkan gambar preview link berukuran 1200 × 630.
- Favicon pencarian memakai `/favicon-192.png` (192 × 192) dengan URL tetap.
  Sumber vektor berada di `public/icon.svg`; `/favicon.ico` tetap tersedia.
  Setelah mengganti ikon, minta indexing ulang homepage di Search Console.
  Tampilan ikon di hasil pencarian menunggu Google melakukan crawl dan pemrosesan
  ulang, yang dapat memerlukan beberapa hari hingga beberapa minggu.

Setelah deployment:

1. Verifikasi kepemilikan `syed.my.id` di [Google Search Console](https://search.google.com/search-console)
   menggunakan TXT DNS yang diberikan Google. Jangan menggunakan kode contoh.
2. Kirim `https://syed.my.id/sitemap.xml`, lalu gunakan URL Inspection dan
   Request Indexing untuk homepage serta `/cv`.
3. Verifikasi/import situs ke [Bing Webmaster Tools](https://www.bing.com/webmasters)
   dan kirim sitemap yang sama.
4. Pastikan proteksi bot/CDN tidak menolak crawler pencarian. Perbarui tautan
   website di GitHub, LinkedIn, dan PDF CV menjadi `https://syed.my.id`.
5. Periksa canonical pada halaman produksi agar tidak menunjuk domain Vercel lama.
   Pantau query nama lengkap dan status indexing di Search Console.

Metadata dan akses crawler membantu penemuan; keduanya tidak menjamin peringkat,
indexing, atau penyebutan oleh chatbot. AI yang tidak memakai pencarian web tidak
otomatis mengetahui perubahan situs. File AI khusus bukan syarat untuk Google AI
Search; data terstruktur harus sesuai informasi yang terlihat oleh pengunjung.

Referensi: [Google AI Search](https://developers.google.com/search/docs/appearance/ai-features),
[OpenAI crawlers](https://developers.openai.com/api/docs/bots),
[Google recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl),
[Bing sitemap](https://www.bing.com/webmasters/help/Sitemaps-3b5cf6ed).

---

## 🌟 Fitur Utama (Key Features)

- **Dual-Mode Interactive Project Cards**:
  - **Live UI Preview**: Snapshot resolusi tinggi dari antarmuka proyek nyata.
  - **Terminal Folder Tree**: Simulasi terminal pohon direktori interaktif (menyerupai perintah `tree`) yang merepresentasikan struktur kode dan arsitektur asli dari tiap repositori proyek.
- **Dua Tema Visual Terpadu (Light & Dark Mode)**:
  - Mode gelap bernuansa *developer console* modern (`/dark`).
  - Mode terang elegan bergaya *centered documentation* (`/white`).
  - Sinkronisasi instan via `localStorage` dan event kustom tanpa reload halaman.
- **Arsitektur Responsif Multi-Device**:
  - **Mobile (< 768px)**: Desain satu kolom ramping dengan Quick Navigation Strip horizontal dan navigasi sentuh yang nyaman.
  - **Tablet (768px - 1023px, iPad portrait/landscape)**: Sidebar kiri tetap terpasang dengan rasio grid khusus agar teks metrik dan preview proyek tetap lapang dan tidak terpotong.
  - **Desktop (>= 1024px)**: Layout 3 kolom profesional (Profile Sidebar kiri, Main Content tengah, dan Direct Contact Rail kanan).
- **Showcase Pengalaman Rekayasa Nyata**:
  - **Network Technician & Engineering**: Rekam jejak aktif sebagai Mitra Resmi PT IOSYS (PLANET HOTSPOT) dalam mengelola server ISP, konfigurasi MikroTik, PPPoE, sistem billing RADIUS, dan infrastruktur RT RW Net bagi 1.000+ pelanggan.
  - **Enterprise Internship**: Pengembangan ekosistem absensi presensi wajah SIPRESGA dan sistem keuangan SIMJU di PT Munggaran Jaya Utama Bandung.
  - **Academic & Freelance Works**: Sistem Pakar Diagnosa Kehamilan (Certainty Factor AI), Aplikasi Kasir POS Toko Al-Fath, dan Portal Akademik.
- **Direct Contact & Inquiry**:
  - Formulir pesan kontak langsung dengan feedback visual.
  - Integrasi tombol cepat WhatsApp dan download Curriculum Vitae (PDF ATS-friendly).

---

## 🛠️ Tech Stack

| Kategori | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (Turbopack) | React framework berbasis App Router dengan performa kompilasi instan |
| **UI Library** | React 19 | Library komponen antarmuka pengguna modern |
| **Bahasa** | TypeScript | Type safety ketat untuk data portofolio, metrik, dan pohon direktori |
| **Styling** | Tailwind CSS v4 | Utility-first CSS framework dengan optimasi performa tinggi |
| **Ikonografi** | SVG kustom / Heroicons | Grafis vektor ringan tanpa overhead dependensi tambahan |
| **Deployment** | Vercel / Node.js | Siap dideploy ke cloud server maupun platform edge |

---

## 📂 Struktur Proyek

```text
portfolio-prof/
├── public/                 # Static assets (gambar preview proyek, CV PDF, foto avatar)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API Route handlers (contact form, portfolio endpoints)
│   │   ├── dark/           # Halaman khusus Dark Theme
│   │   ├── white/          # Halaman khusus White / Light Theme
│   │   ├── mobile/         # Halaman mobile view shell
│   │   ├── layout.tsx      # Root HTML layout & metadata SEO
│   │   └── page.tsx        # Halaman utama responsif
│   ├── components/
│   │   ├── contact/        # Formulir kontak & aksi pengiriman pesan
│   │   ├── layout/         # ProfileSidebar, RightRail, ViewNavbar, TopStatusBar
│   │   ├── sections/       # HeroSection, AboutSection, DisciplinesSection,
│   │   │                   # ProjectsSection, TechStackSection, JourneySection
│   │   ├── ui/             # Tombol, badge, modal, input reusable
│   │   ├── DarkView.tsx    # Komponen utama Dark Theme
│   │   └── WhiteView.tsx   # Komponen utama Light Theme
│   └── data/
│       └── portfolioData.ts # Data sentral (biodata, proyek, metrik, keahlian, folder tree)
├── .env.example            # Template variabel lingkungan
├── next.config.mjs         # Konfigurasi Next.js & Turbopack
├── package.json            # Daftar dependensi dan script npm
├── tailwind.config.ts      # Konfigurasi tema dan plugin Tailwind
└── tsconfig.json           # Konfigurasi TypeScript
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat
- **Node.js**: Versi 20.x atau lebih baru
- **npm** atau **pnpm** atau **yarn**

### 1. Kloning Repositori
```bash
git clone https://github.com/bzt29/portfolio-prof.git
cd portfolio-prof
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Lingkungan
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

### 4. Jalankan Development Server
```bash
npm run dev
```
Buka peramban di `http://localhost:3000` untuk melihat aplikasi berjalan.

### 5. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 👨‍💻 Profil & Kontak

**Syed M Hafiz Firdaus**
- **Peran**: Software Engineer & Network Engineer
- **Pendidikan**: S1 Sistem Informasi - Universitas Cipasung Tasikmalaya (IPK 3.37 / 4.00)
- **Email**: [afizmuhammad132@gmail.com](mailto:afizmuhammad132@gmail.com)
- **LinkedIn**: [linkedin.com/in/syedmhafizf](https://www.linkedin.com/in/syedmhafizf)
- **GitHub**: [github.com/bzt29](https://github.com/bzt29)
- **WhatsApp**: [+62 813-1811-2043](https://wa.me/6281318112043)

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi [MIT](LICENSE). Silakan gunakan sebagai inspirasi atau referensi portofolio profesional Anda.
