"use client";

import { motion } from "framer-motion";
import { TextReveal } from "@/components/ui/TextReveal";
import { personal } from "@/lib/data";

const stats = [
  { value: "5+", label: "Años en eCommerce", sub: "" },
  { value: "60+", label: "Marcas gestionadas históricamente", sub: "" },
  { value: "4+", label: "Plataformas eCommerce", sub: "Shopify · VTEX · Magento · WordPress" },
  { value: "FS", label: "Full Stack Dev", sub: "" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-widest font-medium mb-6 block"
              style={{ color: "#818cf8" }}
            >
              Sobre mí
            </motion.span>

            <TextReveal
              text="Donde la comunicación y la tecnología se encuentran."
              as="h2"
              className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-8 text-slate-100"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base leading-relaxed"
              style={{ color: "#ffffff" }}
            >
              {personal.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex gap-6 mt-10"
            >
              <a
                href={`mailto:${personal.email}`}
                className="text-sm transition-colors duration-200 hover:opacity-100"
                style={{ color: "#ffffff" }}
              >
                {personal.email}
              </a>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span className="font-display font-bold text-5xl block mb-2 gradient-text">
                  {stat.value}
                </span>
                <span className="text-sm block" style={{ color: "#ffffff" }}>
                  {stat.label}
                </span>
                {stat.sub && (
                  <>
                    <span className="text-xs mt-1 block" style={{ color: "#475569" }}>
                      principales
                    </span>
                    <span className="text-xs mt-1 block leading-relaxed" style={{ color: "#818cf8" }}>
                      {stat.sub}
                    </span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
