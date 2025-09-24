"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const portfolioData = {
  "stenth-x": {
    title: "STENTH X: Multi-Channel Growth Experiment",
    subtitle: "Meta, Google & YouTube Integration",
    problem:
      "Client needed to scale lead generation across multiple channels while maintaining cost efficiency and quality.",
    strategy:
      "Implemented integrated campaign strategy across Meta, Google Ads, and YouTube with unified tracking and optimization.",
    channels: ["Meta Ads", "Google Ads", "YouTube Advertising", "Landing Page Optimization"],
    creative: "Developed platform-specific creative assets with consistent messaging and A/B tested variations.",
    results: ["+58% MQL increase", "-21% CAC reduction", "3.2x ROAS improvement", "40% faster conversion cycle"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=533", // Your analytics dashboard image
      "/portfolio/stenth-x/campaigns.jpg",
      "/portfolio/stenth-x/results.jpg",
    ],
  },
  "retail-boost": {
    title: "Retail Boost: Local SEO + In-Store Integration",
    subtitle: "8-Week Local Market Domination",
    problem: "Local retail chain struggling with online visibility and connecting digital marketing to in-store sales.",
    strategy:
      "Combined local SEO optimization with QR code integration and landing page optimization for seamless online-to-offline experience.",
    channels: ["Local SEO", "Google My Business", "Landing Pages", "QR Code Integration"],
    creative: "Created location-specific landing pages with QR codes linking digital campaigns to in-store promotions.",
    results: [
      "85% increase in local search visibility",
      "60% more in-store traffic from digital",
      "45% boost in conversion rate",
      "8-week ROI: 340%",
    ],
    images: [
      "/portfolio/retail-boost/store.jpg",
      "/portfolio/retail-boost/qr-campaign.jpg",
      "/portfolio/retail-boost/analytics.png",
    ],
  },
  "leadgen-saas": {
    title: "LeadGen SaaS: Creative Testing Revolution",
    subtitle: "Search Restructure + Creative Optimization",
    problem:
      "B2B SaaS company with high CAC and low pipeline conversion rates needed systematic optimization approach.",
    strategy:
      "Restructured search campaigns and implemented systematic creative testing framework with advanced attribution modeling.",
    channels: ["Google Ads", "LinkedIn Ads", "Creative Testing", "Attribution Modeling"],
    creative: "Developed 50+ creative variations with systematic testing methodology and performance tracking.",
    results: [
      "-32% CAC reduction",
      "+44% pipeline increase",
      "2.8x improvement in MQL quality",
      "65% faster sales cycle",
    ],
    images: [
      "/portfolio/leadgen-saas/creative-tests.jpg",
      "/portfolio/leadgen-saas/pipeline.jpg",
      "/portfolio/leadgen-saas/dashboard.jpg",
    ],
  },
}

export default function PortfolioModal({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)
  const project = portfolioData[params.slug as keyof typeof portfolioData]

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(() => router.back(), 150)
  }

  if (!project) {
    return null
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="relative max-w-3xl w-[92vw] max-h-[90vh] overflow-y-auto rounded-2xl bg-slate-900 p-6 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
                <p className="text-xl text-cyan-400">{project.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative group overflow-hidden rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/30">
                    <div className="aspect-[3/2] relative">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                        priority={index === 0}
                        onError={(e) => {
                          // Fallback to placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-blue-500/15 via-emerald-400/8 to-purple-600/15 mix-blend-overlay pointer-events-none opacity-100 group-hover:opacity-60 transition-opacity duration-300"></div>
                    
                    {/* Subtle inner shadow for depth */}
                    <div className="absolute inset-0 rounded-xl shadow-inner pointer-events-none"></div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Problem</h3>
                  <p className="text-slate-300">{project.problem}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
                  <p className="text-slate-300">{project.strategy}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Channels</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.channels.map((channel, index) => (
                      <span key={index} className="px-3 py-1 bg-slate-800 text-cyan-400 rounded-full text-sm">
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Creative</h3>
                  <p className="text-slate-300">{project.creative}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Results</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                        <span className="text-slate-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-700">
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <Link href="/start">Start Your Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                >
                  <Link href="/book">Book Growth Session</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
