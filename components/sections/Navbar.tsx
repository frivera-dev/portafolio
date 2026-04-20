"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <nav
        className="flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(5, 5, 5, 0.85)"
            : "rgba(5, 5, 5, 0.4)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)"
            : "none",
        }}
      >
        <span
          className="font-display font-bold text-sm mr-4 px-2"
          style={{ color: "#818cf8" }}
        >
          FR
        </span>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActive(link.href)}
            className="relative px-3 py-1.5 text-sm rounded-full transition-colors duration-200"
            style={{
              color: active === link.href ? "#ffffff" : "#ffffff",
            }}
          >
            {active === link.href && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(129, 140, 248, 0.12)" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
