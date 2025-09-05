"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import LoadingScreen from "@/components/loading-screen"
import FloatingElements from "@/components/floating-elements"
import STENTHHero from "@/components/stenth-hero"
import WhySTENTH from "@/components/why-stenth"
import STENTHAbout from "@/components/stenth-about"
import STENTHServices from "@/components/stenth-services"
import CaseStudies from "@/components/case-studies"
import MonthlyGrowthSection from "@/components/monthly-growth-section"
import Testimonials from "@/components/testimonials"
import STENTHContact from "@/components/stenth-contact"
import STENTHFooter from "@/components/stenth-footer"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <FloatingElements />
      <Header />
      <STENTHHero />
      <WhySTENTH />
      <STENTHAbout />
      <STENTHServices />
      <CaseStudies />
      <MonthlyGrowthSection />
      <Testimonials />
      <STENTHContact />
      <STENTHFooter />
    </main>
  )
}
