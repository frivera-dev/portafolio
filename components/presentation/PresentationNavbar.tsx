"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Perfil", href: "#perfil" },
  { label: "Marcas", href: "#marcas" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Contacto", href: "#contacto" },
];

export function PresentationNavbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="flex items-center gap-1 px-4 py-2 rounded-full max-w-full overflow-x-auto bg-[rgba(5,5,5,0.9)] border border-[rgba(212,165,116,0.12)]"
      >
        <Link href="/" className="font-display font-bold text-sm mr-3 px-2 shrink-0 text-[#d4a574]">
          FR
        </Link>
        {links.map((link) => {
          const href = link.href.startsWith("#") ? `${pathname}${link.href}` : link.href;
          return (
            <a
              key={link.href}
              href={href}
              className="px-3 py-1.5 text-sm rounded-full whitespace-nowrap shrink-0 text-[#e2e8f0]"
            >
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
