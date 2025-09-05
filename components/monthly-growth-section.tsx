import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function MonthlyGrowthSection() {
  const benefits = [
    "Detailed lead and conversion reports with actionable insights",
    "Cost-per-lead analysis and ROI optimization recommendations",
    "Next-step roadmap with prioritized growth opportunities",
    "Performance benchmarking against industry standards",
    "Strategic adjustments based on real-time data analysis",
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
          Know Exactly Where Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Money Is Going
          </span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Our monthly growth sessions provide complete transparency into your marketing investment with detailed
          analytics and strategic recommendations for continuous improvement.
        </p>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 mb-12">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 text-left">
                <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Book Your First Growth Session Free →
        </Button>
      </div>
    </section>
  )
}
