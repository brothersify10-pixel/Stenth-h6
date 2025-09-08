"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      <div className="relative">
        <div className="h-20 w-20 rounded-full border-4 border-cyan-500/30 border-l-cyan-400 animate-spin" />
        <div
          className="absolute inset-0 h-20 w-20 rounded-full border-4 border-transparent border-t-pink-500 animate-spin"
          style={{ animationDelay: "150ms" }}
        />
      </div>
    </div>
  );
}
