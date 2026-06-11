import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "public", "brands");

const brands = [
  { file: "head-chile.svg", text: "HEAD", sub: "CHILE", color: "#E63946", size: 28 },
  { file: "blushbar.svg", text: "blushbar", sub: "", color: "#E91E8C", size: 22, italic: true },
  { file: "volcan.svg", text: "VOLCÁN", sub: "", color: "#6B8E23", size: 24 },
  { file: "econopticas.svg", text: "ECONÓPTICAS", sub: "", color: "#0066B3", size: 18 },
  { file: "gmo-latam.svg", text: "GMO", sub: "LATAM", color: "#FF6B00", size: 32 },
  { file: "ilko-virutex.svg", text: "ILKO", sub: "& VIRUTEX", color: "#003DA5", size: 22 },
  { file: "zig-zag.svg", text: "ZIG ZAG", sub: "", color: "#C41E3A", size: 24 },
  { file: "atika.svg", text: "ATIKA", sub: "", color: "#D4A574", size: 26 },
  { file: "calubags.svg", text: "CALUBAGS", sub: "", color: "#4ECDC4", size: 22 },
  { file: "tienda-flores.svg", text: "FLORES", sub: "TIENDA", color: "#E84393", size: 26 },
  { file: "mucho-neumatico.svg", text: "MUCHO", sub: "NEUMÁTICO", color: "#F39C12", size: 22 },
  { file: "tubinger.svg", text: "TÜBINGER", sub: "CRAFT BEER", color: "#D4A574", size: 22 },
];

function svg({ text, sub, color, size, italic }) {
  const style = italic ? ' font-style="italic"' : "";
  const subY = sub ? 48 : 0;
  const subEl = sub
    ? `<text x="100" y="${subY}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="600" font-size="11" fill="${color}" opacity="0.85" letter-spacing="3">${sub}</text>`
    : "";
  const mainY = sub ? 30 : 36;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" role="img" aria-label="${text}">
  <text x="100" y="${mainY}" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="${size}" fill="#f8fafc"${style} letter-spacing="1">${text}</text>
  ${subEl}
</svg>`;
}

for (const b of brands) {
  fs.writeFileSync(path.join(outDir, b.file), svg(b));
}

console.log(`Generated ${brands.length} SVG wordmarks`);
