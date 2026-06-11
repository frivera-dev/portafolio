"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Perfil", href: "#perfil" },
  { label: "Marcas", href: "#marcas" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

export function PresentationNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={mounted ? { y: -80, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className="flex items-center gap-1 px-4 py-2 rounded-full transition-all duration-500 max-w-full overflow-x-auto"
        style={{
          background: scrolled ? "rgba(5, 5, 5, 0.9)" : "rgba(5, 5, 5, 0.5)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(212, 165, 116, 0.12)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,165,116,0.08)"
            : "none",
        }}
      >
        <Link
          href="/"
          className="font-display font-bold text-sm mr-3 px-2 shrink-0"
          style={{ color: "#d4a574" }}
        >
          FR
        </Link>

        {links.map((link) => {
          const isExternal = link.href.startsWith("#");
          const href = isExternal ? `${pathname}${link.href}` : link.href;

          return (
            <a
              key={link.href}
              href={href}
              className="relative px-3 py-1.5 text-sm rounded-full transition-colors duration-200 whitespace-nowrap shrink-0"
              style={{ color: "#e2e8f0" }}
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
