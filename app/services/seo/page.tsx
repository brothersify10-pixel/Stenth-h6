import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SEOPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Search Engine Optimization
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Dominate search results and drive organic traffic with our comprehensive SEO strategies. From technical
              optimization to content marketing, we boost your visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Our SEO Process</h2>

              <div className="space-y-6">
                {[
                  { title: "Technical SEO Audit", desc: "Comprehensive site analysis and optimization" },
                  { title: "Keyword Research", desc: "Target high-value, low-competition keywords" },
                  { title: "On-Page Optimization", desc: "Optimize content, meta tags, and site structure" },
                  { title: "Content Strategy", desc: "Create valuable, search-optimized content" },
                  { title: "Link Building", desc: "Build high-quality backlinks and domain authority" },
                  { title: "Performance Tracking", desc: "Monitor rankings, traffic, and conversions" },
                ].map((step, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">SEO Results You Can Expect</h3>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    300%+
                  </div>
                  <p className="text-slate-300">Average Organic Traffic Increase</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    90 Days
                  </div>
                  <p className="text-slate-300">To See Significant Results</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-2">
                    #1-3
                  </div>
                  <p className="text-slate-300">Average Ranking Position</p>
                </div>
              </div>

              <Button
                asChild
                className="w-full mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                <Link href="/book">Get SEO Audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
