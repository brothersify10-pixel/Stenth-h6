"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function STENTHHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Not Just Marketing.
              </span>
              <br />
              We Build Businesses.
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              From business analysis to brand recognition, STENTH drives every stage of your growth—strategy, marketing,
              ROI tracking, and beyond.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/start">Start Growing Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                <Link href="/book">Book Your Free Growth Session</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Animated Logo */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative pointer-events-none z-0">
              <motion.div
                animate={{
                  y: [-6, 6, -6],
                  opacity: [0.95, 1, 0.95],
                }}
                transition={{
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                }}
                style={{
                  filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.25))",
                }}
              >
                <Image
                  src="/Stenth_Logo-removebg.png"
                  alt="STENTH logo"
                  width={360}
                  height={360}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/10 via-blue-400/10 to-purple-500/10 rounded-full blur-2xl animate-pulse -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
