"use client"

import Header from "@/components/header"
import Services from "@/components/services"
import FloatingElements from "@/components/floating-elements"

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <Header />
      <Services />
    </main>
  )
}
