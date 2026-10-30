/* Miatoll Family — tiny static preview server (zero dependency). */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "dist");
const PORT = process.env.PORT || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json"
};

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "text/html; charset=utf-8" });
  res.end(body);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = path.join(ROOT, urlPath);

  // Directory / clean-URL handling: /rom -> dist/rom/index.html or dist/rom.html
  const candidates = [
    filePath,
    filePath + ".html",
    path.join(filePath, "index.html")
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      const ext = path.extname(candidate).toLowerCase();
      return send(res, 200, fs.readFileSync(candidate), MIME[ext] || "application/octet-stream");
    }
  }

  const notFound = path.join(ROOT, "404.html");
  if (fs.existsSync(notFound)) {
    return send(res, 404, fs.readFileSync(notFound));
  }
  return send(res, 404, "<h1>404 — Not found</h1>");
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Miatoll Family preview → http://localhost:${PORT}`);
});
