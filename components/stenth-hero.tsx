"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function STENTHHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
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
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Growing Today
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              >
                Book Your Free Growth Session
              </Button>
            </div>
          </div>

          {/* Right Column - Animated Logo */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative">
              <div className="animate-logo-spin">
                <Image
                  src="/logo.jpeg"
                  alt="STENTH logo (animated)"
                  width={352}
                  height={352}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-contain"
                  priority
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300/10 via-blue-400/10 to-purple-500/10 rounded-full blur-2xl animate-pulse -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
