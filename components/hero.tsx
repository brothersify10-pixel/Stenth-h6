"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

export default function Hero() {
  const circleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = circle.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * 0.1
      const deltaY = (e.clientY - centerY) * 0.1

      circle.style.transform = `translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
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
                className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-center"
              >
                Launch Your Success
              </Link>
              <Link
                href="#portfolio"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              <div
                ref={circleRef}
                className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400 via-pink-500 to-emerald-400 rounded-full animate-spin-slow transition-transform duration-100"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div className="absolute inset-4 bg-slate-950/90 rounded-full backdrop-blur-sm">
                  <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                </div>
              </div>

              {/* Orbiting elements */}
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full animate-orbit"
                  style={{
                    animationDelay: `${i * 2}s`,
                    transformOrigin: "0 0",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
