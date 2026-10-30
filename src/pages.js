const icons = require("./icons");
const { site, pages } = require("./config");
const devices = require("./data/devices");
const dl = require("./data/downloads");
const { tips, faq } = require("./data/tips");
const { esc } = require("./layout");

/* ================= Hero umum ================= */
function hero(h, extraClass = "") {
  return `
      <section class="hero glass ${extraClass}" data-reveal>
        <span class="pill pill-hero">${icons.sparkles}<span>${esc(h.badge)}</span></span>
        <h1 class="hero-title gradient-text">${esc(h.title)}</h1>
        <p class="hero-sub">${esc(h.subtitle)}</p>
        <div class="hero-actions">
          <a class="btn btn-gradient" href="/rom">Jelajahi Download ${icons.arrowRight}</a>
          <a class="btn btn-glass" href="/tips">Baca Tips dulu</a>
        </div>
      </section>`;
}

/* ================= Kategori cards ================= */
const categories = [
  { href: "/rom", icon: "download", title: "Official ROM", desc: "MIUI stok semua region, versi & format.", tone: "indigo" },
  { href: "/custom-rom", icon: "layers", title: "Custom ROM", desc: "Android 10–17: AOSP, feature ROM, gaming.", tone: "violet" },
  { href: "/firmware", icon: "database", title: "Firmware", desc: "Paket firmware restore & perbaikan.", tone: "cyan" },
  { href: "/kernel", icon: "cpu", title: "Custom Kernel", desc: "Performa, battery, gaming, KSU-ready.", tone: "orange" },
  { href: "/recovery", icon: "shield", title: "Custom Recovery", desc: "TWRP, OrangeFox, PitchBlack, SHRP.", tone: "green" },
  { href: "/port-rom", icon: "shuffle", title: "Port ROM", desc: "xiaomi.eu, HyperOS-style, port eksperimental.", tone: "pink" },
  { href: "/modules", icon: "package", title: "Magisk / KSU", desc: "Root, Zygisk, LSPosed, Play Integrity.", tone: "blue" },
  { href: "/apk", icon: "box", title: "APK Pilihan", desc: "GCam, Shizuku, Termux, debloat tools.", tone: "teal" },
  { href: "/themes", icon: "palette", title: "Tema", desc: "iOS style, HyperOS style, AOD & icon.", tone: "red" },
  { href: "/tips", icon: "bulb", title: "Tips & Trik", desc: "Unlock BL, flashing, anti-bootloop.", tone: "amber" }
];

function catCards() {
  return categories
    .map(
      (c, i) => `
        <a class="cat-card glass" href="${c.href}" data-reveal style="--reveal-delay:${i * 40}ms">
          <span class="cat-icon tone-${c.tone}">${icons[c.icon]}</span>
          <span class="cat-body">
            <strong>${esc(c.title)}</strong>
            <small>${esc(c.desc)}</small>
          </span>
          <span class="cat-arrow" aria-hidden="true">${icons.arrowRight}</span>
          <span class="shine" aria-hidden="true"></span>
        </a>`
    )
    .join("");
}

/* ================= Device mini cards ================= */
function deviceMiniCards() {
  return devices
    .map(
      (d, i) => `
        <a class="device-mini glass" href="/devices" data-reveal style="--reveal-delay:${i * 60}ms">
          <span class="device-mini-code tone-${d.color}">${esc(d.codename)}</span>
          <strong>${esc(d.name)}</strong>
          <small>${esc(d.chip)} · ${esc(d.android.replace("Android ", "A"))}</small>
        </a>`
    )
    .join("");
}

/* ================= Featured download cards ================= */
function featuredItems(limit = 6) {
  const all = [
    ...dl.officialRom,
    ...dl.customRom,
    ...dl.kernel,
    ...dl.recovery,
    ...dl.portRom,
    ...dl.modules,
    ...dl.apk
  ].filter((x) => x.featured);

  const pick = all.slice(0, limit);
  return pick
    .map(
      (it, i) => `
        <article class="dl-card glass" data-reveal style="--reveal-delay:${i * 50}ms">
          ${it.badge ? `<span class="badge badge-gradient">${esc(it.badge)}</span>` : ""}
          <h3>${esc(it.title)}</h3>
          <p class="dl-version"><code>${esc(it.version)}</code></p>
          <div class="dl-meta">
            <span class="pill">Android ${esc(it.android)}</span>
            ${it.region && it.region !== "—" ? `<span class="pill">${esc(it.region)}</span>` : ""}
            ${it.size && it.size !== "—" ? `<span class="pill">${esc(it.size)}</span>` : ""}
          </div>
        </article>`
    )
    .join("");
}

/* ================= HOME ================= */
function homePage() {
  const p = pages.find((x) => x.id === "index");
  const stats = [
    { n: 5, suffix: "", label: "Device Miatoll", icon: "smartphone" },
    { n: 10, suffix: "", label: "Kategori Download", icon: "download" },
    { n: 80, suffix: "+", label: "Item Terkurasi", icon: "package" },
    { n: 8, suffix: "", label: "Dukungan Android (10–17)", icon: "chip" }
  ];

  const content = `
      <section class="home-hero">
        <div class="home-hero-copy" data-reveal>
          <span class="pill pill-hero">${icons.sparkles}<span>Download Center Komunitas</span></span>
          <h1 class="hero-title gradient-text animated-gradient">Miatoll Family</h1>
          <p class="hero-sub home-sub">
            Satu pusat download untuk seluruh keluarga <strong>Redmi Note 9 series &amp; POCO M2 Pro</strong> —
            official ROM, custom ROM Android 10–17, firmware, kernel, recovery, module, APK, tema,
            plus tips yang menyelamatkan kamu dari bootloop.
          </p>
          <div class="hero-actions">
            <a class="btn btn-gradient btn-lg" href="/rom">Mulai Download ${icons.arrowRight}</a>
            <a class="btn btn-glass btn-lg" href="/custom-rom">Lihat Custom ROM</a>
          </div>
          <div class="device-strip" aria-label="Daftar codename device">
            ${deviceMiniCards()}
          </div>
        </div>

        <div class="home-hero-panel glass" data-reveal style="--reveal-delay:120ms" aria-hidden="true">
          <div class="panel-head">
            <span class="panel-dots"><i></i><i></i><i></i></span>
            <span class="panel-title">miatoll-fetch · stable</span>
          </div>
          <div class="panel-rows">
            <div class="panel-row" style="--row-i:0">
              <span class="tone-indigo pr-ico">${icons.download}</span>
              <span class="pr-main"><strong>MIUI 14 · curtana</strong><small>V14.0.6.0.TJPINXM · Recovery</small></span>
              <span class="pr-tag">Ready</span>
            </div>
            <div class="panel-row" style="--row-i:1">
              <span class="tone-violet pr-ico">${icons.layers}</span>
              <span class="pr-main"><strong>LineageOS 21 · gram</strong><small>Android 14 · Nightly</small></span>
              <span class="pr-tag">Ready</span>
            </div>
            <div class="panel-row" style="--row-i:2">
              <span class="tone-cyan pr-ico">${icons.shield}</span>
              <span class="pr-main"><strong>OrangeFox R12.1</strong><small>curtana / gram / mojito</small></span>
              <span class="pr-tag">Ready</span>
            </div>
            <div class="panel-row" style="--row-i:3">
              <span class="tone-orange pr-ico">${icons.cpu}</span>
              <span class="pr-main"><strong>KernelSU-ready kernel</strong><small>Android 13 · Stable</small></span>
              <span class="pr-tag">KSU</span>
            </div>
            <div class="panel-row" style="--row-i:4">
              <span class="tone-pink pr-ico">${icons.package}</span>
              <span class="pr-main"><strong>Play Integrity Fix</strong><small>Zygisk module · updated</small></span>
              <span class="pr-tag">New</span>
            </div>
          </div>
          <div class="panel-foot">
            <span class="status-dot"></span> index updated · siap flash
          </div>
        </div>
      </section>

      <section class="stats" aria-label="Statistik">
        ${stats
          .map(
            (s, i) => `
          <div class="stat glass" data-reveal style="--reveal-delay:${i * 70}ms">
            <span class="stat-ico">${icons[s.icon]}</span>
            <strong class="stat-num" data-count="${s.n}">0</strong><span class="stat-suffix">${s.suffix}</span>
            <small>${esc(s.label)}</small>
          </div>`
          )
          .join("")}
      </section>

      <section class="section">
        <header class="section-head" data-reveal>
          <h2>Semua yang kamu butuhkan</h2>
          <p>Dari ROM resmi sampai module root — 10 kategori terkurasi, filter-friendly.</p>
        </header>
        <div class="cat-grid">
          ${catCards()}
        </div>
      </section>

      <section class="section">
        <header class="section-head" data-reveal>
          <h2>Highlight minggu ini</h2>
          <p>Update paling ramai dibuka di download center.</p>
        </header>
        <div class="dl-grid">
          ${featuredItems(6)}
        </div>
      </section>

      <section class="section">
        <header class="section-head" data-reveal>
          <h2>Kenapa Miatoll Family?</h2>
          <p>Dibangun khusus untuk 5 device ini — bukan download center generik.</p>
        </header>
        <div class="feature-grid">
          ${[
            { icon: "smartphone", t: "Codename-aware", d: "Setiap item dikelompokkan per codename — curtana, gram, excalibur, mojito, joyeuse. Minim risiko salah flash." },
            { icon: "globe", t: "Semua region", d: "Global, India, EEA, Indonesia, Russia, Turkey, Taiwan — lengkap dengan kode region agar tidak keliru." },
            { icon: "zap", t: "Android 10 → 17", d: "Dari MIUI 12 launch build sampai custom ROM Android 17 (coming soon) — semua terindeks." },
            { icon: "shield", t: "Anti-bootloop mindset", d: "Tips, warning, dan urutan flashing yang benar disertakan di setiap kategori." }
          ]
            .map(
              (f, i) => `
            <article class="feature glass" data-reveal style="--reveal-delay:${i * 70}ms">
              <span class="cat-icon tone-indigo">${icons[f.icon]}</span>
              <h3>${esc(f.t)}</h3>
              <p>${esc(f.d)}</p>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <header class="section-head" data-reveal>
          <h2>Pertanyaan umum</h2>
          <p>Baru pertama kali modding? Mulai dari sini.</p>
        </header>
        <div class="faq-list glass" data-reveal>
          ${faq
            .map(
              (f, i) => `
            <details class="faq-item"${i === 0 ? " open" : ""}>
              <summary>${esc(f.q)}<span class="faq-ico" aria-hidden="true">${icons.arrowRight}</span></summary>
              <div class="faq-body"><p>${f.a}</p></div>
            </details>`
            )
            .join("")}
        </div>
      </section>

      <section class="cta glass" data-reveal>
        <div class="cta-copy">
          <h2>Siap flashing?</h2>
          <p>Backup dulu, pilih ROM sesuai codename — sisanya kami bantu di Tips &amp; Trik.</p>
        </div>
        <div class="hero-actions">
          <a class="btn btn-gradient btn-lg" href="/tips">Buka Tips &amp; Trik ${icons.arrowRight}</a>
          <a class="btn btn-glass btn-lg" href="/devices">Kenali Device saya</a>
        </div>
      </section>`;

  return { page: p, html: content };
}

/* ================= DOWNLOAD PAGE ================= */
function chipsFor(cfg) {
  return cfg.groups
    .map((g) => {
      const chips = [
        `<button class="chip is-active" data-filter="${g.key}" data-value="" type="button">Semua ${esc(g.label)}</button>`,
        ...g.values.map(
          (v) => `<button class="chip" data-filter="${g.key}" data-value="${esc(v)}" type="button">${esc(v)}</button>`
        )
      ].join("");
      return `<div class="chip-group" role="group" aria-label="Filter ${esc(g.label)}"><span class="chip-group-label">${esc(
        g.label
      )}</span>${chips}</div>`;
    })
    .join("");
}

function itemCard(it, i) {
  return `
        <article class="dl-card glass" data-reveal style="--reveal-delay:${Math.min(i, 8) * 45}ms"
          data-android="${esc(it.android)}"
          data-region="${esc(it.region || "")}"
          data-type="${esc(it.type || "")}"
          data-search="${esc(
            [it.title, it.version, it.android, it.region, it.type, ...(it.tags || [])].join(" ").toLowerCase()
          )}">
          ${it.badge ? `<span class="badge badge-gradient">${esc(it.badge)}</span>` : ""}
          <h3>${esc(it.title)}</h3>
          <p class="dl-version"><code>${esc(it.version)}</code></p>
          <div class="dl-meta">
            <span class="pill pill-android">Android ${esc(it.android)}</span>
            ${it.region && it.region !== "—" ? `<span class="pill">${esc(it.region)}</span>` : ""}
            ${it.type && it.type !== "—" ? `<span class="pill">${esc(it.type)}</span>` : ""}
            ${it.size && it.size !== "—" ? `<span class="pill">${esc(it.size)}</span>` : ""}
            ${it.date ? `<span class="pill pill-date">${esc(it.date)}</span>` : ""}
          </div>
          <div class="dl-foot">
            <div class="dl-tags">${(it.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
            <a class="btn btn-sm btn-gradient" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">
              Unduh ${icons.external}
            </a>
          </div>
        </article>`;
}

function downloadPage(id) {
  const cfg = dl.groups[id];
  const p = pages.find((x) => x.id === id);
  const content = `
${hero(p.hero)}

      <section class="toolbar glass" data-reveal data-filter-root>
        <div class="toolbar-search">
          <span class="toolbar-search-ico" aria-hidden="true">${icons.search}</span>
          <input type="search" class="toolbar-input" data-filter-search placeholder="${esc(
            cfg.searchPlaceholder
          )}" aria-label="Cari">
        </div>
        <div class="toolbar-filters">
          ${chipsFor(cfg)}
        </div>
        <div class="toolbar-status">
          <span><strong data-filter-count>${cfg.items.length}</strong> item ditampilkan</span>
          <button class="chip chip-reset" data-filter-reset type="button">Reset filter</button>
        </div>
      </section>

      <section class="section section-tight">
        <div class="dl-grid" data-filter-list>
          ${cfg.items.map(itemCard).join("")}
        </div>
        <p class="empty-state glass" data-filter-empty hidden>Tidak ada item yang cocok dengan filter. Coba kata kunci lain atau reset filter.</p>
      </section>

      <aside class="note glass" data-reveal>
        <span class="note-ico" aria-hidden="true">${icons.alert}</span>
        <div>
          <strong>Catatan flashing</strong>
          <p>${esc(cfg.note)}</p>
        </div>
      </aside>`;

  return { page: p, html: content };
}

/* ================= DEVICES PAGE ================= */
function devicesPage() {
  const p = pages.find((x) => x.id === "devices");
  const content = `
${hero(p.hero)}

      <section class="section section-tight">
        <div class="device-grid">
          ${devices
            .map(
              (d, i) => `
            <article class="device-card glass" data-reveal style="--reveal-delay:${i * 70}ms">
              <header class="device-card-head">
                <span class="device-code tone-${d.color}">${esc(d.codename)}</span>
                ${d.popular ? `<span class="badge badge-gradient">Popular</span>` : ""}
              </header>
              <h2>${esc(d.name)}</h2>
              <p class="device-chip"><span class="tone-${d.color}">${icons[d.chipIcon]}</span> ${esc(d.chip)}</p>
              <ul class="device-specs">
                <li><span>Layar</span><strong>${esc(d.display)}</strong></li>
                <li><span>Kamera</span><strong>${esc(d.camera)}</strong></li>
                <li><span>Baterai</span><strong>${esc(d.battery)}</strong></li>
                <li><span>Android</span><strong>${esc(d.android)}</strong></li>
                <li><span>MIUI</span><strong>${esc(d.miui)}</strong></li>
                <li><span>Bootloader</span><strong>Unlockable</strong></li>
              </ul>
              <div class="device-markets">
                ${d.market.map((m) => `<span class="pill">${esc(m)}</span>`).join("")}
              </div>
              ${d.note ? `<p class="device-warning">${icons.alert}<span>${esc(d.note)}</span></p>` : ""}
              <div class="device-actions">
                <a class="btn btn-sm btn-gradient" href="/rom">Official ROM</a>
                <a class="btn btn-sm btn-glass" href="/custom-rom">Custom ROM</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <aside class="note glass" data-reveal>
        <span class="note-ico" aria-hidden="true">${icons.alert}</span>
        <div>
          <strong>Kenapa codename penting?</strong>
          <p>Device dengan nama pasar mirip bisa punya codename &amp; varian chip berbeda. Flash file dengan codename yang salah hampir pasti berujung bootloop. Cek codename: <code>Pengaturan → Tentang telepon</code>, atau via ADB: <code>adb shell getprop ro.product.device</code>.</p>
        </div>
      </aside>`;

  return { page: p, html: content };
}

/* ================= TIPS PAGE ================= */
function tipsPage() {
  const p = pages.find((x) => x.id === "tips");
  const content = `
${hero(p.hero)}

      <section class="section section-tight">
        <div class="tips-grid">
          ${tips
            .map(
              (t, i) => `
            <article class="tip glass" id="${esc(t.id)}" data-reveal style="--reveal-delay:${Math.min(i, 8) * 45}ms">
              <header class="tip-head">
                <span class="cat-icon tone-indigo">${icons[t.icon] || icons.bulb}</span>
                <div class="tip-meta">
                  <span class="pill">${esc(t.level)}</span>
                  <span class="pill">${t.minutes} menit baca</span>
                </div>
              </header>
              <h2>${esc(t.title)}</h2>
              <p class="tip-excerpt">${esc(t.excerpt)}</p>
              <ol class="tip-steps">
                ${t.content.map((c) => `<li>${c}</li>`).join("")}
              </ol>
              ${
                t.warning
                  ? `<div class="tip-warning">${icons.alert}<p>${esc(t.warning)}</p></div>`
                  : ""
              }
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <header class="section-head" data-reveal>
          <h2>FAQ</h2>
          <p>Jawaban singkat untuk pertanyaan yang paling sering masuk.</p>
        </header>
        <div class="faq-list glass" data-reveal>
          ${faq
            .map(
              (f) => `
            <details class="faq-item">
              <summary>${esc(f.q)}<span class="faq-ico" aria-hidden="true">${icons.arrowRight}</span></summary>
              <div class="faq-body"><p>${f.a}</p></div>
            </details>`
            )
            .join("")}
        </div>
      </section>`;

  return { page: p, html: content };
}

/* ================= 404 ================= */
function notFoundPage() {
  const p = {
    id: "404",
    path: "/404",
    title: "404 — Halaman tidak ditemukan | Miatoll Family",
    description: "Halaman yang kamu cari tidak ada atau sudah dipindah.",
    hero: null
  };
  const content = `
      <section class="hero glass nf" data-reveal>
        <span class="pill pill-hero">${icons.alert}<span>404</span></span>
        <h1 class="hero-title gradient-text">Page not found</h1>
        <p class="hero-sub">Halaman ini tidak ada — mungkin codename-nya salah 😄. Kembali ke beranda atau lanjut ke download center.</p>
        <div class="hero-actions">
          <a class="btn btn-gradient" href="/">Ke Beranda ${icons.arrowRight}</a>
          <a class="btn btn-glass" href="/rom">Download Center</a>
        </div>
      </section>`;
  return { page: p, html: content };
}

module.exports = { homePage, downloadPage, devicesPage, tipsPage, notFoundPage };
