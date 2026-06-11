"use client";

export function AsciiBackground() {
  return (
    <>
      <div className="presentation-ascii-overlay fixed inset-0 pointer-events-none z-0" aria-hidden />
      <div className="presentation-ascii-grid fixed inset-0 pointer-events-none z-0" aria-hidden />
    </>
  );
}
