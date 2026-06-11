"use client";

import { useEffect, useRef } from "react";

const CHARSET = "░▒▓█▄▀■□●○◆◇▲△▼▽◈⬡◎→←↑↓·:;|/\\{}[]<>+=*#@$%&";
const ANSI_COLORS = ["#d4a574", "#818cf8", "#34d399", "#f472b6", "#64748b", "#f0c987"];

export function AsciiBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let tick = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const fontSize = 13;
      const cols = Math.ceil(w / fontSize) + 1;
      const rows = Math.ceil(h / fontSize) + 1;

      ctx.clearRect(0, 0, w, h);
      ctx.font = `${fontSize}px "Courier New", monospace`;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * fontSize;
          const y = row * fontSize;

          const wave =
            Math.sin(col * 0.08 + tick * 0.012) *
            Math.cos(row * 0.06 + tick * 0.009);
          const pulse = Math.sin((col + row) * 0.04 + tick * 0.015);

          if (wave * pulse < 0.08) continue;

          const charIdx = Math.floor(
            Math.abs(Math.sin(col * 0.31 + row * 0.17 + tick * 0.02) * CHARSET.length)
          );
          const colorIdx = Math.floor(
            Math.abs(Math.sin(col * 0.11 + row * 0.13 + tick * 0.008) * ANSI_COLORS.length)
          );

          const alpha = 0.05 + Math.abs(wave) * 0.12;
          ctx.fillStyle = ANSI_COLORS[colorIdx];
          ctx.globalAlpha = alpha;
          ctx.fillText(CHARSET[charIdx], x, y);
        }
      }

      ctx.globalAlpha = 1;
      tick++;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden
      />
      <div className="presentation-ascii-overlay fixed inset-0 pointer-events-none z-0" aria-hidden />
      <div className="presentation-ascii-grid fixed inset-0 pointer-events-none z-0" aria-hidden />
    </>
  );
}
