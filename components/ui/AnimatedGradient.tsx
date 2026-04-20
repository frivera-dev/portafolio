"use client";

export function AnimatedGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, #818cf8 0%, transparent 70%)",
          animation: "pulse-slow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, #c084fc 0%, transparent 70%)",
          animation: "pulse-slow 10s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
          animation: "pulse-slow 12s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1) translate(0, 0); }
          33% { transform: scale(1.1) translate(30px, -20px); }
          66% { transform: scale(0.95) translate(-20px, 30px); }
        }
      `}</style>
    </div>
  );
}
