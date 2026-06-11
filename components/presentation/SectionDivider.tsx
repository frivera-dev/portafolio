"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden" aria-hidden>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full max-w-4xl mx-auto origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,165,116,0.4) 30%, rgba(129,140,248,0.3) 70%, transparent)",
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-3 h-3 rounded-full"
        style={{
          background: "linear-gradient(135deg, #d4a574, #818cf8)",
          boxShadow: "0 0 20px rgba(212,165,116,0.5)",
        }}
      />
    </div>
  );
}
