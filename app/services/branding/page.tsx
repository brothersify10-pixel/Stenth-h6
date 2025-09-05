import Header from "@/components/header"
import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BrandingPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Brand Strategy & Identity
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Build a powerful brand that resonates with your audience and drives business growth. From logo design to
              complete brand guidelines, we create identities that convert.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">What's Included</h2>

              <div className="space-y-6">
                {[
                  "Brand Strategy & Positioning",
                  "Logo Design & Visual Identity",
                  "Brand Guidelines & Style Guide",
                  "Marketing Collateral Design",
                  "Brand Voice & Messaging",
                  "Competitive Analysis",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"></div>
                    <span className="text-slate-300 text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Build Your Brand?</h3>
              <p className="text-slate-300 mb-8">
                Let's create a brand identity that sets you apart from the competition and drives real business results.
              </p>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  <Link href="/book">Get Started Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white bg-transparent"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
