"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { personal, brands } from "@/lib/data";

const HeroSphere = dynamic(
  () => import("@/components/three/HeroSphere").then((m) => m.HeroSphere),
  { ssr: false }
);

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center pt-24">
        {/* Left: Text */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: "rgba(129, 140, 248, 0.1)",
                border: "1px solid rgba(129, 140, 248, 0.2)",
                color: "#818cf8",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible para proyectos
            </span>
          </motion.div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
              className="font-display font-bold text-6xl lg:text-8xl leading-none"
              style={{ color: "#f1f5f9" }}
            >
              {personal.name}
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
              className="font-display font-bold text-6xl lg:text-8xl leading-none gradient-text"
            >
              {personal.lastName}
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "#ffffff" }}
          >
            {personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(129, 140, 248, 0.3)",
              }}
            >
              Hablemos
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#ffffff",
                background: "rgba(255,255,255,0.02)",
              }}
            >
              Ver experiencia
            </a>
          </motion.div>

          {/* Brands ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-14"
          >
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#ffffff" }}>
              Histórico de marcas gestionadas
            </p>
            <div className="flex flex-wrap gap-3">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "#ffffff",
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: 3D Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="hidden lg:flex items-center justify-center"
          style={{ height: "500px" }}
        >
          <HeroSphere />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, rgba(129,140,248,0.5), transparent)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
