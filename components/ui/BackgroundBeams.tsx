"use client";

import { useEffect, useRef } from "react";

export function BackgroundBeams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const beams: { x: number; y: number; vx: number; vy: number; alpha: number; size: number }[] = [];

    for (let i = 0; i < 60; i++) {
      beams.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.05,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      beams.forEach((b, i) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < 0 || b.x > canvas.width) b.vx *= -1;
        if (b.y < 0 || b.y > canvas.height) b.vy *= -1;

        beams.forEach((b2, j) => {
          if (i >= j) return;
          const dx = b.x - b2.x;
          const dy = b.y - b2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(b.x, b.y);
            ctx.lineTo(b2.x, b2.y);
            const alpha = ((150 - dist) / 150) * 0.12;
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        ctx.beginPath();
        ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${b.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}
