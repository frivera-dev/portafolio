"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience, education } from "@/lib/data";

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experience)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="relative pl-12"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1 flex items-center justify-center">
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: item.current
              ? "linear-gradient(135deg, #818cf8, #c084fc)"
              : "rgba(255,255,255,0.1)",
            boxShadow: item.current ? "0 0 12px rgba(129,140,248,0.5)" : "none",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="p-6 rounded-2xl mb-6 transition-all duration-300 hover:scale-[1.01]"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3
              className="font-display font-semibold text-xl"
              style={{ color: "#f1f5f9" }}
            >
              {item.role}
            </h3>
            <span
              className="text-sm font-medium"
              style={{ color: "#818cf8" }}
            >
              {item.company}
            </span>
          </div>
          <span
            className="text-xs px-3 py-1 rounded-full shrink-0"
            style={{
              background: "rgba(129,140,248,0.08)",
              border: "1px solid rgba(129,140,248,0.15)",
              color: "#818cf8",
            }}
          >
            {item.period}
          </span>
        </div>
        <ul className="space-y-1.5 mt-4">
          {item.description.map((d, i) => (
            <li
              key={i}
              className="text-sm flex items-start gap-2"
              style={{ color: "#ffffff" }}
            >
              <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#475569" }} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest font-medium mb-4 block"
          style={{ color: "#818cf8" }}
        >
          Trayectoria
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl lg:text-5xl mb-16"
          style={{ color: "#f1f5f9" }}
        >
          Experiencia laboral
        </motion.h2>

        {/* Timeline */}
        <div ref={ref} className="relative mb-16">
          <div
            className="absolute left-1.5 top-0 bottom-0 w-px"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
          <motion.div
            className="absolute left-1.5 top-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, #818cf8, #c084fc)",
              height: lineHeight,
            }}
          />
          {experience.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>

        {/* Education — 3 columnas */}
        <div
          className="pt-12"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-xl mb-8"
            style={{ color: "#f1f5f9" }}
          >
            Formación
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="font-medium text-sm mb-1" style={{ color: "#f1f5f9" }}>
                  {edu.institution}
                </div>
                <div className="text-xs mb-3" style={{ color: "#ffffff" }}>
                  {edu.degree}
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(129,140,248,0.08)", color: "#818cf8" }}
                >
                  {edu.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
