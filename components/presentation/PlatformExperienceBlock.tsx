"use client";

import { platformExperienceStats } from "@/lib/data";
import { platformLogoMap, platformBrandColors } from "@/components/ui/PlatformLogos";

function PlatformTile({ name }: { name: string }) {
  const Logo = platformLogoMap[name];
  const brand = platformBrandColors[name] ?? { color: "#818cf8", bg: "rgba(129,140,248,0.06)" };

  return (
    <div
      className="flex flex-col items-center p-6 lg:p-8 rounded-2xl"
      style={{
        background: brand.bg,
        border: `1px solid ${brand.color}30`,
      }}
    >
      <div className="mb-6 h-14 flex items-center justify-center" style={{ color: brand.color }}>
        {Logo && <Logo />}
      </div>
      <p className="font-display font-bold text-xl text-[#f8fafc]">{name}</p>
      <p className="mt-2 text-xs uppercase tracking-wider" style={{ color: brand.color }}>
        6 años
      </p>
    </div>
  );
}

export function PlatformExperienceBlock() {
  return (
    <div className="rounded-3xl p-8 lg:p-12 border border-[rgba(212,165,116,0.15)] bg-[rgba(255,255,255,0.02)]">
      <div className="text-center mb-10">
        <div className="inline-flex items-baseline gap-3 flex-wrap justify-center">
          <span className="platform-mega-number font-display font-bold">6</span>
          <span className="font-display font-bold text-3xl lg:text-4xl presentation-hero-text text-left">
            años de <span className="presentation-gold-text">experiencia en:</span>
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {platformExperienceStats.map((stat) => (
          <PlatformTile key={stat.name} name={stat.name} />
        ))}
      </div>
    </div>
  );
}
