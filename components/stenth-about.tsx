import Image from "next/image"

export default function STENTHAbout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              We Don't Just Market Brands.{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                We Build Businesses.
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Our data-first approach ensures every marketing dollar works harder for your business. We don't just run
                campaigns—we build comprehensive growth systems.
              </p>

              <p>
                With real-time tracking, monthly growth sessions, and end-to-end execution across ads, social media, and
                brand storytelling, we deliver measurable results that scale.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-4"></div>
                  Real-time performance tracking and analytics
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                  Monthly strategic growth review sessions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-4"></div>
                  End-to-end marketing execution and management
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/luke-chesser-JKUTrJ4vK00-unsplash.jpg"
              alt="Growth dashboards and analytics"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
