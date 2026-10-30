# Miatoll Family 📱✨

**Download Center lengkap untuk keluarga Xiaomi Miatoll** — Redmi Note 9, Note 9 Pro, Note 9 Pro Max, Note 9S & POCO M2 Pro (`curtana` · `gram` · `excalibur` · `mojito` · `joyeuse`).

Tema: **clean glassmorphism ala iOS** · **dark & light mode** · **sidebar gaming** · **full animasi** · **responsive** · **SEO-ready** · deploy **gratis** ke Vercel / Cloudflare Pages lewat GitHub.

---

## ✅ Fitur

| Kategori | Isi |
|---|---|
| 🏠 Beranda | Hero animated, statistik counter, grid 10 kategori, highlight download, FAQ |
| 📱 Perangkat | Database 5 device: codename, chipset, spesifikasi, region |
| ⬇️ Official ROM | MIUI semua versi (10–14) & region (Global, India, EEA, ID, RU, TW…) |
| 🧩 Custom ROM | Android **10–17** — AOSP, experimental, coming soon |
| 💾 Firmware | Paket firmware semua region + arsip |
| ⚡ Custom Kernel | Performance, battery, gaming, KSU-ready |
| 🛡️ Custom Recovery | TWRP, OrangeFox, PitchBlack, SHRP, Lineage Recovery |
| 🔀 Port ROM | xiaomi.eu, HyperOS-style, port eksperimental |
| 📦 Magisk / KSU | Magisk, KernelSU, APatch, Zygisk Next, LSPosed, PIF, Shamiko… |
| 📦 APK | GCam, Shizuku, F-Droid, Aurora, Termux, debloat tools… |
| 🎨 Tema | iOS style, HyperOS style, AOD, icon pack, font |
| 💡 Tips & Trik | Unlock BL, flashing, root, anti-bootloop, Play Integrity, debloat |

Fitur teknis:

- **Glassmorphism** dengan `backdrop-filter` + gradient blobs beranimasi
- **Dark / light mode** otomatis (ikuti sistem) + toggle, tersimpan di `localStorage`
- **Sidebar gaming** dengan indikator glow, hover spotlight mengikuti kursor
- **Animasi**: reveal on scroll, counter statistik, shine sweep, floating panel
- **Filter & search** di tiap halaman download (chip filter + pencarian realtime)
- **SEO**: title/description per halaman, Open Graph, Twitter Card, JSON-LD (`WebSite`, `BreadcrumbList`, `CollectionPage`), `sitemap.xml`, `robots.txt`, HTML semantik, `lang="id"`
- **Responsive**: desktop sidebar tetap, mobile off-canvas + hamburger
- **Aksesibilitas**: ARIA labels, focus ring, `prefers-reduced-motion`

## 🧰 Tech

Vanilla **HTML + CSS + JS** dengan mini static site generator tanpa dependency (`build.js`, murni Node.js). Hasil build = HTML statis di `dist/` → cepat, murah, dan SEO-friendly.

```
├── build.js          # generator (npm run build)
├── serve.js          # preview lokal (npm run dev)
├── src/
│   ├── config.js     # site meta, navigasi, url SEO  ← ubah SITE_URL di sini
│   ├── layout.js     # shell HTML (sidebar, topbar, footer, head)
│   ├── pages.js      # komponen halaman
│   ├── icons.js      # ikon SVG inline
│   ├── assets/       # css, js, favicon
│   └── data/         # downloads.js, devices.js, tips.js  ← edit konten di sini
├── public/           # file statis (headers)
└── dist/             # hasil build (tidak di-commit)
```

## 🚀 Deploy gratis (GitHub → Vercel / Cloudflare Pages)

Repo ini sudah dikonfigurasi untuk keduanya. **Satu langkah wajib**: ganti `SITE_URL` di `src/config.js` dengan domain nanti kamu dapat (untuk SEO/sitemap/OG).

### A. Vercel (paling cepat)

1. Push repo ini ke GitHub (branch `main` atau branch arena — keduanya jalan).
2. Buka [vercel.com/new](https://vercel.com/new) → **Import** repo `miatollweb`.
3. Vercel otomatis membaca `vercel.json` (build `npm run build`, output `dist/`). Tidak perlu setting apa pun → **Deploy**.
4. Dapet domain `*.vercel.app` gratis — update `SITE_URL` di `src/config.js`, commit lagi.

> Alternatif CLI: `npm i -g vercel` lalu `vercel --prod` di root repo.

### B. Cloudflare Pages (juga gratis)

1. Buka [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages → Create → Pages → Connect to Git**.
2. Pilih repo ini, lalu isi:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Deploy → dapat domain `*.pages.dev` gratis.
4. Update `SITE_URL`, commit — deploy ulang otomatis.

### C. Lihat lokal

```bash
npm run dev        # build + buka http://localhost:4173
```

## ✏️ Cara edit konten

Semua konten ada di `src/data/` — tidak perlu sentuh HTML:

- **Tambah / ubah download:** `src/data/downloads.js` — tiap entri: `title, version, android, region, type, size, date, devices, tags, url, badge, featured`.
- **Tambah device:** `src/data/devices.js`.
- **Tambah tips:** `src/data/tips.js`.
- **Nama site / menu / domain:** `src/config.js`.

Setiap kategori download punya `groups` (chip filter) yang bisa kamu tambah nilainya.

## ⚠️ Disclaimer

Website ini adalah proyek komunitas non-komersial. Tidak berafiliasi dengan Xiaomi, POCO, atau Xiaomi Inc. Flashing firmware/ROM/modifikasi berisiko pada perangkatmu — **backup dulu, flashing kemudian**. Selalu unduh dari sumber resmi/dev terpercaya.

## 📄 Lisensi

MIT — bebas dipakai, dimodifikasi, dan dikembangkan untuk komunitas Miatoll.
