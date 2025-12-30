import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function WebPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Web Development
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Build high-converting websites and applications that drive business growth. From landing pages to complex
              web applications, we create digital experiences that convert.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Landing Pages",
                description: "High-converting pages designed to turn visitors into customers",
                features: ["Conversion Optimization", "A/B Testing", "Mobile Responsive", "Fast Loading"],
              },
              {
                title: "E-commerce Sites",
                description: "Complete online stores with payment processing and inventory management",
                features: ["Shopping Cart", "Payment Gateway", "Inventory System", "Order Management"],
              },
              {
                title: "Web Applications",
                description: "Custom web apps tailored to your specific business needs",
                features: ["Custom Development", "Database Integration", "User Authentication", "API Development"],
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

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Development Stack</h2>
              <p className="text-slate-300 mb-8 max-w-3xl mx-auto">
                We use cutting-edge technologies to build fast, secure, and scalable web solutions that grow with your
                business.
              </p>

              <div className="grid md:grid-cols-4 gap-6 mb-8">
                {["React/Next.js", "Node.js", "TypeScript", "Tailwind CSS"].map((tech, index) => (
                  <div key={index} className="bg-slate-700/50 rounded-lg p-4">
                    <span className="text-white font-medium">{tech}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg font-semibold"
              >
                <Link href="/book">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
