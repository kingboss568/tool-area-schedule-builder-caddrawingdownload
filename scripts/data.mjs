/* Page data + shared assets for the Area Schedule Builder studio.
   Each tool page carries a real, working browser-side configuration. */

export const SITE = {
  brand: "caddrawingdownload.com",
  product: "Area Schedule Builder",
  domain: "area.caddrawingdownload.com",
  adsense: "ca-pub-0268893833921284",
  tagline: "A free studio of browser-side calculators, schedules, and references for architectural area takeoff and CAD drawing production."
};

export const NAV = [
  { label: "Home", slug: "", nav: "Home" },
  { label: "Tools", slug: "tools", nav: "Tools" },
  { label: "Library", slug: "library", nav: "Library" },
  { label: "Guides", slug: "guides", nav: "Guides" },
  { label: "Workspace", slug: "workspace", nav: "Workspace" },
  { label: "Open the app", slug: "tool", nav: "App", cta: true }
];

export const FOOTER = [
  { title: "Popular tools", links: [
    { label: "Area Schedule Builder", slug: "tool" },
    { label: "Room Area Calculator", slug: "tools/room-area" },
    { label: "Area Unit Converter", slug: "tools/area-unit-converter" },
    { label: "Gross to Net Area", slug: "tools/gross-net-area" },
    { label: "All tools", slug: "tools" }
  ]},
  { title: "Reference", links: [
    { label: "Area Units", slug: "library/area-units" },
    { label: "Drawing Symbols", slug: "library/drawing-symbols" },
    { label: "Architectural Scales", slug: "library/architectural-scales" },
    { label: "Glossary", slug: "library/glossary" }
  ]},
  { title: "Studio", links: [
    { label: "Workspace", slug: "workspace" },
    { label: "Templates", slug: "templates" },
    { label: "Reports", slug: "reports" },
    { label: "Plans", slug: "plans" },
    { label: "Privacy", slug: "privacy" }
  ]}
];

/* ---------- Inline icon set (24x24, currentColor) ---------- */
const I = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
export const ICONS = {
  spark: I(`<path d="M12 3v18M3 12h18"/><circle cx="12" cy="12" r="3"/>`),
  ruler: I(`<rect x="3" y="8" width="18" height="8" rx="1"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/>`),
  grid: I(`<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>`),
  layers: I(`<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>`),
  calc: I(`<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h2M12 11h4M8 15h2M12 15h4"/>`),
  doc: I(`<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>`),
  building: I(`<path d="M5 21V5l8-2v18M13 21V9l6 2v10M3 21h18M8 8h1M8 12h1M8 16h1M16 13h1M16 17h1"/>`),
  convert: I(`<path d="M4 7h13l-3-3M20 17H7l3 3"/>`),
  paint: I(`<rect x="4" y="3" width="16" height="7" rx="1"/><path d="M12 10v4a2 2 0 0 1-2 2H8v5"/>`),
  floor: I(`<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>`),
  parking: I(`<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>`),
  tile: I(`<rect x="3" y="3" width="8" height="8" rx="1"/><rect x="13" y="3" width="8" height="8" rx="1"/><rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/>`),
  concrete: I(`<path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M3 8v8l9 4 9-4V8"/>`),
  roof: I(`<path d="M3 12L12 4l9 8"/><path d="M5 12v8h14v-8"/>`),
  window: I(`<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 3v18M4 12h16"/>`),
  cost: I(`<circle cx="12" cy="12" r="9"/><path d="M15 9a3 3 0 0 0-3-2c-1.7 0-3 1-3 2.3 0 3 6 1.7 6 4.7 0 1.4-1.3 2.3-3 2.3a3 3 0 0 1-3-2M12 6v1.5M12 16.5V18"/>`),
  light: I(`<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.8.8 1 1.4 1 2h6c0-.6.2-1.2 1-2A6 6 0 0 0 12 3z"/>`),
  hvac: I(`<rect x="3" y="4" width="18" height="10" rx="2"/><path d="M7 18c0 1.5-1 2-1 2M12 18c0 1.5-1 2-1 2M17 18c0 1.5-1 2-1 2M6 8h2M11 8h2M16 8h2"/>`),
  scale: I(`<path d="M4 20L20 4M4 8V4h4M16 20h4v-4"/>`),
  plot: I(`<rect x="3" y="3" width="18" height="18" rx="1"/><rect x="7" y="7" width="10" height="10" rx="1" stroke-dasharray="2 2"/>`),
  stairs: I(`<path d="M3 21V17h4v-4h4V9h4V5h6"/>`),
  ramp: I(`<path d="M3 19h18M3 19L19 7M19 7v12"/>`),
  dig: I(`<path d="M3 9h18v3H3zM6 12v6M18 12v6M6 18h12"/><path d="M9 9V5h6v4"/>`),
  polygon: I(`<path d="M12 3l8 6-3 10H7L4 9z"/><circle cx="12" cy="3" r="1"/><circle cx="20" cy="9" r="1"/><circle cx="17" cy="19" r="1"/><circle cx="7" cy="19" r="1"/><circle cx="4" cy="9" r="1"/>`),
  door: I(`<path d="M5 21V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v17M5 21h14M13 12h.01"/>`),
  finish: I(`<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 8h18M8 8v13"/>`),
  units: I(`<path d="M4 4h16v16H4z"/><path d="M4 10h16M10 4v16"/><path d="M14 14h3v3h-3z"/>`),
  symbols: I(`<circle cx="7" cy="7" r="3"/><path d="M14 4h6v6h-6zM4 16l3-3 3 3-3 3zM14 14h6v6h-6z"/>`),
  lines: I(`<path d="M3 6h18M3 12h18M3 18h6M13 18h2M19 18h2"/>`),
  paper: I(`<rect x="6" y="3" width="12" height="18" rx="1"/><rect x="9" y="6" width="6" height="6"/>`),
  room: I(`<path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6"/>`),
  file: I(`<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/>`),
  book: I(`<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M19 17H6a2 2 0 0 0-2 2"/>`),
  check: I(`<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>`),
  search: I(`<circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/>`),
  gear: I(`<circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.5h-4l-.3 2.5a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7 7 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.5h4l.3-2.5a7 7 0 0 0 1.7-1l2.3 1 2-3.4-2-1.5c.1-.3.1-.7.1-1z"/>`),
  plug: I(`<path d="M9 3v6M15 3v6M7 9h10v3a5 5 0 0 1-10 0zM12 17v4"/>`),
  report: I(`<path d="M4 4h16v16H4z"/><path d="M8 16v-4M12 16V8M16 16v-6"/>`),
  plan: I(`<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/>`),
  shield: I(`<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>`),
  template: I(`<rect x="3" y="3" width="18" height="6" rx="1"/><rect x="3" y="12" width="8" height="9" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/>`)
};

/* ---------- Hero / guide illustrations (render on dark panel) ---------- */
const A = (inner) => `<svg viewBox="0 0 480 340" role="img" aria-hidden="true"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2dd4bf"/><stop offset="1" stop-color="#0f766e"/></linearGradient></defs><rect width="480" height="340" fill="none"/><g stroke="#1f5a52" stroke-width="1">${Array.from({length: 12}, (_, i) => `<line x1="${i*40}" y1="0" x2="${i*40}" y2="340"/>`).join("")}${Array.from({length: 9}, (_, i) => `<line x1="0" y1="${i*40}" x2="480" y2="${i*40}"/>`).join("")}</g>${inner}</svg>`;
export const ART = {
  blueprint: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><path d="M70 250V110l90-40 90 40v140" /><path d="M250 250V150l120 30v70" fill="rgba(45,212,191,0.06)"/><path d="M70 250h300"/><rect x="100" y="160" width="50" height="50" stroke="#f6c886"/><rect x="170" y="160" width="50" height="50" stroke="#f6c886"/><path d="M160 70v60"/></g><g fill="#f6c886"><circle cx="70" cy="250" r="4"/><circle cx="160" cy="70" r="4"/><circle cx="250" cy="250" r="4"/><circle cx="370" cy="250" r="4"/></g><text x="40" y="300" fill="#7fe9dc" font-family="monospace" font-size="13">AREA SCHEDULE · m²</text>`),
  grid: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><rect x="60" y="70" width="140" height="90" stroke="#f6c886"/><rect x="220" y="70" width="90" height="90"/><rect x="60" y="180" width="90" height="90"/><rect x="170" y="180" width="140" height="90" stroke="#f6c886"/></g><g fill="#7fe9dc" font-family="monospace" font-size="12"><text x="68" y="92">A1</text><text x="228" y="92">A2</text><text x="68" y="202">A3</text><text x="178" y="202">A4</text></g><path d="M340 70v200M360 70h60M360 160h60M360 270h60" stroke="#f6c886" stroke-width="1.5" fill="none"/>`),
  doc: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><rect x="120" y="50" width="180" height="240" rx="6" fill="rgba(45,212,191,0.05)"/><path d="M150 90h120M150 120h120M150 150h90M150 180h120M150 210h70"/></g><rect x="250" y="170" width="120" height="120" rx="6" fill="rgba(246,200,134,0.08)" stroke="#f6c886" stroke-width="2"/><path d="M270 210h80M270 235h80M270 260h50" stroke="#f6c886" stroke-width="2" fill="none"/>`),
  ruler: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><rect x="50" y="140" width="380" height="60" rx="4"/>${Array.from({length: 19}, (_, i) => `<line x1="${60+i*20}" y1="140" x2="${60+i*20}" y2="${i%5===0?180:165}"/>`).join("")}</g><text x="50" y="230" fill="#f6c886" font-family="monospace" font-size="13">SCALE 1:100 · 1mm = 100mm</text>`),
  convert: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><rect x="60" y="120" width="130" height="100" rx="8"/><rect x="290" y="120" width="130" height="100" rx="8" stroke="#f6c886"/><path d="M200 150h70l-15-15M280 190h-70l15 15" stroke="#f6c886"/></g><text x="95" y="175" fill="#7fe9dc" font-family="monospace" font-size="16">ft²</text><text x="330" y="175" fill="#f6c886" font-family="monospace" font-size="16">m²</text>`),
  building: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><path d="M90 280V120l70-30v190M160 90l90 30v160M250 120l90 20v140"/><path d="M70 280h360"/></g><g stroke="#f6c886" stroke-width="1.5" fill="none">${[120,150,180,210,240].map((y)=>`<line x1="105" y1="${y}" x2="145" y2="${y}"/>`).join("")}${[150,180,210,240].map((y)=>`<line x1="185" y1="${y}" x2="235" y2="${y}"/>`).join("")}</g>`),
  stack: A(`<g fill="none" stroke="#7fe9dc" stroke-width="2"><path d="M240 70l120 50-120 50-120-50z"/><path d="M120 160l120 50 120-50M120 210l120 50 120-50" stroke="#f6c886"/></g>`)
};

/* ============================================================
   Helper builders for tool configs
   ============================================================ */
const num = (id, label, def, opt = {}) => ({ id, label, type: "number", default: String(def), step: opt.step || "any", min: opt.min, hint: opt.hint });
const sel = (id, label, options, def) => ({ id, label, type: "select", options, default: def ?? options[0] });
const out = (label, expr, opt = {}) => ({ label, expr, ...opt });

function calcPage(o) {
  return {
    slug: o.slug, layout: "tool", nav: "Tools", art: o.art || "blueprint",
    title: `${o.h1} — ${SITE.product}`, desc: o.desc, eyebrow: o.eyebrow || "Calculator",
    h1: o.h1, lede: o.lede, points: o.points, intro: o.intro,
    config: {
      title: o.h1, kind: o.kind || "calculator", fields: o.fields, data: o.data || {},
      engine: o.engine, examples: o.examples, faq: o.faq, limits: o.limits
    },
    related: o.related
  };
}

const ex = (a, b) => [{ title: a[0], body: a[1] }, { title: b[0], body: b[1] }];
const fq = (a, b) => [{ q: a[0], a: a[1] }, { q: b[0], a: b[1] }];

export const DEFAULT_LIMITS = [
  "Results are planning estimates — confirm against local codes, project standards, and supplier data before issue.",
  "Tools run entirely in your browser; nothing you type is uploaded or stored on a server.",
  "Advertising is kept clear of input controls and primary action buttons."
];

/* ============================================================
   TOOL PAGES — calculators
   ============================================================ */
const calculators = [
  calcPage({
    slug: "tools/room-area", h1: "Room Area Calculator", art: "blueprint",
    desc: "Calculate the floor area of one or many identical rooms from length and width, with a running project total.",
    lede: "Enter length and width to get area per room and a project total — ideal for quick takeoffs while you draft a plan.",
    points: [{ k: "Output", v: "m² / total" }, { k: "Mode", v: "Live" }],
    intro: "Architects and estimators use this to sanity-check room sizes against a brief before committing dimensions in CAD.",
    fields: [num("length", "Length (m)", 6, { hint: "Internal clear dimension" }), num("width", "Width (m)", 4), num("count", "Number of identical rooms", 1, { min: "0" })],
    engine: { chart: true,
      outputs: [out("Area per room", "length*width", { unit: "m²" }), out("Total area", "length*width*count", { unit: "m²" }), out("Total area", "length*width*count*10.7639", { unit: "ft²", secondary: true })],
      rules: [
        { if: "length*width < 5", text: "At {{length}}×{{width}} m this is a compact room — confirm it meets minimum habitable area rules." },
        { if: "length/width > 2.5 || width/length > 2.5", text: "The proportion is long and narrow; check furniture layout and circulation." }
      ], defaultAdvice: "Proportions look workable. Verify against the room brief and local minimum area rules." },
    examples: ex(["Brief check", "Compare drafted dimensions against the client's required area before you lock the grid."], ["Repeat rooms", "Set a count for identical hotel keys or classrooms to total the programme instantly."]),
    faq: fq(["What units does it use?", "Inputs are in metres; the tool also reports the imperial equivalent in square feet."], ["Can I total different rooms?", "Use the Area Schedule Builder for mixed rooms; this tool totals identical rooms via the count field."]),
    related: [{ slug: "tool", label: "Area Schedule Builder", sub: "Mixed-room takeoff", icon: "grid" }, { slug: "tools/area-unit-converter", label: "Area Unit Converter", sub: "m² ↔ ft² ↔ ping", icon: "convert" }, { slug: "tools/gross-net-area", label: "Gross to Net Area", sub: "Efficiency ratio", icon: "layers" }]
  }),
  calcPage({
    slug: "tools/gross-net-area", h1: "Gross to Net Area Calculator", art: "stack",
    desc: "Convert gross floor area to net usable area using an efficiency ratio, and see circulation and core losses.",
    lede: "Apply an efficiency factor to a gross area to estimate net usable space, circulation, and structure/core loss.",
    points: [{ k: "Typical office", v: "80–85%" }, { k: "Output", v: "Net m²" }],
    intro: "Space planners use the net-to-gross ratio early to test whether a floor plate can hold the required programme.",
    fields: [num("gross", "Gross floor area (m²)", 1000), num("efficiency", "Net efficiency (%)", 82, { min: "0", max: "100", hint: "Net / gross ratio" })],
    engine: { chart: true,
      outputs: [out("Net usable area", "gross*efficiency/100", { unit: "m²" }), out("Lost to core/circulation", "gross*(1-efficiency/100)", { unit: "m²" }), out("Loss factor", "100-efficiency", { format: "percent", secondary: true })],
      rules: [
        { if: "efficiency > 90", text: "An efficiency above 90% is optimistic — confirm cores, risers, and corridors are fully counted." },
        { if: "efficiency < 70", text: "Below 70% efficiency is low; look for oversized circulation or deep structural zones." }
      ] },
    examples: ex(["Feasibility", "Test if a 1,000 m² plate yields enough net area for the tenant headcount."], ["Benchmarking", "Compare efficiency between two plan options to pick the more rentable layout."]),
    faq: fq(["What efficiency should I use?", "Offices commonly run 80–85% net; residential and labs differ. Use project benchmarks."], ["Is this the BOMA method?", "It is a simplified ratio. For lease area follow BOMA/IPMS — see our standards guide."]),
    related: [{ slug: "tools/rentable-area", label: "Rentable Area Calculator", sub: "Load factor", icon: "cost" }, { slug: "guides/gross-vs-net-area", label: "Gross vs Net Area", sub: "Explained", icon: "doc" }, { slug: "guides/boma-standards", label: "BOMA Standards", sub: "Measurement guide", icon: "book" }]
  }),
  calcPage({
    slug: "tools/floor-area-ratio", h1: "Floor Area Ratio (FAR) Calculator", art: "building",
    desc: "Work out floor area ratio, plot coverage, and remaining buildable area from total floor area and plot size.",
    lede: "Divide total built floor area by plot area to get FAR (FSI), with plot coverage and headroom against a limit.",
    points: [{ k: "Also called", v: "FSI / FSR" }, { k: "Output", v: "Ratio" }],
    intro: "Developers test schemes against zoning FAR limits before paying for detailed design.",
    fields: [num("built", "Total built floor area (m²)", 2400), num("plot", "Plot / site area (m²)", 1000), num("footprint", "Building footprint (m²)", 600), num("limit", "Permitted FAR limit", 3, { hint: "From zoning bylaw" })],
    engine: {
      outputs: [out("Floor Area Ratio", "built/plot", { digits: 2 }), out("Plot coverage", "footprint/plot*100", { format: "percent" }), out("Remaining FAR area", "(limit-built/plot)*plot", { unit: "m²", secondary: true }), out("Headroom vs limit", "(limit - built/plot)/limit*100", { format: "percent", secondary: true })],
      rules: [
        { if: "built/plot > limit", text: "FAR of {{built}}/{{plot}} exceeds the {{limit}} limit — reduce floor area or seek a bonus." },
        { if: "built/plot <= limit", text: "Within the permitted FAR. You may have room to add area, subject to height and coverage limits." }
      ] },
    examples: ex(["Zoning test", "Check a massing study against the local FAR before refining the design."], ["Yield study", "See how much extra floor area the plot can still legally hold."]),
    faq: fq(["FAR vs FSI vs FSR?", "They are the same ratio under different regional names: built floor area ÷ plot area."], ["Does FAR include parking?", "It depends on the bylaw — many exclude basement parking. Confirm local definitions."]),
    related: [{ slug: "tools/buildable-area", label: "Buildable Area", sub: "After setbacks", icon: "plot" }, { slug: "tools/parking-spaces", label: "Parking Calculator", sub: "Required bays", icon: "parking" }]
  }),
  calcPage({
    slug: "tools/carpet-builtup-area", h1: "Carpet vs Built-up Area Calculator", art: "grid",
    desc: "Convert between carpet area, built-up area, and super built-up area using wall and common-area loading.",
    lede: "Translate carpet area to built-up and super built-up area using wall thickness and common-area loading factors.",
    points: [{ k: "Loading", v: "~25–35%" }, { k: "Output", v: "All three" }],
    intro: "Buyers and agents use this to compare quoted super built-up areas against actual usable carpet area.",
    fields: [num("carpet", "Carpet area (m²)", 90), num("wall", "Wall factor (%)", 8, { hint: "Built-up over carpet" }), num("common", "Common-area loading (%)", 20)],
    engine: {
      outputs: [out("Built-up area", "carpet*(1+wall/100)", { unit: "m²" }), out("Super built-up area", "carpet*(1+wall/100)*(1+common/100)", { unit: "m²" }), out("Total loading", "((1+wall/100)*(1+common/100)-1)*100", { format: "percent", secondary: true })],
      rules: [
        { if: "common > 35", text: "A {{common}}% loading is high — quoted super built-up area will far exceed usable carpet area." }
      ], defaultAdvice: "Compare the super built-up figure with the carpet area to judge real usable space." },
    examples: ex(["Purchase check", "See how much usable area sits behind a 'super built-up' quote."], ["Pricing", "Normalise per-m² prices to carpet area for a fair comparison."]),
    faq: fq(["What is carpet area?", "The net usable floor area within walls — the space you can actually lay carpet on."], ["Why does loading vary?", "It depends on shared lobbies, stairs, and amenities apportioned to each unit."]),
    related: [{ slug: "tools/gross-net-area", label: "Gross to Net Area", sub: "Efficiency", icon: "layers" }, { slug: "library/glossary", label: "Area Glossary", sub: "Terms", icon: "book" }]
  }),
  calcPage({
    slug: "tools/area-unit-converter", h1: "Area Unit Converter", art: "convert", kind: "convert",
    desc: "Convert area between square metres, square feet, square yards, acres, hectares, ping, and more.",
    lede: "Convert any area value across metric and imperial units — and ping — with a full comparison table.",
    points: [{ k: "Units", v: "9" }, { k: "Output", v: "Table" }],
    intro: "Keep one consistent unit across a drawing set by converting supplier and survey figures as you go.",
    fields: [num("value", "Value", 100, { wide: false }), sel("from", "From", ["Square metres (m²)", "Square feet (ft²)", "Square yards (yd²)", "Square inches (in²)", "Acres", "Hectares", "Square kilometres (km²)", "Ping (坪)", "Square miles (mi²)"], "Square metres (m²)"), sel("to", "To", ["Square feet (ft²)", "Square metres (m²)", "Square yards (yd²)", "Square inches (in²)", "Acres", "Hectares", "Square kilometres (km²)", "Ping (坪)", "Square miles (mi²)"], "Square feet (ft²)")],
    engine: { dimension: "area" },
    examples: ex(["Survey to metric", "Convert acres or hectares from a site survey into m² for area schedules."], ["Asia projects", "Convert ping to m² for floor plates in Taiwan and Japan."]),
    faq: fq(["How accurate is it?", "Conversions use exact SI factors (1 ft² = 0.09290304 m²) and 1 ping = 3.305785 m²."], ["Can I convert lengths too?", "This tool covers area units; use the Drawing Scale tool for length and scale work."]),
    related: [{ slug: "library/area-units", label: "Area Units Reference", sub: "Factors & notes", icon: "units" }, { slug: "tools/room-area", label: "Room Area Calculator", sub: "Quick takeoff", icon: "ruler" }]
  }),
  calcPage({
    slug: "tools/wall-paint", h1: "Wall Paint Calculator", art: "blueprint", eyebrow: "Estimator",
    desc: "Estimate paint quantity from wall area, openings, number of coats, and coverage per litre.",
    lede: "Work out how much paint a room needs from net wall area, coats, and the coverage rate on the tin.",
    points: [{ k: "Output", v: "Litres" }, { k: "Coats", v: "Adjustable" }],
    intro: "Site teams use this to order the right amount of paint and avoid mid-job shortfalls.",
    fields: [num("perimeter", "Wall perimeter (m)", 20), num("height", "Wall height (m)", 2.7), num("openings", "Openings to deduct (m²)", 4, { hint: "Doors + windows" }), num("coats", "Number of coats", 2, { min: "1" }), num("coverage", "Coverage (m² per litre)", 10)],
    engine: { chart: true,
      outputs: [out("Paintable area", "perimeter*height-openings", { unit: "m²" }), out("Paint required", "(perimeter*height-openings)*coats/coverage", { unit: "L" }), out("With 10% spare", "(perimeter*height-openings)*coats/coverage*1.1", { unit: "L", secondary: true })],
      defaultAdvice: "Round up to whole tins and keep a little spare for touch-ups." },
    examples: ex(["Single room", "Estimate litres for a repaint before a tenant handover."], ["Multiple coats", "Compare one vs two coats on a dark-to-light colour change."]),
    faq: fq(["What coverage should I use?", "Check the tin — emulsion is often 10–13 m²/L per coat; primer and textured paint cover less."], ["Should I deduct openings?", "Yes, subtract large doors and windows for a tighter estimate."]),
    related: [{ slug: "tools/flooring-estimator", label: "Flooring Estimator", sub: "Boxes needed", icon: "floor" }, { slug: "tools/tile-quantity", label: "Tile Quantity", sub: "Tiles + waste", icon: "tile" }]
  }),
  calcPage({
    slug: "tools/flooring-estimator", h1: "Flooring Material Estimator", art: "grid", eyebrow: "Estimator",
    desc: "Calculate flooring boxes or packs needed from floor area, coverage per box, and a wastage allowance.",
    lede: "Turn a floor area into the number of boxes or packs to order, including a cutting-waste allowance.",
    points: [{ k: "Waste", v: "Adjustable" }, { k: "Output", v: "Boxes" }],
    fields: [num("area", "Floor area (m²)", 40), num("boxCoverage", "Coverage per box (m²)", 2.2), num("wastage", "Wastage allowance (%)", 8, { hint: "Cuts and offcuts" })],
    engine: {
      outputs: [out("Area incl. waste", "area*(1+wastage/100)", { unit: "m²" }), out("Boxes to order", "Math.ceil(area*(1+wastage/100)/boxCoverage)", { format: "integer", unit: "boxes" }), out("Spare coverage", "Math.ceil(area*(1+wastage/100)/boxCoverage)*boxCoverage-area", { unit: "m²", secondary: true })],
      defaultAdvice: "Order full boxes and keep one spare for future repairs and dye-lot matching." },
    examples: ex(["Diagonal lay", "Increase wastage to 12–15% for diagonal or herringbone patterns."], ["Big rooms", "Estimate packs for an open-plan area in one pass."]),
    faq: fq(["How much wastage?", "8–10% for straight lay; 12–15% for diagonal, herringbone, or busy rooms."], ["Why keep spare?", "Future repairs need matching dye lots that may be unavailable later."]),
    related: [{ slug: "tools/tile-quantity", label: "Tile Quantity", sub: "Tiles + waste", icon: "tile" }, { slug: "tools/room-area", label: "Room Area", sub: "Get the area", icon: "ruler" }]
  }),
  calcPage({
    slug: "tools/tile-quantity", h1: "Tile Quantity Calculator", art: "grid", eyebrow: "Estimator",
    desc: "Find the number of tiles required from room area, tile size, and a wastage allowance.",
    lede: "Enter the room area and tile size to get the tile count, including a cutting allowance.",
    points: [{ k: "Output", v: "Tiles" }, { k: "Sizes", v: "Any" }],
    fields: [num("area", "Area to tile (m²)", 12), num("tileW", "Tile width (mm)", 600), num("tileL", "Tile length (mm)", 600), num("wastage", "Wastage (%)", 10)],
    engine: {
      outputs: [out("Tile area", "tileW*tileL/1000000", { unit: "m²", digits: 3 }), out("Tiles required", "Math.ceil(area*(1+wastage/100)/(tileW*tileL/1000000))", { format: "integer", unit: "tiles" }), out("Area incl. waste", "area*(1+wastage/100)", { unit: "m²", secondary: true })],
      defaultAdvice: "Buy from the same batch number so colour and calibration match." },
    examples: ex(["Bathroom", "Estimate floor and wall tiles separately for a wet room."], ["Large format", "See how few 600×600 tiles cover an open floor."]),
    faq: fq(["Floor and wall together?", "Calculate each surface separately, then add the totals."], ["What about grout lines?", "Grout joints are small; the wastage allowance comfortably covers them."]),
    related: [{ slug: "tools/flooring-estimator", label: "Flooring Estimator", sub: "Boxes", icon: "floor" }, { slug: "tools/wall-paint", label: "Wall Paint", sub: "Litres", icon: "paint" }]
  }),
  calcPage({
    slug: "tools/occupancy-load", h1: "Occupancy Load Calculator", art: "building", eyebrow: "Code check",
    desc: "Estimate the occupant load of a space from its area and an occupancy load factor.",
    lede: "Divide floor area by an occupancy load factor to estimate how many people a space is rated for.",
    points: [{ k: "Drives", v: "Egress" }, { k: "Output", v: "People" }],
    intro: "Occupant load feeds egress width, exit count, and sanitary fixture requirements in most codes.",
    fields: [num("area", "Floor area (m²)", 200), sel("use", "Occupancy type", ["Office (9.3 m²/p)", "Assembly seated (0.65 m²/p)", "Assembly standing (0.28 m²/p)", "Retail (2.8 m²/p)", "Classroom (1.9 m²/p)", "Custom"], "Office (9.3 m²/p)"), num("factor", "Custom load factor (m²/person)", 9.3, { hint: "Used when type = Custom" })],
    engine: {
      outputs: [out("Occupant load", "Math.floor(area / (use=='Custom'? factor : use=='Assembly seated (0.65 m²/p)'?0.65: use=='Assembly standing (0.28 m²/p)'?0.28: use=='Retail (2.8 m²/p)'?2.8: use=='Classroom (1.9 m²/p)'?1.9:9.3))", { format: "integer", unit: "people" }), out("Area per person used", "(use=='Custom'? factor : use=='Assembly seated (0.65 m²/p)'?0.65: use=='Assembly standing (0.28 m²/p)'?0.28: use=='Retail (2.8 m²/p)'?2.8: use=='Classroom (1.9 m²/p)'?1.9:9.3)", { unit: "m²/p", secondary: true })],
      defaultAdvice: "Load factors vary by code (IBC, local). Confirm the exact factor for your jurisdiction." },
    examples: ex(["Egress sizing", "Get the occupant load that drives required exit width and count."], ["Assembly", "Switch to assembly factors for halls and event spaces."]),
    faq: fq(["Which code is this?", "Factors are typical IBC-style values; always confirm against your adopted code."], ["Net or gross area?", "Many factors use net floor area — exclude thick walls, shafts, and cores."]),
    related: [{ slug: "tools/egress-width", label: "Egress Width", sub: "Exit sizing", icon: "ramp" }, { slug: "tools/parking-spaces", label: "Parking Calculator", sub: "Bays", icon: "parking" }]
  }),
  calcPage({
    slug: "tools/parking-spaces", h1: "Parking Space Calculator", art: "building", eyebrow: "Planning",
    desc: "Estimate required parking spaces and parking area from floor area and a provision ratio.",
    lede: "Apply a parking ratio to floor area to estimate the number of bays and the parking footprint needed.",
    points: [{ k: "Output", v: "Bays" }, { k: "Bay area", v: "~25 m²" }],
    fields: [num("floor", "Gross floor area (m²)", 5000), num("ratio", "Spaces per 100 m²", 2, { hint: "From planning code" }), num("bayArea", "Area per space incl. aisle (m²)", 25)],
    engine: {
      outputs: [out("Spaces required", "Math.ceil(floor/100*ratio)", { format: "integer", unit: "bays" }), out("Parking area needed", "Math.ceil(floor/100*ratio)*bayArea", { unit: "m²" }), out("Accessible bays (≈5%)", "Math.ceil(Math.ceil(floor/100*ratio)*0.05)", { format: "integer", unit: "bays", secondary: true })],
      defaultAdvice: "Provision ratios vary widely by city and land use — confirm the local standard." },
    examples: ex(["Mixed use", "Estimate bays per land-use ratio early in a feasibility study."], ["Area budget", "See how much site area the required parking will consume."]),
    faq: fq(["What ratio to use?", "Ratios differ by city and use class; some areas now set maximums, not minimums."], ["Why 25 m² a bay?", "A bay plus its share of aisle is roughly 23–28 m² in a surface lot."]),
    related: [{ slug: "tools/floor-area-ratio", label: "FAR Calculator", sub: "Density", icon: "building" }, { slug: "tools/buildable-area", label: "Buildable Area", sub: "Site limits", icon: "plot" }]
  }),
  calcPage({
    slug: "tools/concrete-slab", h1: "Concrete Slab Volume Calculator", art: "stack", eyebrow: "Estimator",
    desc: "Calculate concrete volume for a slab from length, width, and thickness, with ready-mix loads.",
    lede: "Get the concrete volume for a slab or foundation and the number of ready-mix truck loads.",
    points: [{ k: "Output", v: "m³" }, { k: "Truck", v: "6 m³" }],
    fields: [num("length", "Length (m)", 8), num("width", "Width (m)", 5), num("thickness", "Thickness (mm)", 150), num("waste", "Waste allowance (%)", 5)],
    engine: { chart: true,
      outputs: [out("Concrete volume", "length*width*thickness/1000*(1+waste/100)", { unit: "m³" }), out("Truck loads (6 m³)", "Math.ceil(length*width*thickness/1000*(1+waste/100)/6)", { format: "integer", unit: "loads" }), out("Cement bags (≈7/m³)", "Math.ceil(length*width*thickness/1000*(1+waste/100)*7)", { format: "integer", unit: "bags", secondary: true })],
      defaultAdvice: "Confirm mix design and thickness with the structural engineer before ordering." },
    examples: ex(["Ground slab", "Estimate a 150 mm slab-on-grade pour."], ["Order check", "Convert volume into truck loads to schedule delivery."]),
    faq: fq(["Why a waste allowance?", "Sub-grade irregularity, spillage, and over-excavation add a few percent."], ["Bags or ready-mix?", "Small pours can use bags; large slabs are cheaper and faster with ready-mix."]),
    related: [{ slug: "tools/excavation-volume", label: "Excavation Volume", sub: "Dig + cart", icon: "dig" }, { slug: "tools/room-area", label: "Room Area", sub: "Plan area", icon: "ruler" }]
  }),
  calcPage({
    slug: "tools/roof-area", h1: "Roof Area Calculator", art: "roof", eyebrow: "Estimator",
    desc: "Convert a roof plan (footprint) area into true sloped roof area using the roof pitch.",
    lede: "Turn the plan footprint into the actual sloped roof surface area using pitch in degrees.",
    points: [{ k: "Input", v: "Pitch°" }, { k: "Output", v: "True m²" }],
    fields: [num("footprint", "Roof plan area (m²)", 120), num("pitch", "Roof pitch (degrees)", 25, { min: "0", max: "85" }), num("waste", "Material waste (%)", 10)],
    engine: {
      outputs: [out("True roof area", "footprint/Math.cos(pitch*Math.PI/180)", { unit: "m²" }), out("Slope factor", "1/Math.cos(pitch*Math.PI/180)", { digits: 3, secondary: true }), out("Material incl. waste", "footprint/Math.cos(pitch*Math.PI/180)*(1+waste/100)", { unit: "m²" })],
      rules: [{ if: "pitch >= 45", text: "A steep {{pitch}}° pitch adds significant area and may need extra fixings and edge details." }], defaultAdvice: "The plan area always understates a pitched roof — order to the true sloped area." },
    examples: ex(["Reroof", "Estimate tiles or membrane to the true sloped area, not the plan area."], ["Solar", "Use true area to size a rooftop array footprint."]),
    faq: fq(["Why is plan area too small?", "A pitched plane is longer than its horizontal projection; divide by cos(pitch)."], ["Pitch in ratio?", "Convert rise:run to degrees first, or use the ramp/slope tool to get the angle."]),
    related: [{ slug: "tools/ramp-slope", label: "Ramp & Slope", sub: "Angle from rise", icon: "ramp" }, { slug: "tools/flooring-estimator", label: "Material Estimator", sub: "Packs", icon: "floor" }]
  }),
  calcPage({
    slug: "tools/window-wall-ratio", h1: "Window-to-Wall Ratio Calculator", art: "blueprint", eyebrow: "Performance",
    desc: "Calculate window-to-wall ratio (WWR) from glazing area and gross wall area for facade and energy checks.",
    lede: "Divide glazing area by gross facade area to get window-to-wall ratio — a key energy and daylight metric.",
    points: [{ k: "Typical", v: "30–45%" }, { k: "Output", v: "WWR %" }],
    fields: [num("glazing", "Total glazing area (m²)", 60), num("wall", "Gross external wall area (m²)", 200)],
    engine: {
      outputs: [out("Window-to-wall ratio", "glazing/wall*100", { format: "percent" }), out("Solid wall area", "wall-glazing", { unit: "m²", secondary: true })],
      rules: [{ if: "glazing/wall*100 > 60", text: "Above 60% WWR usually needs high-performance glazing and shading to manage heat gain." }, { if: "glazing/wall*100 < 20", text: "Below 20% WWR may under-light interiors; check daylight factor." }], defaultAdvice: "Balance daylight, views, and thermal performance — many codes cap WWR or require trade-offs." },
    examples: ex(["Energy model", "Provide WWR to the energy consultant for early facade decisions."], ["Code check", "Test a curtain-wall concept against prescriptive WWR limits."]),
    faq: fq(["Gross or net wall?", "WWR typically uses gross facade area including the glazing itself."], ["Per facade or whole building?", "Both are useful — orientation-specific WWR matters for solar gain."]),
    related: [{ slug: "tools/hvac-load", label: "HVAC Load", sub: "Cooling estimate", icon: "hvac" }, { slug: "tools/lighting-load", label: "Lighting Load", sub: "Watts", icon: "light" }]
  }),
  calcPage({
    slug: "tools/cost-per-sqft", h1: "Cost per Square Foot Calculator", art: "convert", eyebrow: "Budgeting",
    desc: "Calculate construction or rent cost per square foot and per square metre from a total and an area.",
    lede: "Split a total cost across area to get cost per ft² and per m² — or back-calculate a budget from a rate.",
    points: [{ k: "Output", v: "$/ft² · $/m²" }],
    fields: [num("total", "Total cost ($)", 500000), num("area", "Area (ft²)", 2500)],
    engine: {
      outputs: [out("Cost per ft²", "total/area", { format: "money" }), out("Cost per m²", "total/area*10.7639", { format: "money" }), out("Annual at 5% yield", "total*0.05", { format: "money", secondary: true })],
      defaultAdvice: "Use consistent area definitions (gross vs net) when comparing rates between projects." },
    examples: ex(["Benchmark", "Compare a quote against typical $/ft² for the building type."], ["Lease", "Convert an annual rent into $/ft² and $/m² for comparison."]),
    faq: fq(["ft² or m²?", "The tool reports both; just keep the area-basis consistent across projects."], ["Net or gross area?", "State which you used — rates differ a lot between net usable and gross."]),
    related: [{ slug: "tools/rentable-area", label: "Rentable Area", sub: "Load factor", icon: "cost" }, { slug: "tools/area-unit-converter", label: "Area Converter", sub: "Units", icon: "convert" }]
  }),
  calcPage({
    slug: "tools/rentable-area", h1: "Rentable Area Calculator", art: "stack", eyebrow: "Leasing",
    desc: "Convert usable area to rentable area using a load factor (add-on factor) for commercial leases.",
    lede: "Apply a load factor to usable area to get rentable area, the basis most commercial leases charge on.",
    points: [{ k: "Load factor", v: "10–20%" }, { k: "Output", v: "Rentable m²" }],
    fields: [num("usable", "Usable area (m²)", 800), num("load", "Load / add-on factor (%)", 15)],
    engine: {
      outputs: [out("Rentable area", "usable*(1+load/100)", { unit: "m²" }), out("Common-area share", "usable*load/100", { unit: "m²", secondary: true }), out("R/U ratio", "1+load/100", { digits: 3, secondary: true })],
      rules: [{ if: "load > 25", text: "A load factor above 25% is high — tenants pay for a large common-area share." }], defaultAdvice: "Confirm whether the lease uses BOMA, IPMS, or a local measurement standard." },
    examples: ex(["Lease math", "Translate a usable fit-out area into the rentable area you'll be billed for."], ["Comparison", "Compare two buildings with different load factors on equal footing."]),
    faq: fq(["What is a load factor?", "The ratio of rentable to usable area, covering shared lobbies, corridors, and cores."], ["Is it the same as efficiency?", "It's the inverse idea — high efficiency means a low load factor."]),
    related: [{ slug: "tools/gross-net-area", label: "Gross to Net", sub: "Efficiency", icon: "layers" }, { slug: "guides/boma-standards", label: "BOMA Standards", sub: "Guide", icon: "book" }]
  }),
  calcPage({
    slug: "tools/lighting-load", h1: "Lighting Load Calculator", art: "blueprint", eyebrow: "Services",
    desc: "Estimate total lighting load and fixture count from area, watts per square metre, and fixture wattage.",
    lede: "Estimate connected lighting load and the number of fixtures from area and a power-density target.",
    points: [{ k: "Input", v: "W/m²" }, { k: "Output", v: "Fixtures" }],
    fields: [num("area", "Area (m²)", 100), num("density", "Power density (W/m²)", 10, { hint: "LED office ≈ 8–11" }), num("fixture", "Watts per fixture", 36)],
    engine: {
      outputs: [out("Total lighting load", "area*density", { unit: "W" }), out("Fixtures required", "Math.ceil(area*density/fixture)", { format: "integer", unit: "fixtures" }), out("Load per fixture area", "area/Math.max(1,Math.ceil(area*density/fixture))", { unit: "m²/fix", secondary: true })],
      defaultAdvice: "Confirm against a proper lux calculation; power density is a planning shortcut only." },
    examples: ex(["Early budget", "Size the lighting circuit load before a detailed photometric design."], ["Fixture count", "Get a quick luminaire count for a regular grid layout."]),
    faq: fq(["Is this a lux calc?", "No — it's a power-density estimate. Use lighting software for accurate lux levels."], ["What density to use?", "Modern LED offices often target 8–11 W/m²; check the energy code limit."]),
    related: [{ slug: "tools/hvac-load", label: "HVAC Load", sub: "Cooling", icon: "hvac" }, { slug: "tools/window-wall-ratio", label: "Window-Wall Ratio", sub: "Daylight", icon: "window" }]
  }),
  calcPage({
    slug: "tools/hvac-load", h1: "HVAC Cooling Load Estimator", art: "stack", eyebrow: "Services",
    desc: "Rough-size air-conditioning capacity in kW, tons, and BTU/h from floor area and a cooling density.",
    lede: "Get a first-pass cooling capacity in kW, refrigeration tons, and BTU/h from area and a load density.",
    points: [{ k: "Output", v: "kW · tons" }],
    fields: [num("area", "Conditioned area (m²)", 150), num("density", "Cooling density (W/m²)", 120, { hint: "Office ≈ 100–150" })],
    engine: { chart: true,
      outputs: [out("Cooling load", "area*density/1000", { unit: "kW" }), out("Refrigeration tons", "area*density/3517", { unit: "tons" }), out("BTU per hour", "area*density*3.412", { format: "integer", unit: "BTU/h", secondary: true })],
      rules: [{ if: "density > 180", text: "Above 180 W/m² suggests a high internal load (data, kitchen) — verify with a full load calc." }], defaultAdvice: "This is an early sizing aid; a mechanical engineer must do the detailed load calculation." },
    examples: ex(["Concept sizing", "Size a split or VRF system at concept stage before detailed loads."], ["Sanity check", "Compare a quoted capacity against a rule-of-thumb estimate."]),
    faq: fq(["How accurate is this?", "It's a rough rule of thumb; orientation, glazing, and internal gains change the real load."], ["What is a ton?", "One refrigeration ton ≈ 3.517 kW of cooling, ≈ 12,000 BTU/h."]),
    related: [{ slug: "tools/lighting-load", label: "Lighting Load", sub: "Internal gain", icon: "light" }, { slug: "tools/window-wall-ratio", label: "Window-Wall Ratio", sub: "Solar gain", icon: "window" }]
  }),
  calcPage({
    slug: "tools/drawing-scale", h1: "Drawing Scale Calculator", art: "ruler", eyebrow: "Drafting",
    desc: "Convert between real-world dimensions and paper sizes at any architectural drawing scale.",
    lede: "Convert a real length to its size on paper at a chosen scale, and back again — for any drawing scale.",
    points: [{ k: "Scales", v: "Any 1:n" }, { k: "Output", v: "Paper mm" }],
    fields: [num("real", "Real length (mm)", 5000), sel("scale", "Scale 1:n", ["1", "5", "10", "20", "50", "100", "200", "500", "1000"], "100"), num("paper", "Paper length to reverse (mm)", 50, { hint: "Used for paper → real" })],
    engine: {
      outputs: [out("Length on paper", "real/Number(scale)", { unit: "mm" }), out("Paper length back to real", "paper*Number(scale)/1000", { unit: "m" }), out("Scale ratio", "Number(scale)", { format: "ratio", secondary: true })],
      defaultAdvice: "Always state the scale on the sheet and add a graphic scale bar in case of reprinting." },
    examples: ex(["Plot check", "Confirm a wall will fit on the sheet at 1:100 before plotting."], ["Reverse scale", "Measure a printed drawing and recover the real dimension."]),
    faq: fq(["Metric only?", "Inputs are metric mm; the ratio works the same for any unit you keep consistent."], ["Why a scale bar?", "PDF reprints rescale; a graphic scale bar stays correct when the ratio is lost."]),
    related: [{ slug: "library/architectural-scales", label: "Scales Reference", sub: "Common scales", icon: "scale" }, { slug: "library/paper-sizes", label: "Paper Sizes", sub: "ISO & ANSI", icon: "paper" }]
  }),
  calcPage({
    slug: "tools/buildable-area", h1: "Buildable Area Calculator", art: "plot", eyebrow: "Planning",
    desc: "Calculate the buildable envelope and site coverage after applying front, rear, and side setbacks.",
    lede: "Subtract setbacks from a rectangular plot to find the buildable footprint and the site coverage it allows.",
    points: [{ k: "Output", v: "Footprint" }, { k: "Coverage", v: "%" }],
    fields: [num("plotW", "Plot width (m)", 20), num("plotL", "Plot depth (m)", 30), num("front", "Front setback (m)", 5), num("rear", "Rear setback (m)", 3), num("side", "Each side setback (m)", 1.5)],
    engine: {
      outputs: [out("Buildable width", "plotW-2*side", { unit: "m", secondary: true }), out("Buildable depth", "plotL-front-rear", { unit: "m", secondary: true }), out("Buildable footprint", "Math.max(0,(plotW-2*side))*Math.max(0,(plotL-front-rear))", { unit: "m²" }), out("Site coverage", "Math.max(0,(plotW-2*side))*Math.max(0,(plotL-front-rear))/(plotW*plotL)*100", { format: "percent" })],
      rules: [{ if: "(plotW-2*side)<=0 || (plotL-front-rear)<=0", text: "Setbacks exceed the plot — no buildable area remains. Reduce setbacks or check inputs." }], defaultAdvice: "Confirm setback rules and any easements with the local planning authority." },
    examples: ex(["Massing", "Find the maximum footprint before testing FAR and height."], ["Feasibility", "Check whether a plot can hold the required footprint after setbacks."]),
    faq: fq(["Only rectangular plots?", "This assumes a rectangular plot; irregular sites need the polygon area tool."], ["Does it include height?", "No — combine with FAR and height limits for the full envelope."]),
    related: [{ slug: "tools/floor-area-ratio", label: "FAR Calculator", sub: "Density", icon: "building" }, { slug: "tools/polygon-area", label: "Polygon Area", sub: "Irregular plots", icon: "polygon" }]
  }),
  calcPage({
    slug: "tools/egress-width", h1: "Egress Width Calculator", art: "ramp", eyebrow: "Code check",
    desc: "Estimate required egress and door width from occupant load using a width-per-occupant factor.",
    lede: "Multiply occupant load by a width-per-person factor to estimate required total egress width.",
    points: [{ k: "Drives", v: "Doors/stairs" }, { k: "Output", v: "mm" }],
    fields: [num("occupants", "Occupant load (people)", 120), num("factor", "Width per occupant (mm)", 5, { hint: "Level egress ≈ 5; stairs ≈ 7.6" }), num("minDoor", "Min clear door width (mm)", 850)],
    engine: {
      outputs: [out("Required egress width", "occupants*factor", { unit: "mm" }), out("Equivalent exit doors", "Math.max(2,Math.ceil(occupants*factor/minDoor))", { format: "integer", unit: "doors" }), out("Width per door", "occupants*factor/Math.max(2,Math.ceil(occupants*factor/minDoor))", { unit: "mm", secondary: true })],
      defaultAdvice: "Most codes require at least two exits and set minimum widths — confirm the adopted code." },
    examples: ex(["Exit sizing", "Translate occupant load into total egress width and door count."], ["Stairs", "Use the higher stair factor to size escape stairs."]),
    faq: fq(["Where does occupant load come from?", "From the occupancy load calculator or the code's area-per-person factors."], ["Two exits always?", "Most spaces above a threshold need at least two remote exits — check the code."]),
    related: [{ slug: "tools/occupancy-load", label: "Occupancy Load", sub: "People", icon: "building" }, { slug: "tools/stair-calculator", label: "Stair Calculator", sub: "Risers & going", icon: "stairs" }]
  }),
  calcPage({
    slug: "tools/stair-calculator", h1: "Staircase Calculator", art: "stairs", eyebrow: "Detailing",
    desc: "Calculate riser count, riser height, tread going, and total run for a staircase from the floor height.",
    lede: "Enter the floor-to-floor height and targets to get the number of risers, exact riser height, and total run.",
    points: [{ k: "Output", v: "Risers · run" }],
    fields: [num("height", "Floor-to-floor height (mm)", 3000), num("riser", "Target riser height (mm)", 175), num("going", "Tread going (mm)", 280)],
    engine: {
      outputs: [out("Number of risers", "Math.round(height/riser)", { format: "integer" }), out("Actual riser height", "height/Math.round(height/riser)", { unit: "mm", digits: 1 }), out("Number of treads", "Math.round(height/riser)-1", { format: "integer", secondary: true }), out("Total going (run)", "(Math.round(height/riser)-1)*going", { unit: "mm" })],
      rules: [{ if: "height/Math.round(height/riser) > 190", text: "Riser height exceeds ~190 mm — add a riser for a more comfortable, code-compliant stair." }, { if: "2*(height/Math.round(height/riser))+going < 550 || 2*(height/Math.round(height/riser))+going > 700", text: "2R+G is outside the comfortable 550–700 mm range; adjust riser or going." }], defaultAdvice: "Check the 2R+G rule and local limits on maximum riser and minimum going." },
    examples: ex(["Stair design", "Set out a domestic or commercial stair from the floor height."], ["Comfort check", "Test the 2R+G rule for a comfortable rhythm."]),
    faq: fq(["What is 2R+G?", "Twice the riser plus the going should sit around 600–640 mm for comfort."], ["Equal risers?", "Yes — all risers in a flight must be equal; the tool divides the height evenly."]),
    related: [{ slug: "tools/ramp-slope", label: "Ramp & Slope", sub: "Accessible routes", icon: "ramp" }, { slug: "tools/egress-width", label: "Egress Width", sub: "Escape stairs", icon: "ramp" }]
  }),
  calcPage({
    slug: "tools/ramp-slope", h1: "Ramp Slope Calculator", art: "ramp", eyebrow: "Accessibility",
    desc: "Calculate ramp slope as a percentage and gradient ratio from rise and run, with accessibility checks.",
    lede: "Enter rise and run to get slope percentage, gradient ratio, and a quick accessibility compliance check.",
    points: [{ k: "Target", v: "≤ 1:12" }, { k: "Output", v: "% · ratio" }],
    fields: [num("rise", "Rise / height (mm)", 500), num("run", "Run / horizontal length (mm)", 6000)],
    engine: {
      outputs: [out("Slope", "rise/run*100", { format: "percent" }), out("Gradient ratio", "run/rise", { format: "ratio" }), out("Ramp length", "Math.sqrt(rise*rise+run*run)/1000", { unit: "m", secondary: true })],
      rules: [{ if: "run/rise < 12", text: "Steeper than 1:12 — most accessibility codes require 1:12 or gentler for wheelchair ramps." }, { if: "run/rise >= 12 && run/rise < 20", text: "Between 1:12 and 1:20 — acceptable for short accessible ramps; add landings on long runs." }], defaultAdvice: "Long ramps need intermediate landings; confirm the maximum rise per flight in your code." },
    examples: ex(["Accessible ramp", "Check a proposed ramp against the 1:12 accessibility limit."], ["Roof pitch", "Convert rise:run into a slope angle for roofing."]),
    faq: fq(["What slope is accessible?", "1:12 (8.33%) is a common maximum; 1:20 or gentler avoids handrail requirements in some codes."], ["Do I need landings?", "Yes, ramps need level landings at intervals and at direction changes."]),
    related: [{ slug: "tools/stair-calculator", label: "Stair Calculator", sub: "Risers", icon: "stairs" }, { slug: "tools/roof-area", label: "Roof Area", sub: "Pitch", icon: "roof" }]
  }),
  calcPage({
    slug: "tools/excavation-volume", h1: "Excavation Volume Calculator", art: "stack", eyebrow: "Earthworks",
    desc: "Calculate excavation volume and the number of truck loads, including a soil bulking (swell) factor.",
    lede: "Get the bank volume to excavate plus the loose (bulked) volume and truck loads to cart away.",
    points: [{ k: "Output", v: "m³ · loads" }],
    fields: [num("length", "Length (m)", 10), num("width", "Width (m)", 6), num("depth", "Depth (m)", 1.5), num("bulking", "Bulking / swell (%)", 25), num("truck", "Truck capacity (m³)", 10)],
    engine: { chart: true,
      outputs: [out("Bank volume (in-situ)", "length*width*depth", { unit: "m³" }), out("Loose volume (bulked)", "length*width*depth*(1+bulking/100)", { unit: "m³" }), out("Truck loads", "Math.ceil(length*width*depth*(1+bulking/100)/truck)", { format: "integer", unit: "loads" })],
      defaultAdvice: "Soil swells when dug out — order disposal to the loose volume, not the bank volume." },
    examples: ex(["Basement dig", "Estimate spoil volume and cartage for a foundation excavation."], ["Disposal", "Convert bulked volume into truck loads for a haulage quote."]),
    faq: fq(["What is bulking?", "Excavated soil expands (swells) 10–40% depending on type, so loose volume exceeds bank volume."], ["Bank or loose for trucks?", "Use the loose volume — that's what actually fills the trucks."]),
    related: [{ slug: "tools/concrete-slab", label: "Concrete Slab", sub: "Pour volume", icon: "concrete" }, { slug: "tools/polygon-area", label: "Polygon Area", sub: "Irregular cuts", icon: "polygon" }]
  }),
  calcPage({
    slug: "tools/polygon-area", h1: "Polygon Area Calculator", art: "plot", kind: "geometry", eyebrow: "Geometry",
    desc: "Calculate the area and perimeter of any polygon from a list of X,Y coordinates using the shoelace formula.",
    lede: "Paste vertex coordinates from a survey or CAD plan to get the enclosed area and perimeter of any shape.",
    points: [{ k: "Method", v: "Shoelace" }, { k: "Output", v: "Area · perimeter" }],
    intro: "Surveyors and planners use coordinate area to verify irregular plots that simple length×width can't capture.",
    fields: [{ id: "points", label: "Vertices — one X,Y per line (in order)", type: "textarea", rows: 8, default: "0,0\n20,0\n20,15\n10,25\n0,15", hint: "Closes automatically" }, sel("unit", "Coordinate unit", ["m", "ft", "mm"], "m")],
    engine: {},
    examples: ex(["Irregular plot", "Find the true area of an L-shaped or angled site from survey points."], ["CAD check", "Verify a polyline area exported as coordinates."]),
    faq: fq(["What order for points?", "List vertices in sequence around the boundary; clockwise or anticlockwise both work."], ["Do I close the loop?", "No need — the last point connects back to the first automatically."]),
    related: [{ slug: "tools/buildable-area", label: "Buildable Area", sub: "Setbacks", icon: "plot" }, { slug: "tools/area-unit-converter", label: "Area Converter", sub: "Units", icon: "convert" }]
  })
];

/* ============================================================
   TOOL PAGES — schedules & builders
   ============================================================ */
const schedColumns = (cols, qtyIndex, money) => ({ columns: cols, qtyIndex, costIndex: money ? qtyIndex + 1 : -1, money: !!money });

const schedules = [
  calcPage({
    slug: "tools/door-schedule", h1: "Door Schedule Builder", art: "doc", eyebrow: "Schedule", kind: "schedule",
    desc: "Build a door schedule from a simple comma list — IDs, sizes, types, fire ratings — and export to CSV.",
    lede: "Type one door per line and get a clean, numbered door schedule with totals and gap warnings, ready to export.",
    points: [{ k: "Export", v: "CSV" }, { k: "Output", v: "Schedule" }],
    fields: [{ id: "rows", label: "One door per line: ID, Width, Height, Type, Fire rating, Qty", type: "textarea", rows: 8, default: "D01,900,2100,Single timber,FD30,4\nD02,1800,2100,Double glazed,—,2\nD03,1000,2100,Accessible,FD60,1" }],
    engine: schedColumns(["Door ID", "Width (mm)", "Height (mm)", "Type", "Fire rating", "Qty"], 5, false),
    examples: ex(["Drawing issue", "Generate the door schedule block for a GA drawing."], ["Quantity check", "Total the door count across types for procurement."]),
    faq: fq(["Can I export?", "Yes — Download writes a CSV you can open in Excel; Copy puts CSV on the clipboard."], ["What do warnings mean?", "They flag rows missing a field so the schedule stays complete."]),
    related: [{ slug: "tools/window-schedule", label: "Window Schedule", sub: "Glazing", icon: "window" }, { slug: "tools/finish-schedule", label: "Finish Schedule", sub: "Room finishes", icon: "finish" }]
  }),
  calcPage({
    slug: "tools/window-schedule", h1: "Window Schedule Builder", art: "doc", eyebrow: "Schedule", kind: "schedule",
    desc: "Create a window schedule from a comma list including sizes, glazing type, operation, and quantities.",
    lede: "List windows one per line to produce a numbered window schedule with quantity totals and a CSV export.",
    points: [{ k: "Export", v: "CSV" }],
    fields: [{ id: "rows", label: "One window per line: ID, Width, Height, Glazing, Operation, Qty", type: "textarea", rows: 8, default: "W01,1200,1500,Double,Casement,6\nW02,600,900,Double,Fixed,4\nW03,2400,1500,Triple,Sliding,2" }],
    engine: schedColumns(["Window ID", "Width (mm)", "Height (mm)", "Glazing", "Operation", "Qty"], 5, false),
    examples: ex(["Facade set", "Build the window schedule that pairs with your elevations."], ["Performance", "Track glazing type per window for the energy report."]),
    faq: fq(["U-values too?", "Add a column to the header line in the field label and to each row as needed."], ["How are totals made?", "The Qty column is summed; other columns are listed verbatim."]),
    related: [{ slug: "tools/door-schedule", label: "Door Schedule", sub: "Doors", icon: "door" }, { slug: "tools/window-wall-ratio", label: "Window-Wall Ratio", sub: "Glazing %", icon: "window" }]
  }),
  calcPage({
    slug: "tools/finish-schedule", h1: "Room Finish Schedule Builder", art: "grid", eyebrow: "Schedule", kind: "schedule",
    desc: "Generate a room finish schedule listing floor, wall, ceiling, and skirting finishes per room.",
    lede: "Enter one room per line to build a finish schedule covering floor, wall, ceiling, and skirting finishes.",
    points: [{ k: "Export", v: "CSV" }],
    fields: [{ id: "rows", label: "One room per line: Room, Floor, Wall, Ceiling, Skirting", type: "textarea", rows: 8, default: "Lobby,Polished concrete,Paint,Plasterboard,Aluminium\nOffice,Carpet tile,Paint,Acoustic tile,Timber\nWC,Ceramic tile,Ceramic tile,Moisture board,Tile" }],
    engine: schedColumns(["Room", "Floor", "Wall", "Ceiling", "Skirting"], -1, false),
    examples: ex(["Fit-out", "Coordinate finishes room by room for a tenant fit-out."], ["Spec link", "List finish codes that map to the specification."]),
    faq: fq(["Add finish codes?", "Include a code column on the header line and each row to map to specs."], ["Per zone?", "Group rooms by floor or zone by ordering the lines accordingly."]),
    related: [{ slug: "tools/room-data-sheet", label: "Room Data Sheet", sub: "Per-room brief", icon: "doc" }, { slug: "library/cad-layer-standards", label: "Layer Standards", sub: "Organise CAD", icon: "layers" }]
  }),
  calcPage({
    slug: "tools/drawing-register", h1: "Drawing Register Builder", art: "doc", eyebrow: "Document control", kind: "schedule",
    desc: "Maintain a drawing register / sheet list with numbers, titles, scales, revisions, and status.",
    lede: "Keep a tidy drawing register: sheet number, title, scale, revision, and status — exportable to CSV.",
    points: [{ k: "Export", v: "CSV" }],
    fields: [{ id: "rows", label: "One sheet per line: Sheet No, Title, Scale, Rev, Status", type: "textarea", rows: 8, default: "A-100,Site Plan,1:500,P3,For approval\nA-201,Ground Floor Plan,1:100,C1,Construction\nA-301,Sections,1:100,P2,Preliminary" }],
    engine: schedColumns(["Sheet No", "Title", "Scale", "Rev", "Status"], -1, false),
    examples: ex(["Issue sheet", "Produce the register that accompanies a drawing issue."], ["Audit", "Track revision and status across the whole set."]),
    faq: fq(["Suitable for BIM?", "It's a lightweight register; large projects should use CDE document control."], ["Sort order?", "Order lines by discipline and sheet number for a readable register."]),
    related: [{ slug: "tools/revision-schedule", label: "Revision Schedule", sub: "Change log", icon: "revision" }, { slug: "library/file-formats", label: "File Formats", sub: "DWG/DXF/PDF", icon: "file" }]
  }),
  calcPage({
    slug: "tools/revision-schedule", h1: "Revision Schedule Builder", art: "doc", eyebrow: "Document control", kind: "schedule",
    desc: "Build a drawing revision schedule / change log with revision codes, dates, descriptions, and authors.",
    lede: "Record each revision with code, date, description, and author to build a clear change log for a sheet.",
    points: [{ k: "Export", v: "CSV" }],
    fields: [{ id: "rows", label: "One revision per line: Rev, Date, Description, By", type: "textarea", rows: 8, default: "P1,2026-01-12,First issue for comment,AS\nP2,2026-02-03,Stair core revised,AS\nC1,2026-03-20,Issued for construction,JM" }],
    engine: schedColumns(["Rev", "Date", "Description", "By"], -1, false),
    examples: ex(["Title block", "Generate the revision history that sits in a sheet title block."], ["Coordination", "Keep an auditable log of what changed and when."]),
    faq: fq(["Prelim vs construction?", "Use a P prefix for preliminary and C for construction revisions, or your office standard."], ["Newest first?", "List newest at the bottom to read like a history, or reverse to taste."]),
    related: [{ slug: "tools/drawing-register", label: "Drawing Register", sub: "Sheet list", icon: "doc" }, { slug: "checklists", label: "QA Checklist", sub: "Pre-issue", icon: "check" }]
  }),
  calcPage({
    slug: "tools/room-data-sheet", h1: "Room Data Sheet Generator", art: "doc", eyebrow: "Builder", kind: "builder",
    desc: "Generate a structured room data sheet covering area, occupancy, finishes, services, and notes.",
    lede: "Fill a few fields to generate a formatted room data sheet you can copy into a brief or specification.",
    points: [{ k: "Output", v: "Document" }],
    fields: [{ id: "room", label: "Room name / number", type: "text", default: "Meeting Room 04" }, num("area", "Target area (m²)", 24), num("occupancy", "Occupancy (people)", 8), { id: "finishes", label: "Key finishes", type: "text", default: "Carpet tile, acoustic ceiling, paint walls" }, { id: "services", label: "Services required", type: "text", default: "AC, dimmable LED, data x4, AV" }],
    engine: { sections: [
      { title: "Room Data Sheet — {{room}}", body: "Target area: {{area}} m²\nDesign occupancy: {{occupancy}} people\nArea per person: derived from the brief — confirm against code." },
      { title: "Finishes", body: "{{finishes}}\nConfirm finish codes against the finish schedule and specification." },
      { title: "Services & environment", body: "{{services}}\nCoordinate setting-out with the reflected ceiling plan and services drawings." },
      { title: "Review", body: "This sheet is a structured starter. Verify acoustic, fire, accessibility, and code requirements before issue." }
    ] },
    examples: ex(["Briefing", "Spin up consistent room data sheets across a building programme."], ["Coordination", "Hand a clear per-room brief to services consultants."]),
    faq: fq(["Can I edit the output?", "Yes — copy it out and adapt; the generator gives a consistent structure to start from."], ["One per room?", "Run it per room and save each to your local workspace."]),
    related: [{ slug: "tools/finish-schedule", label: "Finish Schedule", sub: "Finishes", icon: "finish" }, { slug: "tool", label: "Area Schedule", sub: "Areas", icon: "grid" }]
  })
];

/* ============================================================
   FLAGSHIP TOOL — Area Schedule Builder (/tool/)
   ============================================================ */
const flagship = {
  slug: "tool", layout: "tool", nav: "Tools", art: "grid",
  title: `Area Schedule Builder — ${SITE.brand}`,
  desc: "Turn a simple comma list of spaces into a costed area schedule with totals, checks, and CSV export.",
  eyebrow: "Flagship tool", h1: "Area Schedule Builder",
  lede: "Type one space per line — name, area, rate, level, note — and get an instant costed area schedule with totals, gap checks, and CSV export.",
  points: [{ k: "Export", v: "CSV" }, { k: "Engine", v: "Live" }, { k: "Cost", v: "Auto total" }],
  intro: "Architects, QS teams, and space planners use it to assemble a costed schedule of accommodation straight from a room list.",
  config: {
    title: "Area Schedule Builder", kind: "schedule",
    fields: [{ id: "rows", label: "One space per line: Area name, Area (m²), Rate ($/m²), Level, Note", type: "textarea", rows: 9, default: "Lobby,620,4,Level 1,Public zone\nOffice,180,8,Level 2,Typical module\nMeeting,46,8,Level 2,Acoustic\nPlant,90,3,Roof,Services" }],
    engine: { columns: ["Area name", "Area (m²)", "Rate ($/m²)", "Level", "Note"], qtyIndex: 1, costIndex: 2, money: true },
    examples: ex(["Schedule of accommodation", "Assemble a costed area schedule from a room list in seconds."], ["Cost check", "Multiply area by rate per space to get an order-of-magnitude total."]),
    faq: fq(["How is the total made?", "For each row, Area × Rate is summed into the estimated total."], ["Can I export?", "Yes — Download saves a CSV; Copy puts CSV on the clipboard; Save keeps it in this browser."]),
    limits: DEFAULT_LIMITS
  },
  related: [{ slug: "tools/room-area", label: "Room Area Calculator", sub: "Per-room area", icon: "ruler" }, { slug: "tools/gross-net-area", label: "Gross to Net", sub: "Efficiency", icon: "layers" }, { slug: "tools/cost-per-sqft", label: "Cost per ft²", sub: "Rates", icon: "cost" }]
};

/* ============================================================
   LIBRARY / REFERENCE PAGES (searchable data)
   ============================================================ */
const libPage = (o) => ({
  slug: o.slug, layout: "tool", nav: "Library", art: o.art || "doc",
  title: `${o.h1} — ${SITE.product}`, desc: o.desc, eyebrow: o.eyebrow || "Reference",
  h1: o.h1, lede: o.lede, intro: o.intro,
  config: {
    title: o.h1, kind: "library",
    fields: [{ id: "query", label: "Search", type: "text", default: "", hint: "Filter by any keyword" }, sel("category", "Category", ["All", ...o.categories], "All")],
    data: { items: o.items }, engine: {},
    examples: o.examples || ex(["Quick lookup", `Search the ${o.h1.toLowerCase()} while you draft to keep your set consistent.`], ["Reference", "Filter by category to focus on what a sheet needs right now."]),
    faq: o.faq || fq(["Is this exhaustive?", "It's a practical working reference — always confirm against the governing standard for your project."], ["Where is the data stored?", "Entirely in the page; searching happens in your browser with nothing uploaded."]),
    limits: DEFAULT_LIMITS
  },
  related: o.related
});

const library = [
  libPage({
    slug: "library/area-units", h1: "Area Units Reference", art: "units", desc: "A reference of area units with exact conversion factors to square metres and where each is used.",
    lede: "Exact conversion factors for area units — metric, imperial, and regional — with notes on where each is used.",
    categories: ["Metric", "Imperial", "Regional", "Land"],
    items: [
      { title: "Square metre (m²)", code: "1 m²", category: "Metric", note: "SI base area unit; the global standard for building areas.", use: "Floor areas, schedules", caution: "Distinguish gross vs net." },
      { title: "Square centimetre (cm²)", code: "0.0001 m²", category: "Metric", note: "Small detail areas.", use: "Sections, details", caution: "Rarely used at building scale." },
      { title: "Hectare (ha)", code: "10,000 m²", category: "Land", note: "Common for site and land areas.", use: "Site areas", caution: "1 ha = 2.471 acres." },
      { title: "Square kilometre (km²)", code: "1,000,000 m²", category: "Metric", note: "Master-planning scale.", use: "Urban planning", caution: "Too coarse for buildings." },
      { title: "Square foot (ft²)", code: "0.092903 m²", category: "Imperial", note: "Dominant in US and some Asian markets.", use: "Leasing, US plans", caution: "Confirm rentable vs usable." },
      { title: "Square yard (yd²)", code: "0.836127 m²", category: "Imperial", note: "Carpet and some land measures.", use: "Carpet, land", caution: "9 ft² = 1 yd²." },
      { title: "Square inch (in²)", code: "0.000645 m²", category: "Imperial", note: "Detail-scale imperial area.", use: "Details", caution: "144 in² = 1 ft²." },
      { title: "Acre", code: "4,046.86 m²", category: "Land", note: "Traditional land area unit.", use: "Site, land", caution: "43,560 ft² = 1 acre." },
      { title: "Ping (坪)", code: "3.305785 m²", category: "Regional", note: "Used in Taiwan, Japan, Korea for floor area.", use: "Asia real estate", caution: "≈ 35.58 ft²." },
      { title: "Tsubo (坪)", code: "3.305785 m²", category: "Regional", note: "Japanese equivalent of ping.", use: "Japan real estate", caution: "Same as ping." },
      { title: "Square mile (mi²)", code: "2,589,988 m²", category: "Land", note: "Regional planning scale.", use: "Regional", caution: "640 acres = 1 mi²." },
      { title: "Cent", code: "40.469 m²", category: "Regional", note: "Land unit in parts of South India.", use: "Land", caution: "100 cents = 1 acre." }
    ],
    related: [{ slug: "tools/area-unit-converter", label: "Area Unit Converter", sub: "Convert live", icon: "convert" }, { slug: "library/glossary", label: "Glossary", sub: "Terms", icon: "book" }]
  }),
  libPage({
    slug: "library/drawing-symbols", h1: "Architectural Drawing Symbols", art: "grid", desc: "A reference of common architectural drawing symbols and annotations and what they mean on a plan.",
    lede: "Common plan and annotation symbols — section marks, levels, grids, north points — and how to read them.",
    categories: ["Annotation", "Reference", "Openings", "Services"],
    items: [
      { title: "Section mark", category: "Reference", note: "Cut line with arrows and a sheet/section reference at each end.", use: "Locate sections", caution: "Arrow points in the view direction." },
      { title: "Detail callout", category: "Reference", note: "Circle/oval bubble ringing an area, with detail and sheet number.", use: "Link to details", caution: "Keep the reference numbering consistent." },
      { title: "Grid line bubble", category: "Reference", note: "Circle with a letter or number marking the structural grid.", use: "Setting out", caution: "Letters one way, numbers the other." },
      { title: "Level / spot height", category: "Annotation", note: "Triangle or cross marking a finished floor level value.", use: "Vertical control", caution: "State the datum (e.g. FFL, AOD)." },
      { title: "North point", category: "Annotation", note: "Arrow indicating true or project north.", use: "Orientation", caution: "Note true vs project north." },
      { title: "Door swing", category: "Openings", note: "Quarter-arc showing the leaf and direction of opening.", use: "Plans", caution: "Check clearances and accessibility." },
      { title: "Window in plan", category: "Openings", note: "Break in the wall with glazing lines.", use: "Plans", caution: "Match the window schedule ID." },
      { title: "Revision cloud", category: "Annotation", note: "Bumpy cloud ringing changed areas, with a rev tag.", use: "Mark changes", caution: "Remove superseded clouds at the next issue." },
      { title: "Break line", category: "Annotation", note: "Zig-zag indicating an element continues beyond the view.", use: "Truncate views", caution: "Use sparingly to avoid confusion." },
      { title: "Datum / dimension line", category: "Annotation", note: "Line with ticks or arrows carrying a dimension string.", use: "Dimensioning", caution: "Keep strings continuous and closed." },
      { title: "Hatch — concrete", category: "Services", note: "Stippled or aggregate pattern indicating concrete.", use: "Materials", caution: "Define hatches in the legend." },
      { title: "Stair direction arrow", category: "Annotation", note: "Arrow with UP/DN showing travel direction from the level.", use: "Stairs", caution: "Always label UP and DN." }
    ],
    related: [{ slug: "library/line-types", label: "Line Types", sub: "Line conventions", icon: "lines" }, { slug: "guides/reading-floor-plans", label: "Reading Floor Plans", sub: "Guide", icon: "doc" }]
  }),
  libPage({
    slug: "library/line-types", h1: "CAD Line Types & Conventions", art: "grid", desc: "Reference of standard CAD line types, weights, and conventions for clear, readable drawings.",
    lede: "Standard line types and weights — what continuous, dashed, centre, and hidden lines mean on a drawing.",
    categories: ["Line type", "Line weight", "Convention"],
    items: [
      { title: "Continuous (solid)", category: "Line type", note: "Visible edges and outlines of elements in the view.", use: "Visible edges", caution: "Vary weight by importance." },
      { title: "Hidden (dashed)", category: "Line type", note: "Edges concealed behind other elements.", use: "Hidden detail", caution: "Keep dash length consistent." },
      { title: "Centre line", category: "Line type", note: "Long-short dashes marking symmetry or axes.", use: "Centres, grids", caution: "Extend slightly past the feature." },
      { title: "Phantom line", category: "Line type", note: "Long-short-short dashes for adjacent or future items.", use: "Context", caution: "Don't confuse with hidden lines." },
      { title: "Cutting / section line", category: "Convention", note: "Heavy chain line marking where a section is taken.", use: "Sections", caution: "Add direction arrows and labels." },
      { title: "Property / boundary line", category: "Convention", note: "Distinctive long-short pattern for site boundaries.", use: "Site plans", caution: "Match the survey." },
      { title: "Thin line (0.13–0.18)", category: "Line weight", note: "Dimensions, hatching, and annotation.", use: "Annotation", caution: "Keep readable when reduced." },
      { title: "Medium line (0.25–0.35)", category: "Line weight", note: "General object edges and most plan content.", use: "Object edges", caution: "The everyday default weight." },
      { title: "Thick line (0.50–0.70)", category: "Line weight", note: "Cut elements in section and key outlines.", use: "Section cuts", caution: "Reserve for emphasis." },
      { title: "Break line", category: "Convention", note: "Indicates an element continues beyond the drawing.", use: "Truncation", caution: "Use a recognised symbol." }
    ],
    related: [{ slug: "library/drawing-symbols", label: "Drawing Symbols", sub: "Symbols", icon: "symbols" }, { slug: "library/cad-layer-standards", label: "Layer Standards", sub: "Organise layers", icon: "layers" }]
  }),
  libPage({
    slug: "library/architectural-scales", h1: "Architectural Scales Reference", art: "ruler", desc: "Common architectural and engineering drawing scales and what each is typically used for.",
    lede: "A quick reference of metric drawing scales — from 1:1 details to 1:1250 location plans — and when to use each.",
    categories: ["Detail", "Plan", "Site"],
    items: [
      { title: "1:1", code: "Full size", category: "Detail", note: "Real-size details and templates.", use: "Profiles, templates", caution: "Large sheets for small parts." },
      { title: "1:5", code: "1 mm = 5 mm", category: "Detail", note: "Construction details and junctions.", use: "Details", caution: "Show material thicknesses." },
      { title: "1:10", code: "1 mm = 10 mm", category: "Detail", note: "Detailed assemblies and joinery.", use: "Details, joinery", caution: "Coordinate with 1:5 details." },
      { title: "1:20", code: "1 mm = 20 mm", category: "Detail", note: "Enlarged plans of WCs, kitchens, stairs.", use: "Enlarged plans", caution: "Reference from the 1:100 plan." },
      { title: "1:50", code: "1 mm = 50 mm", category: "Plan", note: "Detailed floor plans and sections.", use: "Plans, sections", caution: "Common for fit-out." },
      { title: "1:100", code: "1 mm = 100 mm", category: "Plan", note: "General arrangement plans and elevations.", use: "GA drawings", caution: "The workhorse building scale." },
      { title: "1:200", code: "1 mm = 200 mm", category: "Plan", note: "Whole-floor plans of larger buildings.", use: "Large buildings", caution: "Annotation must stay legible." },
      { title: "1:500", code: "1 mm = 500 mm", category: "Site", note: "Site plans and small masterplans.", use: "Site plans", caution: "Limited detail." },
      { title: "1:1250", code: "1 mm = 1250 mm", category: "Site", note: "Location plans for planning submissions.", use: "Location plans", caution: "Often a statutory requirement." },
      { title: "1:2500", code: "1 mm = 2500 mm", category: "Site", note: "Wider context and location plans.", use: "Context", caution: "Identify the red-line boundary." }
    ],
    related: [{ slug: "tools/drawing-scale", label: "Drawing Scale Tool", sub: "Convert live", icon: "scale" }, { slug: "library/paper-sizes", label: "Paper Sizes", sub: "Sheet sizes", icon: "paper" }]
  }),
  libPage({
    slug: "library/paper-sizes", h1: "Drawing Paper Sizes (ISO & ANSI)", art: "ruler", desc: "ISO A-series and ANSI drawing sheet sizes in millimetres and inches for plotting and printing.",
    lede: "ISO A-series and ANSI sheet sizes in mm and inches, so your title block and scale suit the chosen sheet.",
    categories: ["ISO A", "ISO B", "ANSI"],
    items: [
      { title: "A0", code: "841 × 1189 mm", category: "ISO A", note: "Largest common architectural sheet.", use: "GA drawings", caution: "1 m² area." },
      { title: "A1", code: "594 × 841 mm", category: "ISO A", note: "Standard large drawing sheet.", use: "GA drawings", caution: "Half of A0." },
      { title: "A2", code: "420 × 594 mm", category: "ISO A", note: "Medium drawing sheet.", use: "Plans, details", caution: "Half of A1." },
      { title: "A3", code: "297 × 420 mm", category: "ISO A", note: "Desk-format drawings and reports.", use: "Reduced sets", caution: "Watch scale legibility." },
      { title: "A4", code: "210 × 297 mm", category: "ISO A", note: "Letters, schedules, details.", use: "Documents", caution: "Too small for full plans." },
      { title: "B1", code: "707 × 1000 mm", category: "ISO B", note: "Between A-series sizes for posters/plots.", use: "Presentation", caution: "Less common for issue." },
      { title: "ANSI A", code: "8.5 × 11 in", category: "ANSI", note: "US letter size.", use: "Documents", caution: "≈ A4." },
      { title: "ANSI B", code: "11 × 17 in", category: "ANSI", note: "US tabloid / ledger.", use: "Reduced sets", caution: "≈ A3." },
      { title: "ANSI D", code: "22 × 34 in", category: "ANSI", note: "Common US drawing sheet.", use: "GA drawings", caution: "≈ A1." },
      { title: "ANSI E", code: "34 × 44 in", category: "ANSI", note: "Largest common US sheet.", use: "GA drawings", caution: "≈ A0." }
    ],
    related: [{ slug: "library/architectural-scales", label: "Scales Reference", sub: "Scales", icon: "scale" }, { slug: "tools/drawing-scale", label: "Drawing Scale Tool", sub: "Fit to sheet", icon: "ruler" }]
  }),
  libPage({
    slug: "library/standard-room-sizes", h1: "Standard Room Sizes Reference", art: "room", desc: "Typical minimum and comfortable room sizes for residential and commercial spaces.",
    lede: "Typical minimum and comfortable dimensions for common rooms — a sanity check while you plan, not a code.",
    categories: ["Residential", "Commercial", "Service"],
    items: [
      { title: "Single bedroom", code: "≈ 7–9 m²", category: "Residential", note: "Fits a single bed, wardrobe, and desk.", use: "Housing", caution: "Check local minimum space standards." },
      { title: "Double bedroom", code: "≈ 11–14 m²", category: "Residential", note: "Double bed with circulation and storage.", use: "Housing", caution: "Allow door swings and wardrobes." },
      { title: "Living room", code: "≈ 16–25 m²", category: "Residential", note: "Seating, media, and circulation.", use: "Housing", caution: "Scale to occupancy." },
      { title: "Kitchen", code: "≈ 8–14 m²", category: "Residential", note: "Counter runs plus appliance clearances.", use: "Housing", caution: "Keep the work triangle tight." },
      { title: "Bathroom", code: "≈ 4–6 m²", category: "Service", note: "WC, basin, and bath/shower.", use: "Housing", caution: "Allow door and fixture clearances." },
      { title: "Accessible WC", code: "≈ 3.7–4.5 m²", category: "Service", note: "Wheelchair transfer space to fixtures.", use: "All buildings", caution: "Follow accessibility standards exactly." },
      { title: "Private office", code: "≈ 9–14 m²", category: "Commercial", note: "Desk, guest chairs, storage.", use: "Offices", caution: "Open plan uses ~8–10 m²/person." },
      { title: "Meeting room (6)", code: "≈ 18–24 m²", category: "Commercial", note: "Six-person table with circulation.", use: "Offices", caution: "Add AV and clearance." },
      { title: "Classroom (30)", code: "≈ 55–65 m²", category: "Commercial", note: "Around 1.9–2.1 m² per student.", use: "Schools", caution: "Follow education area standards." },
      { title: "Lift lobby", code: "≈ 6–10 m²", category: "Service", note: "Waiting and circulation at the cores.", use: "All buildings", caution: "Size to traffic and egress." }
    ],
    related: [{ slug: "tools/room-area", label: "Room Area Calculator", sub: "Check sizes", icon: "ruler" }, { slug: "tools/occupancy-load", label: "Occupancy Load", sub: "People", icon: "building" }]
  }),
  libPage({
    slug: "library/cad-layer-standards", h1: "CAD Layer Naming Standards", art: "layers", desc: "A practical reference for CAD layer naming conventions based on AIA and ISO 13567 systems.",
    lede: "How layered CAD naming works — AIA and ISO 13567 fields — so your drawings stay tidy and shareable.",
    categories: ["System", "Field", "Example"],
    items: [
      { title: "AIA layer format", category: "System", note: "Discipline + major group + minor group + status, e.g. A-WALL-FULL.", use: "US offices", caution: "Agree the office standard up front." },
      { title: "ISO 13567", category: "System", note: "International structured layer naming with agent, element, presentation fields.", use: "International", caution: "More fields than AIA." },
      { title: "Discipline code", category: "Field", note: "Single letter: A architecture, S structure, M mechanical, E electrical, P plumbing.", use: "Prefix", caution: "Use the agreed register." },
      { title: "Major group", category: "Field", note: "Element family: WALL, DOOR, GLAZ, FLOR, CLNG.", use: "Grouping", caution: "Keep to four characters." },
      { title: "Minor group", category: "Field", note: "Refinement: FULL, PATT, IDEN, DIMS.", use: "Detail", caution: "Optional but useful." },
      { title: "Status / phase", category: "Field", note: "E existing, N new, D demolition.", use: "Phasing", caution: "Critical for refurbishment." },
      { title: "A-WALL-FULL", category: "Example", note: "Architecture, walls, full-height — visible wall lines.", use: "Walls", caution: "Pair with A-WALL-PATT for hatching." },
      { title: "A-DOOR", category: "Example", note: "Architecture, doors — leaves, swings, frames.", use: "Doors", caution: "Match the door schedule." },
      { title: "A-ANNO-TEXT", category: "Example", note: "Architecture annotation — text and labels.", use: "Annotation", caution: "Separate from geometry." },
      { title: "A-GRID", category: "Example", note: "Structural grid and bubbles.", use: "Setting out", caution: "Shared across disciplines." }
    ],
    related: [{ slug: "library/file-formats", label: "File Formats", sub: "DWG/DXF", icon: "file" }, { slug: "guides/cad-best-practices", label: "CAD Best Practices", sub: "Guide", icon: "doc" }]
  }),
  libPage({
    slug: "library/file-formats", h1: "CAD & Drawing File Formats", art: "doc", desc: "A reference of CAD and drawing file formats — DWG, DXF, PDF, IFC, RVT — and when to use each.",
    lede: "What DWG, DXF, PDF, IFC, and other formats are for, and how to choose the right one for issue or exchange.",
    categories: ["Native", "Exchange", "Output", "BIM"],
    items: [
      { title: "DWG", code: ".dwg", category: "Native", note: "AutoCAD's native binary drawing format.", use: "CAD authoring", caution: "Version compatibility matters." },
      { title: "DXF", code: ".dxf", category: "Exchange", note: "Open ASCII/binary interchange format for CAD geometry.", use: "CAD exchange", caution: "Can lose some object data." },
      { title: "PDF", code: ".pdf", category: "Output", note: "Fixed-layout format for issue, review, and printing.", use: "Issue & print", caution: "Include a graphic scale bar." },
      { title: "DWF / DWFx", code: ".dwf", category: "Output", note: "Lightweight web/review format from Autodesk.", use: "Review", caution: "Less common than PDF now." },
      { title: "IFC", code: ".ifc", category: "BIM", note: "Open BIM data-exchange standard (buildingSMART).", use: "BIM exchange", caution: "Map property sets carefully." },
      { title: "RVT", code: ".rvt", category: "BIM", note: "Autodesk Revit's native BIM project file.", use: "BIM authoring", caution: "Version-locked." },
      { title: "DGN", code: ".dgn", category: "Native", note: "MicroStation's native drawing format.", use: "CAD authoring", caution: "Common in infrastructure." },
      { title: "SVG", code: ".svg", category: "Output", note: "Vector format for web diagrams and graphics.", use: "Web graphics", caution: "Not a drawing-issue format." },
      { title: "SHP", code: ".shp", category: "Exchange", note: "GIS vector format for site and mapping data.", use: "GIS / site", caution: "Mind the coordinate system." },
      { title: "STEP", code: ".step", category: "Exchange", note: "Neutral 3D solid-model exchange format.", use: "3D exchange", caution: "More common in manufacturing." }
    ],
    related: [{ slug: "library/cad-layer-standards", label: "Layer Standards", sub: "Organise CAD", icon: "layers" }, { slug: "tools/drawing-register", label: "Drawing Register", sub: "Track issues", icon: "doc" }]
  }),
  libPage({
    slug: "library/glossary", h1: "Area & Drawing Glossary", art: "doc", desc: "Plain-language definitions of common architectural area and drawing terms.",
    lede: "Clear definitions of the area and drawing terms that appear across schedules, leases, and plans.",
    categories: ["Area", "Drawing", "Leasing", "Process"],
    items: [
      { title: "Gross floor area (GFA)", category: "Area", note: "Total floor area measured to the outside of external walls.", use: "Planning, FAR", caution: "Definitions vary — check the bylaw." },
      { title: "Net internal area (NIA)", category: "Area", note: "Usable area within walls, excluding cores and circulation.", use: "Leasing, fit-out", caution: "Follow a stated standard." },
      { title: "Carpet area", category: "Area", note: "Net usable area you can lay carpet on, within walls.", use: "Residential sales", caution: "Excludes wall thickness." },
      { title: "Built-up area", category: "Area", note: "Carpet area plus wall thickness and balconies.", use: "Residential sales", caution: "Larger than carpet area." },
      { title: "Super built-up area", category: "Leasing", note: "Built-up area plus a share of common areas.", use: "Sales quotes", caution: "Includes loading factor." },
      { title: "Load / add-on factor", category: "Leasing", note: "Ratio of rentable to usable area.", use: "Commercial leases", caution: "Higher = more common-area cost." },
      { title: "FAR / FSI", category: "Area", note: "Total floor area divided by plot area.", use: "Zoning", caution: "Regional definitions differ." },
      { title: "Setback", category: "Process", note: "Minimum distance a building must sit from a boundary.", use: "Planning", caution: "Front/rear/side often differ." },
      { title: "Schedule of accommodation", category: "Process", note: "List of spaces with target areas for a brief.", use: "Briefing", caution: "Compare against achieved areas." },
      { title: "General arrangement (GA)", category: "Drawing", note: "Overall plan, section, or elevation of a building.", use: "Drawings", caution: "Details reference back to the GA." },
      { title: "Scale", category: "Drawing", note: "Ratio of drawing size to real size, e.g. 1:100.", use: "Drawings", caution: "Add a graphic scale bar." },
      { title: "Datum", category: "Drawing", note: "A fixed reference level for vertical measurement.", use: "Levels", caution: "State the datum on the sheet." }
    ],
    related: [{ slug: "library/area-units", label: "Area Units", sub: "Units", icon: "units" }, { slug: "guides/gross-vs-net-area", label: "Gross vs Net", sub: "Guide", icon: "doc" }]
  })
];

/* ============================================================
   GUIDES (long-form, sectioned)
   ============================================================ */
const P = (t) => `<p>${t}</p>`;
const UL = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
const OL = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join("")}</ol>`;
const CALLOUT = (h, t) => `<div class="callout"><h3>${h}</h3><p>${t}</p></div>`;

const guides = [
  {
    slug: "guides/build-area-schedule", nav: "Guides", category: "Workflow", readMins: 7,
    title: `How to Build an Area Schedule — ${SITE.product}`, h1: "How to Build an Area Schedule",
    desc: "A step-by-step guide to building a clear, costed area schedule (schedule of accommodation) from a room list.",
    lede: "From a room brief to a costed, checkable area schedule — the workflow, the columns that matter, and the checks that catch errors.",
    sections: [
      { id: "what", h: "What an area schedule is", html: P("An area schedule — often called a schedule of accommodation — lists every space in a project with its area, and usually a rate, level, and notes. It is the bridge between the brief (what the client asked for) and the drawing (what you designed). A good schedule lets anyone compare required area against achieved area at a glance.") + P("It is used for feasibility, cost planning, lease negotiations, and design coordination. Because it rolls up into a single total, small per-room errors compound — so structure and checking matter.") },
      { id: "columns", h: "The columns that matter", html: P("Keep the schedule lean but complete. A practical starting set:") + UL(["<strong>Area name / number</strong> — a unique identifier that matches the plan.", "<strong>Area (m²)</strong> — the measured floor area, net or gross (state which).", "<strong>Rate ($/m²)</strong> — optional, for an order-of-magnitude cost.", "<strong>Level</strong> — the floor or zone, to allow grouping and subtotals.", "<strong>Note</strong> — acoustic, fire, or coordination flags."]) + CALLOUT("Tip", "Decide net vs gross once, write it on the schedule, and stick to it. Mixing the two is the most common area-schedule error.") },
      { id: "build", h: "Building it step by step", html: OL(["List every space from the brief, even ones still to be designed.", "Measure or estimate each area in one consistent unit.", "Group by level or department and add subtotals.", "Add a rate per space if you need a cost check.", "Total the schedule and compare against the brief and any FAR limit.", "Flag gaps and mismatches for the next design review."]) + P("Our " + `<a href="../../tool/">Area Schedule Builder</a>` + " does steps 3–5 automatically: paste one space per line and it totals area × rate, numbers the rows, and flags incomplete rows.") },
      { id: "check", h: "Checking and issuing", html: P("Before you issue, run a few quick checks:") + UL(["Does the achieved total match the brief within tolerance?", "Are net and gross used consistently throughout?", "Do area names match the drawing exactly?", "Is the FAR within the permitted limit?", "Have you stated the measurement basis on the schedule?"]) + P("Export to CSV for the cost plan or lease pack, and keep a dated copy so you can track how areas evolved.") }
    ],
    related: [{ slug: "tool", label: "Area Schedule Builder", sub: "Build it now", icon: "grid" }, { slug: "guides/gross-vs-net-area", label: "Gross vs Net Area", sub: "Get the basis right", icon: "doc" }, { slug: "tools/room-area", label: "Room Area Calculator", sub: "Measure rooms", icon: "ruler" }]
  },
  {
    slug: "guides/gross-vs-net-area", nav: "Guides", category: "Concepts", readMins: 6,
    title: `Gross vs Net Area Explained — ${SITE.product}`, h1: "Gross vs Net Area, Explained",
    desc: "Understand gross, net, usable, and rentable area — what each includes, why they differ, and when to use them.",
    lede: "Gross, net, usable, rentable — the same building, four different numbers. Here's what each includes and when it matters.",
    sections: [
      { id: "why", h: "Why one building has many areas", html: P("A single floor can be described by several area figures depending on what you include. Walls, cores, shafts, and shared corridors are counted in some measures and excluded from others. Confusing them leads to wrong costs, wrong rents, and wrong feasibility.") },
      { id: "defs", h: "The four common measures", html: UL(["<strong>Gross floor area</strong> — measured to the outside face of external walls; includes everything.", "<strong>Net internal area</strong> — inside the walls, excluding structure, cores, and primary circulation.", "<strong>Usable area</strong> — the part a tenant can actually occupy and fit out.", "<strong>Rentable area</strong> — usable area plus a fair share of common areas, via a load factor."]) + CALLOUT("Rule of thumb", "Gross is for planning and FAR; net/usable is for fit-out and headcount; rentable is for the lease.") },
      { id: "efficiency", h: "Efficiency and load factor", html: P("The ratio of net to gross is the building's efficiency. An efficient office runs around 80–85% net. The inverse idea — how much rentable area exceeds usable — is the load factor or add-on factor. A 15% load factor means tenants pay for 15% more than they occupy, covering shared lobbies and corridors.") + P("Use the " + `<a href="../../tools/gross-net-area/">Gross to Net</a>` + " and " + `<a href="../../tools/rentable-area/">Rentable Area</a>` + " tools to move between them.") },
      { id: "standards", h: "Measurement standards", html: P("To avoid disputes, measure to a recognised standard rather than inventing definitions. Common ones include BOMA (North America) and IPMS (international). They set out exactly what to include and exclude for each measure, so two parties get the same number.") }
    ],
    related: [{ slug: "tools/gross-net-area", label: "Gross to Net Area", sub: "Calculate", icon: "layers" }, { slug: "guides/boma-standards", label: "BOMA Standards", sub: "Measurement", icon: "book" }, { slug: "tools/rentable-area", label: "Rentable Area", sub: "Load factor", icon: "cost" }]
  },
  {
    slug: "guides/boma-standards", nav: "Guides", category: "Standards", readMins: 6,
    title: `BOMA & IPMS Area Standards — ${SITE.product}`, h1: "BOMA & IPMS Area Standards",
    desc: "An overview of BOMA and IPMS floor-area measurement standards and why a shared method prevents disputes.",
    lede: "Why measurement standards exist, what BOMA and IPMS cover, and how to pick a method everyone can agree on.",
    sections: [
      { id: "why", h: "Why a standard matters", html: P("If two people measure the same floor without an agreed method, they will disagree — about walls, cores, balconies, and shared space. On a lease, that disagreement is money. Measurement standards remove the ambiguity by defining exactly what to include for each area type.") },
      { id: "boma", h: "BOMA in brief", html: P("BOMA (Building Owners and Managers Association) publishes widely used floor-measurement standards in North America. They define how to measure office floors, how to apportion common areas, and how to derive rentable area from usable area with a load factor. Different BOMA editions handle multi-tenant floors and amenities slightly differently, so always cite the edition.") },
      { id: "ipms", h: "IPMS in brief", html: P("IPMS (International Property Measurement Standards) is a global framework designed to make areas comparable across countries. It defines a hierarchy — for example IPMS 1, 2, and 3 — covering external, internal, and occupier-usable areas. It is increasingly used for cross-border portfolios where consistency matters.") + CALLOUT("Practical advice", "Name the standard and edition on every area schedule and lease. 'Net area' alone is not enough.") },
      { id: "apply", h: "Applying it on a project", html: OL(["Agree the standard and edition with the client and agent early.", "Measure consistently and record the method on the schedule.", "Apportion common areas transparently with a stated load factor.", "Keep the source plan and a dated calculation for audit."]) }
    ],
    related: [{ slug: "tools/rentable-area", label: "Rentable Area", sub: "Load factor", icon: "cost" }, { slug: "guides/gross-vs-net-area", label: "Gross vs Net", sub: "Concepts", icon: "doc" }, { slug: "library/glossary", label: "Glossary", sub: "Definitions", icon: "book" }]
  },
  {
    slug: "guides/drawing-scales-explained", nav: "Guides", category: "Drafting", readMins: 5,
    title: `Drawing Scales Explained — ${SITE.product}`, h1: "Drawing Scales Explained",
    desc: "Understand how architectural drawing scales work, which scale to use when, and how to keep prints accurate.",
    lede: "What 1:100 really means, how to choose a scale for each drawing, and how to stop reprints from lying to you.",
    sections: [
      { id: "meaning", h: "What a scale means", html: P("A scale like 1:100 means one unit on paper equals one hundred of the same units in reality. At 1:100, a 5 m wall is drawn 50 mm long. The bigger the second number, the more reality is squeezed onto the sheet — and the less detail fits.") + P("Use the " + `<a href="../../tools/drawing-scale/">Drawing Scale Calculator</a>` + " to convert between real and paper dimensions at any scale.") },
      { id: "choose", h: "Choosing a scale", html: P("Pick the scale that shows the right detail without wasting paper:") + UL(["<strong>1:1 to 1:20</strong> — details and enlarged plans.", "<strong>1:50 to 1:100</strong> — general floor plans, sections, elevations.", "<strong>1:200</strong> — large-building plans.", "<strong>1:500 to 1:2500</strong> — site and location plans."]) + P("See the full list in the " + `<a href="../../library/architectural-scales/">Scales Reference</a>` + ".") },
      { id: "sheet", h: "Scale, sheet size, and fit", html: P("Scale and sheet size go together. A building that fits A1 at 1:100 may need A0 — or 1:200 — if it grows. Check the drawing extent against the sheet before you commit, and leave room for the title block and annotation.") },
      { id: "prints", h: "Keeping prints honest", html: CALLOUT("Always add a scale bar", "PDFs get reprinted at the wrong size all the time. A graphic scale bar drawn on the sheet stays correct even when the ratio is lost, so measurements off the print remain reliable.") }
    ],
    related: [{ slug: "tools/drawing-scale", label: "Drawing Scale Tool", sub: "Convert", icon: "scale" }, { slug: "library/architectural-scales", label: "Scales Reference", sub: "All scales", icon: "ruler" }, { slug: "library/paper-sizes", label: "Paper Sizes", sub: "Sheets", icon: "paper" }]
  },
  {
    slug: "guides/area-takeoff-workflow", nav: "Guides", category: "Workflow", readMins: 6,
    title: `Area Takeoff Workflow — ${SITE.product}`, h1: "A Reliable Area Takeoff Workflow",
    desc: "A repeatable workflow for taking off areas from a plan accurately, with checks that catch mistakes early.",
    lede: "Measure once, trust the number. A repeatable takeoff workflow — from setting the basis to the final cross-check.",
    sections: [
      { id: "basis", h: "Set the basis first", html: P("Before measuring anything, decide and record: the unit (m² is safest), the measure (gross or net), and the standard. Writing this down once prevents the single biggest source of takeoff error — mixing definitions partway through.") },
      { id: "measure", h: "Measure systematically", html: OL(["Work room by room in a fixed order so nothing is missed.", "Use rectangles where you can; break complex rooms into simple shapes and add them.", "For irregular boundaries, use coordinates and the shoelace method.", "Record each area against a name that matches the plan."]) + P("The " + `<a href="../../tools/polygon-area/">Polygon Area Calculator</a>` + " handles irregular shapes from coordinates, and the " + `<a href="../../tools/room-area/">Room Area Calculator</a>` + " covers rectangular rooms.") },
      { id: "assemble", h: "Assemble and total", html: P("Collect the per-room areas into a schedule, grouped by level. Add a rate if you need a cost. Let the schedule total and flag incomplete rows — the " + `<a href="../../tool/">Area Schedule Builder</a>` + " does both.") },
      { id: "crosscheck", h: "Cross-check the total", html: P("Always validate the total a second way. Compare net against gross using your efficiency assumption; if net comes out above ~90% of gross, something is uncounted. Compare the total against the brief and against any earlier takeoff. Investigate differences before issuing.") + CALLOUT("Audit trail", "Keep the source plan, your coordinates, and a dated schedule together so any number can be traced back later.") }
    ],
    related: [{ slug: "tools/polygon-area", label: "Polygon Area", sub: "Irregular shapes", icon: "polygon" }, { slug: "tool", label: "Area Schedule Builder", sub: "Assemble", icon: "grid" }, { slug: "guides/area-schedule-mistakes", label: "Common Mistakes", sub: "Avoid them", icon: "doc" }]
  },
  {
    slug: "guides/export-to-excel", nav: "Guides", category: "Productivity", readMins: 5,
    title: `Export an Area Schedule to Excel — ${SITE.product}`, h1: "Export an Area Schedule to Excel",
    desc: "How to get a clean CSV from an area schedule and import it into Excel or Google Sheets without errors.",
    lede: "Turn a browser-built schedule into a tidy spreadsheet — the CSV route, the common pitfalls, and how to avoid them.",
    sections: [
      { id: "csv", h: "Why CSV", html: P("CSV (comma-separated values) is the most portable way to move tabular data. Every spreadsheet reads it, it carries no fragile formatting, and it diffs cleanly in version control. Our schedule tools export CSV directly from the Download and Copy buttons.") },
      { id: "import", h: "Importing cleanly", html: OL(["In Excel, use Data → From Text/CSV rather than double-clicking, so you control delimiters and types.", "Set the column types — keep IDs as text so leading zeros survive.", "Check that decimal and thousands separators match your locale.", "Freeze the header row and add filters for quick review."]) + CALLOUT("Watch the separator", "Some locales use a semicolon as the CSV delimiter. If columns land in one cell, re-import and pick the right delimiter.") },
      { id: "formulas", h: "Adding live totals", html: P("Once imported, add a SUM over the area column and an area × rate column for cost. Keep a clear total row, and use SUBTOTAL with filters so hidden rows don't distort the figure. Re-export to CSV if you need to round-trip the data back.") },
      { id: "tidy", h: "Keeping it tidy", html: UL(["One row per space; no merged cells in the data range.", "Consistent units in a labelled header.", "A dated filename so versions are obvious.", "A note stating net vs gross and the measurement standard."]) }
    ],
    related: [{ slug: "tool", label: "Area Schedule Builder", sub: "Export CSV", icon: "grid" }, { slug: "tools/door-schedule", label: "Door Schedule", sub: "Export CSV", icon: "door" }, { slug: "reports", label: "Reports", sub: "Summaries", icon: "report" }]
  },
  {
    slug: "guides/reading-floor-plans", nav: "Guides", category: "Concepts", readMins: 6,
    title: `How to Read a Floor Plan — ${SITE.product}`, h1: "How to Read a Floor Plan",
    desc: "A beginner-friendly guide to reading architectural floor plans: walls, openings, symbols, grids, and dimensions.",
    lede: "Walls, doors, grids, levels, and that little north arrow — a plain-language guide to reading any floor plan.",
    sections: [
      { id: "orient", h: "Orient yourself first", html: P("Start with the title block: what level is this, what scale, and which way is north? The north point and scale bar tell you orientation and size at a glance. Knowing the level stops you confusing the ground and upper floors.") },
      { id: "walls", h: "Walls and openings", html: P("Thick, solid lines that are cut by the plan are walls. Gaps in walls with a quarter-arc are doors — the arc shows the swing. Gaps with thin parallel lines are windows. Compare each opening to the door and window schedules using its ID.") + P("Our " + `<a href="../../library/drawing-symbols/">Drawing Symbols</a>` + " and " + `<a href="../../library/line-types/">Line Types</a>` + " references decode the rest.") },
      { id: "grid", h: "Grids, levels, and dimensions", html: P("Circles with letters and numbers are the structural grid — the building's setting-out skeleton. Triangles or crosses with numbers are levels. Dimension strings, with ticks or arrows, give real distances; read them rather than scaling off the print where you can.") },
      { id: "refs", h: "Following references", html: P("Section marks and detail bubbles point to other drawings. A bubble with '3/A-301' means detail 3 on sheet A-301. Following these references is how a flat plan connects to the full three-dimensional design.") + CALLOUT("Practice tip", "Trace a route through the plan from entrance to a far room, naming every element you cross. It builds fluency fast.") }
    ],
    related: [{ slug: "library/drawing-symbols", label: "Drawing Symbols", sub: "Decode plans", icon: "symbols" }, { slug: "library/line-types", label: "Line Types", sub: "Line meanings", icon: "lines" }, { slug: "guides/drawing-scales-explained", label: "Scales Explained", sub: "Sizes", icon: "ruler" }]
  },
  {
    slug: "guides/area-schedule-mistakes", nav: "Guides", category: "Quality", readMins: 5,
    title: `Common Area Schedule Mistakes — ${SITE.product}`, h1: "Common Area Schedule Mistakes",
    desc: "The most common mistakes in area schedules and area takeoffs, and simple habits that prevent them.",
    lede: "The errors that quietly wreck an area schedule — and the small habits that keep your numbers trustworthy.",
    sections: [
      { id: "mixing", h: "Mixing net and gross", html: P("The classic error: some rooms measured net, others gross, with no note saying which. The total becomes meaningless. Fix it by deciding the basis once, writing it on the schedule, and measuring everything the same way.") },
      { id: "names", h: "Names that don't match the plan", html: P("If a schedule says 'Meeting 4' and the plan says 'MR-04', coordination breaks down. Use identical names and numbers on the schedule, the plan, and the finish schedule so everything reconciles.") },
      { id: "stale", h: "Stale areas after design changes", html: P("Plans move; schedules lag. An area schedule that wasn't updated after the last layout change misleads cost and lease decisions. Re-run the takeoff at each milestone and date every version.") + CALLOUT("Habit", "Treat the schedule as a living document. Update it the same day the plan changes, not at the next deadline.") },
      { id: "checks", h: "Skipping the cross-check", html: P("A schedule that's only been totalled once is unverified. Cross-check the total a second way — net vs gross efficiency, comparison to the brief, comparison to the previous version. Investigate any surprise before issuing.") + P("Build the schedule with checks built in using the " + `<a href="../../tool/">Area Schedule Builder</a>` + ", and run a final review with the " + `<a href="../../checklists/">QA checklist</a>` + ".") }
    ],
    related: [{ slug: "checklists", label: "QA Checklist", sub: "Pre-issue", icon: "check" }, { slug: "guides/area-takeoff-workflow", label: "Takeoff Workflow", sub: "Do it right", icon: "doc" }, { slug: "tool", label: "Area Schedule Builder", sub: "Built-in checks", icon: "grid" }]
  },
  {
    slug: "guides/cad-best-practices", nav: "Guides", category: "Drafting", readMins: 6,
    title: `CAD Drawing Best Practices — ${SITE.product}`, h1: "CAD Drawing Best Practices",
    desc: "Practical CAD standards for clean, coordinated, reusable drawings: layers, line weights, blocks, and issue control.",
    lede: "Layers, line weights, blocks, and discipline — the habits that make CAD drawings clean, coordinated, and reusable.",
    sections: [
      { id: "layers", h: "Layer discipline", html: P("Everything on the right layer, every time. A consistent layer scheme — AIA or ISO 13567 — lets you control visibility, line weight, and colour across the whole set. Agree it before anyone draws, and never put geometry on layer 0.") + P("See the " + `<a href="../../library/cad-layer-standards/">Layer Naming Standards</a>` + " for a practical scheme.") },
      { id: "weights", h: "Line weights tell the story", html: P("Line weight is how a drawing communicates depth: heavy for cut elements in section, medium for visible edges, thin for annotation and hatching. Map weights through plot styles, not by eye, so every sheet prints consistently.") + P("The " + `<a href="../../library/line-types/">Line Types reference</a>` + " lists the conventions.") },
      { id: "blocks", h: "Blocks and reuse", html: P("Draw repeated elements — doors, fittings, title blocks — once as blocks, and reuse them. It cuts file size, keeps things consistent, and means a single edit updates everywhere. Keep a tidy block library and name blocks clearly.") },
      { id: "issue", h: "Issue and version control", html: OL(["Keep a drawing register and revision schedule for every sheet.", "Issue fixed-layout PDFs with a graphic scale bar.", "Purge and audit files before issuing to strip junk.", "Archive a dated, read-only copy of every issue."]) + P("The " + `<a href="../../tools/drawing-register/">Drawing Register</a>` + " and " + `<a href="../../tools/revision-schedule/">Revision Schedule</a>` + " tools make this quick.") }
    ],
    related: [{ slug: "library/cad-layer-standards", label: "Layer Standards", sub: "Layers", icon: "layers" }, { slug: "tools/drawing-register", label: "Drawing Register", sub: "Control", icon: "doc" }, { slug: "library/file-formats", label: "File Formats", sub: "Exchange", icon: "file" }]
  }
];

/* ============================================================
   HUB PAGES
   ============================================================ */
const toolHubItems = [
  { slug: "tool", icon: "grid", kicker: "Flagship", title: "Area Schedule Builder", text: "Costed schedule of accommodation from a room list.", amber: true },
  ...calculators.map((c) => ({ slug: c.slug, icon: c.config.kind === "convert" ? "convert" : c.config.kind === "geometry" ? "polygon" : "calc", kicker: "Calculator", title: c.h1.replace(" Calculator", "").replace(" Estimator", ""), text: c.desc })),
  ...schedules.map((s) => ({ slug: s.slug, icon: "doc", kicker: s.config.kind === "builder" ? "Builder" : "Schedule", title: s.h1.replace(" Builder", "").replace(" Generator", ""), text: s.desc }))
];

const hubs = [
  {
    slug: "tools", layout: "hub", nav: "Tools", art: "grid",
    title: `All Tools — ${SITE.product}`, desc: "Every browser-side calculator and schedule builder for architectural area takeoff and drawing production.",
    eyebrow: "Tool library", h1: "Tools that do real work",
    lede: "Thirty-plus calculators and schedule builders that run entirely in your browser — area, cost, services, and document control.",
    points: [{ k: "Tools", v: String(1 + calculators.length + schedules.length) }, { k: "Backend", v: "None" }, { k: "Export", v: "CSV/JSON" }],
    groups: [
      { title: "Area & space", kicker: "Calculator", text: "Measure, convert, and reconcile areas across a project.", items: toolHubItems.filter((t) => ["tool", "tools/room-area", "tools/gross-net-area", "tools/floor-area-ratio", "tools/carpet-builtup-area", "tools/area-unit-converter", "tools/rentable-area", "tools/buildable-area", "tools/polygon-area"].includes(t.slug)) },
      { title: "Estimating & materials", kicker: "Estimator", text: "Turn areas into quantities and budgets.", items: toolHubItems.filter((t) => ["tools/wall-paint", "tools/flooring-estimator", "tools/tile-quantity", "tools/concrete-slab", "tools/roof-area", "tools/excavation-volume", "tools/cost-per-sqft"].includes(t.slug)) },
      { title: "Code, services & detailing", kicker: "Calculator", text: "Early sizing for compliance and engineering.", items: toolHubItems.filter((t) => ["tools/occupancy-load", "tools/egress-width", "tools/parking-spaces", "tools/lighting-load", "tools/hvac-load", "tools/window-wall-ratio", "tools/stair-calculator", "tools/ramp-slope", "tools/drawing-scale"].includes(t.slug)) },
      { title: "Schedules & document control", kicker: "Schedule", text: "Build clean, exportable schedules and registers.", items: toolHubItems.filter((t) => t.slug.startsWith("tools/door") || t.slug.startsWith("tools/window-schedule") || t.slug.startsWith("tools/finish") || t.slug.startsWith("tools/drawing-register") || t.slug.startsWith("tools/revision") || t.slug.startsWith("tools/room-data")) }
    ]
  },
  {
    slug: "library", layout: "hub", nav: "Library", art: "doc",
    title: `Reference Library — ${SITE.product}`, desc: "Searchable references for area units, drawing symbols, scales, paper sizes, CAD standards, and terminology.",
    eyebrow: "Reference library", h1: "References you can search",
    lede: "Practical, searchable references for the numbers and conventions you reach for while drafting — units, symbols, scales, standards, and terms.",
    points: [{ k: "References", v: String(library.length) }, { k: "Search", v: "In-browser" }],
    groups: [
      { title: "Measurement & units", kicker: "Reference", text: "Get the numbers right.", items: [
        { slug: "library/area-units", icon: "units", title: "Area Units Reference", text: "Conversion factors and where each unit is used." },
        { slug: "library/architectural-scales", icon: "scale", title: "Architectural Scales", text: "Common scales and what each is for." },
        { slug: "library/paper-sizes", icon: "paper", title: "Paper Sizes", text: "ISO A-series and ANSI sheet sizes." },
        { slug: "library/standard-room-sizes", icon: "room", title: "Standard Room Sizes", text: "Typical minimum and comfortable dimensions." }
      ] },
      { title: "Drawing conventions", kicker: "Reference", text: "Read and produce clear drawings.", items: [
        { slug: "library/drawing-symbols", icon: "symbols", title: "Drawing Symbols", text: "Section marks, grids, levels, and more." },
        { slug: "library/line-types", icon: "lines", title: "Line Types", text: "Line patterns, weights, and conventions." },
        { slug: "library/cad-layer-standards", icon: "layers", title: "CAD Layer Standards", text: "AIA and ISO 13567 layer naming." },
        { slug: "library/file-formats", icon: "file", title: "File Formats", text: "DWG, DXF, PDF, IFC, and friends." }
      ] },
      { title: "Terminology", kicker: "Reference", text: "Speak the same language.", items: [
        { slug: "library/glossary", icon: "book", title: "Area & Drawing Glossary", text: "Plain definitions of common terms.", amber: true }
      ] }
    ]
  },
  {
    slug: "guides", layout: "hub", nav: "Guides", art: "doc",
    title: `Guides — ${SITE.product}`, desc: "Step-by-step guides on area schedules, gross vs net area, drawing scales, takeoff workflow, and CAD practice.",
    eyebrow: "Guides", h1: "Guides that go deeper",
    lede: "Clear, practical walkthroughs of the concepts behind the tools — area measurement, drawing scales, takeoff workflow, and CAD quality.",
    points: [{ k: "Guides", v: String(guides.length) }, { k: "Avg read", v: "6 min" }],
    groups: [
      { title: "Area & measurement", kicker: "Guide", text: "Get areas right, every time.", items: [
        { slug: "guides/build-area-schedule", icon: "grid", title: "Build an Area Schedule", text: "From brief to costed, checkable schedule.", amber: true },
        { slug: "guides/gross-vs-net-area", icon: "layers", title: "Gross vs Net Area", text: "Four area measures, explained simply." },
        { slug: "guides/boma-standards", icon: "book", title: "BOMA & IPMS Standards", text: "Measure to a method everyone shares." },
        { slug: "guides/area-takeoff-workflow", icon: "ruler", title: "Area Takeoff Workflow", text: "A repeatable, checkable process." },
        { slug: "guides/area-schedule-mistakes", icon: "check", title: "Common Mistakes", text: "Avoid the errors that wreck schedules." }
      ] },
      { title: "Drawings & CAD", kicker: "Guide", text: "Produce and read better drawings.", items: [
        { slug: "guides/drawing-scales-explained", icon: "scale", title: "Drawing Scales Explained", text: "What 1:100 means and which to use." },
        { slug: "guides/reading-floor-plans", icon: "doc", title: "Reading Floor Plans", text: "Walls, symbols, grids, and references." },
        { slug: "guides/cad-best-practices", icon: "layers", title: "CAD Best Practices", text: "Layers, weights, blocks, and issue control." },
        { slug: "guides/export-to-excel", icon: "file", title: "Export to Excel", text: "Clean CSV into a spreadsheet." }
      ] }
    ]
  }
];

/* ============================================================
   APP / STUDIO PAGES (side-nav)
   ============================================================ */
const apps = [
  {
    slug: "workspace", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Workspace",
    title: `Workspace — ${SITE.product}`, desc: "Your saved projects, exports, and notes — stored locally in this browser, no account needed.",
    lede: "Every result you save from a tool lands here, stored locally in your browser. No login, no upload.",
    html: `<div class="two-col"><article class="workspace-card"><h3>How saving works</h3><p>Run any tool, then press <strong>Save</strong>. The input set and output are stored in this browser's local storage so you can return to them later.</p></article><article class="workspace-card"><h3>Privacy by design</h3><p>Nothing is sent to a server. Saved projects live only on this device and clear when you clear browser data.</p></article></div>
  <div class="section-heading" style="margin-top:8px"><h2>Saved projects <span class="pill" data-project-count>0</span></h2><button class="button secondary" data-clear-projects type="button">Clear all</button></div>
  <div class="card-grid" data-project-list></div>`
  },
  {
    slug: "templates", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Starter Templates",
    title: `Templates — ${SITE.product}`, desc: "Reusable starter inputs for area schedules, finishes, doors, and document control.",
    lede: "Copy-and-go starter inputs for the most common schedules and takeoffs. Search, copy, and paste into any tool.",
    html: `<div class="toolbar-row"><input data-template-search type="search" placeholder="Search templates…" aria-label="Search templates"></div>
  <div class="card-grid">${[
    ["Office area schedule", "Lobby,620,4,Level 1,Public\nOpen office,900,8,Level 2,Typical\nMeeting,46,8,Level 2,Acoustic\nWC,24,6,Level 2,Core"],
    ["Residential schedule", "Living,24,12,Unit A,Open plan\nBedroom 1,14,12,Unit A,Double\nBedroom 2,9,12,Unit A,Single\nBathroom,5,16,Unit A,Wet area"],
    ["Door schedule", "D01,900,2100,Single timber,FD30,4\nD02,1800,2100,Double glazed,—,2\nD03,1000,2100,Accessible,FD60,1"],
    ["Window schedule", "W01,1200,1500,Double,Casement,6\nW02,600,900,Double,Fixed,4"],
    ["Finish schedule", "Lobby,Polished concrete,Paint,Plasterboard,Aluminium\nOffice,Carpet tile,Paint,Acoustic tile,Timber"],
    ["Drawing register", "A-100,Site Plan,1:500,P3,For approval\nA-201,Ground Floor,1:100,C1,Construction"],
    ["Revision history", "P1,2026-01-12,First issue,AS\nP2,2026-02-03,Stair revised,AS"],
    ["Site feasibility", "Plot,1000,0,Site,Area\nFootprint,600,0,Site,Coverage\nGFA,2400,0,Site,FAR 2.4"]
  ].map(([t, body], i) => `<article class="template-card" data-template-card><span>Template ${i + 1}</span><h3>${t}</h3><p>Paste into the matching tool to start fast:</p><div class="code-block">${body.replace(/\n/g, "<br>")}</div><button class="button secondary" data-copy-section type="button" style="margin-top:12px">Copy</button></article>`).join("")}</div>`
  },
  {
    slug: "reports", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Reports",
    title: `Reports — ${SITE.product}`, desc: "Roll up saved projects into simple, copyable summaries for issue and review.",
    lede: "Summarise the work you've saved in this browser into a tidy, copyable report for a meeting or an issue.",
    html: `<div class="two-col"><article class="workspace-card"><h3>Project count</h3><p style="font-size:2rem;font-weight:800" data-project-count>0</p><p>Saved in this browser.</p></article><article class="workspace-card"><h3>Export options</h3><p>Each saved project can be downloaded as JSON from the Workspace. Schedules also export as CSV for Excel.</p></article></div>
  <div class="callout amber" style="margin-top:4px"><h3>How to build a report</h3><p>Save results from the tools you used, then open the Workspace to download them. Combine the CSV exports in your spreadsheet for a full project report — see the <a href="../guides/export-to-excel/">Export to Excel</a> guide.</p></div>`
  },
  {
    slug: "examples", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Worked Examples",
    title: `Examples — ${SITE.product}`, desc: "Realistic worked examples showing how the tools combine on a small project.",
    lede: "See how the calculators and schedules combine on a small, realistic project — start to finish.",
    html: `<div class="card-grid">${[
    ["Feasibility in five minutes", "Use Buildable Area for the footprint, FAR for density, and Parking for bays — then sanity-check against the brief.", "tools/buildable-area"],
    ["Office floor takeoff", "Measure rooms with the Room Area Calculator, assemble in the Area Schedule Builder, then apply Gross-to-Net for usable area.", "tool"],
    ["Fit-out package", "Build a Finish Schedule and Door Schedule, estimate paint and flooring, and export everything to CSV.", "tools/finish-schedule"],
    ["Drawing issue", "Keep a Drawing Register and Revision Schedule, set scales from the Scale tool, and run the QA checklist before issue.", "tools/drawing-register"],
    ["Site area check", "Use the Polygon Area tool on survey coordinates, convert units, and compare against the title deed.", "tools/polygon-area"],
    ["Services first pass", "Estimate lighting and HVAC loads from area, and test the window-to-wall ratio for the facade.", "tools/hvac-load"]
  ].map(([t, body, slug]) => `<article class="workspace-card"><h3>${t}</h3><p>${body}</p><a class="button secondary" href="../${slug}/" style="margin-top:12px">Open tool</a></article>`).join("")}</div>`
  },
  {
    slug: "checklists", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Drawing QA Checklist",
    title: `QA Checklist — ${SITE.product}`, desc: "An interactive pre-issue quality checklist for area schedules and drawing sets, with a readiness score.",
    lede: "Tick off the risks before you issue. This interactive checklist scores how ready your set is and lists what's open.",
    config: {
      title: "Drawing QA Checklist", kind: "checklist",
      fields: [{ id: "items", label: "Open / unresolved items", type: "checklist", default: [], options: ["Net vs gross basis not stated", "Area names mismatch the plan", "Schedule not updated after layout change", "FAR not checked against limit", "Scale bar missing on sheets", "Revision cloud/superseded data left in", "Door/window IDs don't match schedules", "Levels/datums not stated", "No second cross-check of totals", "Layers not to office standard"] }],
      data: { items: [
        { title: "Net vs gross basis not stated", weight: 3, category: "Area", note: "State the measurement basis on the schedule." },
        { title: "Area names mismatch the plan", weight: 2, category: "Coordination", note: "Make names identical across schedule and plan." },
        { title: "Schedule not updated after layout change", weight: 3, category: "Currency", note: "Re-run the takeoff at each milestone." },
        { title: "FAR not checked against limit", weight: 2, category: "Compliance", note: "Verify FAR before issue." },
        { title: "Scale bar missing on sheets", weight: 1, category: "Drafting", note: "Add a graphic scale bar to every sheet." },
        { title: "Revision cloud/superseded data left in", weight: 1, category: "Document control", note: "Remove superseded clouds and data." },
        { title: "Door/window IDs don't match schedules", weight: 2, category: "Coordination", note: "Reconcile IDs with the schedules." },
        { title: "Levels/datums not stated", weight: 2, category: "Drafting", note: "State datum and finished floor levels." },
        { title: "No second cross-check of totals", weight: 3, category: "Quality", note: "Validate totals a second way." },
        { title: "Layers not to office standard", weight: 1, category: "CAD", note: "Tidy layers to the agreed standard." }
      ] },
      examples: ex(["Pre-issue gate", "Run this before every drawing or schedule issue."], ["Team review", "Use the readiness score to focus a coordination meeting."]),
      faq: fq(["How is the score made?", "Each open item carries a weight; readiness falls as you check more open items."], ["Is the list fixed?", "It's a sensible default for area and drawing work — adapt it to your office standard."]),
      limits: DEFAULT_LIMITS
    },
    html: `<section class="tool-shell" id="tool"><div class="tool-panel"><div class="panel-heading"><h2>Open items</h2><span class="pill">Live</span></div><div class="fields-grid" id="toolFields"></div></div><div class="result-panel"><div class="result-toolbar"><h2>Readiness</h2><div class="toolbar-row"><button class="button secondary" id="copyExport" type="button">Copy output</button><button class="button secondary" type="button" data-save-current>Save</button></div></div><div id="toolResult"></div></div></section>`
  },
  {
    slug: "integrations", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Integrations",
    title: `Integrations — ${SITE.product}`, desc: "How the studio's CSV and JSON exports flow into Excel, Google Sheets, and CAD/BIM tools.",
    lede: "The studio is deliberately open: everything exports to CSV or JSON so it drops straight into the tools you already use.",
    html: `<div class="card-grid">${[
    ["Excel / Google Sheets", "Schedules export as CSV. Use Data → From Text/CSV for a clean import with the right delimiters.", "file"],
    ["AutoCAD / BIM", "Use schedule CSVs to cross-check quantities and area takeoffs against your model.", "layers"],
    ["Cost planning", "Area × rate totals export ready for a cost plan or feasibility model.", "cost"],
    ["Local backup", "Every saved project downloads as JSON — keep your own versioned copies.", "doc"]
  ].map(([t, body, ic]) => `<article class="workspace-card"><div class="icon-tile">${ICONS[ic]}</div><h3 style="margin-top:12px">${t}</h3><p>${body}</p></article>`).join("")}</div>
  <div class="callout" style="margin-top:4px"><h3>No lock-in</h3><p>There is no proprietary database here. Open formats mean your data stays yours and moves freely between tools.</p></div>`
  },
  {
    slug: "settings", layout: "app", nav: "Workspace", eyebrow: "Studio", h1: "Settings",
    title: `Settings — ${SITE.product}`, desc: "Set defaults like your organisation name and preferred units, stored locally in this browser.",
    lede: "Personal defaults for this device. Settings are stored locally in your browser and never uploaded.",
    html: `<div class="two-col"><div class="page-title-panel"><div class="mini-form"><label>Organisation name<input data-setting="org" data-default="" placeholder="Your studio"></label><label>Preferred area unit<select data-setting="unit" data-default="m²"><option>m²</option><option>ft²</option><option>ping</option></select></label><label>Default cost rate ($/m²)<input data-setting="rate" data-default="" placeholder="e.g. 1500"></label><button class="button" data-save-settings type="button">Save settings</button><p class="note-line" data-settings-status></p></div></div><article class="workspace-card"><h3>Where settings live</h3><p>Settings are written to this browser's local storage. They follow this device and browser only, and clear when you clear site data.</p><h3 style="margin-top:14px">Reset</h3><p>To reset, clear your browser's site data for this domain. Saved projects in the Workspace are cleared the same way.</p></article></div>`
  },
  {
    slug: "plans", layout: "app", nav: "App", eyebrow: "Pricing", h1: "Plans",
    title: `Plans — ${SITE.product}`, desc: "The studio is free to use. Compare what's included now and what's on the roadmap.",
    lede: "Every tool here is free and runs in your browser. Here's what's included today and what's planned next.",
    html: `<div class="card-grid"><article class="plan-card featured"><span class="card-meta"><span class="dot"></span>Available now</span><h3>Free Studio</h3><div class="plan-price">$0<small>/forever</small></div><ul><li>All ${1 + calculators.length + schedules.length}+ tools &amp; calculators</li><li>Searchable reference library</li><li>CSV &amp; JSON export</li><li>Local saved projects</li><li>No account, no upload</li></ul><a class="button" href="../tool/">Open the app</a></article>
  <article class="plan-card"><span class="card-meta"><span class="dot"></span>Roadmap</span><h3>Pro (planned)</h3><div class="plan-price">TBA</div><ul><li>Cloud sync across devices</li><li>Shared team templates</li><li>PDF report export</li><li>Custom rate libraries</li></ul><a class="button secondary" href="../faq/">Read the FAQ</a></article>
  <article class="plan-card"><span class="card-meta"><span class="dot"></span>For teams</span><h3>Studio (planned)</h3><div class="plan-price">TBA</div><ul><li>Office CAD standards</li><li>Branded exports</li><li>Onboarding &amp; support</li><li>Priority requests</li></ul><a class="button secondary" href="../integrations/">See integrations</a></article></div>
  <div class="callout amber" style="margin-top:4px"><h3>Why free?</h3><p>The tools are static and run locally, so they cost little to host. Unobtrusive advertising keeps them free for everyone.</p></div>`
  },
  {
    slug: "faq", layout: "app", nav: "App", eyebrow: "Help", h1: "Frequently Asked Questions",
    title: `FAQ — ${SITE.product}`, desc: "Answers about how the tools work, data privacy, accuracy, exports, and supported units.",
    lede: "Short answers to the questions we hear most about the studio.",
    html: `<div id="faqStatic">${[
    ["Is it really free?", "Yes. Every calculator, schedule builder, and reference is free to use with no account. Advertising keeps it running."],
    ["Do you store my data?", "No. The tools run entirely in your browser. Inputs and saved projects stay in your device's local storage and are never uploaded."],
    ["How accurate are the calculators?", "They use standard formulas and exact conversion factors, but results are planning estimates. Always confirm against codes, standards, and supplier data before issue."],
    ["Can I export results?", "Yes. Calculators offer copy and JSON download; schedule builders export CSV for Excel or Google Sheets."],
    ["Which units do you support?", "Areas in m², ft², yd², acres, hectares, ping, and more via the Area Unit Converter. Lengths are metric in the drawing tools."],
    ["Do the tools work offline?", "Once the page has loaded, the tools run locally in the browser, so they keep working even if your connection drops."],
    ["Can I use this commercially?", "Yes, the outputs are yours to use — but a qualified professional must review anything that affects compliance, cost, or safety."],
    ["How do I report a bug or request a tool?", "Note the page and what you expected; requests for new tools and references are welcome and shape the roadmap."]
  ].map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`
  },
  {
    slug: "privacy", layout: "app", nav: "App", eyebrow: "Legal", h1: "Privacy & Cookies",
    title: `Privacy — ${SITE.product}`, desc: "How this site handles data, local storage, and advertising cookies.",
    lede: "A short, plain-language summary of how this site handles your data.",
    html: `<article class="guide-body" style="padding:clamp(22px,3vw,38px)">
    <h2 id="data">Your tool data</h2><p>All calculators and schedule builders run entirely in your browser. The values you type are processed on your device and are never transmitted to or stored on our servers. Projects you choose to save are written to your browser's local storage and remain on that device only.</p>
    <h2 id="ads">Advertising</h2><p>This site is supported by Google AdSense. Google and its partners may use cookies and similar technologies to serve and measure ads, and may show personalised ads based on your prior visits to this and other websites. You can manage personalised advertising in your Google account settings and via your browser's cookie controls.</p>
    <h2 id="analytics">Cookies</h2><p>Beyond advertising cookies described above, the tools themselves set only the local storage entries needed to remember your saved projects and settings. Clearing your browser's site data for this domain removes them.</p>
    <h2 id="contact">Your choices</h2><p>You can use the tools without saving anything, clear local storage at any time, and control advertising cookies through your browser and Google account. Because we hold no server-side personal data, there is nothing on our side to export or delete.</p>
    <p class="note-line">This summary is provided for transparency and is not legal advice.</p>
  </article>`
  }
];

/* ============================================================
   HOME / DASHBOARD
   ============================================================ */
const popularTools = [
  { slug: "tool", icon: "grid", title: "Area Schedule Builder", text: "Costed schedule from a room list." },
  { slug: "tools/room-area", icon: "ruler", title: "Room Area Calculator", text: "Area per room and project total." },
  { slug: "tools/area-unit-converter", icon: "convert", title: "Area Unit Converter", text: "m² ↔ ft² ↔ ping and more." },
  { slug: "tools/gross-net-area", icon: "layers", title: "Gross to Net Area", text: "Net usable area from efficiency." },
  { slug: "tools/floor-area-ratio", icon: "building", title: "FAR Calculator", text: "Floor area ratio and coverage." },
  { slug: "tools/polygon-area", icon: "polygon", title: "Polygon Area", text: "Area from survey coordinates." }
];

const home = {
  slug: "", layout: "home", nav: "Home",
  title: `${SITE.product} — Free area & CAD drawing tools`,
  desc: SITE.tagline,
  html: `<section class="hero">
    <div class="hero-copy">
      <p class="eyebrow">Drawing Studio · Free &amp; in-browser</p>
      <h1>Area takeoff &amp; CAD drawing tools, done in your browser</h1>
      <p class="lede">${SITE.tagline} No account, nothing uploaded — just fast, dependable calculators, schedules, and references.</p>
      <div class="action-row"><a class="button" href="./tool/">Open the Area Schedule Builder</a><a class="button secondary" href="./tools/">Browse all tools</a></div>
      <div class="hero-meta"><div><strong>${1 + calculators.length + schedules.length}+</strong><span>Working tools</span></div><div><strong>${library.length}</strong><span>References</span></div><div><strong>${guides.length}</strong><span>Guides</span></div></div>
    </div>
    <div class="hero-art">${ART.blueprint}</div>
  </section>

  <section class="section">
    <div class="stat-band">
      <div class="stat"><strong data-project-count>0</strong><span>Projects saved on this device</span></div>
      <div class="stat"><strong>100%</strong><span>Runs in your browser</span></div>
      <div class="stat"><strong>CSV·JSON</strong><span>Open exports, no lock-in</span></div>
      <div class="stat"><strong>$0</strong><span>Free, no sign-up</span></div>
    </div>
  </section>

  <aside class="ad-unit" aria-label="Advertisement">
    <ins class="adsbygoogle" style="display:block" data-ad-client="${SITE.adsense}" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <span class="ad-label">Advertisement</span>
    <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
  </aside>

  <section class="section">
    <div class="section-head"><p class="eyebrow amber">Popular tools</p><h2>Start with what people use most</h2><p>Every tool runs locally and exports cleanly. Pick one and you're working in seconds.</p></div>
    <div class="grid-3">${popularTools.map((t) => `<a class="hub-card" href="./${t.slug}/"><div class="icon-tile">${ICONS[t.icon]}</div><h3>${t.title}</h3><p>${t.text}</p><span class="go">Open →</span></a>`).join("")}</div>
  </section>

  <section class="section">
    <div class="section-head"><h2>Three ways in</h2><p>Calculators for the numbers, references for the conventions, guides for the why.</p></div>
    <div class="grid-3">
      <a class="feature" href="./tools/"><div class="icon-tile">${ICONS.calc}</div><h3>Tools</h3><p>${1 + calculators.length + schedules.length}+ calculators and schedule builders for area, cost, services, and document control.</p><span class="go">Browse tools →</span></a>
      <a class="feature" href="./library/"><div class="icon-tile amber">${ICONS.book}</div><h3>Library</h3><p>Searchable references for units, symbols, scales, paper sizes, CAD standards, and terminology.</p><span class="go">Open library →</span></a>
      <a class="feature" href="./guides/"><div class="icon-tile">${ICONS.doc}</div><h3>Guides</h3><p>Step-by-step walkthroughs on schedules, area measurement, drawing scales, and CAD quality.</p><span class="go">Read guides →</span></a>
    </div>
  </section>

  <section class="section">
    <div class="visual-reference">
      <img src="./assets/ui-concept.png" alt="Area Schedule Builder interface concept" loading="lazy">
      <figcaption>
        <p class="eyebrow">Design system</p>
        <h2>Built like a real product</h2>
        <p>A calm blueprint aesthetic, a consistent component system, and a live tool engine — every page shares the same studio navigation with domain-specific calculators, schedules, and searchable references behind it.</p>
        <p>The interface direction is generated up front and kept in the repository for visual QA, so the whole studio stays coherent as it grows.</p>
      </figcaption>
    </div>
  </section>

  <section class="section">
    <div class="visual-reference" style="grid-template-columns:1fr 0.85fr">
      <figcaption>
        <p class="eyebrow amber">Illustration system</p>
        <h2>Diagrams that explain, not decorate</h2>
        <p>Hand-built blueprint illustrations and a full inline icon set give every tool and guide a clear visual anchor — area grids, rulers, building sections, and conversion diagrams drawn to match the content.</p>
        <div class="action-row"><a class="button secondary" href="./guides/reading-floor-plans/">Learn to read plans</a></div>
      </figcaption>
      <img src="./assets/illustration-sheet.png" alt="Illustration and symbol sheet" loading="lazy">
    </div>
  </section>

  <section class="section">
    <div class="section-head"><h2>From the guides</h2><p>The thinking behind the numbers.</p></div>
    <div class="grid-3">${guides.slice(0, 3).map((g) => `<a class="hub-card" href="./${g.slug}/"><div class="card-meta"><span class="dot"></span>${g.category} · ${g.readMins} min</div><h3>${g.h1}</h3><p>${g.desc}</p><span class="go">Read →</span></a>`).join("")}</div>
  </section>

  <section class="section">
    <div class="saas-panel" style="text-align:center;display:grid;gap:14px;justify-items:center">
      <p class="eyebrow">Ready when you are</p>
      <h2 style="max-width:20ch">Build a costed area schedule in the next minute</h2>
      <p class="lede" style="margin:0 auto">Paste a room list, get totals and checks, export to CSV. No sign-up required.</p>
      <div class="action-row" style="justify-content:center"><a class="button" href="./tool/">Open the Area Schedule Builder</a><a class="button secondary" href="./tools/">See all tools</a></div>
    </div>
  </section>`
};

/* ============================================================
   EXPORT
   ============================================================ */
export const pages = [
  home,
  ...hubs,
  flagship,
  ...calculators,
  ...schedules,
  ...library,
  ...guides,
  ...apps
];
