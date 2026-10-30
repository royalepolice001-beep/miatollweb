const icons = require("./icons");
const { site, pages } = require("./config");
const devices = require("./data/devices");
const dl = require("./data/downloads");
const { tips, faq } = require("./data/tips");
const { esc } = require("./layout");

/* ========= meta kategori untuk row / search ========= */
const CAT_META = {
  rom: { label: "Official ROM", icon: "download", tone: "tone-blue", path: "/rom" },
  "custom-rom": { label: "Custom ROM", icon: "layers", tone: "tone-indigo", path: "/custom-rom" },
  firmware: { label: "Firmware", icon: "database", tone: "tone-teal", path: "/firmware" },
  kernel: { label: "Custom Kernel", icon: "cpu", tone: "tone-orange", path: "/kernel" },
  recovery: { label: "Recovery", icon: "shield", tone: "tone-green", path: "/recovery" },
  "port-rom": { label: "Port ROM", icon: "shuffle", tone: "tone-purple", path: "/port-rom" },
  modules: { label: "Magisk / KSU", icon: "package", tone: "tone-blue", path: "/modules" },
  apk: { label: "APK", icon: "box", tone: "tone-teal", path: "/apk" },
  themes: { label: "Tema", icon: "palette", tone: "tone-pink", path: "/themes" }
};

function allItems() {
  const out = [];
  for (const key of Object.keys(CAT_META)) {
    const cfg = dl.groups[key];
    if (!cfg) continue;
    cfg.items.forEach((it) => out.push({ ...it, cat: key }));
  }
  return out;
}

/* ========= Page head (hero) ========= */
function hero(h) {
  return `
      <section class="page-head" data-reveal>
        <span class="pill pill-hero">${esc(h.badge)}</span>
        <h1 class="hero-title">${esc(h.title)}</h1>
        <p class="hero-sub">${esc(h.subtitle)}</p>
      </section>`;
}

/* ========= HOME ========= */
function homePage() {
  const p = pages.find((x) => x.id === "index");

  /* index pencarian global (dipakai JS home) */
  const searchIndex = allItems().map((it) => ({
    t: it.title,
    c: CAT_META[it.cat].label,
    p: CAT_META[it.cat].path,
    v: it.version,
    a: it.android
  }));
  const indexScript = `<script>window.MF_INDEX=${JSON.stringify(searchIndex).replace(/</g, "\\u003c")};</script>`;

  /* slide hero: item TERBARU dari setiap menu */
  const slides = Object.keys(CAT_META)
    .map((k) => {
      const items = dl.groups[k].items
        .filter((it) => it.date && it.date !== "—")
        .sort((a, b) => (a.date < b.date ? 1 : -1));
      return items[0] ? { ...items[0], cat: k } : null;
    })
    .filter(Boolean)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  /* grid update terbaru: 8 item terbaru lintas kategori */
  const latest = allItems()
    .filter((it) => it.date && it.date !== "—")
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 8);

  const tiles = Object.keys(CAT_META).map((k) => {
    const m = CAT_META[k];
    return `
        <a class="tile" href="${m.path}">
          <span class="row-ico ${m.tone}">${icons[m.icon]}</span>
          <strong>${esc(m.label)}</strong>
          <small>${dl.groups[k].items.length} item</small>
        </a>`;
  });

  const content = `
      <section class="hero">
        <div class="hero-copy" data-reveal>
          <span class="pill pill-hero">Download Center Komunitas</span>
          <h1>Miatoll Family</h1>
          <p>Semua kebutuhan modding keluarga Miatoll — Redmi Note 9 series &amp; POCO M2 Pro. ROM, firmware, kernel, recovery, module, APK, dan tema dalam satu tempat.</p>

          <div class="search-wrap" data-home-search>
            <div class="search-field">
              ${icons.search}
              <input type="search" class="search-input" id="homeSearch" placeholder="Cari ROM, kernel, module…" aria-label="Cari di download center" autocomplete="off">
            </div>
            <div class="search-results" id="homeSearchResults" hidden role="listbox"></div>
          </div>

          <div class="device-chip-row" aria-label="Perangkat Miatoll">
            ${devices
              .map(
                (d) => `
            <a class="device-mini" href="/devices" title="${esc(d.name)}">
              <span class="device-mini-code">${esc(d.codename)}</span>
              <small>${esc(d.name)}</small>
            </a>`
              )
              .join("")}
          </div>
        </div>

        <div class="hero-stage" data-slideshow aria-label="Update terbaru dari tiap menu">
          <div class="stage-head">
            <span class="stage-title"><i class="stage-live" aria-hidden="true"></i> Terbaru dari tiap menu</span>
            <a class="block-more" href="/rom">Lihat semua</a>
          </div>
          <div class="slides">
            ${slides
              .map(
                (it, i) => `
            <article class="slide${i === 0 ? " is-active" : ""}" role="group" aria-roledescription="slide" aria-label="${i + 1} dari ${slides.length}">
              <span class="slide-cat ${CAT_META[it.cat].tone}">${esc(CAT_META[it.cat].label)}</span>
              <h2>${esc(it.title)}</h2>
              <p class="slide-meta">
                <code>${esc(it.version)}</code>
                <span>· Android ${esc(it.android)}</span>
                ${it.region && it.region !== "—" ? `<span>· ${esc(it.region)}</span>` : ""}
                ${it.type && it.type !== "—" ? `<span>· ${esc(it.type)}</span>` : ""}
              </p>
              <div class="slide-actions">
                <a class="btn btn-sm btn-gradient" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">Lihat &amp; Unduh ${icons.external}</a>
                <span class="pill">${esc((it.date || "").slice(0, 7))}</span>
              </div>
            </article>`
              )
              .join("")}
          </div>
          <div class="stage-dots" role="tablist" aria-label="Pilih slide">
            ${slides
              .map(
                (_, i) =>
                  `<button type="button" role="tab" aria-selected="${i === 0 ? "true" : "false"}" class="${
                    i === 0 ? "is-active" : ""
                  }" aria-label="Slide ${i + 1}"></button>`
              )
              .join("")}
          </div>
        </div>
      </section>

      <section class="block" data-reveal>
        <div class="block-head">
          <h2 class="block-title">Update terbaru</h2>
          <a class="block-more" href="/rom">Semua download ${icons.chevronRight}</a>
        </div>
        <div class="latest-grid">
          ${latest
            .map(
              (it) => `
          <article class="dl-card">
            <h3>${esc(it.title)}</h3>
            <p class="dl-version"><code>${esc(it.version)}</code></p>
            <div class="dl-meta">
              <span class="pill">A${esc(it.android)}</span>
              ${it.region && it.region !== "—" ? `<span class="pill">${esc(it.region)}</span>` : ""}
              <span class="pill">${esc(CAT_META[it.cat].label)}</span>
            </div>
            <div class="dl-foot">
              <div class="dl-tags"><span class="tag">${esc((it.date || "").slice(0, 7))}</span></div>
              <a class="btn btn-sm btn-glass" href="${esc(it.url)}" target="_blank" rel="noopener noreferrer">Unduh ${icons.external}</a>
            </div>
          </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="block" data-reveal>
        <div class="block-head">
          <h2 class="block-title">Jelajahi per kategori</h2>
        </div>
        <div class="tile-grid">
          ${tiles.join("")}
          <a class="tile" href="/tips">
            <span class="row-ico tone-yellow">${icons.bulb}</span>
            <strong>Tips &amp; Trik</strong>
            <small>${tips.length} panduan</small>
          </a>
        </div>
      </section>

${indexScript}`;

  return { page: p, html: content };
}

/* ========= DOWNLOAD PAGES ========= */
function chipsFor(cfg) {
  return cfg.groups
    .map((g) => {
      const chips = [
        `<button class="chip is-active" data-filter="${g.key}" data-value="" type="button">Semua</button>`,
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
        <article class="dl-card" data-reveal style="--reveal-delay:${Math.min(i, 8) * 40}ms"
          data-android="${esc(it.android)}"
          data-region="${esc(it.region || "")}"
          data-type="${esc(it.type || "")}"
          data-search="${esc(
            [it.title, it.version, it.android, it.region, it.type, ...(it.tags || [])].join(" ").toLowerCase()
          )}">
          ${it.badge ? `<span class="badge">${esc(it.badge)}</span>` : ""}
          <h3>${esc(it.title)}</h3>
          <p class="dl-version"><code>${esc(it.version)}</code></p>
          <div class="dl-meta">
            <span class="pill">A${esc(it.android)}</span>
            ${it.region && it.region !== "—" ? `<span class="pill">${esc(it.region)}</span>` : ""}
            ${it.type && it.type !== "—" ? `<span class="pill">${esc(it.type)}</span>` : ""}
            ${it.size && it.size !== "—" ? `<span class="pill">${esc(it.size)}</span>` : ""}
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

      <section class="toolbar" data-reveal data-filter-root>
        <div class="toolbar-search">
          <span class="toolbar-search-ico" aria-hidden="true">${icons.search}</span>
          <input type="search" class="toolbar-input" data-filter-search placeholder="${esc(
            cfg.searchPlaceholder
          )}" aria-label="Cari item">
        </div>
        <div class="toolbar-filters">
          ${chipsFor(cfg)}
        </div>
        <div class="toolbar-status">
          <span><strong data-filter-count>${cfg.items.length}</strong> item</span>
          <button class="chip chip-reset" data-filter-reset type="button">Reset</button>
        </div>
      </section>

      <section class="section section-tight">
        <div class="dl-grid" data-filter-list>
          ${cfg.items.map(itemCard).join("")}
        </div>
        <p class="empty-state" data-filter-empty hidden>Tidak ada item yang cocok. Coba kata kunci lain atau reset filter.</p>
      </section>

      <aside class="note" data-reveal>
        <span class="note-ico" aria-hidden="true">${icons.alert}</span>
        <div>
          <strong>Catatan flashing</strong>
          <p>${esc(cfg.note)}</p>
        </div>
      </aside>`;

  return { page: p, html: content };
}

/* ========= DEVICES ========= */
function devicesPage() {
  const p = pages.find((x) => x.id === "devices");
  const content = `
${hero(p.hero)}

      <section class="section section-tight">
        <div class="device-grid">
          ${devices
            .map(
              (d, i) => `
            <article class="device-card" data-reveal style="--reveal-delay:${i * 60}ms">
              <header class="device-card-head">
                <span class="device-code">${esc(d.codename)}</span>
                ${d.popular ? `<span class="badge" style="position:static">Popular</span>` : ""}
              </header>
              <h2>${esc(d.name)}</h2>
              <p class="device-chip"><span class="${d.color === "indigo" ? "tone-indigo" : "tone-" + d.color}">${
                icons[d.chipIcon]
              }</span> ${esc(d.chip)}</p>
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
              ${
                d.note
                  ? `<p class="device-warning">${icons.alert}<span>${esc(d.note)}</span></p>`
                  : ""
              }
              <div class="device-actions">
                <a class="btn btn-sm btn-gradient" href="/rom">Official ROM</a>
                <a class="btn btn-sm btn-glass" href="/custom-rom">Custom ROM</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </section>

      <aside class="note" data-reveal>
        <span class="note-ico" aria-hidden="true">${icons.alert}</span>
        <div>
          <strong>Kenapa codename penting?</strong>
          <p>Flash file dengan codename yang salah hampir pasti berujung bootloop. Cek codename: <code>Pengaturan → Tentang telepon</code>, atau via ADB: <code>adb shell getprop ro.product.device</code>.</p>
        </div>
      </aside>`;

  return { page: p, html: content };
}

/* ========= TIPS ========= */
function tipsPage() {
  const p = pages.find((x) => x.id === "tips");
  const content = `
${hero(p.hero)}

      <section class="section section-tight">
        <div class="tips-grid">
          ${tips
            .map(
              (t, i) => `
            <article class="tip" id="${esc(t.id)}" data-reveal style="--reveal-delay:${Math.min(i, 8) * 40}ms">
              <header class="tip-head">
                <span class="row-ico tone-blue">${icons[t.icon] || icons.bulb}</span>
                <div class="tip-meta">
                  <span class="pill">${esc(t.level)}</span>
                  <span class="pill">${t.minutes} menit</span>
                </div>
              </header>
              <h2>${esc(t.title)}</h2>
              <p class="tip-excerpt">${esc(t.excerpt)}</p>
              <ol class="tip-steps">
                ${t.content.map((c) => `<li>${c}</li>`).join("")}
              </ol>
              ${t.warning ? `<div class="tip-warning">${icons.alert}<p>${esc(t.warning)}</p></div>` : ""}
            </article>`
            )
            .join("")}
        </div>
      </section>

      <section class="section">
        <div class="block-head"><h2 class="block-title">FAQ</h2></div>
        <div class="faq-list" data-reveal>
          ${faq
            .map(
              (f) => `
            <details class="faq-item">
              <summary>${esc(f.q)}<span class="faq-ico" aria-hidden="true">${icons.chevronRight}</span></summary>
              <div class="faq-body"><p>${f.a}</p></div>
            </details>`
            )
            .join("")}
        </div>
      </section>`;

  return { page: p, html: content };
}

/* ========= 404 ========= */
function notFoundPage() {
  const p = {
    id: "404",
    path: "/404",
    title: "404 — Halaman tidak ditemukan | Miatoll Family",
    description: "Halaman yang kamu cari tidak ada atau sudah dipindah.",
    hero: null
  };
  const content = `
      <section class="page-head" data-reveal>
        <span class="pill pill-hero">404</span>
        <h1 class="hero-title">Halaman tidak ditemukan</h1>
        <p class="hero-sub">Mungkin codename-nya salah 😄. Kembali ke beranda atau lanjut ke download center.</p>
        <div class="hero-actions" style="display:flex;gap:10px;margin-top:6px">
          <a class="btn btn-gradient" href="/">Ke Beranda</a>
          <a class="btn btn-glass" href="/rom">Download Center</a>
        </div>
      </section>`;
  return { page: p, html: content };
}

module.exports = { homePage, downloadPage, devicesPage, tipsPage, notFoundPage };
