/* Static site generator for the Area Schedule Builder studio.
   Renders every page from tools/data.mjs into versioned HTML, plus sitemap.
   Run: node tools/build.mjs */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE, NAV, FOOTER, ICONS, ART, pages } from "./data.mjs";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const esc = (s) => String(s ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const depthOf = (slug) => (slug === "" ? 0 : slug.split("/").length);
const rootRel = (slug) => (depthOf(slug) === 0 ? "./" : "../".repeat(depthOf(slug)));
const href = (rel, slug) => (slug === "" ? rel : rel + slug + "/");
const icon = (name) => ICONS[name] || ICONS.spark;

function head(page, rel) {
  const canonical = `https://${SITE.domain}/${page.slug ? page.slug + "/" : ""}`;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.desc)}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#0f766e">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(page.title)}">
  <meta property="og:description" content="${esc(page.desc)}">
  <meta property="og:url" content="${canonical}">
  <meta name="google-adsense-account" content="${SITE.adsense}">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsense}" crossorigin="anonymous"></script>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap">
  <link rel="stylesheet" href="${rel}styles.css">
</head>
<body>`;
}

function topbar(page, rel) {
  const links = NAV.map((item) => {
    const cur = item.nav === page.nav ? ' aria-current="page"' : "";
    const cls = item.cta ? ' class="cta"' : "";
    return `<a href="${href(rel, item.slug)}"${cls}${cur}>${esc(item.label)}</a>`;
  }).join("");
  return `<header class="topbar">
  <a class="brand" href="${rel}"><span class="brand-mark">A</span><span>${esc(SITE.brand)}<small>${esc(SITE.product)}</small></span></a>
  <nav class="nav" aria-label="Primary">${links}</nav>
</header>`;
}

function adUnit(inline = false) {
  return `<aside class="ad-unit${inline ? " inline" : ""}" aria-label="Advertisement">
  <ins class="adsbygoogle" style="display:block" data-ad-client="${SITE.adsense}" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <span class="ad-label">Advertisement</span>
  <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
</aside>`;
}

function footer(rel) {
  const cols = FOOTER.map((col) => `<div class="footer-col"><h4>${esc(col.title)}</h4>${col.links.map((l) => `<a href="${href(rel, l.slug)}">${esc(l.label)}</a>`).join("")}</div>`).join("");
  return `<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="brand" href="${rel}"><span class="brand-mark">A</span><span>${esc(SITE.brand)}<small>${esc(SITE.product)}</small></span></a>
      <p>${esc(SITE.tagline)}</p>
    </div>
    ${cols}
  </div>
  <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(SITE.brand)} · ${esc(SITE.product)}</span><span>Browser-side tools · No account required</span></div>
</footer>`;
}

function scripts(rel, withTool) {
  let out = "";
  if (withTool) out += `<script>window.SITE_CONFIG = ${JSON.stringify(withTool)};</script>\n<script src="${rel}app.js"></script>\n`;
  out += `<script src="${rel}saas.js"></script>`;
  return out;
}

/* ---------- Tool config shells reused by tool pages ---------- */
const DEFAULT_LIMITS = [
  "Results are planning estimates — confirm against local codes, project standards, and supplier data before issue.",
  "Tools run entirely in your browser; nothing you type is uploaded or stored on a server.",
  "Advertising is kept clear of input controls and primary action buttons."
];

function toolPanel(cfg) {
  return `<section class="tool-shell" id="tool">
  <div class="tool-panel">
    <div class="panel-heading"><h2>Inputs</h2><span class="pill">Live</span></div>
    <div class="fields-grid" id="toolFields"></div>
  </div>
  <div class="result-panel">
    <div class="result-toolbar">
      <h2>Result</h2>
      <div class="toolbar-row">
        <button class="button secondary" id="copyExport" type="button">Copy output</button>
        <button class="button secondary" type="button" data-save-current>Save</button>
        <button class="button" type="button" data-download-current>Download</button>
      </div>
    </div>
    <div id="toolResult"></div>
  </div>
</section>`;
}

function relatedBlock(rel, related) {
  if (!related || !related.length) return "";
  return `<section class="section"><div class="section-head"><h2>Related tools &amp; guides</h2><p>Keep the workflow moving with connected calculators and references.</p></div>
  <div class="grid-3">${related.map((r) => `<a class="hub-card" href="${href(rel, r.slug)}"><div class="icon-tile">${icon(r.icon || "spark")}</div><h3>${esc(r.label)}</h3><p>${esc(r.sub || "")}</p><span class="go">Open →</span></a>`).join("")}</div></section>`;
}

/* ---------- Layout renderers ---------- */
function renderTool(page, rel) {
  const cfg = {
    title: page.config.title || page.h1,
    kind: page.config.kind,
    fields: page.config.fields || [],
    data: page.config.data || {},
    engine: page.config.engine || {},
    examples: page.config.examples || [],
    faq: page.config.faq || [],
    limits: page.config.limits || DEFAULT_LIMITS
  };
  const crumbs = `<div class="breadcrumb"><a href="${rel}">Home</a><span>/</span><a href="${href(rel, page.nav.toLowerCase())}">${esc(page.nav)}</a><span>/</span>${esc(page.h1)}</div>`;
  const intro = page.intro ? `<div class="hero-art" style="background:none;border:none;box-shadow:none">${ART[page.art || "blueprint"]}</div>` : "";
  return [
    `<main>`,
    `<section class="hero">`,
    `<div class="hero-copy">${crumbs}<p class="eyebrow">${esc(page.eyebrow || "Studio tool")}</p><h1>${esc(page.h1)}</h1><p class="lede">${esc(page.lede)}</p>`,
    page.points ? `<div class="hero-meta">${page.points.map((p) => `<div><strong>${esc(p.v)}</strong><span>${esc(p.k)}</span></div>`).join("")}</div>` : "",
    `</div>`,
    `<div class="hero-art">${ART[page.art || "blueprint"]}</div>`,
    `</section>`,
    `<div class="section">${toolPanel(cfg)}</div>`,
    adUnit(),
    page.intro ? `<section class="section"><div class="section-head"><h2>How teams use it</h2><p>${esc(page.intro)}</p></div><div class="example-grid" id="examples"></div></section>` : `<section class="section"><div class="example-grid" id="examples"></div></section>`,
    `<section class="section"><div class="grid-2"><div class="content-band"><div class="section-heading"><h2>Good to know</h2></div><ul class="checklist" id="limits"></ul></div><div class="content-band"><div class="section-heading"><h2>FAQ</h2></div><div id="faq"></div></div></div></section>`,
    relatedBlock(rel, page.related),
    `</main>`,
    footer(rel),
    scripts(rel, cfg)
  ].join("\n");
}

function renderHub(page, rel) {
  const groups = page.groups.map((group) => `<section class="section"><div class="section-head"><h2>${esc(group.title)}</h2><p>${esc(group.text || "")}</p></div>
  <div class="grid-3">${group.items.map((it) => `<a class="hub-card" href="${href(rel, it.slug)}"><div class="icon-tile ${it.amber ? "amber" : ""}">${icon(it.icon)}</div><div class="card-meta"><span class="dot"></span>${esc(it.kicker || group.kicker || "Tool")}</div><h3>${esc(it.title)}</h3><p>${esc(it.text)}</p><span class="go">Open →</span></a>`).join("")}</div></section>`).join("\n");
  return [
    `<main>`,
    `<section class="hero">`,
    `<div class="hero-copy"><p class="eyebrow">${esc(page.eyebrow)}</p><h1>${esc(page.h1)}</h1><p class="lede">${esc(page.lede)}</p>${page.points ? `<div class="hero-meta">${page.points.map((p) => `<div><strong>${esc(p.v)}</strong><span>${esc(p.k)}</span></div>`).join("")}</div>` : ""}</div>`,
    `<div class="hero-art">${ART[page.art || "grid"]}</div>`,
    `</section>`,
    adUnit(),
    groups,
    `</main>`,
    footer(rel),
    scripts(rel, null)
  ].join("\n");
}

function renderGuide(page, rel) {
  const toc = page.sections.map((s) => `<a href="#${s.id}">${esc(s.h)}</a>`).join("");
  const body = page.sections.map((s) => `<h2 id="${s.id}">${esc(s.h)}</h2>${s.html}`).join("\n");
  const crumbs = `<div class="breadcrumb"><a href="${rel}">Home</a><span>/</span><a href="${href(rel, "guides")}">Guides</a><span>/</span>${esc(page.h1)}</div>`;
  return [
    `<main>`,
    `<section class="hero">`,
    `<div class="hero-copy">${crumbs}<p class="eyebrow amber">${esc(page.category || "Guide")} · ${esc(page.readMins || 6)} min read</p><h1>${esc(page.h1)}</h1><p class="lede">${esc(page.lede)}</p></div>`,
    `<div class="hero-art">${ART[page.art || "doc"]}</div>`,
    `</section>`,
    `<section class="section"><div class="guide-layout"><article class="guide-body">${body}</article><aside><nav class="toc"><strong>On this page</strong>${toc}</nav></aside></div></section>`,
    adUnit(),
    relatedBlock(rel, page.related),
    `</main>`,
    footer(rel),
    scripts(rel, null)
  ].join("\n");
}

const APP_NAV = [
  { slug: "", label: "Dashboard" },
  { slug: "tool", label: "Area Schedule" },
  { slug: "workspace", label: "Workspace" },
  { slug: "templates", label: "Templates" },
  { slug: "reports", label: "Reports" },
  { slug: "examples", label: "Examples" },
  { slug: "checklists", label: "QA Checklist" },
  { slug: "integrations", label: "Integrations" },
  { slug: "settings", label: "Settings" },
  { slug: "plans", label: "Plans" },
  { slug: "faq", label: "FAQ" },
  { slug: "privacy", label: "Privacy" }
];

function renderApp(page, rel) {
  const side = APP_NAV.map((n) => `<a href="${href(rel, n.slug)}"${n.slug === page.slug ? ' aria-current="page"' : ""}>${esc(n.label)}</a>`).join("");
  return [
    `<main>`,
    `<section class="app-grid">`,
    `<nav class="side-nav" aria-label="Studio sections">${side}</nav>`,
    `<div class="workspace-main">`,
    `<div class="page-title-panel"><p class="eyebrow">${esc(page.eyebrow || "Studio")}</p><h1>${esc(page.h1)}</h1><p class="lede">${esc(page.lede)}</p></div>`,
    adUnit(true),
    page.html,
    `</div>`,
    `</section>`,
    `</main>`,
    footer(rel),
    scripts(rel, page.config || null)
  ].join("\n");
}

function renderHome(page, rel) {
  return [
    `<main>`,
    page.html,
    `</main>`,
    footer(rel),
    scripts(rel, page.config || null)
  ].join("\n");
}

function renderPage(page) {
  const rel = rootRel(page.slug);
  let bodyMain;
  if (page.layout === "tool") bodyMain = renderTool(page, rel);
  else if (page.layout === "hub") bodyMain = renderHub(page, rel);
  else if (page.layout === "guide") bodyMain = renderGuide(page, rel);
  else if (page.layout === "app") bodyMain = renderApp(page, rel);
  else bodyMain = renderHome(page, rel);
  return `${head(page, rel)}\n${topbar(page, rel)}\n${bodyMain}\n</body>\n</html>\n`;
}

/* ---------- Write everything ---------- */
let count = 0;
for (const page of pages) {
  const outDir = page.slug === "" ? ROOT : resolve(ROOT, page.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), renderPage(page));
  count++;
}

/* sitemap */
const urls = pages.map((p) => {
  const loc = `https://${SITE.domain}/${p.slug ? p.slug + "/" : ""}`;
  const pri = p.slug === "" ? "1.0" : p.layout === "tool" ? "0.8" : "0.6";
  return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${pri}</priority></url>`;
}).join("\n");
writeFileSync(resolve(ROOT, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

console.log(`Generated ${count} pages + sitemap.xml`);
