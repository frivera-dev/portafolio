"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { personal } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("idle");
      alert("Error al enviar. Inténtalo de nuevo.");
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="container mx-auto max-w-3xl">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest font-medium mb-4 block"
          style={{ color: "#818cf8" }}
        >
          Contacto
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-bold text-4xl lg:text-6xl mb-6"
          style={{ color: "#f1f5f9" }}
        >
          Hablemos de tu{" "}
          <span className="gradient-text">próximo proyecto.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-base mb-12"
          style={{ color: "#ffffff" }}
        >
          Estoy disponible para colaboraciones en eCommerce, gestión de tiendas
          y proyectos digitales.
        </motion.p>

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#ffffff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span className="text-sm">{personal.email}</span>
          </a>
          <a
            href={`tel:${personal.phone}`}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "#ffffff",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-sm">{personal.phone}</span>
          </a>
        </motion.div>

        {/* Form */}
        {status === "sent" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 rounded-3xl text-center"
            style={{
              background: "rgba(129,140,248,0.05)",
              border: "1px solid rgba(129,140,248,0.2)",
            }}
          >
            <div className="text-4xl mb-4">✦</div>
            <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "#f1f5f9" }}>
              Mensaje enviado.
            </h3>
            <p style={{ color: "#ffffff" }}>Te contactaré pronto.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Tu nombre" : "Tu email"}
                    required
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl text-sm outline-none transition-all duration-300 placeholder-[#334155]"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      color: "#f1f5f9",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(129, 140, 248, 0.3)";
                      e.target.style.background = "rgba(129, 140, 248, 0.04)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.06)";
                      e.target.style.background = "rgba(255,255,255,0.02)";
                    }}
                  />
                </div>
              ))}
            </div>
            <textarea
              placeholder="Cuéntame sobre tu proyecto..."
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-5 py-4 rounded-2xl text-sm outline-none resize-none transition-all duration-300 placeholder-[#334155]"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                color: "#f1f5f9",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(129, 140, 248, 0.3)";
                e.target.style.background = "rgba(129, 140, 248, 0.04)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.06)";
                e.target.style.background = "rgba(255,255,255,0.02)";
              }}
            />
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl font-medium text-sm transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc)",
                color: "#fff",
                boxShadow: "0 0 40px rgba(129, 140, 248, 0.25)",
                opacity: status === "sending" ? 0.7 : 1,
              }}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
            </motion.button>
          </motion.form>
        )}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 pt-8 text-center"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          © 2025 Fabián Rivera Gonzalez — Diseñado y construido con Next.js
        </p>
      </motion.div>
    </section>
  );
}
