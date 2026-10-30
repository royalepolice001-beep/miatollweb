/* =========================================================
 * Miatoll Family — Static site builder (zero dependency)
 * Output → dist/
 * ======================================================= */
const fs = require("fs");
const path = require("path");

const { layout } = require("./src/layout");
const { site, pages } = require("./src/config");
const { homePage, downloadPage, devicesPage, tipsPage, notFoundPage } = require("./src/pages");

const ROOT = __dirname;
const DIST = path.join(ROOT, "dist");

function rmrf(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function writePage(pagePath, html) {
  // Clean URLs: / → index.html, /rom → rom/index.html
  const file =
    pagePath === "/"
      ? path.join(DIST, "index.html")
      : path.join(DIST, pagePath.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  console.log(`  ✓ ${pagePath}`);
}

function buildSitemap() {
  const urls = pages.map((p) => {
    const loc = site.url + (p.path === "/" ? "/" : p.path);
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${
      p.path === "/" ? "daily" : "weekly"
    }</changefreq>\n    <priority>${p.path === "/" ? "1.0" : "0.8"}</priority>\n  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
    "\n"
  )}\n</urlset>\n`;
  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
  console.log("  ✓ /sitemap.xml");
}

function buildRobots() {
  const txt = `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), txt);
  console.log("  ✓ /robots.txt");
}

function main() {
  console.log("▶ Building Miatoll Family…");
  rmrf(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  // Pages
  const builders = [
    ["/", homePage()],
    ["/devices", devicesPage()],
    ["/tips", tipsPage()],
    ["/rom", downloadPage("rom")],
    ["/custom-rom", downloadPage("custom-rom")],
    ["/firmware", downloadPage("firmware")],
    ["/kernel", downloadPage("kernel")],
    ["/recovery", downloadPage("recovery")],
    ["/port-rom", downloadPage("port-rom")],
    ["/modules", downloadPage("modules")],
    ["/apk", downloadPage("apk")],
    ["/themes", downloadPage("themes")],
    ["/404", notFoundPage()]
  ];

  for (const [route, { page, html }] of builders) {
    writePage(route, layout(page, html));
  }

  // Static assets
  copyDir(path.join(ROOT, "src", "assets"), path.join(DIST, "assets"));
  console.log("  ✓ /assets (css, js, images)");

  // Public passthrough (headers, etc.)
  const publicDir = path.join(ROOT, "public");
  if (fs.existsSync(publicDir)) {
    copyDir(publicDir, DIST);
    console.log("  ✓ /public");
  }

  buildSitemap();
  buildRobots();

  // Basic sanity check
  const index = path.join(DIST, "index.html");
  if (!fs.existsSync(index) || fs.statSync(index).size < 1000) {
    console.error("✗ index.html gagal dibuat");
    process.exit(1);
  }

  const pagesCount = builders.length;
  console.log(`✓ Done — ${pagesCount} halaman → dist/`);
}

main();
