"use client"

import About from "@/components/about"
import FloatingElements from "@/components/floating-elements"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <About />
    </main>
  )
}
