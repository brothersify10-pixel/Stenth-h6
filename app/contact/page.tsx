"use client"

import Contact from "@/components/contact"
import FloatingElements from "@/components/floating-elements"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <Contact />
    </main>
  )
}
