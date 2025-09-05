"use client"

import Header from "@/components/header"
import Portfolio from "@/components/portfolio"
import FloatingElements from "@/components/floating-elements"

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <Header />
      <Portfolio />
    </main>
  )
}
