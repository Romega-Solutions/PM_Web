// Generates banig SVG assets: a plain over-under weave tile and a diamond border band.
// node banig-gen.cjs <outDir>
const fs = require("fs");
const out = process.argv[2];
fs.mkdirSync(out, { recursive: true });

const C = {
  buri: "#ecd6ae",      // natural straw (buri/pandan)
  buriDeep: "#dcc092",
  rose: "#b31460",
  pink: "#ef3e78",
  violet: "#8d69f6",
  plum: "#340839",
  blush: "#f6d0f1",
};

// --- weave tile: 8x8 cells, plain weave. Strip colours by index create a diamond plaid once rotated 45deg.
const cell = 10, n = 12, size = cell * n;
const seq = ["buri","buri","buri","buri","buri","rose","rose","buri","buri","buri","buri","buri"];
const colSeq = ["buri","buri","violet","violet","buri","buri","buri","buri","pink","buri","buri","buri"];
let s = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">`;
s += `<defs>
<linearGradient id="h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#3a0a2f" stop-opacity=".22"/></linearGradient>
<linearGradient id="v" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#3a0a2f" stop-opacity=".22"/></linearGradient>
</defs>`;
for (let r = 0; r < n; r++) {
  for (let c = 0; c < n; c++) {
    const x = c * cell, y = r * cell;
    const hTop = (r + c) % 2 === 0; // horizontal strip passes over
    const col = C[hTop ? seq[r] : colSeq[c]];
    s += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="${col}"/>`;
    s += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" fill="url(#${hTop ? "h" : "v"})"/>`;
    // grain: two fine lines along the strip
    if (hTop) s += `<path d="M${x} ${y + 3.5}h${cell}M${x} ${y + 6.5}h${cell}" stroke="#3a0a2f" stroke-opacity=".07" stroke-width=".6"/>`;
    else s += `<path d="M${x + 3.5} ${y}v${cell}M${x + 6.5} ${y}v${cell}" stroke="#3a0a2f" stroke-opacity=".07" stroke-width=".6"/>`;
    // tuck shadow where the strip dives under its neighbour
    s += hTop
      ? `<rect x="${x}" y="${y}" width="1" height="${cell}" fill="#3a0a2f" fill-opacity=".14"/>`
      : `<rect x="${x}" y="${y}" width="${cell}" height="1" fill="#3a0a2f" fill-opacity=".14"/>`;
  }
}
s += `</svg>`;
fs.writeFileSync(`${out}/banig-weave.svg`, s);

// --- border band: rose ground, straw diamonds, violet sawtooth top and bottom (Basey-style edge)
const w = 28, h = 18;
let b = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">`;
b += `<rect width="${w}" height="${h}" fill="${C.rose}"/>`;
b += `<path d="M0 0h${w}l-${w / 2} 4z" fill="${C.violet}"/><path d="M0 ${h}h${w}l-${w / 2}-4z" fill="${C.violet}"/>`;
b += `<path d="M${w / 2} 3.5l6.5 5.5-6.5 5.5-6.5-5.5z" fill="${C.buri}"/>`;
b += `<path d="M${w / 2} 6.6l2.8 2.4-2.8 2.4-2.8-2.4z" fill="${C.pink}"/>`;
b += `<path d="M0 6.2l2.6 2.8L0 11.8zM${w} 6.2l-2.6 2.8 2.6 2.8z" fill="${C.blush}"/>`;
b += `</svg>`;
fs.writeFileSync(`${out}/banig-edge.svg`, b);

// --- diamond marker (used as kicker mark and step badge shape)
const m = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1.5 22.5 12 12 22.5 1.5 12z" fill="${C.rose}"/><path d="M12 6 18 12 12 18 6 12z" fill="${C.buri}"/><path d="M12 9.2 14.8 12 12 14.8 9.2 12z" fill="${C.pink}"/></svg>`;
fs.writeFileSync(`${out}/banig-diamond.svg`, m);

const uri = (f) => "data:image/svg+xml;base64," + fs.readFileSync(`${out}/${f}`).toString("base64");
fs.writeFileSync(`${out}/uris.json`, JSON.stringify({ weave: uri("banig-weave.svg"), edge: uri("banig-edge.svg"), diamond: uri("banig-diamond.svg") }));
console.log("weave", s.length, "edge", b.length, "diamond", m.length);
