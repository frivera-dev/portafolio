"use client";

import dynamic from "next/dynamic";

const PresentationClient = dynamic(
  () =>
    import("@/components/presentation/PresentationClient").then(
      (m) => m.PresentationClient
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#050505" }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 animate-spin"
          style={{ borderColor: "#d4a574", borderTopColor: "transparent" }}
        />
      </div>
    ),
  }
);

export function PresentationPageLoader() {
  return <PresentationClient />;
}
