"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientOrbs() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden>
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full opacity-[0.18]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #d4a574 0%, transparent 65%)" }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full opacity-[0.14]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div
          className="w-full h-full rounded-full blur-[90px]"
          style={{ background: "radial-gradient(circle, #818cf8 0%, transparent 65%)" }}
        />
      </motion.div>

      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.12]"
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -50, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <div
          className="w-full h-full rounded-full blur-[80px]"
          style={{ background: "radial-gradient(circle, #34d399 0%, transparent 65%)" }}
        />
      </motion.div>

      <motion.div
        className="absolute top-2/3 left-10 w-[300px] h-[300px] rounded-full opacity-[0.1]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="w-full h-full rounded-full blur-[60px]"
          style={{ background: "radial-gradient(circle, #f472b6 0%, transparent 70%)" }}
        />
      </motion.div>
    </div>
  );
}
