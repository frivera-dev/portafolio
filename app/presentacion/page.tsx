import { PresentationClient } from "@/components/presentation/PresentationClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presentación — Fabián Rivera Gonzalez",
  description:
    "Perfil profesional eCommerce: VTEX, Magento, Shopify, WordPress. Más de 60 marcas gestionadas en LATAM.",
};

export default function PresentacionPage() {
  return <PresentationClient />;
}
