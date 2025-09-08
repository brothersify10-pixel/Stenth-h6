import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "STENTH transformed our business with clear strategies, monthly insights, and ROI-focused marketing. We achieved real growth within 6 months.",
      author: "Balvinder Singh",
      company: "Mr. Sub 6 FMCG chain store owner",
      role: "Owner/CEO",
    },
    {
      quote:
        "The monthly growth sessions are game-changing. Finally, we know exactly where our marketing budget goes and what results we're getting.",
      author: "Michael Chen",
      company: "EcoLife Products",
      role: "Marketing Director",
    },
    {
      quote:
        "From strategy to execution, STENTH handles everything. Our lead quality improved by 150% and conversion rates doubled in just 4 months.",
      author: "Emily Rodriguez",
      company: "FinanceFlow",
      role: "Founder",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">"{testimonial.quote}"</blockquote>

              <div className="border-t border-slate-700 pt-6">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-slate-400">{testimonial.role}</div>
                <div className="text-cyan-400 text-sm">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
