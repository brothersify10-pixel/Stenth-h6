import Header from "@/components/header"
import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AnalyticsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Analytics & Tracking
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Make data-driven decisions with comprehensive analytics and tracking systems. Understand your customers,
              optimize performance, and maximize ROI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">What We Track</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Website Analytics",
                    desc: "Traffic, user behavior, conversion paths, and performance metrics",
                  },
                  { title: "Marketing Attribution", desc: "Track which channels drive the most valuable customers" },
                  { title: "Sales Funnel Analysis", desc: "Identify bottlenecks and optimization opportunities" },
                  { title: "Customer Lifetime Value", desc: "Understand long-term customer value and retention" },
                  { title: "ROI Tracking", desc: "Measure return on investment for all marketing activities" },
                  { title: "Competitive Analysis", desc: "Monitor competitor performance and market trends" },
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Analytics Tools</h2>

              <div className="grid gap-4">
                {[
                  "Google Analytics 4",
                  "Google Tag Manager",
                  "Facebook Pixel",
                  "Hotjar Heatmaps",
                  "Custom Dashboards",
                  "Automated Reporting",
                ].map((tool, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-slate-800/30 rounded-lg p-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                    <span className="text-slate-300">{tool}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Monthly Reporting</h3>
                <p className="text-slate-300 mb-6">
                  Get comprehensive monthly reports with actionable insights and recommendations for growth.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Performance Metrics</span>
                    <span className="text-cyan-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Growth Opportunities</span>
                    <span className="text-cyan-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Action Items</span>
                    <span className="text-cyan-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">ROI Analysis</span>
                    <span className="text-cyan-400">✓</span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <Link href="/book">Setup Analytics</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
