"use client";

import type { FeaturedBrand } from "@/lib/data";

function BrandLogo({ brand }: { brand: FeaturedBrand }) {
  const initials = brand.name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <div
      className="flex flex-col items-center justify-between p-6 rounded-2xl min-h-[160px]"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${brand.accent}22`,
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-4"
        style={{
          background: `linear-gradient(135deg, ${brand.color}, ${brand.accent})`,
          color: "#fff",
        }}
      >
        {initials}
      </div>
      <p className="font-display font-semibold text-sm text-center text-[#f1f5f9]">{brand.name}</p>
      <p className="text-[10px] mt-3 text-[#64748b]">{brand.region}</p>
    </div>
  );
}

export function BrandGrid({ brands }: { brands: FeaturedBrand[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {brands.map((brand) => (
        <BrandLogo key={brand.name} brand={brand} />
      ))}
    </div>
  );
}
