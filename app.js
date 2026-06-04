/* Area Schedule Builder — client tool engine.
   Config-driven, dependency-free. Every tool runs fully in the browser. */
const config = window.SITE_CONFIG || {};
const state = {};

const qs = (selector, root = document) => root.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(Number(value || 0));
}

function formatNumber(value, digits = 2) {
  const number = Number(value || 0);
  if (!Number.isFinite(number)) return "0";
  return Number.isInteger(number) ? String(number) : number.toFixed(digits);
}

function selectedList(id) {
  return Array.isArray(state[id]) ? state[id] : [];
}

function initState() {
  (config.fields || []).forEach((field) => {
    state[field.id] = field.type === "checklist" ? (field.default || []) : (field.default ?? "");
  });
}

function renderField(field) {
  const hint = field.hint ? `<span class="field-hint">${escapeHtml(field.hint)}</span>` : "";
  const value = state[field.id] ?? "";
  if (field.type === "select") {
    return `<label class="field"><span>${escapeHtml(field.label)}</span>${hint}<select data-field="${field.id}">${(field.options || []).map((item) => `<option value="${escapeHtml(item)}" ${item === value ? "selected" : ""}>${escapeHtml(item)}</option>`).join("")}</select></label>`;
  }
  if (field.type === "textarea") {
    return `<label class="field field-wide"><span>${escapeHtml(field.label)}</span>${hint}<textarea data-field="${field.id}" rows="${field.rows || 5}">${escapeHtml(value)}</textarea></label>`;
  }
  if (field.type === "color") {
    return `<label class="field"><span>${escapeHtml(field.label)}</span>${hint}<input type="color" data-field="${field.id}" value="${escapeHtml(value)}"></label>`;
  }
  if (field.type === "checklist") {
    return `<fieldset class="field field-wide"><legend>${escapeHtml(field.label)}</legend>${hint}<div class="check-grid">${(field.options || []).map((item) => {
      const checked = selectedList(field.id).includes(item) ? "checked" : "";
      return `<label><input type="checkbox" data-checkgroup="${field.id}" value="${escapeHtml(item)}" ${checked}> ${escapeHtml(item)}</label>`;
    }).join("")}</div></fieldset>`;
  }
  const inputType = field.type === "number" || field.type === "range" ? field.type : "text";
  const step = field.step ? ` step="${escapeHtml(field.step)}"` : "";
  const min = field.min !== undefined ? ` min="${escapeHtml(field.min)}"` : "";
  const max = field.max !== undefined ? ` max="${escapeHtml(field.max)}"` : "";
  const wide = field.wide ? " field-wide" : "";
  return `<label class="field${wide}"><span>${escapeHtml(field.label)}</span>${hint}<input type="${inputType}" data-field="${field.id}" value="${escapeHtml(value)}"${step}${min}${max}></label>`;
}

function renderForm() {
  const host = qs("#toolFields");
  if (host) host.innerHTML = (config.fields || []).map(renderField).join("");
}

function updateFromEvent(event) {
  const target = event.target;
  if (target.matches("[data-field]")) {
    state[target.dataset.field] = target.value;
    renderResult();
  }
  if (target.matches("[data-checkgroup]")) {
    const group = target.dataset.checkgroup;
    state[group] = qsa("[data-checkgroup]").filter((node) => node.dataset.checkgroup === group && node.checked).map((node) => node.value);
    renderResult();
  }
}

function inputs() {
  const data = {};
  (config.fields || []).forEach((field) => {
    const value = state[field.id];
    if (field.type === "number" || field.type === "range") data[field.id] = Number(value || 0);
    else if (field.type === "checklist") data[field.id] = selectedList(field.id);
    else data[field.id] = value ?? "";
  });
  return data;
}

function evaluate(expression, data) {
  try {
    return Function("inputs", "Math", `"use strict"; const { ${Object.keys(data).join(", ")} } = inputs; return (${expression});`)(data, Math);
  } catch (error) {
    return 0;
  }
}

function formatOutput(value, output) {
  if (output.format === "money") return money(value);
  if (output.format === "percent") return `${formatNumber(value, output.digits ?? 1)}%`;
  if (output.format === "integer") return formatNumber(Math.round(Number(value || 0)), 0);
  if (output.format === "ratio") return `1 : ${formatNumber(value, output.digits ?? 0)}`;
  return `${formatNumber(value, output.digits ?? 2)}${output.unit ? ` ${output.unit}` : ""}`;
}

function resultShell(summary, html, exportText) {
  window.lastExportText = exportText;
  return `<div class="result-summary">${summary}</div><div class="result-body">${html}</div>`;
}

function replaceTokens(text, data) {
  return String(text || "").replace(/\{\{([a-zA-Z0-9_]+)\}\}/g, (_, key) => {
    const value = data[key];
    return Array.isArray(value) ? value.join(", ") : String(value ?? "");
  });
}

function barChart(items) {
  const max = Math.max(...items.map((item) => Math.abs(item.value)), 1);
  return `<div class="bar-chart">${items.map((item) => {
    const pct = Math.max(2, Math.min(100, (Math.abs(item.value) / max) * 100));
    return `<div class="bar-row"><span>${escapeHtml(item.label)}</span><div class="bar-track"><i style="width:${pct}%"></i></div><strong>${escapeHtml(item.display)}</strong></div>`;
  }).join("")}</div>`;
}

function calculatorTool() {
  const data = inputs();
  const outputs = (config.engine?.outputs || []).map((output) => ({
    ...output,
    value: evaluate(output.expr, data)
  }));
  const rules = (config.engine?.rules || [])
    .filter((rule) => !rule.if || Boolean(evaluate(rule.if, data)))
    .map((rule) => replaceTokens(rule.text, data));
  if (!rules.length) rules.push(config.engine?.defaultAdvice || "Inputs are within the expected planning range. Review assumptions before using the result.");
  const primary = outputs.filter((output) => !output.secondary);
  const chart = config.engine?.chart
    ? barChart(primary.filter((o) => o.format !== "ratio").map((output) => ({ label: output.label, value: Number(output.value) || 0, display: formatOutput(output.value, output) })))
    : "";
  const html = `<div class="metric-grid">${outputs.map((output) => `<div${output.secondary ? ' class="metric-sub"' : ""}><span>${escapeHtml(output.label)}</span><strong>${escapeHtml(formatOutput(output.value, output))}</strong>${output.note ? `<em>${escapeHtml(output.note)}</em>` : ""}</div>`).join("")}</div>${chart}<ul class="clean-list">${rules.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
  const exportText = `${config.title}\n${outputs.map((output) => `${output.label}: ${formatOutput(output.value, output)}`).join("\n")}\n\nNotes\n- ${rules.join("\n- ")}`;
  return resultShell(`${primary.length} calculated outputs ready.`, html, exportText);
}

const CONVERT_BASE = {
  // area to square metres
  area: { "Square metres (m²)": 1, "Square feet (ft²)": 0.09290304, "Square yards (yd²)": 0.83612736, "Square inches (in²)": 0.00064516, "Acres": 4046.8564224, "Hectares": 10000, "Square kilometres (km²)": 1000000, "Ping (坪)": 3.305785, "Square miles (mi²)": 2589988.110336 },
  length: { "Metres (m)": 1, "Millimetres (mm)": 0.001, "Centimetres (cm)": 0.01, "Feet (ft)": 0.3048, "Inches (in)": 0.0254, "Yards (yd)": 0.9144, "Kilometres (km)": 1000, "Miles (mi)": 1609.344 }
};

function convertTool() {
  const data = inputs();
  const units = config.engine?.units || CONVERT_BASE[config.engine?.dimension || "area"] || CONVERT_BASE.area;
  const names = Object.keys(units);
  const from = data.from && units[data.from] ? data.from : names[0];
  const to = data.to && units[data.to] ? data.to : names[1] || names[0];
  const value = Number(data.value || 0);
  const base = value * units[from];
  const result = base / units[to];
  const rows = names.map((name) => ({ name, value: base / units[name] }));
  const html = `<div class="metric-grid"><div><span>${escapeHtml(from)}</span><strong>${formatNumber(value, 4)}</strong></div><div class="metric-accent"><span>${escapeHtml(to)}</span><strong>${formatNumber(result, 4)}</strong></div></div><div class="table-wrap"><table><thead><tr><th>Unit</th><th>Equivalent value</th></tr></thead><tbody>${rows.map((row) => `<tr${row.name === to ? ' class="row-active"' : ""}><td>${escapeHtml(row.name)}</td><td>${formatNumber(row.value, 4)}</td></tr>`).join("")}</tbody></table></div>`;
  const exportText = `${formatNumber(value, 4)} ${from} =\n` + rows.map((row) => `${formatNumber(row.value, 4)} ${row.name}`).join("\n");
  return resultShell(`${formatNumber(value, 4)} ${escapeHtml(from)} = <strong>${formatNumber(result, 4)} ${escapeHtml(to)}</strong>`, html, exportText);
}

function geometryTool() {
  const data = inputs();
  const points = String(data.points || "").split("\n").map((line) => line.split(/[ ,\t]+/).map(Number).filter((n) => !Number.isNaN(n))).filter((pair) => pair.length >= 2);
  let area = 0;
  let perimeter = 0;
  for (let i = 0; i < points.length; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % points.length];
    area += x1 * y2 - x2 * y1;
    perimeter += Math.hypot(x2 - x1, y2 - y1);
  }
  area = Math.abs(area) / 2;
  const unit = data.unit || "m";
  const html = `<div class="metric-grid"><div class="metric-accent"><span>Enclosed area</span><strong>${formatNumber(area, 3)} ${escapeHtml(unit)}²</strong></div><div><span>Perimeter</span><strong>${formatNumber(perimeter, 3)} ${escapeHtml(unit)}</strong></div><div><span>Vertices</span><strong>${points.length}</strong></div></div><p class="note-line">Computed with the shoelace formula. List vertices in order (clockwise or counter-clockwise); the polygon closes automatically.</p>`;
  return resultShell(`Polygon area: <strong>${formatNumber(area, 3)} ${escapeHtml(unit)}²</strong>`, html, `Area: ${formatNumber(area, 3)} ${unit}^2\nPerimeter: ${formatNumber(perimeter, 3)} ${unit}\nVertices: ${points.length}`);
}

function libraryTool() {
  const data = inputs();
  const query = String(data.query || "").toLowerCase();
  const category = data.category || "All";
  const all = config.data?.items || [];
  const items = all.filter((item) => {
    const text = `${item.title} ${item.category} ${item.use} ${item.note} ${item.tags || ""}`.toLowerCase();
    return (!query || text.includes(query)) && (category === "All" || item.category === category);
  });
  const shown = items.slice(0, 30);
  const html = `<div class="result-list">${shown.map((item) => `<article><h3>${escapeHtml(item.title)}${item.code ? `<span class="tag">${escapeHtml(item.code)}</span>` : ""}</h3><p>${escapeHtml(item.note)}</p><dl><dt>Use</dt><dd>${escapeHtml(item.use || "Reference")}</dd><dt>Watch</dt><dd>${escapeHtml(item.caution || "Verify against project standards.")}</dd></dl></article>`).join("") || "<p>No match yet. Try a shorter keyword or the All category.</p>"}</div>`;
  const exportText = shown.map((item) => `${item.title} | ${item.category} | ${item.use || ""} | ${item.caution || ""}`).join("\n");
  return resultShell(`${items.length} of ${all.length} reference items matched.`, html, exportText);
}

function builderTool() {
  const data = inputs();
  const sections = config.engine?.sections || [
    { title: "Starter", body: "{{projectName}}\n\nUse the generated structure as a first pass, then review details before publication." }
  ];
  const html = `<div class="doc-preview">${sections.map((section) => `<h3>${escapeHtml(replaceTokens(section.title, data))}</h3><p>${escapeHtml(replaceTokens(section.body, data)).replace(/\n/g, "<br>")}</p>`).join("")}</div>`;
  const exportText = sections.map((section) => `${replaceTokens(section.title, data)}\n${replaceTokens(section.body, data)}`).join("\n\n");
  return resultShell(`${sections.length} document sections generated.`, html, exportText);
}

function parseRows(text) {
  return String(text || "").split("\n").map((line) => line.split(",").map((part) => part.trim())).filter((row) => row.some(Boolean));
}

function scheduleTool() {
  const rows = parseRows(inputs().rows || "");
  const columns = config.engine?.columns || ["Item", "Qty", "Unit", "Notes"];
  const qtyIndex = config.engine?.qtyIndex ?? 1;
  const costIndex = config.engine?.costIndex ?? 2;
  const money_on = config.engine?.money !== false && costIndex >= 0;
  const total = money_on ? rows.reduce((sum, row) => sum + Number(row[qtyIndex] || 0) * Number(row[costIndex] || 0), 0) : 0;
  const qtyTotal = qtyIndex >= 0 ? rows.reduce((sum, row) => sum + Number(row[qtyIndex] || 0), 0) : 0;
  const warnings = [];
  rows.forEach((row, index) => {
    if (row.length < columns.length) warnings.push(`Row ${index + 1} (${row[0] || "untitled"}) is missing fields.`);
    if (qtyIndex >= 0 && Number.isNaN(Number(row[qtyIndex] || 0))) warnings.push(`Row ${index + 1} needs a numeric value in "${columns[qtyIndex]}".`);
  });
  const metrics = [`<div><span>Rows</span><strong>${rows.length}</strong></div>`];
  if (qtyIndex >= 0) metrics.push(`<div><span>${escapeHtml(columns[qtyIndex])} total</span><strong>${formatNumber(qtyTotal, 2)}</strong></div>`);
  if (money_on) metrics.push(`<div class="metric-accent"><span>Estimated total</span><strong>${money(total)}</strong></div>`);
  metrics.push(`<div><span>Warnings</span><strong>${warnings.length}</strong></div>`);
  const html = `<div class="metric-grid">${metrics.join("")}</div><div class="table-wrap"><table><thead><tr><th>#</th>${columns.map((col) => `<th>${escapeHtml(col)}</th>`).join("")}</tr></thead><tbody>${rows.map((row, i) => `<tr><td>${i + 1}</td>${columns.map((_, index) => `<td>${escapeHtml(row[index] || "")}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${warnings.length ? `<ul class="warn-list">${warnings.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : `<p class="good">No obvious schedule gaps found.</p>`}`;
  const csv = `${columns.join(",")}\n${rows.map((row) => columns.map((_, index) => `"${String(row[index] || "").replaceAll('"', '""')}"`).join(",")).join("\n")}`;
  return resultShell(`${rows.length} rows prepared${money_on ? ` · ${money(total)} estimated` : ""}.`, html, csv);
}

function checklistTool() {
  const data = inputs();
  const selected = data.items || data.checks || [];
  const items = config.data?.items || [];
  const selectedItems = items.filter((item) => selected.includes(item.title));
  const risk = selectedItems.reduce((sum, item) => sum + Number(item.weight || 1), 0);
  const maxRisk = items.reduce((sum, item) => sum + Number(item.weight || 1), 0) || 1;
  const score = Math.max(0, 100 - (risk / maxRisk) * 100);
  const html = `<div class="metric-grid"><div><span>Open items</span><strong>${selectedItems.length}</strong></div><div class="metric-accent"><span>Readiness</span><strong>${score.toFixed(0)}%</strong></div><div><span>Risk points</span><strong>${risk}</strong></div></div><div class="meter"><i style="width:${score.toFixed(0)}%"></i></div><div class="result-list">${selectedItems.map((item) => `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note || "Resolve before final issue.")}</p><small>${escapeHtml(item.category || "Review")}</small></article>`).join("") || "<p class=\"good\">No open risk items selected. Keep a final human review step.</p>"}</div>`;
  const exportText = `${config.title}\nReadiness: ${score.toFixed(0)}%\nOpen items:\n- ${selectedItems.map((item) => `${item.title}: ${item.note || ""}`).join("\n- ")}`;
  return resultShell(`Readiness score: <strong>${score.toFixed(0)}%</strong>`, html, exportText);
}

function matrixTool() {
  const data = inputs();
  const rows = parseRows(data.rows || "");
  const weights = config.engine?.weights || { Quality: 0.4, Cost: 0.3, Speed: 0.3 };
  const weightValues = Object.values(weights);
  const ranked = rows.map((row) => {
    const score = weightValues.reduce((sum, weight, index) => sum + Number(row[index + 1] || 0) * weight, 0);
    return { name: row[0] || "Option", score };
  }).sort((a, b) => b.score - a.score);
  const html = `<div class="result-list">${ranked.map((item, index) => `<article><h3>${index + 1}. ${escapeHtml(item.name)}</h3><p>Weighted score: <strong>${item.score.toFixed(2)}</strong></p><small>${Object.keys(weights).join(" / ")}</small></article>`).join("")}</div>`;
  const exportText = ranked.map((item, index) => `${index + 1}. ${item.name}: ${item.score.toFixed(2)}`).join("\n");
  return resultShell(`${ranked.length} options ranked.`, html, exportText);
}

function renderResult() {
  if (!qs("#toolResult")) return;
  const map = {
    calculator: calculatorTool,
    convert: convertTool,
    geometry: geometryTool,
    library: libraryTool,
    builder: builderTool,
    schedule: scheduleTool,
    checklist: checklistTool,
    matrix: matrixTool
  };
  qs("#toolResult").innerHTML = (map[config.kind] || builderTool)();
}

function renderStaticContent() {
  if (qs("#examples")) qs("#examples").innerHTML = (config.examples || []).map((item) => `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("");
  if (qs("#faq")) qs("#faq").innerHTML = (config.faq || []).map((item) => `<details><summary>${escapeHtml(item.q)}</summary><p>${escapeHtml(item.a)}</p></details>`).join("");
  if (qs("#limits")) qs("#limits").innerHTML = (config.limits || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

async function copyExport() {
  const text = window.lastExportText || "";
  if (!text) return;
  const button = qs("#copyExport");
  try {
    await navigator.clipboard.writeText(text);
    if (button) {
      button.textContent = "Copied";
      setTimeout(() => button.textContent = "Copy output", 1200);
    }
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }
}

function boot() {
  if (!qs("#toolFields")) return;
  initState();
  renderForm();
  renderResult();
  renderStaticContent();
  qs("#toolFields").addEventListener("input", updateFromEvent);
  qs("#toolFields").addEventListener("change", updateFromEvent);
  const copy = qs("#copyExport");
  if (copy) copy.addEventListener("click", copyExport);
}

boot();
