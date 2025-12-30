import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContentPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Content Marketing
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Engage your audience and drive conversions with strategic content that educates, entertains, and converts
              prospects into loyal customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Content Services</h2>

              <div className="grid gap-6">
                {[
                  { title: "Blog Writing", desc: "SEO-optimized articles that drive traffic and establish authority" },
                  {
                    title: "Social Media Content",
                    desc: "Engaging posts, stories, and campaigns across all platforms",
                  },
                  { title: "Email Marketing", desc: "Nurture sequences and newsletters that convert subscribers" },
                  { title: "Video Content", desc: "Compelling video scripts and production for maximum engagement" },
                  { title: "Case Studies", desc: "Detailed success stories that build trust and credibility" },
                  { title: "White Papers", desc: "In-depth resources that position you as an industry leader" },
                ].map((service, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
                    <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                    <p className="text-slate-400 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Our Content Process</h2>

              <div className="space-y-6">
                {[
                  "Content Strategy Development",
                  "Audience Research & Persona Creation",
                  "Editorial Calendar Planning",
                  "Content Creation & Optimization",
                  "Distribution & Promotion",
                  "Performance Analysis & Optimization",
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-slate-300">{step}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mt-8">
                <h3 className="text-xl font-bold text-white mb-4">Ready to Create Content That Converts?</h3>
                <p className="text-slate-300 mb-6">
                  Let's develop a content strategy that drives engagement, builds authority, and generates leads.
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <Link href="/book">Start Content Strategy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
