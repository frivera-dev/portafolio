"use client";

export function AmbientOrbs() {
  return (
    <div className="presentation-ambient-orbs fixed inset-0 pointer-events-none z-[1]" aria-hidden>
      <div className="presentation-orb presentation-orb-gold" />
      <div className="presentation-orb presentation-orb-indigo" />
      <div className="presentation-orb presentation-orb-emerald" />
    </div>
  );
}
