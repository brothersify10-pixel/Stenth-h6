import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Paid Advertising
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Drive targeted traffic and maximize ROI with data-driven advertising campaigns across Google, Facebook,
              Instagram, and other high-converting platforms.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Google Ads",
                description: "Search, Display, and Shopping campaigns that capture high-intent customers",
                features: ["Keyword Research", "Ad Copy Creation", "Landing Page Optimization", "Conversion Tracking"],
              },
              {
                title: "Social Media Ads",
                description: "Facebook, Instagram, LinkedIn campaigns that build brand awareness and drive sales",
                features: ["Audience Targeting", "Creative Development", "A/B Testing", "Performance Analytics"],
              },
              {
                title: "Retargeting",
                description: "Re-engage website visitors and convert them into paying customers",
                features: ["Pixel Setup", "Audience Segmentation", "Dynamic Ads", "Cross-Platform Tracking"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-300 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                      <span className="text-slate-400 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold"
            >
              <Link href="/book">Start Your Campaign</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
