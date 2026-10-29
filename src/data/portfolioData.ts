export interface ProjectFolderNode {
  name: string;
  type: "folder" | "file";
  depth: number;
  comment?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  badge: string;
  badgeType:
    | "internship"
    | "featured"
    | "mobile"
    | "academic"
    | "retail"
    | "operations";
  image: string;
  description: string;
  tech: string[];
  typeLabel: string;
  github?: string;
  demo?: string;
  rootFolder?: string;
  architectureSummary?: string;
  folderTree?: ProjectFolderNode[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
  accent?: "white" | "cyan" | "emerald" | "brand";
}

export interface TechSkillItem {
  name: string;
  color: string;
  category: "frontend" | "backend" | "mobile" | "database" | "tools";
  type: string;
  description?: string;
  projects?: string[];
  level?: string;
}

export interface EducationJourneyItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  badge: string;
  description: string;
  category: "degree" | "internship" | "web" | "mobile";
}

export interface DisciplineItem {
  id: string;
  title: string;
  iconType: "web" | "mobile" | "network";
  items: string[];
  fullWidth?: boolean;
}

export interface NavSectionItem {
  id:
    | "hero"
    | "about"
    | "competencies"
    | "projects"
    | "topology"
    | "certificates";
  mobileId:
    | "overview"
    | "disciplines"
    | "projects"
    | "topology"
    | "skills"
    | "certifications"
    | "contact";
  label: string;
  shortLabel: string;
  num: string;
  iconPath: string;
  materialIcon: string;
}

export const PERSONAL_INFO = {
  name: "Syed M Hafiz Firdaus",
  shortName: "Hafiz",
  roleTitle: "Software Engineer",
  roleSubtitle: "Network Engineer",
  fullRole: "Software Engineer & Network Engineer",
  location: "Majalengka, Jawa Barat, Indonesia",
  shortLocation: "Majalengka, Indonesia",
  email: "afizmuhammad132@gmail.com",
  whatsapp: "081318112043",
  whatsappLink: "https://wa.me/6281318112043",
  linkedin: "https://www.linkedin.com/in/syedmhafizf",
  linkedinLabel: "linkedin.com/in/syedmhafizf",
  github: "https://github.com/bzt29",
  githubLabel: "github.com/bzt29",
  avatarUrl: "/assets/image.png",
  cvUrl: "/assets/cv_ats_syed.pdf",
  cvFileName: "CV ATS SYED.pdf",
  statusBadge: "Available for Roles & Freelance",
  systemStatus: "Available for Work",
  versionTag: "Portfolio v2.0",
  briefIntro:
    "Software Engineer & Network Engineer spesialis Web Full-Stack dan Mobile Apps.",
  detailedIntro:
    "Halo! Saya Syed M Hafiz Firdaus, lulusan S1 Sistem Informasi dari Universitas Cipasung Tasikmalaya (IPK 3.37/4.00) dengan keahlian profesional dalam pengembangan aplikasi Web Full-Stack dan Mobile. Berpengalaman sebagai Network Technician & Network Engineer Mitra Resmi PT IOSYS (PLANET HOTSPOT) dalam mengelola infrastruktur ISP, konfigurasi MikroTik/PPPoE, dan billing RADIUS bagi 1.000+ pelanggan, serta aktif merilis 6+ aplikasi perangkat lunak bersama tim Codemalaya. Jelajahi karya dan portofolio saya di bawah ini.",
  aboutParagraph1:
    "Saya adalah seorang Software Engineer dan Network Engineer dengan keahlian profesional dalam pengembangan aplikasi Web Full-Stack dan Mobile. Memiliki kompetensi yang solid dalam manajemen basis data (MySQL, PostgreSQL), analisis data, serta administrasi jaringan (Linux Ubuntu, MikroTik). Lulusan S1 Sistem Informasi dari Universitas Cipasung Tasikmalaya dengan IPK 3.37/4.00.",
  aboutParagraph2:
    "Berpengalaman aktif sebagai Network Technician & Network Engineer selaku Mitra Resmi PT IOSYS (PLANET HOTSPOT) di Majalengka dengan tanggung jawab mengelola infrastruktur RT RW Net dan server ISP bagi 1.000+ pelanggan di 3 kecamatan, konfigurasi PPPoE, hotspot, serta sistem billing berbasis RADIUS. Bersamaan dengan itu, saya berkolaborasi sebagai Freelance Software Engineer di Codemalaya dalam membangun dan merilis 6+ aplikasi web dan mobile bisnis, serta menuntaskan magang di PT Munggaran Jaya Utama Bandung dengan merancang sistem enterprise SIPRESGA (100+ karyawan) dan SIMJU FinWorks.",
  workInquiryText:
    "Saya selalu terbuka untuk peluang kerja, freelance, maupun kolaborasi dalam pengembangan website dan aplikasi mobile. Jangan ragu untuk menghubungi saya.",
};

export const METRICS: MetricItem[] = [
  {
    value: "6",
    label: "Total Proyek Web",
    sublabel: "Full-Stack Web Apps",
    accent: "cyan",
  },
  {
    value: "2",
    label: "Total Proyek Mobile",
    sublabel: "Kotlin Android & Flutter",
    accent: "brand",
  },
  {
    value: "1.000+",
    label: "Pelanggan ISP",
    sublabel: "Mitra Resmi PT IOSYS",
    accent: "emerald",
  },
  {
    value: "3.37",
    label: "IPK Kelulusan",
    sublabel: "S1 Sistem Informasi (Skala 4.0)",
    accent: "white",
  },
];

export const NETWORK_HIGHLIGHT = {
  company: "Mitra Resmi PT IOSYS (PLANET HOTSPOT)",
  companyType: "Network Technician & Network Engineer",
  period: "Juli 2020 - Sekarang",
  location: "Majalengka, Jawa Barat",
  badge: "Active Experience • Jul 2020 - Sekarang",
  systemName: "ISP Server & RT RW Net Infrastructure",
  description:
    "Mengelola infrastruktur RT RW Net dan server ISP PLANET HOTSPOT secara menyeluruh untuk 1.000+ pelanggan yang tersebar di 3 kecamatan. Bertanggung jawab atas konfigurasi router MikroTik, manajemen server PPPoE, perancangan sistem voucher hotspot, integrasi billing otomatis berbasis RADIUS, pemantauan QoS jaringan, serta penanganan troubleshooting dan instalasi perangkat keras lapangan.",
};

export const INTERNSHIP_HIGHLIGHT = {
  company: "PT Munggaran Jaya Utama (Bandung)",
  companyType: "Full-Stack & Mobile Developer (Magang Industri)",
  period: "November 2025 - Februari 2026",
  location: "Bandung, Jawa Barat",
  badge: "Internship Experience • Nov 2025 - Feb 2026",
  systemName: "SIPRESGA & SIMJU FinWorks",
  description:
    "Membangun sistem absensi dan penggajian SIPRESGA untuk lebih dari 100 karyawan berbasis Laravel dan Kotlin yang dilengkapi face recognition, algoritma Haversine, dan deteksi fake GPS. Serta mengembangkan web full-stack keuangan SIMJU FinWorks dengan fitur pencatatan transaksi real-time, manajemen proyek, dan automasi laporan yang mampu menghemat waktu penyusunan laporan keuangan hingga 40%.",
};

export const DISCIPLINES: DisciplineItem[] = [
  {
    id: "web-dev",
    title: "Full Stack Web Development",
    iconType: "web",
    items: [
      "Laravel backend framework, Eloquent ORM & Filament admin panels.",
      "React.js & Next.js dynamic user interfaces with Tailwind CSS.",
      "Relational database modeling with MySQL, normalization & transactions.",
      "RESTful API development, JWT / Sanctum authentication & services.",
    ],
  },
  {
    id: "mobile-dev",
    title: "Mobile Apps & System Integration",
    iconType: "mobile",
    items: [
      "Kotlin Android native development with clean MVVM architecture.",
      "Flutter & Dart cross-platform mobile applications.",
      "Geofencing, GPS coordinates validation & fake GPS detection.",
      "Facial selfie verification for secure mobile attendance.",
    ],
  },
  {
    id: "network-eng",
    title: "Network Engineering & Infrastructure",
    iconType: "network",
    fullWidth: true,
    items: [
      "Perancangan topologi LAN/WLAN, IP subnetting IPv4/IPv6, dan segmentasi VLAN.",
      "Konfigurasi router & switch (MikroTik / Cisco), static routing, OSPF, dan gateway redundancy.",
      "Manajemen traffic, QoS (Bandwidth Management), firewall filtering rule, dan network security.",
      "Implementasi VPN (WireGuard, OpenVPN, PPTP), manajemen server gateway, dan monitoring konektivitas.",
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 1,
    title: "SIMJU (Financial Management System)",
    category: "Web Application",
    badge: "Internship • PT MJU",
    badgeType: "internship",
    image: "/assets/simju-2negDDdT.png",
    description:
      "Financial management system developed during internship at PT Munggaran Jaya Utama using Laravel 11, Filament v3, and MySQL. Features include project management, income & expense tracking, interactive financial dashboards, and automated accounting reports.",
    tech: ["Laravel 11", "Filament v3", "Tailwind CSS", "MySQL"],
    typeLabel: "Web Application",
    rootFolder: "simju",
    architectureSummary: "Laravel 11 + Filament v3 Admin Suite",
    folderTree: [
      { name: "app", type: "folder", depth: 0 },
      { name: "Filament/Pages", type: "folder", depth: 1 },
      {
        name: "Dashboard.php",
        type: "file",
        depth: 2,
        comment: "Executive dashboard view",
      },
      {
        name: "ManajemenData.php",
        type: "file",
        depth: 2,
        comment: "Multi-sheet financial matrix",
      },
      { name: "Filament/Widgets", type: "folder", depth: 1 },
      {
        name: "FinanceOverview.php",
        type: "file",
        depth: 2,
        comment: "Cash in, cash out & profit summary",
      },
      {
        name: "CashFlowTrend.php",
        type: "file",
        depth: 2,
        comment: "Monthly cashflow trend chart",
      },
      {
        name: "DashboardProgressTable.php",
        type: "file",
        depth: 2,
        comment: "Client project status overview",
      },
      { name: "Filament/Resources", type: "folder", depth: 1 },
      {
        name: "Clients/ClientResource.php",
        type: "file",
        depth: 2,
        comment: "Client PO & invoice manager",
      },
      {
        name: "Suppliers/SupplierResource.php",
        type: "file",
        depth: 2,
        comment: "Supplier disbursement tracking",
      },
      { name: "Models", type: "folder", depth: 1 },
      {
        name: "Client.php",
        type: "file",
        depth: 2,
        comment: "PO data & project details",
      },
      {
        name: "Supplier.php",
        type: "file",
        depth: 2,
        comment: "Vendor registry & payments",
      },
      {
        name: "ProjectSupplierPayment.php",
        type: "file",
        depth: 2,
        comment: "Termin & payment schedules",
      },
      {
        name: "Exports/ManagementDataExport.php",
        type: "file",
        depth: 1,
        comment: "Multi-sheet Excel export engine",
      },
      {
        name: "Imports/ManagementDataImport.php",
        type: "file",
        depth: 1,
        comment: "Batch financial spreadsheet parser",
      },
      {
        name: "Http/Controllers/ManagementDataPdfController.php",
        type: "file",
        depth: 1,
        comment: "Automated PDF accounting report",
      },
    ],
  },
  {
    id: 2,
    title: "SIPRESGA (Attendance & Payroll Ecosystem)",
    category: "Web Application",
    badge: "Web & Mobile",
    badgeType: "featured",
    image: "/assets/sipresga-DsgHf-IV.png",
    description:
      "Employee attendance and payroll information system with GPS validation, selfie verification, and comprehensive payroll management connected with Android mobile app.",
    tech: ["Laravel 11", "MySQL", "Python Face Verify", "TailAdmin"],
    typeLabel: "Enterprise Web",
    rootFolder: "sipresga",
    architectureSummary: "Laravel 11 REST API + Python Face Verify Engine",
    folderTree: [
      { name: "app", type: "folder", depth: 0 },
      { name: "Http/Controllers/Api", type: "folder", depth: 1 },
      {
        name: "PresensiApiController.php",
        type: "file",
        depth: 2,
        comment: "Haversine GPS & selfie check-in",
      },
      {
        name: "ApprovalApiController.php",
        type: "file",
        depth: 2,
        comment: "Pengajuan lembur & izin approval",
      },
      {
        name: "GajiSayaApiController.php",
        type: "file",
        depth: 2,
        comment: "Employee payroll & slip endpoint",
      },
      {
        name: "AuthController.php",
        type: "file",
        depth: 2,
        comment: "Sanctum token authentication",
      },
      { name: "Http/Controllers", type: "folder", depth: 1 },
      {
        name: "PenggajianController.php",
        type: "file",
        depth: 2,
        comment: "Perhitungan gaji & tunjangan karyawan",
      },
      {
        name: "ShiftController.php",
        type: "file",
        depth: 2,
        comment: "Manajemen jadwal kerja & rotasi shift",
      },
      {
        name: "MonitoringController.php",
        type: "file",
        depth: 2,
        comment: "Real-time presence monitoring table",
      },
      { name: "Models", type: "folder", depth: 1 },
      {
        name: "Presensi.php",
        type: "file",
        depth: 2,
        comment: "Check-in coordinates & photo path",
      },
      {
        name: "Payroll.php",
        type: "file",
        depth: 2,
        comment: "Komponen gaji pokok, tunjangan & bonus",
      },
      {
        name: "Shift.php",
        type: "file",
        depth: 2,
        comment: "Jam masuk, pulang & batas toleransi",
      },
      {
        name: "PengajuanPresensi.php",
        type: "file",
        depth: 2,
        comment: "Izin sakit & cuti approval state",
      },
      { name: "python", type: "folder", depth: 0 },
      {
        name: "face_verify.py",
        type: "file",
        depth: 1,
        comment: "Facial feature embedding similarity",
      },
      { name: "routes", type: "folder", depth: 0 },
      {
        name: "api.php",
        type: "file",
        depth: 1,
        comment: "Endpoints for Android mobile app",
      },
      {
        name: "web.php",
        type: "file",
        depth: 1,
        comment: "Backoffice admin & payroll routes",
      },
    ],
  },
  {
    id: 3,
    title: "SIPRESGA Mobile Application",
    category: "Mobile App",
    badge: "Mobile App",
    badgeType: "mobile",
    image: "/assets/mobilesipresga-BWn1ftDb.png",
    description:
      "Employee mobile application for daily attendance, overtime submission, attendance history, and profile management with real-time GPS validation, face verification, and fake GPS detection.",
    tech: ["Kotlin", "Jetpack Compose", "Retrofit 2", "CameraX"],
    typeLabel: "Mobile Application",
    rootFolder: "sipresganew",
    architectureSummary: "Android Kotlin + Jetpack Compose + Clean MVVM",
    folderTree: [
      {
        name: "app/src/main/java/com/example/sipresgaapp",
        type: "folder",
        depth: 0,
      },
      { name: "data/remote", type: "folder", depth: 1 },
      {
        name: "ApiService.kt",
        type: "file",
        depth: 2,
        comment: "Retrofit 2 endpoints (presensi, gaji, approval)",
      },
      {
        name: "RetrofitClient.kt",
        type: "file",
        depth: 2,
        comment: "OkHttpClient with AuthInterceptor",
      },
      { name: "data/repository", type: "folder", depth: 1 },
      {
        name: "PresensiRepository.kt",
        type: "file",
        depth: 2,
        comment: "Presensi check-in & GPS validation",
      },
      {
        name: "ApprovalRepository.kt",
        type: "file",
        depth: 2,
        comment: "Pengajuan lembur/izin approval handler",
      },
      {
        name: "PegawaiProfileRepository.kt",
        type: "file",
        depth: 2,
        comment: "User biodata & avatar state",
      },
      { name: "data/local", type: "folder", depth: 1 },
      {
        name: "TokenManager.kt",
        type: "file",
        depth: 2,
        comment: "Encrypted SharedPreferences token",
      },
      { name: "data/model/presensi", type: "folder", depth: 1 },
      {
        name: "PresensiRequest.kt",
        type: "file",
        depth: 2,
        comment: "Lat, lng, address & selfie multipart",
      },
      { name: "ui/presensi", type: "folder", depth: 1 },
      {
        name: "FormPresensiScreen.kt",
        type: "file",
        depth: 2,
        comment: "Live GPS radius & selfie capture",
      },
      {
        name: "RiwayatPresensiScreen.kt",
        type: "file",
        depth: 2,
        comment: "Presensi history calendar list",
      },
      {
        name: "PresensiViewModel.kt",
        type: "file",
        depth: 2,
        comment: "Location & submission state holder",
      },
      { name: "ui/components", type: "folder", depth: 1 },
      {
        name: "CameraPreviewView.kt",
        type: "file",
        depth: 2,
        comment: "CameraX front-camera preview frame",
      },
      {
        name: "ui/home/HomeScreen.kt",
        type: "file",
        depth: 1,
        comment: "Dashboard shift status & quick check-in",
      },
      {
        name: "ui/gajisaya/DetailGajiSayaScreen.kt",
        type: "file",
        depth: 1,
        comment: "Rincian slip gaji & potongan",
      },
      {
        name: "ui/navigation/NavGraph.kt",
        type: "file",
        depth: 1,
        comment: "Jetpack Navigation Compose routes",
      },
      {
        name: "build.gradle.kts",
        type: "file",
        depth: 0,
        comment: "CameraX, ML Kit, Retrofit & Compose BOM",
      },
    ],
  },
  {
    id: 4,
    title: "SIBUNDA (Sistem Pakar Risiko Kehamilan)",
    category: "Web Application",
    badge: "Expert System",
    badgeType: "academic",
    image: "/assets/sibunda-KltqzZQk.png",
    description:
      "Expert system for maternal pregnancy risk diagnosis using the Certainty Factor (CF) method. Developed as a web-based clinical assessment system to calculate diagnostic certainty based on maternal symptoms, connected with automated WhatsApp alert notifications.",
    tech: [
      "Native PHP",
      "Certainty Factor",
      "Bootstrap 5",
      "MySQL",
      "Fonnte API",
    ],
    typeLabel: "Expert System",
    rootFolder: "sibunda",
    architectureSummary: "PHP Native + Certainty Factor (CF) Inference Engine",
    folderTree: [
      {
        name: "konsultasi.php",
        type: "file",
        depth: 0,
        comment: "Form kuesioner gejala klinis & MB-MD",
      },
      {
        name: "proses_konsultasi.php",
        type: "file",
        depth: 0,
        comment: "Perhitungan Certainty Factor & Fonnte WA alert",
      },
      {
        name: "hasil_diagnosa.php",
        type: "file",
        depth: 0,
        comment: "Laporan skor CF tertinggi & saran medis",
      },
      {
        name: "riwayat_konsultasi.php",
        type: "file",
        depth: 0,
        comment: "Riwayat pemeriksaan berkala ibu hamil",
      },
      {
        name: "detail_riwayat.php",
        type: "file",
        depth: 0,
        comment: "Rincian kalkulasi CF per gejala & penyakit",
      },
      {
        name: "koneksi.php",
        type: "file",
        depth: 0,
        comment: "Konfigurasi koneksi MySQL database",
      },
      { name: "admin/pages", type: "folder", depth: 0 },
      { name: "gejala_penyakit", type: "folder", depth: 1 },
      {
        name: "index.php",
        type: "file",
        depth: 2,
        comment: "Rule base: matriks bobot pakar (cf_pakar)",
      },
      { name: "penyakit", type: "folder", depth: 1 },
      {
        name: "index.php",
        type: "file",
        depth: 2,
        comment: "Master data risiko tinggi, sedang, rendah",
      },
      { name: "gejala", type: "folder", depth: 1 },
      {
        name: "index.php",
        type: "file",
        depth: 2,
        comment: "Master data daftar gejala fisik kehamilan",
      },
      { name: "riwayat", type: "folder", depth: 1 },
      {
        name: "index.php",
        type: "file",
        depth: 2,
        comment: "Rekap data pasien & cetak laporan",
      },
      {
        name: "admin/layouts/app.php",
        type: "file",
        depth: 0,
        comment: "Master dashboard template & sidebar",
      },
      {
        name: "db_sibunda.sql",
        type: "file",
        depth: 0,
        comment: "Skema basis data tb_gejala & tb_penyakit",
      },
    ],
  },
  {
    id: 5,
    title: "SPOS (Point of Sale Application)",
    category: "E-Commerce",
    badge: "E-Commerce & Retail",
    badgeType: "retail",
    image: "/assets/spos-CuQubm-I.png",
    description:
      "Point of Sale application for retail businesses featuring real-time cashier transactions, product inventory management, stock alerts, and financial sales reporting.",
    tech: ["Laravel 11", "Bootstrap 5", "MySQL", "Blade"],
    typeLabel: "Retail System",
    rootFolder: "sPOS",
    architectureSummary:
      "Laravel 11 POS + Stock Tracking & Financial Reporting",
    folderTree: [
      { name: "app/Http/Controllers", type: "folder", depth: 0 },
      {
        name: "PosController.php",
        type: "file",
        depth: 1,
        comment: "Terminal kasir, keranjang belanja & nota",
      },
      {
        name: "MenuController.php",
        type: "file",
        depth: 1,
        comment: "Katalog menu, harga & upload foto",
      },
      {
        name: "BahanController.php",
        type: "file",
        depth: 1,
        comment: "Manajemen bahan baku & resep menu",
      },
      {
        name: "LaporanPenjualanController.php",
        type: "file",
        depth: 1,
        comment: "Rekap omset harian, bulanan & grafik",
      },
      {
        name: "LaporanStokController.php",
        type: "file",
        depth: 1,
        comment: "Monitoring stok menipis & alert restock",
      },
      {
        name: "MetodePembayaranController.php",
        type: "file",
        depth: 1,
        comment: "Konfigurasi Cash, QRIS & Transfer",
      },
      { name: "app/Models", type: "folder", depth: 0 },
      {
        name: "Penjualan.php",
        type: "file",
        depth: 1,
        comment: "Header transaksi nota & relasi user",
      },
      {
        name: "PenjualanDetail.php",
        type: "file",
        depth: 1,
        comment: "Detail item menu, qty & subtotal",
      },
      {
        name: "Menu.php",
        type: "file",
        depth: 1,
        comment: "Data menu & relasi komposisi bahan",
      },
      {
        name: "Bahan.php",
        type: "file",
        depth: 1,
        comment: "Data stok fisik & satuan (gram/ml)",
      },
      { name: "resources/views/pages", type: "folder", depth: 0 },
      {
        name: "pos/index.blade.php",
        type: "file",
        depth: 1,
        comment: "UI kasir sentuh cepat & popup bayar",
      },
      {
        name: "laporan-penjualan/index.blade.php",
        type: "file",
        depth: 1,
        comment: "Tabel rekapitulasi penjualan & filter",
      },
      {
        name: "laporan-stok/index.blade.php",
        type: "file",
        depth: 1,
        comment: "Tabel status persediaan bahan baku",
      },
      {
        name: "routes/web.php",
        type: "file",
        depth: 0,
        comment: "Routing POS, laporan, & middleware auth",
      },
    ],
  },
  {
    id: 6,
    title: "SIQOLBU (Platform Bimbingan & Edukasi Ibadah)",
    category: "Web Application",
    badge: "Guidance Platform",
    badgeType: "operations",
    image: "/assets/siqolbu-CYnr7Rcc.png",
    description:
      "Interactive educational platform for Hajj and Umrah pilgrims featuring step-by-step Manasik guides, Al-Qur'an 30 Juz with verse audio, Islamic jurisprudence (Fiqih), daily Dhikr audio player, and geolocation mapping of holy sites.",
    tech: ["Laravel", "Bootstrap", "MySQL", "Google Maps Embed"],
    typeLabel: "Education Platform",
    rootFolder: "siqolbu",
    architectureSummary:
      "Laravel + Multi-Role Admin & Pilgrim Guidance Platform",
    folderTree: [
      { name: "app/Http/Controllers/User", type: "folder", depth: 0 },
      {
        name: "ManasikQolbuController.php",
        type: "file",
        depth: 1,
        comment: "Panduan tata cara manasik haji & umroh",
      },
      {
        name: "QuranController.php",
        type: "file",
        depth: 1,
        comment: "Bacaan Al-Qur'an 30 Juz & audio per ayat",
      },
      {
        name: "MapLokasiIbadahController.php",
        type: "file",
        depth: 1,
        comment: "Geolocation rute & titik ibadah tanah suci",
      },
      {
        name: "FiqhulIbadahController.php",
        type: "file",
        depth: 1,
        comment: "Modul fiqih ibadah & tuntunan praktis",
      },
      {
        name: "AudioDzikirController.php",
        type: "file",
        depth: 1,
        comment: "Pemutar audio dzikir pagi & petang",
      },
      { name: "app/Http/Controllers/Admin", type: "folder", depth: 0 },
      {
        name: "AdminDashboardController.php",
        type: "file",
        depth: 1,
        comment: "Statistik pengunjung & aktivitas jamaah",
      },
      {
        name: "AdminVideoManasikController.php",
        type: "file",
        depth: 1,
        comment: "Manajemen kurasi video tutorial ibadah",
      },
      {
        name: "AdminMapsLokasiIbadahController.php",
        type: "file",
        depth: 1,
        comment: "Input koordinat lokasi & titik ziarah",
      },
      { name: "app/Models", type: "folder", depth: 0 },
      {
        name: "ManasikQolbu.php",
        type: "file",
        depth: 1,
        comment: "Materi tahapan rukun haji/umroh",
      },
      {
        name: "MapsLokasiIbadah.php",
        type: "file",
        depth: 1,
        comment: "Data koordinat latitude & longitude",
      },
      {
        name: "Surat.php",
        type: "file",
        depth: 1,
        comment: "Relasi surat dan daftar ayat Al-Qur'an",
      },
      {
        name: "app/Helpers/MapsEmbedHelper.php",
        type: "file",
        depth: 0,
        comment: "Generator iframe Google Maps responsif",
      },
      {
        name: "routes/web.php",
        type: "file",
        depth: 0,
        comment: "Routing jamaah portal & panel admin CMS",
      },
    ],
  },
];

export const ARCHITECTURE_CODE = {
  filename: "FinanceOverview.php",
  language: "PHP 8.2 / Laravel 11 / Filament v3",
  comment: "// SIMJU - Executive Financial Aggregation & Outstanding Tracker",
  code: `namespace App\\Filament\\Widgets;

use App\\Models\\Client;
use Carbon\\Carbon;
use Filament\\Widgets\\Widget;
use Illuminate\\Support\\Facades\\DB;

class FinanceOverview extends Widget
{
    private function getOutstandingDetails($clients, Carbon $start, Carbon $end): array
    {
        $startDt = $start->copy()->startOfDay()->toDateTimeString();
        $endDt   = $end->copy()->endOfDay()->toDateTimeString();

        return (clone $clients)
            ->join('client_details as cd', 'cd.client_id', '=', 'clients.id')
            ->leftJoin('client_invoices as i', function ($join) {
                $join->on('i.client_id', '=', 'clients.id')
                    ->whereNull('i.deleted_at');
            })
            ->leftJoin('client_invoice_details as d', function ($join) {
                $join->on('d.client_invoice_id', '=', 'i.id')
                    ->whereNull('d.deleted_at');
            })
            ->whereNull('cd.deleted_at')
            ->select([
                'clients.project_owner_name as perusahaan',
                'clients.project_name as project',
                DB::raw('COALESCE(cd.po_total, 0) as po_total'),
                DB::raw('
                    GREATEST(
                        COALESCE(cd.po_total, 0) -
                        GREATEST(COALESCE(SUM(d.dpp_amount), 0), 0),
                        0
                    ) as outstanding_nilai
                '),
            ])
            ->addBinding([$startDt, $endDt], 'select')
            ->groupBy('clients.id', 'clients.project_owner_name', 'clients.project_name', 'cd.po_total')
            ->having('outstanding_nilai', '>', 0)
            ->orderByDesc('outstanding_nilai')
            ->get()
            ->toArray();
    }
}`,
};

export const EDUCATION_AND_JOURNEY: EducationJourneyItem[] = [
  {
    id: "degree",
    title: "S1 Sistem Informasi (IPK: 3.37/4.00)",
    institution: "Universitas Cipasung Tasikmalaya",
    period: "September 2022 - September 2026",
    badge: "Pendidikan • IPK 3.37",
    description:
      "Program sarjana Sistem Informasi dengan fokus pada Full-Stack Web Development, Mobile Applications, manajemen basis data relasional, dan administrasi jaringan.",
    category: "degree",
  },
  {
    id: "internship-mju",
    title: "Full-Stack & Mobile Developer (Magang)",
    institution: "PT Munggaran Jaya Utama, Bandung",
    period: "November 2025 - Februari 2026",
    badge: "Magang Industri • Bandung",
    description:
      "Membangun ekosistem absensi & payroll SIPRESGA (100+ karyawan, Laravel & Kotlin, face recognition, Haversine, anti fake GPS) serta web keuangan SIMJU FinWorks (efisiensi laporan keuangan hingga 40%).",
    category: "internship",
  },
  {
    id: "freelance-codemalaya",
    title: "Freelance Software Engineer",
    institution: "Codemalaya, Tasikmalaya",
    period: "Maret 2023 - Sekarang",
    badge: "Freelance • 6+ Aplikasi",
    description:
      "Berkolaborasi dalam tim mengembangkan dan merilis 6+ aplikasi web dan mobile full-stack berbasis Laravel, Next.js, Tailwind CSS, MySQL, dan PostgreSQL sesuai kebutuhan bisnis klien.",
    category: "web",
  },
  {
    id: "network-iosys",
    title: "Network Technician & Network Engineer",
    institution: "Mitra Resmi PT IOSYS (PLANET HOTSPOT), Majalengka",
    period: "Juli 2020 - Sekarang",
    badge: "Teknisi ISP • 1.000+ Klien",
    description:
      "Mengelola infrastruktur RT RW Net dan server ISP PLANET HOTSPOT bagi 1.000+ pelanggan di 3 kecamatan, konfigurasi MikroTik, server PPPoE, sistem voucher hotspot, sistem billing RADIUS, dan monitoring QoS.",
    category: "internship",
  },
  {
    id: "organization-uncip",
    title: "Anggota & Inovator Digital",
    institution: "Uncip Society • Universitas Cipasung",
    period: "Maret 2023 - Agustus 2025",
    badge: "Innovillage & P2MW",
    description:
      "Merancang dan mengembangkan prototipe alat pakan otomatis berbasis IoT bertenaga surya pada kompetisi Innovillage 2023 & 2024, serta validasi ide bisnis digital program P2MW 2025.",
    category: "mobile",
  },
];

export const TECH_SKILLS: TechSkillItem[] = [
  {
    name: "Laravel",
    color: "#FF2D20",
    category: "backend",
    type: "Backend Framework",
    description:
      "Enterprise PHP MVC framework with Eloquent ORM, REST API endpoints, and auth services.",
    projects: ["SIMJU", "SIPRESGA", "SIBUNDA"],
    level: "Advanced",
  },
  {
    name: "React.js",
    color: "#61DAFB",
    category: "frontend",
    type: "Frontend Library",
    description:
      "Component-driven user interfaces, state management, custom hooks, and dynamic web experiences.",
    projects: ["Portfolio", "Admin Dashboards"],
    level: "Proficient",
  },
  {
    name: "Next.js",
    color: "#ffffff",
    category: "frontend",
    type: "Full Stack React",
    description:
      "Full-stack React framework with App Router, server rendering (SSR/SSG), and performance optimization.",
    projects: ["Web Portals", "Portfolio v2"],
    level: "Proficient",
  },
  {
    name: "Tailwind CSS",
    color: "#06B6D4",
    category: "frontend",
    type: "Utility Styling",
    description:
      "Utility-first design system with responsive layouts, dark/light themes, and custom design tokens.",
    projects: ["SIMJU", "SIPRESGA", "Portfolio"],
    level: "Advanced",
  },
  {
    name: "Kotlin",
    color: "#738ADB",
    category: "mobile",
    type: "Android Native",
    description:
      "Native Android development with clean MVVM architecture, GPS geofencing, and selfie verification.",
    projects: ["SIPRESGA Mobile"],
    level: "Proficient",
  },
  {
    name: "Flutter",
    color: "#02569B",
    category: "mobile",
    type: "Cross-Platform",
    description:
      "Cross-platform mobile apps with Dart, widget trees, responsive layouts, and REST API integration.",
    projects: ["Mobile Prototypes"],
    level: "Intermediate",
  },
  {
    name: "Supabase",
    color: "#3FCF8E",
    category: "backend",
    type: "Backend & Auth",
    description:
      "Cloud database platform with PostgreSQL, authentication flows, row-level security, and realtime sync.",
    projects: ["Cloud Systems"],
    level: "Proficient",
  },
  {
    name: "MySQL",
    color: "#00758F",
    category: "database",
    type: "Relational DB",
    description:
      "Relational database schema modeling, ACID transactions, complex queries, and index optimization.",
    projects: ["SIMJU", "SIPRESGA", "SIBUNDA"],
    level: "Advanced",
  },
  {
    name: "Filament",
    color: "#f59e0b",
    category: "tools",
    type: "Admin Panel",
    description:
      "Accelerated TALL-stack admin dashboard and CRUD management builder for Laravel applications.",
    projects: ["SIMJU"],
    level: "Advanced",
  },
  {
    name: "GitHub",
    color: "#a855f7",
    category: "tools",
    type: "Version Control",
    description:
      "Git version control, collaborative workflows, branch strategies, pull requests, and repository maintenance.",
    projects: ["github.com/bzt29"],
    level: "Advanced",
  },
];

export const NAV_SECTIONS: NavSectionItem[] = [
  {
    id: "hero",
    mobileId: "overview",
    label: "Overview",
    shortLabel: "Overview",
    num: "01",
    iconPath:
      "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    materialIcon: "dashboard",
  },
  {
    id: "about",
    mobileId: "overview",
    label: "About Me",
    shortLabel: "About",
    num: "02",
    iconPath:
      "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    materialIcon: "person",
  },
  {
    id: "competencies",
    mobileId: "disciplines",
    label: "Core Disciplines",
    shortLabel: "Disciplines",
    num: "03",
    iconPath:
      "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    materialIcon: "dns",
  },
  {
    id: "projects",
    mobileId: "projects",
    label: "Featured Projects",
    shortLabel: "Projects",
    num: "04",
    iconPath:
      "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
    materialIcon: "code_blocks",
  },
  {
    id: "topology",
    mobileId: "topology",
    label: "Tech Stack & Skills",
    shortLabel: "Tech Stack",
    num: "05",
    iconPath:
      "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    materialIcon: "terminal",
  },
  {
    id: "certificates",
    mobileId: "certifications",
    label: "Education & Journey",
    shortLabel: "Journey",
    num: "06",
    iconPath:
      "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z",
    materialIcon: "school",
  },
];
