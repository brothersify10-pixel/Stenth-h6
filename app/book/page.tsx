import Header from "@/components/header"
import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BookPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Book Your Free Growth Session
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Schedule a complimentary 30-minute strategy session where we'll analyze your business and provide
              actionable insights for immediate growth.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <Input className="bg-slate-700/50 border-slate-600 text-white" placeholder="Enter your first name" />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <Input className="bg-slate-700/50 border-slate-600 text-white" placeholder="Enter your last name" />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <Input
                  type="email"
                  className="bg-slate-700/50 border-slate-600 text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Company</label>
                <Input className="bg-slate-700/50 border-slate-600 text-white" placeholder="Enter your company name" />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Current Monthly Revenue</label>
                <select className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2">
                  <option>Select revenue range</option>
                  <option>$0 - $10k</option>
                  <option>$10k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">What's your biggest growth challenge?</label>
                <Textarea
                  className="bg-slate-700/50 border-slate-600 text-white"
                  rows={4}
                  placeholder="Tell us about your current challenges..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-lg font-semibold">
                Schedule My Free Session
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
