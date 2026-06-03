# Area Schedule Builder — caddrawingdownload.com

A free, browser-side studio of architectural **area takeoff** and **CAD drawing** tools.
Every calculator, schedule builder, and reference runs entirely in the visitor's
browser — no backend, no account, nothing uploaded.

- Live site: https://area.caddrawingdownload.com/
- Repo: kingboss568/tool-area-schedule-builder-caddrawingdownload

## What's inside (63 pages)

| Section | Count | Notes |
| --- | --- | --- |
| Flagship tool | 1 | Area Schedule Builder (costed schedule → CSV) |
| Calculators | 24 | Area, FAR, paint, tiling, concrete, HVAC, stairs, polygon area, … |
| Schedule / document builders | 6 | Door, window, finish, drawing register, revisions, room data sheet |
| Reference library | 9 | Units, symbols, line types, scales, paper sizes, room sizes, layers, formats, glossary |
| Guides | 8 | Long-form, sectioned articles |
| Hubs | 3 | Tools / Library / Guides index pages |
| Studio / app | 11 | Home, workspace, templates, reports, examples, QA checklist, integrations, settings, plans, FAQ, privacy |

Each tool is **genuinely functional**: real formulas (live calculation), unit
conversion with exact factors, the shoelace area method, searchable reference
data, CSV/JSON export, and local "save project" storage.

## Design & UI

- A single cohesive design system in `styles.css` (the "blueprint studio" look).
- Inline SVG icon set + hand-built blueprint illustrations — no external image
  dependency for the page chrome.
- Fully responsive, reduced-motion aware, accessible focus states.

## AdSense

Google AdSense is installed on **every** page:

- Account meta + the page-level loader (`adsbygoogle.js`) in `<head>`.
- A responsive auto ad unit (`<ins class="adsbygoogle" … data-ad-format="auto">`)
  placed clear of input controls and primary buttons.

Publisher: `ca-pub-0268893833921284` (see `ads.txt`).

## Build

All HTML is generated from data — never hand-edit the `index.html` files.

```bash
node scripts/build.mjs
```

- `scripts/data.mjs` — every page's content and tool config.
- `scripts/build.mjs` — renders HTML + `sitemap.xml`.
- `app.js` — the client tool engine (calculator, convert, geometry, schedule,
  builder, library, checklist).
- `saas.js` — local save / export / template search.

To add a tool, add an entry in `scripts/data.mjs` and re-run the build.
