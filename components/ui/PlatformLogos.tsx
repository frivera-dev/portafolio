"use client";

import { motion } from "framer-motion";

const VtexLogo = () => (
  <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
    <text
      x="0" y="48"
      fontFamily="Arial Black, sans-serif"
      fontWeight="900"
      fontSize="52"
      fill="currentColor"
      letterSpacing="-2"
    >
      VTEX
    </text>
  </svg>
);

const MagentoLogo = () => (
  <svg viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <path
      d="M20 0L0 11.5V36.5L6.5 40.2V15.3L20 7.4L33.5 15.3V40.2L40 36.5V11.5L20 0Z"
      fill="currentColor"
    />
    <path
      d="M20 7.4L13.3 11.2V33.8L20 37.6L26.7 33.8V11.2L20 7.4Z"
      fill="currentColor"
      opacity="0.6"
    />
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 109 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <path
      d="M95.2 23.4C95.1 22.7 94.5 22.3 94 22.3C93.5 22.3 83.7 21.6 83.7 21.6C83.7 21.6 76.2 14.2 75.4 13.4C74.6 12.6 73 12.9 72.4 13C72.4 13 70.9 13.5 68.4 14.2C67.9 12.5 67.1 10.4 65.9 8.4C62.1 1.7 56.7 -1.3 50.2 0.5C49.8 0.3 49.4 0.1 49 0C49 0 47.3 0.8 45.5 2.7C44.2 4.1 42.9 6.2 41.8 8.9C41.1 10.7 40.5 12.8 40 15.1L30 18.1C26.8 19.1 26.7 19.2 26.3 22.2C25.9 24.5 17 90.7 17 90.7L80.5 102L108.7 95.5C108.7 95.5 95.3 24.1 95.2 23.4ZM67.1 15.3C65.3 15.9 63.2 16.5 61 17.2C61 15.6 60.8 13.3 60.1 11.2C62.9 11.7 64.5 14.7 67.1 15.3ZM49.6 4.3C50.8 6.6 51.7 9.8 52 11.9C49.4 12.7 46.7 13.5 43.9 14.4C45.5 8.9 48.4 5.7 49.6 4.3ZM43 3.3C43.4 3 43.8 2.8 44.1 2.6C42.4 5 40.3 9.1 39.3 15.8L30.7 18.5C32.7 10.2 37.6 4.2 43 3.3Z"
      fill="currentColor"
    />
    <path
      d="M94 22.3C93.5 22.3 83.7 21.6 83.7 21.6C83.7 21.6 76.2 14.2 75.4 13.4C75.1 13.1 74.7 13 74.3 12.9L80.5 102L108.7 95.5L95.2 23.4C95.1 22.7 94.5 22.3 94 22.3Z"
      fill="currentColor"
      opacity="0.4"
    />
    <path
      d="M50.2 40.1L47.1 52.2C47.1 52.2 43.7 50.5 39.6 50.8C33.6 51.2 33.6 55 33.6 55.9C34 61.5 47.5 62.7 48.3 74.9C48.9 84.5 43.1 90.9 34.7 91.4C24.6 92 19 86.3 19 86.3L21.3 76.5C21.3 76.5 26.9 80.7 31.4 80.4C34.3 80.2 35.3 77.8 35.2 76.1C34.7 68.8 23.8 69.2 23.1 58C22.4 48.5 28.7 39 42.1 38.2C47.3 37.9 50.2 40.1 50.2 40.1Z"
      fill="white"
    />
  </svg>
);

const WordPressLogo = () => (
  <svg viewBox="0 0 122.52 122.52" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
    <circle cx="61.26" cy="61.26" r="61.26" fill="currentColor" />
    <path
      d="M8.71 61.26a52.55 52.55 0 0 0 29.3 47.22L13.9 41.06A52.42 52.42 0 0 0 8.71 61.26zM96.83 58.7c0-6.51-2.34-11.02-4.34-14.53-2.67-4.34-5.17-8.01-5.17-12.35 0-4.84 3.67-9.35 8.85-9.35h.68A52.54 52.54 0 0 0 17 43.91l4.22.13c6.85 0 17.45-.83 17.45-.83 3.52-.2 3.94 4.96.42 5.38 0 0-3.55.42-7.5.62L47.95 98.9l10.89-32.67-7.75-21.23c-3.52-.2-6.85-.62-6.85-.62-3.52-.21-3.11-5.59.42-5.38 0 0 10.83.83 17.26.83 6.84 0 17.46-.83 17.46-.83 3.53-.21 3.94 4.96.42 5.38 0 0-3.54.42-7.5.62L88.17 99.5l4.9-16.37c2.12-6.78 3.75-11.65 3.75-15.43zM62.16 65.85l-15.38 44.7a52.59 52.59 0 0 0 32.33-.84 4.7 4.7 0 0 1-.38-.73zM108.33 39a52.6 52.6 0 0 1-4.04 47.58L122.1 43a52.28 52.28 0 0 0-13.77-4z"
      fill="white"
    />
  </svg>
);

const logoMap: Record<string, React.FC> = {
  VTEX: VtexLogo,
  Magento: MagentoLogo,
  Shopify: ShopifyLogo,
  WordPress: WordPressLogo,
};

const brandColors: Record<string, { color: string; glow: string; bg: string }> = {
  VTEX:      { color: "#F71963", glow: "rgba(247, 25,  99,  0.15)", bg: "rgba(247, 25,  99,  0.06)" },
  Magento:   { color: "#EE672F", glow: "rgba(238, 103, 47,  0.15)", bg: "rgba(238, 103, 47,  0.06)" },
  Shopify:   { color: "#96BF48", glow: "rgba(150, 191, 72,  0.15)", bg: "rgba(150, 191, 72,  0.06)" },
  WordPress: { color: "#21759B", glow: "rgba(33,  117, 155, 0.15)", bg: "rgba(33,  117, 155, 0.06)" },
};

interface PlatformCardProps {
  name: string;
  years: string;
  index: number;
}

function PlatformCard({ name, years, index }: PlatformCardProps) {
  const Logo = logoMap[name];
  const brand = brandColors[name] ?? { color: "#818cf8", glow: "rgba(129,140,248,0.15)", bg: "rgba(129,140,248,0.06)" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.04, y: -4 }}
      className="relative flex flex-col items-center justify-center gap-4 p-8 rounded-2xl group cursor-default overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 0.3s, background 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = `${brand.color}40`;
        (e.currentTarget as HTMLDivElement).style.background = brand.bg;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
        (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)";
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${brand.glow}, transparent 70%)`,
        }}
      />

      <div
        className="relative z-10 transition-all duration-300 group-hover:scale-110"
        style={{
          color: brand.color,
          filter: `drop-shadow(0 0 6px ${brand.color}50)`,
        }}
      >
        {Logo && <Logo />}
      </div>

      <div className="relative z-10 text-center">
        <p className="text-xs" style={{ color: "#ffffff" }}>
          {years}
        </p>
      </div>
    </motion.div>
  );
}

export function PlatformLogos({
  platforms,
}: {
  platforms: { name: string; years: string }[];
}) {
  return (
    <div className="mb-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs uppercase tracking-widest mb-6"
        style={{ color: "#ffffff" }}
      >
        Plataformas principales
      </motion.p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {platforms.map((p, i) => (
          <PlatformCard key={p.name} name={p.name} years={p.years} index={i} />
        ))}
      </div>
    </div>
  );
}
