const icons = require("./icons");
const { site, nav } = require("./config");

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ---------- Navbar (animated top bar) ---------- */
function navbar(activeId) {
  const direct = nav.filter((g) => !g.section);
  const drops = nav.filter((g) => g.section);

  const link = (item, extra = "") => {
    const active = item.id === activeId;
    return `<a class="nav-link${active ? " is-active" : ""}${extra}" href="${item.href}"${
      active ? ' aria-current="page"' : ""
    }>${esc(item.label)}</a>`;
  };

  const dropItems = (group) =>
    group.items
      .map((it) => {
        const active = it.id === activeId;
        return `<a class="drop-item${active ? " is-active" : ""}" href="${it.href}"${
          active ? ' aria-current="page"' : ""
        }>
            <span class="drop-ico">${icons[it.icon] || ""}</span>
            <span class="drop-body"><strong>${esc(it.label)}</strong></span>
            <span class="drop-chevron">${icons.chevronRight}</span>
          </a>`;
      })
      .join("");

  const dropBlocks = drops
    .map((group) => {
      const isOn = group.items.some((it) => it.id === activeId);
      return `<div class="nav-drop" data-drop>
            <button class="nav-link nav-drop-btn${isOn ? " is-active" : ""}" type="button" aria-expanded="false">${esc(
        group.section
      )}<span class="nav-drop-caret">${icons.chevronRight}</span></button>
            <div class="drop-panel" role="menu">
              ${dropItems(group)}
            </div>
          </div>`;
    })
    .join("");

  const mobileAll = nav
    .map((g) => {
      if (g.section) {
        return `<p class="mobile-section">${esc(g.section)}</p>
            ${g.items
              .map(
                (it) =>
                  `<a class="mobile-link${it.id === activeId ? " is-active" : ""}" href="${it.href}" style="--d:${30}ms"><span class="drop-ico">${icons[it.icon]}</span>${esc(
                    it.label
                  )}</a>`
              )
              .join("")}`;
      }
      return `<a class="mobile-link${g.id === activeId ? " is-active" : ""}" href="${g.href}" style="--d:${30}ms"><span class="drop-ico">${icons[g.icon]}</span>${esc(
        g.label
      )}</a>`;
    })
    .join("\n");

  return `
  <header class="navbar" id="navbar">
    <div class="nav-inner">
      <a class="brand" href="/" aria-label="Miatoll Family — Beranda">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="bg1" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0" stop-color="#5e5ce6"/>
                <stop offset="1" stop-color="#31c4f3"/>
              </linearGradient>
            </defs>
            <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="url(#bg1)" stroke-width="2.6"/>
            <path d="M11 27V13.5l6.2 8.4 2.8-3.9 2.8 3.9L29 13.5V27" stroke="url(#bg1)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span class="brand-text"><strong>Miatoll</strong><small>Family</small></span>
      </a>

      <nav class="nav-links" aria-label="Menu utama">
        ${link(direct[0])}
        ${link(direct[1])}
        ${dropBlocks}
        ${link(direct[2])}
      </nav>

      <div class="nav-actions">
        <button class="icon-btn theme-btn" id="themeBtn" aria-label="Ganti mode gelap/terang" title="Mode gelap / terang">
          <span class="theme-ico theme-ico-sun">${icons.sun}</span>
          <span class="theme-ico theme-ico-moon">${icons.moon}</span>
        </button>
        <a class="btn btn-sm btn-gradient hide-mobile" href="/rom">Download</a>
        <button class="icon-btn menu-btn" id="menuBtn" aria-label="Buka menu" aria-expanded="false" aria-controls="mobileMenu">
          <span class="burger"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>

    <div class="mobile-menu" id="mobileMenu" hidden>
      <nav aria-label="Menu mobile">
${mobileAll}
      </nav>
    </div>
  </header>`;
}

/* ---------- Footer ---------- */
function footer() {
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand footer-logo">
            <span class="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="#007aff" stroke-width="2.6"/>
                <path d="M11 27V13.5l6.2 8.4 2.8-3.9 2.8 3.9L29 13.5V27" stroke="#007aff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="brand-text"><strong>Miatoll</strong><small>Family</small></span>
          </div>
          <p>Download center komunitas untuk keluarga Xiaomi Miatoll — dibuat oleh penggemar, untuk penggemar.</p>
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
          <h3>Sumber</h3>
          <ul>
            <li><a href="https://miuirom.xiaomi.com/" target="_blank" rel="noopener noreferrer">MIUI ROM Download</a></li>
            <li><a href="https://github.com/topjohnwu/Magisk" target="_blank" rel="noopener noreferrer">Magisk</a></li>
            <li><a href="https://github.com/tiann/KernelSU" target="_blank" rel="noopener noreferrer">KernelSU</a></li>
            <li><a href="https://twrp.me/" target="_blank" rel="noopener noreferrer">TWRP</a></li>
            <li><a href="https://xdaforums.com/" target="_blank" rel="noopener noreferrer">XDA Forums</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${site.year} ${esc(site.name)}. Konten dikurasi komunitas — bukan produk resmi Xiaomi atau POCO.</p>
        <p>Backup dulu, flashing kemudian. Proceed at your own risk.</p>
      </div>
    </footer>`;
}

/* ---------- Head ---------- */
function head(page) {
  const canonical = `${site.url}${page.path === "/" ? "/" : page.path}`;
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
            ? [{ "@type": "ListItem", position: 1, name: "Beranda", item: site.url }]
            : [
                { "@type": "ListItem", position: 1, name: "Beranda", item: site.url },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: page.hero ? page.hero.title : page.title,
                  item: canonical
                }
              ]
      },
      {
        "@type": "CollectionPage",
        name: page.title,
        url: canonical,
        description: page.description,
        isPartOf: { "@type": "WebSite", name: site.name, url: site.url },
        inLanguage: "id"
      }
    ]
  };

  return `  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta name="author" content="${esc(site.author)}">
  <meta name="theme-color" content="#f2f2f7" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:locale" content="${site.locale}">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${site.url}/assets/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title)}">
  <meta name="twitter:description" content="${esc(page.description)}">
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
      } catch (e) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    })();
  </script>
  <script type="application/ld+json">${JSON.stringify(jsonld).replace(/</g, "\\u003c")}</script>`;
}

/* ---------- Page shell ---------- */
function layout(page, content) {
  return `<!doctype html>
<html lang="id">
<head>
${head(page)}
</head>
<body data-page="${page.id}">
${navbar(page.id)}

  <div class="shell">
    <main class="main">
${content}
${footer()}
    </main>
  </div>

  <button class="to-top" id="toTop" aria-label="Kembali ke atas" title="Ke atas">${icons.arrowUp}</button>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

module.exports = { layout, esc };
