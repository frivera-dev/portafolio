"use client";

import { motion } from "framer-motion";
import type { FeaturedBrand } from "@/lib/data";

function BrandLogo({ brand }: { brand: FeaturedBrand }) {
  const initials = brand.name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="brand-card group relative flex flex-col items-center justify-between p-6 rounded-2xl overflow-hidden min-h-[180px] cursor-default"
      style={{
        background: `linear-gradient(145deg, ${brand.color}18 0%, rgba(255,255,255,0.02) 60%)`,
        border: `1px solid ${brand.accent}25`,
      }}
    >
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
        style={{ background: brand.accent }}
      />

      <div
        className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg mb-4"
        style={{
          background: `linear-gradient(135deg, ${brand.color}, ${brand.accent})`,
          color: "#fff",
          boxShadow: `0 8px 24px ${brand.accent}40`,
        }}
      >
        {initials}
      </div>

      <div className="relative z-10 text-center flex-1 flex flex-col justify-center">
        <p
          className="font-display font-semibold text-sm leading-tight"
          style={{ color: "#f1f5f9" }}
        >
          {brand.name}
        </p>
      </div>

      <p className="relative z-10 text-[10px] mt-3" style={{ color: "#64748b" }}>
        {brand.region}
      </p>
    </motion.div>
  );
}

export function BrandMarquee({ brands }: { brands: FeaturedBrand[] }) {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden py-4">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050505, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #050505, transparent)" }}
      />

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.name}-${i}`}
            className="flex items-center gap-3 px-6 py-3 rounded-full shrink-0"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${brand.accent}20`,
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
              style={{ background: brand.color, color: "#fff" }}
            >
              {brand.name[0]}
            </span>
            <span
              className="font-display font-medium text-sm whitespace-nowrap"
              style={{ color: "#e2e8f0" }}
            >
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function BrandGrid({ brands }: { brands: FeaturedBrand[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {brands.map((brand, i) => (
        <motion.div
          key={brand.name}
          initial={{ opacity: 0, y: 40, rotateX: 15 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <BrandLogo brand={brand} />
        </motion.div>
      ))}
    </div>
  );
}
