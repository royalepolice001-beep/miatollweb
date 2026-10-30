/* Konten Tips & Trik — Miatoll Family */

const tips = [
  {
    id: "unlock-bl",
    icon: "lock",
    title: "Unlock Bootloader (BL) dengan Mi Unlock",
    level: "Dasar",
    minutes: 10,
    excerpt:
      "Gerbang pertama modding. Tanpa BL unlock, kamu tidak bisa flash recovery, ROM, atau kernel apa pun.",
    content: [
      "Masuk <strong>Pengaturan → Tentang telepon</strong>, ketuk versi MIUI 7× untuk membuka opsi developer, lalu aktifkan <strong>USB Debugging</strong> & <strong>OEM Unlocking</strong> (kalau ada) di Opsi developer.",
      "Login akun Mi di device, lalu daftarkan perangkat di <strong>Pengaturan → Akun Mi → Status akun</strong>. Tunggu periode waiting (bisa 3 hari–1 minggu+, kebijakan berubah tiap tahun).",
      "Download <strong>Mi Unlock Tool</strong> di PC (site resmi Xiaomi: miui.com/unlock). Login akun Mi yang sama, masuk mode Fastboot (Power + Volume Down), colok USB, lalu Unlock.",
      "Setelah unlock, device akan <strong>wipe total</strong> (factory reset). Backup dulu semua data penting! Boot pertama setelah unlock terasa lebih lama — itu normal."
    ],
    warning:
      "Unlock = hilangnya proteksi sebagian data & garansi bisa terpengarung di region tertentu. Pastikan kamu siap dengan konsekuensinya."
  },
  {
    id: "install-recovery",
    icon: "shield",
    title: "Install Custom Recovery (TWRP / OrangeFox)",
    level: "Dasar",
    minutes: 8,
    excerpt:
      "Recovery custom adalah pintu flashing semua ZIP: ROM, kernel, module, hingga backup partisi.",
    content: [
      "Download image recovery (.img) yang benar untuk codename kamu — <strong>curtana ≠ gram ≠ mojito ≠ joyeuse</strong>.",
      "Masuk Fastboot (Power + Volume Down), pastikan terbaca di PC dengan perintah <code>fastboot devices</code>.",
      "Flash: <code>fastboot flash recovery recovery.img</code> (beberapa build juga butuh <code>fastboot flash boot boot.img</code> untuk Android 12+).",
      "Masuk recovery <strong>segera</strong> setelah flash: tahan <strong>Power + Volume Up</strong> sampai logo recovery muncul. Kalau boot ke system, recovery akan tertimpa — flash ulang."
    ],
    warning:
      "Di MIUI Android 12+, TWRP lama sering tidak bisa decrypt /data. Kalau semua folder terlihat kosong/256-blok, itu tanda decrypt gagal."
  },
  {
    id: "flash-rom",
    icon: "download",
    title: "Flash Custom ROM dari Nol (Clean Flash)",
    level: "Menengah",
    minutes: 20,
    excerpt:
      "Urutan aman clean flash: backup → wipe → flash ROM → flash GApps → flash ulang recovery → boot.",
    content: [
      "Backup penting lewat recovery (minimal data internal yang kritis). Siapkan juga ROM + GApps (kalau ROM tanpa GApps) di OTG/storage.",
      "Di recovery: <strong>Wipe → Advanced Wipe</strong> → centang <strong>Dalvik/ART, Cache, System, Data</strong> (jangan centang Internal Storage kecuali mau hapus semua).",
      "Flash <strong>ROM zip</strong> → flash <strong>GApps</strong> (urutan ini penting, GApps setelah ROM) → flash <strong>Magisk/KSU</strong> kalau mau root langsung.",
      "<strong>Flash ulang recovery</strong> (TWRP/OrangeFox) setelah ROM — Android 12+ menimpa recovery ke stock lineages di partisi boot.",
      "Reboot system. Boot pertama bisa 5–15 menit. Kalau mentok >20 menit: masuk recovery, wipe cache/dalvik, coba lagi; kalau tetap, flash ulang."
    ],
    warning:
      "Jangan pernah wipe <strong>Media / Internal Storage</strong> kalau file installer kamu masih ada di situ."
  },
  {
    id: "firmware-match",
    icon: "database",
    title: "Cocokkan Firmware & Region Sebelum Flash",
    level: "Dasar",
    minutes: 6,
    excerpt:
      "Penyebab bootloop paling sering bukan ROM jelek — tapi firmware dan region yang tidak cocok.",
    content: [
      "Cek region device: <strong>Pengaturan → Tentang telepon</strong> (mis. MIX, IN, EEA, ID, RU, TR, TW). Cocokkan dengan kode firmware (contoh: <code>TJPINXM</code> = INXM region India).",
      "Varian <strong>Snapdragon</strong> (curtana, gram, excalibur, mojito) dan <strong>joyeuse (MediaTek/Helio G85)</strong> memakai sistem firmware yang berbeda total.",
      "Kalau mau pindah region (mis. Global → Indonesia), gunakan ROM/firmware tujuan — bukan hanya ganti bahasa.",
      "Untuk perbaikan mendalam (bug modem, sinyal, sensor), flash firmware lengkap region kamu via Fastboot dulu, baru lanjut ROM lain."
    ],
    warning: "Firmware MediaTek (scatter) TIDAK PERNAH diflash pakai Mi Flash Tool Snapdragon."
  },
  {
    id: "root-magisk",
    icon: "package",
    title: "Root dengan Magisk (Patch Boot Image)",
    level: "Menengah",
    minutes: 15,
    excerpt:
      "Cara root modern yang aman: patch boot.img dari ROM kamu sendiri, bukan flash binary mentah.",
    content: [
      "Ekstrak <code>boot.img</code> dari paket ROM yang sedang berjalan (bisa dari payload.bin paket Fastboot, atau extract dari file ROM).",
      "Salin boot.img ke device, buka Magisk → <strong>Install → Select and Patch a File</strong> → pilih boot.img.",
      "Hasilnya <code>magisk_patched.img</code> ada di folder Download. Reboot ke Fastboot, lalu: <code>fastboot flash boot magisk_patched.img</code>.",
      "Reboot. Buka Magisk → cek status terpasang. Selesai — Magisk tersembunyi dengan baik dibanding metode lama."
    ],
    warning:
      "Kalau ROM-nya A/B dan kamu pakai kernel custom, patch boot.img yang berasal dari build yang sama persis dengan yang terpasang."
  },
  {
    id: "root-kernel",
    icon: "cpu",
    title: "Root dengan KernelSU / APatch",
    level: "Lanjutan",
    minutes: 15,
    excerpt:
      "Root level kernel: kontrol lebih dalam, cocok untuk kamu yang suka tweak dan hide root.",
    content: [
      "Pastikan kernel kamu mendukung KernelSU (GKI) atau build KSU-nya sendiri untuk miatoll — cek di halaman Custom Kernel kami.",
      "Download KernelSU Manager dari repo resminya (GitHub tiann/KernelSU). Untuk APatch, pakai manager dari bmax121/APatch.",
      "Flash kernel KSU-compatible via recovery, atau patch boot image sesuai instruksi build. Install manager-nya.",
      "Di manager: grant root ke aplikasi yang dibutuhkan, atur <strong>Superuser</strong> & <strong>Module</strong>. Module KSU umumnya kompatibel dengan ekosistem Magisk."
    ],
    warning: "Jangan aktifkan Magisk + KernelSU bersamaan di partisi boot yang sama — pilih satu sistem root."
  },
  {
    id: "play-integrity",
    icon: "shield",
    title: "Fix Play Integrity / Banking App",
    level: "Lanjutan",
    minutes: 10,
    excerpt:
      "Setelah root, app bank sering menolak. Rangkaian standar: PIF + hide yang rapi.",
    content: [
      "Install <strong>Play Integrity Fix</strong> (chiteroman) via Magisk/KSU. Reboot, lalu cek skor Play Integrity dengan app cek (Meets device integrity wajib lolos).",
      "Aktifkan <strong>Zygisk</strong> (Magisk) atau <strong>Zygisk Next</strong> (KSU). Install <strong>Shamiko</strong>, aktifkan DenyList, tapi jangan centang app satu-satu dulu — biarkan Shamiko bekerja.",
      "Matikan fitur yang mengkhianati root: <strong>MagiskHide/Enforce DenyList</strong> sesuai setup, Samba/debug adb wireless, Xposed terbuka, dan developer option yang tidak perlu.",
      "Kalau masih gagal: periksa module konflik (module 'cheat', theme liar, atau module lama yang menyuntik framework). Debug dengan menonaktifkan module satu per satu."
    ],
    warning: "Tidak ada jaminan 100% — Google meng-update deteksi berkala. Setelah update Play Store besar, cek ulang."
  },
  {
    id: "gcam",
    icon: "camera",
    title: "Install GCam tanpa Crash",
    level: "Dasar",
    minutes: 7,
    excerpt:
      "Kamera bawaan oke, tapi GCam membawa Night Sight & processing yang jauh lebih matang.",
    content: [
      "Download dari hub resmi port GCam (celsoazevedo.com). Untuk miatoll (Snapdragon 720G), varian <strong>Nikita / SGcam / BSG</strong> umumnya stabil.",
      "Kalau APK minta <code>lib</code> tambahan, ekstrak sesuai petunjuk port (biasanya ada paket config + lib untuk device serupa).",
      "Import config XML opsional (folder <code>GCam/Configs</code>) untuk setting hasil komunitas.",
      "Kalau crash saat buka kamera depan/buka mode tertentu: coba varian lain, nonaktifkan HDR+, atau pakai mode auxiliary-cam yang sesuai."
    ],
    warning: "Jangan campur dua build GCam sekaligus — bersihkan data app dulu sebelum ganti build."
  },
  {
    id: "bootloop",
    icon: "refresh",
    title: "Recovery Plan: Device Bootloop",
    level: "Menengah",
    minutes: 12,
    excerpt:
      "Tenang. Selama recovery masih bisa masuk, hampir semua kasus bisa diselamatkan.",
    content: [
      "Coba <strong>Wipe Cache/Dalvik</strong> dulu — untuk bootloop ringan setelah flash module/theme.",
      "Kalau tetap: masuk recovery, flash ulang <strong>ROM yang known-good</strong> (atau ROM cadangan yang kamu siapkan).",
      "Kalau tidak bisa masuk recovery sama sekali: tunggu baterai habis / paksa reboot ke Fastboot (Power panjang + Volume Down), lalu flash recovery lagi dari PC.",
      "Untuk kasus parah: flash <strong>firmware Fastboot lengkap</strong> region kamu via Mi Flash Tool — ini mengembalikan device ke state stock."
    ],
    warning: "Siapkan selalu 'tas penyelamat': 1 file ROM stable + 1 recovery image di OTG/PC."
  },
  {
    id: "battery",
    icon: "zap",
    title: "Battery Health & Charging 33W",
    level: "Dasar",
    minutes: 6,
    excerpt:
      "Baterai 5000+ mAh harusnya awet — kalau tidak, biasanya software, bukan hardware.",
    content: [
      "Cek app screen-on time (Pengaturan → Baterai). Screen > 8 jam SOT wajar untuk 5020 mAh; jauh di bawah itu = ada yang jalan di belakang.",
      "Untuk modders: hindari kernel 'performa' harian. Naikkan undervolt & governor hemat di kernel custom kalau baterai terasa boros.",
      "Kalau kamu pakai Magisk, cek module yang jalan terus (ad-block berat, Xposed lama). Nonaktifkan dulu untuk uji.",
      "Charging 33W hanya untuk varian Pro/Pro Max/M2 Pro (curtana, excalibur, mojito). gram & joyeuse punya batas watt berbeda — charger tidak cocok = charging lambat."
    ]
  },
  {
    id: "debloat",
    icon: "box",
    title: "Debloat MIUI dengan Aman",
    level: "Menengah",
    minutes: 10,
    excerpt:
      "Buang bloat tanpa merusak fitur inti — uninstall untuk user saja, bukan system.",
    content: [
      "Untuk device non-root: pakai <strong>Shizuku + App Manager / Canta</strong> — aman karena hanya menyembunyikan app untuk user.",
      "Dengan root/Magisk: disable package lewat module atau App Manager. Fokus ke: apps region yang tidak dipakai, ads service, analytics, duplikat (Browser/GetApps/kalau kamu tidak pakai).",
      "Jangan sentuh: System UI, Security core, MIUI Optimization penting, dan paket dengan nama <code>com.android.*</code> kecuali kamu paham fungsinya.",
      "Setelah debloat, cek: SMS, telepon, kamera, MIUI Security (untuk kontrol notifikasi), dan update OTA (OTA sering hilang setelah unlock — itu normal)."
    ]
  },
  {
    id: "backup",
    icon: "book",
    title: "Backup Sebelum Modding (Wajib!)",
    level: "Dasar",
    minutes: 5,
    excerpt:
      "Backup yang benar bukan opsional. Data kamu tidak bisa dibeli lagi.",
    content: [
      "Backup cloud untuk: Galeri, Kontak, Chat (WhatsApp/Telegram export), dokumen kerja.",
      "Backup lokal: salin folder penting ke PC/OTG sebelum unlock/wipe — karena wipe terjadi kapan saja saat flashing.",
      "Manfaatkan <strong>Nandroid backup</strong> di recovery untuk partisi system/data sebelum eksperimen ROM.",
      "Simpan juga: file ROM stable terakhir yang jalan, firmware region kamu, recovery image, dan magisk_patched.img kamu sendiri. Tas penyelamat ini menyelamatkan banyak device."
    ]
  }
];

const faq = [
  {
    q: "Apa itu keluarga Miatoll?",
    a: "Miatoll adalah sebutan komunitas untuk keluarga Xiaomi berbasis Snapdragon 720G: Redmi Note 9 Pro (curtana), Redmi Note 9 Pro Max (excalibur), Redmi Note 9S (gram), dan POCO M2 Pro (mojito) — sering ditemani Redmi Note 9 MediaTek (joyeuse) karena basis MIUI yang mirip."
  },
  {
    q: "Codename device saya tidak ada di daftar, boleh flash?",
    a: "Jangan. Codename menentukan compatibility kernel, recovery, firmware, dan ROM. ROM untuk gram TIDAK boleh diflash ke curtana/mojito/walaupun model serupa. Selalu verifikasi codename via <code>adb shell getprop ro.product.device</code> atau di About Phone."
  },
  {
    q: "Android 17 sudah tersedia untuk Miatoll?",
    a: "Build resmi Xiaomi berhenti jauh sebelum itu — support berlanjut lewat custom ROM komunitas. Halaman Custom ROM kami mencakup Android 10–17: 10–14 sudah matang, 15 mulai banyak, 16–17 masih tahap awal/coming soon."
  },
  {
    q: "Aman tidak flashing ROM di daily driver?",
    a: "Selama kamu mengikuti urutan backup → cocokkan codename/region → clean flash, risiko bootloop rendah dan bisa dipulihkan lewat recovery. Yang membuat berisiko adalah flash asal-asalan tanpa backup."
  }
];

module.exports = { tips, faq };
