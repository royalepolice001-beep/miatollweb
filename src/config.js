/* =========================================================
 * Miatoll Family — site configuration
 * Ubah SITE_URL ke domain kamu (Vercel/Cloudflare) setelah deploy!
 * Contoh: https://miatoll-family.vercel.app
 * ======================================================= */

const SITE_URL = "https://miatoll-family.vercel.app"; // <-- GANTI dengan domain kamu

const site = {
  name: "Miatoll Family",
  tagline: "Pusat Download Keluarga Miatoll",
  description:
    "Download center lengkap untuk seluruh keluarga Xiaomi Miatoll — Redmi Note 9, Note 9 Pro, Note 9 Pro Max, Note 9S & POCO M2 Pro. Official ROM, Custom ROM, firmware, custom kernel, custom recovery, port ROM, module Magisk/KernelSU, APK, tema, tips & trik.",
  url: SITE_URL,
  author: "Miatoll Family Team",
  locale: "id_ID",
  version: "1.0.0",
  github: "https://github.com/royalepolice001-beep/miatollweb",
  year: 2026
};

/* Navbar navigation (top bar) */
const nav = [
  { id: "index", href: "/", label: "Beranda", icon: "home" },
  { id: "devices", href: "/devices", label: "Perangkat", icon: "smartphone" },
  {
    section: "Download Center",
    items: [
      { id: "rom", href: "/rom", label: "Official ROM", icon: "download" },
      { id: "custom-rom", href: "/custom-rom", label: "Custom ROM", icon: "layers" },
      { id: "firmware", href: "/firmware", label: "Firmware", icon: "database" },
      { id: "kernel", href: "/kernel", label: "Custom Kernel", icon: "cpu" },
      { id: "recovery", href: "/recovery", label: "Custom Recovery", icon: "shield" },
      { id: "port-rom", href: "/port-rom", label: "Port ROM", icon: "shuffle" }
    ]
  },
  {
    section: "Modding",
    items: [
      { id: "modules", href: "/modules", label: "Magisk / KSU", icon: "package" },
      { id: "apk", href: "/apk", label: "APK Pilihan", icon: "box" },
      { id: "themes", href: "/themes", label: "Tema", icon: "palette" }
    ]
  },
  { id: "tips", href: "/tips", label: "Tips & Trik", icon: "bulb" }
];

/* Halaman: setiap halaman = id, path, judul SEO, deskripsi, hero */
const pages = [
  {
    id: "index",
    path: "/",
    title: "Miatoll Family — Download Center ROM & Modding Xiaomi Miatoll",
    description:
      "Download Center resmi komunitas Miatoll: Official ROM MIUI, Custom ROM Android 10–17, firmware, kernel, recovery, port ROM, module Magisk/KernelSU, APK, tema, dan tips lengkap untuk Redmi Note 9 series & POCO M2 Pro.",
    hero: null // home punya hero custom
  },
  {
    id: "devices",
    path: "/devices",
    title: "Perangkat Miatoll — Daftar Device, Codename & Spesifikasi",
    description:
      "Kenali seluruh keluarga Miatoll: curtana, gram, excalibur, mojito, dan joyeuse — Redmi Note 9, Note 9 Pro, Note 9 Pro Max, Note 9S, dan POCO M2 Pro lengkap dengan codename, chipset, dan dukungan Android.",
    hero: {
      badge: "Database Device",
      title: "Keluarga Miatoll",
      subtitle:
        "Lima perangkat, satu keluarga. Kenali codename & spesifikasinya sebelum mulai flashing — codename yang salah adalah awal dari bootloop."
    }
  },
  {
    id: "rom",
    path: "/rom",
    title: "Official ROM Xiaomi Miatoll — Unduh MIUI Semua Region",
    description:
      "Kumpulan Official ROM / ROM Stok MIUI untuk keluarga Miatoll: Global, India, EEA, Indonesia, Russia, Turkey, Taiwan & Jepang. Android 10 hingga 13, Fastboot & Recovery format.",
    hero: {
      badge: "Stock · Safe",
      title: "Official ROM Xiaomi",
      subtitle:
        "ROM resmi MIUI untuk semua tipe, versi, dan region keluarga Miatoll. Format Fastboot untuk Mi Flash, format Recovery (.zip) untuk TWRP/OrangeFox."
    }
  },
  {
    id: "custom-rom",
    path: "/custom-rom",
    title: "Custom ROM Miatoll — Android 10 s/d 17 (AOSP & MIUI-based)",
    description:
      "Daftar Custom ROM untuk miatoll dari Android 10 hingga 17: LineageOS, crDroid, EvolutionX, PixelExperience, ArrowOS, ParanoidAndroid, DerpFest, dan masih banyak lagi.",
    hero: {
      badge: "Community Builds",
      title: "Custom ROM",
      subtitle:
        "Semua base Android dari 10 sampai 17 — AOSP clean, feature-packed, sampai build gaming. Pilih ROM sesuai kebutuhan, bukan ikut-ikutan."
    }
  },
  {
    id: "firmware",
    path: "/firmware",
    title: "Firmware Xiaomi Miatoll — Paket Firmware Semua Region",
    description:
      "Paket firmware Xiaomi untuk perangkat Miatoll semua region (India, Global, EEA, Indonesia, Russia, Turkey, Taiwan). Wajib dicocokkan region sebelum flashing.",
    hero: {
      badge: "Repair · Restore",
      title: "Firmware Xiaomi",
      subtitle:
        "Paket firmware lengkap untuk perbaikan, downgrade, atau restore total. Kesalahan firmware = kesalahan region paling sering jadi penyebab bootloop."
    }
  },
  {
    id: "kernel",
    path: "/kernel",
    title: "Custom Kernel Miatoll — Performa, Battery & KernelSU-ready",
    description:
      "Custom kernel untuk Miatoll: performa, battery saver, gaming, hingga build yang sudah KernelSU/APatch-ready. Termasuk guide flashing kernel.",
    hero: {
      badge: "Under-the-hood",
      title: "Custom Kernel",
      subtitle:
        "Jantung performa device kamu. Kernel menentukan smoothness, battery life, dan dukungan root modern seperti KernelSU & APatch."
    }
  },
  {
    id: "recovery",
    path: "/recovery",
    title: "Custom Recovery Miatoll — TWRP, OrangeFox, PitchBlack, SHRP",
    description:
      "Custom recovery untuk Miatoll: TWRP, OrangeFox, PitchBlack Recovery, SHRP, dan Lineage Recovery — plus panduan instalasi dan antisipasi TWRP tidak bisa decrypt.",
    hero: {
      badge: "Gateway Modding",
      title: "Custom Recovery",
      subtitle:
        "Pintu masuk dunia modding. Backup, flash ZIP, wipe aman — semua dari sini. Pilih recovery yang aktif di-maintain untuk miatoll."
    }
  },
  {
    id: "port-rom",
    path: "/port-rom",
    title: "Port ROM Miatoll — MIUI, HyperOS-style & ROM Port Terbaru",
    description:
      "Port ROM untuk Miatoll: xiaomi.eu, port MIUI/HyperOS-style, port dari device lain, hingga konsep iOS-style. Lengkap dengan catatan bug umum.",
    hero: {
      badge: "Experimental",
      title: "Port ROM",
      subtitle:
        "ROM hasil port dari device lain — fitur lebih kaya, tapi butuh kesabaran. Selalu baca catatan bug sebelum flash."
    }
  },
  {
    id: "modules",
    path: "/modules",
    title: "Module Magisk & KernelSU Miatoll — Zygisk, LSPosed, Root",
    description:
      "Module root untuk Miatoll: Magisk, KernelSU, APatch, Zygisk Next, LSPosed, Play Integrity Fix, Shamiko, BusyBox, dan module utilitas lainnya.",
    hero: {
      badge: "Root Ecosystem",
      title: "Module Magisk / KSU",
      subtitle:
        "Ekosistem root modern: Magisk untuk semua, KernelSU & APatch untuk yang mau kontrol lebih dalam sampai level kernel."
    }
  },
  {
    id: "apk",
    path: "/apk",
    title: "APK Pilihan Miatoll — GCam, Tools, Utility & Debloat",
    description:
      "Kumpulan APK pilihan untuk Miatoll: GCam, Shizuku, F-Droid, Aurora Store, Termux, ZArchiver, App Manager, dan tools modding lainnya.",
    hero: {
      badge: "Essential Apps",
      title: "APK Pilihan",
      subtitle:
        "Tools wajib buat pengguna MIUI & device yang sudah dimodding — dari GCam sampai debloat manager."
    }
  },
  {
    id: "themes",
    path: "/themes",
    title: "Tema Miatoll — iOS Style, HyperOS Style, AOD & Icon Pack",
    description:
      "Tema MIUI untuk Miatoll: iOS style, HyperOS style, konsep clean, AOD pack, dan icon pack — plus cara import tema pihak ketiga dengan aman.",
    hero: {
      badge: "Make it Yours",
      title: "Tema",
      subtitle:
        "Dari iOS-style clean sampai setup gaming neon — ganti tampilan tanpa flash apa pun. Aman, cepat, bisa dibalikin kapan saja."
    }
  },
  {
    id: "tips",
    path: "/tips",
    title: "Tips & Trik Miatoll — Unlock BL, Flashing, Root & Anti-bootloop",
    description:
      "Panduan lengkap Miatoll: unlock bootloader, flashing recovery/ROM/kernel, root Magisk & KernelSU, fix Play Integrity, GCam, debloat, dan anti-bootloop.",
    hero: {
      badge: "Knowledge Base",
      title: "Tips & Trik",
      subtitle:
        "Baca dulu, flashing kemudian. Kumpulan panduan yang menyelamatkan kamu dari bootloop — dari level dasar sampai trik lanjutan."
    }
  }
];

module.exports = { site, nav, pages };
