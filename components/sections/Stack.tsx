"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { stack, platforms } from "@/lib/data";
import { PlatformLogos } from "@/components/ui/PlatformLogos";

const categories = ["Todos", "eCommerce", "Frontend", "Backend", "Multimedia", "Marketing"];

const categoryColors: Record<string, string> = {
  eCommerce: "#818cf8",
  Frontend: "#c084fc",
  Backend: "#f472b6",
  Multimedia: "#fb923c",
  Marketing: "#34d399",
};

export function Stack() {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? stack : stack.filter((s) => s.category === active);

  return (
    <section id="stack" className="relative py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest font-medium mb-4 block"
          style={{ color: "#818cf8" }}
        >
          Tecnologías
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl lg:text-5xl mb-12"
          style={{ color: "#f1f5f9" }}
        >
          Stack & herramientas
        </motion.h2>

        <PlatformLogos platforms={platforms} />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-1.5 rounded-full text-sm transition-all duration-200"
              style={{
                background:
                  active === cat
                    ? "rgba(129, 140, 248, 0.15)"
                    : "rgba(255,255,255,0.02)",
                border:
                  active === cat
                    ? "1px solid rgba(129, 140, 248, 0.4)"
                    : "1px solid rgba(255,255,255,0.06)",
                color: active === cat ? "#818cf8" : "#ffffff",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="p-5 rounded-2xl cursor-default group"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: `${categoryColors[item.category]}15`,
                    color: categoryColors[item.category] ?? "#818cf8",
                    border: `1px solid ${categoryColors[item.category]}30`,
                  }}
                >
                  {item.category}
                </span>
              </div>
              <h3
                className="font-display font-semibold text-lg mb-3"
                style={{ color: "#f1f5f9" }}
              >
                {item.name}
              </h3>
              {/* Level bar */}
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 + i * 0.05 }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${categoryColors[item.category] ?? "#818cf8"}, ${categoryColors[item.category] ?? "#818cf8"}80)`,
                  }}
                />
              </div>
              <span
                className="text-xs mt-2 block"
                style={{ color: "#ffffff" }}
              >
                {item.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
