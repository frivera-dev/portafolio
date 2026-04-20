import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabián Rivera Gonzalez — Store Manager & eCommerce Specialist",
  description:
    "Profesional con formación en comunicación audiovisual y sólida trayectoria en eCommerce. Especialista en VTEX y Magento.",
  keywords: ["eCommerce", "VTEX", "Magento", "Store Manager", "Full Stack"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="noise-bg antialiased">{children}</body>
    </html>
  );
}
