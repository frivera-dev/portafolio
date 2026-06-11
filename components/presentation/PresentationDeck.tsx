"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  personal,
  experience,
  presentationStats,
  valuePropositions,
  featuredBrands,
  education,
} from "@/lib/data";
import { BrandMarquee, BrandGrid } from "./BrandShowcase";
import { SmoothScroll } from "./SmoothScroll";
import { AsciiBackground } from "./AsciiBackground";
import { AmbientOrbs } from "./AmbientOrbs";
import { PlatformExperienceBlock } from "./PlatformExperienceBlock";
import { SectionDivider } from "./SectionDivider";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="presentation-label"
    >
      {children}
    </motion.span>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="font-display font-bold text-5xl lg:text-6xl presentation-gold-text"
    >
      {value}
    </motion.span>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #d4a574, #f0c987, #d4a574)",
      }}
    />
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
          style={{ background: "radial-gradient(circle, #d4a574 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20"
          style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 70%)" }}
        />
      </motion.div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="senior-badge senior-badge-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Store Manager Senior
            </span>
            <span className="senior-badge senior-badge-indigo">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Full Stack Developer Senior
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.3em] mb-8"
            style={{ color: "#d4a574" }}
          >
            Presentación profesional · 2026
          </motion.p>

          <h1 className="font-display font-bold leading-[0.95] mb-8">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block text-5xl sm:text-7xl lg:text-[7rem] presentation-hero-text"
            >
              {personal.name}
            </motion.span>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="block text-5xl sm:text-7xl lg:text-[7rem] presentation-gold-text"
            >
              {personal.lastName}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-xl lg:text-2xl max-w-2xl leading-relaxed mb-6"
            style={{ color: "#94a3b8" }}
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="text-base lg:text-lg max-w-xl leading-relaxed mb-12"
            style={{ color: "#cbd5e1" }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href={`mailto:${personal.email}`} className="presentation-cta-primary">
              Agendar reunión
            </a>
            <Link href="/#contact" className="presentation-cta-secondary">
              Ver portafolio completo
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-widest" style={{ color: "#64748b" }}>
            Scroll para explorar
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border flex justify-center pt-1.5"
            style={{ borderColor: "rgba(212,165,116,0.4)" }}
          >
            <div className="w-1 h-2 rounded-full" style={{ background: "#d4a574" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(ellipse, rgba(212,165,116,0.3) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionLabel>Números que hablan</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-6xl mb-12 presentation-hero-text"
        >
          Experiencia medible
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-16 lg:mb-20">
          {presentationStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="presentation-stat-card stat-mini-card p-8 rounded-3xl"
            >
              <AnimatedCounter value={stat.value} />
              <p className="font-display font-semibold text-lg mt-4 mb-2" style={{ color: "#f1f5f9" }}>
                {stat.label}
              </p>
              <p className="text-sm" style={{ color: "#64748b" }}>
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <PlatformExperienceBlock />
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="perfil" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 presentation-diagonal-bg" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Perfil</SectionLabel>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl lg:text-5xl mb-8 leading-tight presentation-hero-text"
            >
              Estrategia digital +{" "}
              <span className="presentation-gold-text">implementación técnica</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg leading-relaxed mb-6"
              style={{ color: "#94a3b8" }}
            >
              {personal.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {["VTEX", "Magento", "Shopify", "WordPress", "React", "Node.js"].map((tech) => (
                <span key={tech} className="presentation-tech-pill">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="presentation-quote-card p-10 rounded-3xl">
              <span className="text-6xl font-display leading-none presentation-gold-text opacity-40">
                &ldquo;
              </span>
              <p className="font-display text-2xl lg:text-3xl leading-snug -mt-6 mb-6" style={{ color: "#f1f5f9" }}>
                Llevo ~3 años desarrollando web y 6 años de experiencia en VTEX, Magento, Shopify y WordPress.
              </p>
              <p className="text-sm" style={{ color: "#64748b" }}>
                — {personal.name} {personal.lastName}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  return (
    <section id="marcas" className="relative py-32 px-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(129,140,248,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto max-w-6xl relative z-10">
        <SectionLabel>Portafolio de marcas</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-5xl mb-4 presentation-hero-text"
        >
          Marcas que he gestionado
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg mb-10 max-w-xl"
          style={{ color: "#64748b" }}
        >
          Retail, deporte, belleza, hogar y más — a nivel regional en LATAM.
        </motion.p>

        <BrandMarquee brands={featuredBrands} />

        <div className="mt-16">
          <BrandGrid brands={featuredBrands} />
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <SectionLabel>Propuesta de valor</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-5xl mb-16 presentation-hero-text"
        >
          ¿Por qué trabajar conmigo?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {valuePropositions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="presentation-value-card p-8 rounded-3xl group"
            >
              <span
                className="text-3xl mb-6 block transition-transform group-hover:scale-110"
                style={{ color: "#d4a574" }}
              >
                {item.icon}
              </span>
              <h3 className="font-display font-semibold text-xl mb-4" style={{ color: "#f1f5f9" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  const highlights = experience.slice(0, 3);

  return (
    <section id="trayectoria" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionLabel>Trayectoria</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-5xl mb-16 presentation-hero-text"
        >
          Experiencia laboral
        </motion.h2>

        <div ref={ref} className="relative mb-16">
          <div className="absolute left-1.5 top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.05)" }} />
          <motion.div
            className="absolute left-1.5 top-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, #d4a574, #f0c987)",
              height: lineHeight,
            }}
          />

          {highlights.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative pl-12 mb-8"
            >
              <div className="absolute left-0 top-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: item.current
                      ? "linear-gradient(135deg, #d4a574, #f0c987)"
                      : "rgba(255,255,255,0.15)",
                    boxShadow: item.current ? "0 0 16px rgba(212,165,116,0.5)" : "none",
                  }}
                />
              </div>
              <div className="presentation-stat-card p-6 rounded-2xl">
                <div className="flex flex-wrap justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-xl" style={{ color: "#f1f5f9" }}>
                      {item.role}
                    </h3>
                    <span className="text-sm" style={{ color: "#d4a574" }}>
                      {item.company}
                    </span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full h-fit" style={{
                    background: "rgba(212,165,116,0.1)",
                    border: "1px solid rgba(212,165,116,0.2)",
                    color: "#d4a574",
                  }}>
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {item.description.map((d, j) => (
                    <li key={j} className="text-sm flex gap-2" style={{ color: "#94a3b8" }}>
                      <span className="shrink-0" style={{ color: "#d4a574" }}>→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {education.map((edu) => (
            <div key={edu.institution} className="presentation-stat-card p-5 rounded-2xl">
              <p className="font-medium text-sm mb-1" style={{ color: "#f1f5f9" }}>{edu.institution}</p>
              <p className="text-xs mb-2" style={{ color: "#64748b" }}>{edu.degree}</p>
              <span className="text-xs px-2 py-0.5 rounded-full" style={{
                background: "rgba(212,165,116,0.1)",
                color: "#d4a574",
              }}>
                {edu.year}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contacto" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "radial-gradient(ellipse at center, rgba(212,165,116,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-4xl lg:text-6xl mb-6 presentation-hero-text"
        >
          Construyamos algo{" "}
          <span className="presentation-gold-text">extraordinario</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg mb-10"
          style={{ color: "#94a3b8" }}
        >
          Disponible para proyectos eCommerce, desarrollo web y consultoría técnica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href={`mailto:${personal.email}`} className="presentation-cta-primary text-base px-8 py-4">
            {personal.email}
          </a>
          <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="presentation-cta-secondary text-base px-8 py-4">
            {personal.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function PresentationDeck() {
  return (
    <SmoothScroll>
      <main className="presentation-page relative min-h-screen" style={{ background: "#050505" }}>
        <AsciiBackground />
        <AmbientOrbs />
        <div className="presentation-scanline" aria-hidden />
        <ScrollProgress />
        <div className="relative z-10">
          <HeroSection />
          <SectionDivider />
          <StatsSection />
          <SectionDivider />
          <AboutSection />
          <SectionDivider />
          <BrandsSection />
          <SectionDivider />
          <ValueSection />
          <SectionDivider />
          <TimelineSection />
          <CTASection />
        </div>
      </main>
    </SmoothScroll>
  );
}
