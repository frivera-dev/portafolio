"use client";

import Link from "next/link";
import {
  personal,
  experience,
  presentationStats,
  valuePropositions,
  featuredBrands,
  education,
} from "@/lib/data";
import { BrandGrid } from "./BrandShowcase";
import { PlatformExperienceBlock } from "./PlatformExperienceBlock";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="presentation-label">{children}</span>;
}

export function PresentationDeck() {
  const highlights = experience.slice(0, 3);

  return (
    <main className="presentation-page relative min-h-screen bg-[#050505]">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="senior-badge senior-badge-gold">Store Manager Senior</span>
            <span className="senior-badge senior-badge-indigo">Full Stack Developer Senior</span>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] mb-8 text-[#d4a574]">
            Presentación profesional · 2026
          </p>
          <h1 className="font-display font-bold leading-[0.95] mb-8">
            <span className="block text-5xl sm:text-7xl lg:text-[7rem] presentation-hero-text">
              {personal.name}
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-[7rem] presentation-gold-text">
              {personal.lastName}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl max-w-2xl mb-6 text-[#94a3b8]">{personal.title}</p>
          <p className="text-base lg:text-lg max-w-xl mb-12 text-[#cbd5e1]">{personal.tagline}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${personal.email}`} className="presentation-cta-primary">
              Agendar reunión
            </a>
            <Link href="/#contact" className="presentation-cta-secondary">
              Ver portafolio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionLabel>Números que hablan</SectionLabel>
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-12 presentation-hero-text">
            Experiencia medible
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 mb-16">
            {presentationStats.map((stat) => (
              <div key={stat.label} className="presentation-stat-card p-8 rounded-3xl">
                <span className="font-display font-bold text-5xl lg:text-6xl presentation-gold-text">
                  {stat.value}
                </span>
                <p className="font-display font-semibold text-lg mt-4 mb-2 text-[#f1f5f9]">
                  {stat.label}
                </p>
                <p className="text-sm text-[#64748b]">{stat.detail}</p>
              </div>
            ))}
          </div>
          <PlatformExperienceBlock />
        </div>
      </section>

      {/* About */}
      <section id="perfil" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>Perfil</SectionLabel>
            <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8 presentation-hero-text">
              Estrategia digital +{" "}
              <span className="presentation-gold-text">implementación técnica</span>
            </h2>
            <p className="text-base lg:text-lg leading-relaxed mb-6 text-[#94a3b8]">{personal.about}</p>
            <div className="flex flex-wrap gap-3">
              {["VTEX", "Magento", "Shopify", "WordPress", "React", "Node.js"].map((tech) => (
                <span key={tech} className="presentation-tech-pill">{tech}</span>
              ))}
            </div>
          </div>
          <div className="presentation-quote-card p-10 rounded-3xl">
            <p className="font-display text-2xl lg:text-3xl leading-snug mb-6 text-[#f1f5f9]">
              Llevo ~3 años desarrollando web y 6 años de experiencia en VTEX, Magento, Shopify y WordPress.
            </p>
            <p className="text-sm text-[#64748b]">— {personal.name} {personal.lastName}</p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="marcas" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionLabel>Portafolio de marcas</SectionLabel>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-4 presentation-hero-text">
            Marcas que he gestionado
          </h2>
          <p className="text-lg mb-10 text-[#64748b]">
            Retail, deporte, belleza, hogar y más — a nivel regional en LATAM.
          </p>
          <BrandGrid brands={featuredBrands} />
        </div>
      </section>

      {/* Value */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionLabel>Propuesta de valor</SectionLabel>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-12 presentation-hero-text">
            ¿Por qué trabajar conmigo?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {valuePropositions.map((item) => (
              <div key={item.title} className="presentation-value-card p-8 rounded-3xl">
                <span className="text-3xl mb-6 block text-[#d4a574]">{item.icon}</span>
                <h3 className="font-display font-semibold text-xl mb-4 text-[#f1f5f9]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#94a3b8]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="trayectoria" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <SectionLabel>Trayectoria</SectionLabel>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-12 presentation-hero-text">
            Experiencia laboral
          </h2>
          <div className="space-y-6 mb-12">
            {highlights.map((item) => (
              <div key={item.company} className="presentation-stat-card p-6 rounded-2xl">
                <div className="flex flex-wrap justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-semibold text-xl text-[#f1f5f9]">{item.role}</h3>
                    <span className="text-sm text-[#d4a574]">{item.company}</span>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full h-fit bg-[rgba(212,165,116,0.1)] border border-[rgba(212,165,116,0.2)] text-[#d4a574]">
                    {item.period}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {item.description.map((d, j) => (
                    <li key={j} className="text-sm flex gap-2 text-[#94a3b8]">
                      <span className="text-[#d4a574]">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/5">
            {education.map((edu) => (
              <div key={edu.institution} className="presentation-stat-card p-5 rounded-2xl">
                <p className="font-medium text-sm mb-1 text-[#f1f5f9]">{edu.institution}</p>
                <p className="text-xs mb-2 text-[#64748b]">{edu.degree}</p>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(212,165,116,0.1)] text-[#d4a574]">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-32 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display font-bold text-4xl lg:text-6xl mb-6 presentation-hero-text">
            Construyamos algo <span className="presentation-gold-text">extraordinario</span>
          </h2>
          <p className="text-lg mb-10 text-[#94a3b8]">
            Disponible para proyectos eCommerce, desarrollo web y consultoría técnica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`mailto:${personal.email}`} className="presentation-cta-primary text-base px-8 py-4">
              {personal.email}
            </a>
            <a href={`tel:${personal.phone.replace(/\s/g, "")}`} className="presentation-cta-secondary text-base px-8 py-4">
              {personal.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
