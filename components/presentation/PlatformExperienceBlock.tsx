"use client";

import { motion } from "framer-motion";
import { platformExperienceStats } from "@/lib/data";
import { platformLogoMap, platformBrandColors } from "@/components/ui/PlatformLogos";

function PlatformTile({ name, index }: { name: string; index: number }) {
  const Logo = platformLogoMap[name];
  const brand = platformBrandColors[name] ?? {
    color: "#818cf8",
    glow: "rgba(129,140,248,0.2)",
    bg: "rgba(129,140,248,0.06)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: 0.3 + index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -12, scale: 1.03 }}
      className="platform-tile group relative flex flex-col items-center justify-center p-8 lg:p-10 rounded-3xl overflow-hidden"
      style={{
        background: `linear-gradient(165deg, ${brand.bg} 0%, rgba(5,5,5,0.6) 100%)`,
        border: `1px solid ${brand.color}30`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${brand.glow}, transparent 65%)`,
        }}
      />

      <div
        className="relative z-10 mb-8 h-16 lg:h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-125"
        style={{
          color: brand.color,
          filter: `drop-shadow(0 0 20px ${brand.color}70)`,
        }}
      >
        {Logo && <Logo />}
      </div>

      <p
        className="relative z-10 font-display font-bold text-xl lg:text-2xl tracking-tight"
        style={{ color: "#f8fafc" }}
      >
        {name}
      </p>

      <div
        className="relative z-10 mt-3 h-px w-12 transition-all duration-500 group-hover:w-20"
        style={{ background: `linear-gradient(90deg, transparent, ${brand.color}, transparent)` }}
      />

      <p
        className="relative z-10 mt-3 text-xs uppercase tracking-[0.2em] font-medium"
        style={{ color: brand.color }}
      >
        6 años
      </p>
    </motion.div>
  );
}

export function PlatformExperienceBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="platform-showcase relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden"
    >
      <div className="platform-showcase-border absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] pointer-events-none" />

      <div className="platform-showcase-bg absolute inset-0" />

      <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24">
        <div className="text-center mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="inline-flex items-baseline gap-3 lg:gap-5 mb-4"
          >
            <span className="platform-mega-number font-display font-bold">6</span>
            <span className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl presentation-hero-text text-left leading-tight">
              años de
              <br />
              <span className="presentation-gold-text">experiencia en:</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm lg:text-base max-w-lg mx-auto"
            style={{ color: "#64748b" }}
          >
            Store Manager & desarrollador full stack — operación, código e integraciones en producción
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {platformExperienceStats.map((stat, i) => (
            <PlatformTile key={stat.name} name={stat.name} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-12 lg:mt-16"
        >
          {["Catálogo & pricing", "Checkout & OMS", "Temas & front-end", "APIs & integraciones"].map(
            (tag, i) => (
              <span key={tag} className="platform-capability-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                {tag}
              </span>
            )
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
