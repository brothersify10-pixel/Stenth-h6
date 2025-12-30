"use client"

import Contact from "@/components/contact"
import FloatingElements from "@/components/floating-elements"
import RelatedPages from "@/components/related-pages"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <Contact />
      <RelatedPages title="Explore Our Services" limit={6} className="bg-slate-900/30" />
    </main>
  )
}
