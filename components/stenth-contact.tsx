import { Button } from "@/components/ui/button"

export default function STENTHContact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
          Ready to Scale Your Business with{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            STENTH?
          </span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          We design tailored growth strategies for your business. From digital marketing to brand management, STENTH
          handles everything so you can focus on results.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Call
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-12 py-4 text-xl font-semibold rounded-xl transition-all duration-300 bg-transparent"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  )
}
