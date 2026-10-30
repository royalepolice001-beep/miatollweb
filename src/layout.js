const icons = require("./icons");
const { site, nav } = require("./config");

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Sidebar (gaming launcher style) ---------- */
function navItem(item, activeId, idx) {
  const active = item.id === activeId;
  return `
        <a class="nav-item${active ? " is-active" : ""}" href="${item.href}" style="--d:${(idx || 0) * 18}ms"${
    active ? ' aria-current="page"' : ""
  }>
          <span class="nav-icon">${icons[item.icon] || ""}</span>
          <span class="nav-label s-hide-rail">${esc(item.label)}</span>
          <span class="nav-glow" aria-hidden="true"></span>
        </a>`;
}

function sidebar(activeId) {
  let html = `
    <div class="sidebar-inner">
      <a class="brand" href="/" aria-label="Miatoll Family — Beranda">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0" stop-color="#5e5ce6"/>
                <stop offset="1" stop-color="#64d2ff"/>
              </linearGradient>
            </defs>
            <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="url(#bg1)" stroke-width="2.6"/>
            <path d="M11 27V13.5l6.2 8.4 2.8-3.9 2.8 3.9L29 13.5V27" stroke="url(#bg1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="brand-text s-hide-rail">
          <strong>Miatoll</strong>
          <small>Family</small>
        </span>
      </a>

      <nav class="nav" aria-label="Menu utama">
${nav
  .map((group, gi) => {
    if (group.section) {
      return `
        <div class="nav-section">
          <p class="nav-section-title s-hide-rail" style="--d:${gi * 30}ms">${esc(group.section)}</p>
          ${group.items.map((it, ii) => navItem(it, activeId, ii + 2)).join("\n")}
        </div>`;
    }
    return navItem(group, activeId, 0);
  })
  .join("\n")}
      </nav>

      <div class="sidebar-foot">
        <div class="status-chip" title="Stable channel">
          <span class="status-dot" aria-hidden="true"></span>
          <span class="s-hide-rail" style="--d:180ms">Stable channel · v${esc(site.version)}</span>
        </div>
        <a class="side-cta" href="https://github.com/royalepolice001-beep/miatollweb" target="_blank" rel="noopener noreferrer" title="Repo GitHub">
          ${icons.package}
          <span class="s-hide-rail" style="--d:200ms">Repo GitHub</span>
        </a>
        <button class="side-cta sb-collapse" id="sbCollapse" type="button" title="Sembunyikan sidebar" aria-label="Sembunyikan sidebar">
          ${icons.chevronsLeft}
          <span class="s-hide-rail" style="--d:220ms">Sembunyikan</span>
        </button>
      </div>
    </div>`;
  return `<aside class="sidebar" id="sidebar" aria-label="Sidebar navigasi">${html}</aside>`;
}

/* ---------- Footer ---------- */
function footer() {
  return `
    <footer class="footer glass">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand footer-logo">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="#64d2ff" stroke-width="2.6"/>
                <path d="M11 27V13.5l6.2 8.4 2.8-3.9 2.8 3.9L29 13.5V27" stroke="#5e5ce6" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="brand-text"><strong>Miatoll</strong><small>Family</small></span>
          </div>
          <p>Download center komunitas untuk seluruh keluarga Xiaomi Miatoll — dibuat oleh penggemar, untuk penggemar.</p>
        </div>
        <div>
          <h3>Download</h3>
          <ul>
            <li><a href="/rom">Official ROM</a></li>
            <li><a href="/custom-rom">Custom ROM</a></li>
            <li><a href="/firmware">Firmware</a></li>
            <li><a href="/kernel">Custom Kernel</a></li>
            <li><a href="/recovery">Custom Recovery</a></li>
            <li><a href="/port-rom">Port ROM</a></li>
          </ul>
        </div>
        <div>
          <h3>Modding</h3>
          <ul>
            <li><a href="/modules">Magisk / KernelSU</a></li>
            <li><a href="/apk">APK Pilihan</a></li>
            <li><a href="/themes">Tema</a></li>
            <li><a href="/tips">Tips &amp; Trik</a></li>
            <li><a href="/devices">Perangkat</a></li>
          </ul>
        </div>
        <div>
          <h3>Sumber Terpercaya</h3>
          <ul>
            <li><a href="https://miuirom.xiaomi.com/" target="_blank" rel="noopener noreferrer">MIUI ROM Download</a></li>
            <li><a href="https://github.com/topjohnwu/Magisk" target="_blank" rel="noopener noreferrer">Magisk (GitHub)</a></li>
            <li><a href="https://github.com/tiann/KernelSU" target="_blank" rel="noopener noreferrer">KernelSU (GitHub)</a></li>
            <li><a href="https://twrp.me/" target="_blank" rel="noopener noreferrer">TWRP</a></li>
            <li><a href="https://xdaforums.com/" target="_blank" rel="noopener noreferrer">XDA Forums</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${site.year} ${esc(site.name)}. Konten dikurasi komunitas — bukan produk resmi Xiaomi, POCO, atau Xiaomi Inc.</p>
        <p class="footer-note">Flashing berisiko. Backup dulu, flashing kemudian. Proceed at your own risk.</p>
      </div>
    </footer>`;
}

/* ---------- Head ---------- */
function head(page) {
  const canonical = `${site.url}${page.path === "/" ? "/" : page.path}`;
  const title = page.title;
  const desc = page.description;
  const jsonld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "id",
        publisher: { "@type": "Organization", name: site.name, url: site.url }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement:
          page.path === "/"
            ? [
                { "@type": "ListItem", position: 1, name: "Beranda", item: site.url }
              ]
            : [
                { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
                { "@type": "ListItem", position: 2, name: page.hero ? page.hero.title : title, item: canonical }
              ]
      },
      {
        "@type": "CollectionPage",
        name: title,
        url: canonical,
        description: desc,
        isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        inLanguage: "id"
      }
    ]
  };

  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(desc)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="${esc(site.author)}">
  <meta name="theme-color" content="#f4f5fb" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#0a0d16" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.url}/assets/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${site.url}/assets/og-image.png">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="stylesheet" href="/assets/css/style.css">
  <script>
    (function () {
      try {
        var t = localStorage.getItem("mf-theme");
        if (t !== "dark" && t !== "light") {
          t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        document.documentElement.setAttribute("data-theme", t);
        var s = localStorage.getItem("mf-sidebar");
        if (s !== "open" && s !== "hidden") s = "rail";
        document.documentElement.setAttribute("data-sidebar", s);
      } catch (e) {
        document.documentElement.setAttribute("data-theme", "light");
        document.documentElement.setAttribute("data-sidebar", "rail");
      }
    })();
  </script>
  <script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>`;
}

/* ---------- Topbar ---------- */
function topbar(page) {
  const crumb =
    page.path === "/"
      ? "Beranda"
      : (page.hero && page.hero.title) || page.title.split("—")[0].trim();
  return `
    <header class="topbar" id="topbar">
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Buka menu" aria-expanded="false" aria-controls="sidebar">
        ${icons.menu}
      </button>
      <button class="icon-btn sb-toggle" id="sbToggle" type="button" aria-label="Kunci sidebar terbuka" title="Buka / kunci / sembunyikan sidebar">
        <span class="sb-ico sb-ico-open">${icons.chevronsRight}</span>
        <span class="sb-ico sb-ico-close">${icons.chevronsLeft}</span>
      </button>
      <div class="crumb">
        <span class="crumb-root">Miatoll Family</span>
        <span class="crumb-sep" aria-hidden="true">/</span>
        <span class="crumb-current">${esc(crumb)}</span>
      </div>
      <div class="topbar-actions">
        <a class="icon-btn hide-mobile" href="/tips" aria-label="Tips & Trik" title="Tips & Trik">${icons.bulb}</a>
        <button class="icon-btn theme-btn" id="themeBtn" aria-label="Ganti mode gelap/terang" title="Mode gelap / terang">
          <span class="theme-ico theme-ico-sun">${icons.sun}</span>
          <span class="theme-ico theme-ico-moon">${icons.moon}</span>
        </button>
        <a class="btn btn-sm btn-gradient hide-mobile" href="/rom">Mulai Download</a>
      </div>
    </header>`;
}

/* ---------- Page shell ---------- */
function layout(page, content) {
  return `<!doctype html>
<html lang="id">
<head>
${head(page)}
</head>
<body data-page="${page.id}">
  <div class="bg-fx" aria-hidden="true">
    <span class="blob blob-a"></span>
    <span class="blob blob-b"></span>
    <span class="blob blob-c"></span>
  </div>

${sidebar(page.id)}

  <div class="backdrop" id="backdrop" hidden></div>

  <div class="shell">
${topbar(page)}
    <main class="main">
${content}
${footer()}
    </main>
  </div>

  <button class="to-top glass" id="toTop" aria-label="Kembali ke atas" title="Ke atas">${icons.arrowUp}</button>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

module.exports = { layout, esc };
