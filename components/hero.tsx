"use client"

import { useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

// Lightweight lerp for smooth motion
const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)

  // rAF-driven parallax (smoother + less jank than per-event DOM writes)
  useEffect(() => {
    const container = containerRef.current
    const circle = circleRef.current
    if (!container || !circle) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) return // respect user settings

    let rafId = 0
    let running = true

    const state = { targetX: 0, targetY: 0, x: 0, y: 0 }

    function onMove(e: MouseEvent) {
      const rect = container.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      // scale down the effect for subtlety
      state.targetX = (e.clientX - cx) * 0.08
      state.targetY = (e.clientY - cy) * 0.08
    }

    function tick() {
      if (!running) return
      // smooth to target
      state.x = lerp(state.x, state.targetX, 0.08)
      state.y = lerp(state.y, state.targetY, 0.08)
      // single DOM write per frame
      circle.style.transform = `translate(-50%, -50%) translate3d(${state.x}px, ${state.y}px, 0)`
      rafId = requestAnimationFrame(tick)
    }

    container.addEventListener("mousemove", onMove)
    rafId = requestAnimationFrame(tick)

    const onLeave = () => {
      state.targetX = 0
      state.targetY = 0
    }
    container.addEventListener("mouseleave", onLeave)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      container.removeEventListener("mousemove", onMove)
      container.removeEventListener("mouseleave", onLeave)
    }
  }, [])

  // Generate orbit dots with staggered delays
  const orbits = useMemo(() => Array.from({ length: 4 }, (_, i) => i), [])

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 min-h-[100svh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* soft gradient wash + noise for texture */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-40 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 blur-3xl" />
        <div className="absolute inset-0 [background-image:radial-gradient(transparent,rgba(0,0,0,0.6))]" />
      </div>

      <div ref={containerRef} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="space-y-8 motion-safe:animate-in motion-safe:fade-in-50 motion-safe:slide-in-from-bottom-3">
            <h1 id="hero-heading" className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-emerald-400 bg-clip-text text-transparent [animation:gradient_6s_linear_infinite]">
                Digital Future
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              We create revolutionary marketing experiences that captivate audiences, drive engagement, and accelerate
              growth through cutting-edge strategies and innovative design solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-cyan-500 to-pink-500 shadow-lg shadow-cyan-500/20 transition-transform active:scale-[.98] hover:scale-105"
              >
                Launch Your Success
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-semibold border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[26rem] h-[26rem] sm:w-[28rem] sm:h-[28rem]">
              {/* Parallax circle */}
              <div
                ref={circleRef}
                className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-gradient-to-br from-cyan-400 via-pink-500 to-emerald-400 [transition:transform_100ms_linear] will-change-transform"
                style={{ transform: "translate(-50%, -50%)" }}
                aria-hidden
              >
                <div className="absolute inset-4 rounded-full bg-slate-950/90 backdrop-blur-sm">
                  {/* Swap center pulse for your brand mark (keeps pulse as fallback) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                      src="/Stenth_Logo-removebg.png"
                      alt="STENTH logo"
                      width={112}
                      height={112}
                      className="motion-safe:animate-pulse [animation-duration:2.2s]"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Orbiting elements — relies on your existing .animate-orbit keyframes */}
              {orbits.map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-orbit"
                  style={{ animationDelay: `${i * 1.6}s`, transformOrigin: "0 0" }}
                  aria-hidden
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local keyframes used by the gradient text only; orbit/spin assumed to exist globally */}
      <style jsx>{`
        @keyframes gradient { to { background-position: 200% center; } }
        .[animation\\:gradient_6s_linear_infinite] {
          background-size: 200% 100%;
          animation: gradient 6s linear infinite;
        }
      `}</style>
    </section>
  )
}
