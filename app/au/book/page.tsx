"use client"

import React, { useState, useEffect } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
}

interface FormData {
  name: string
  email: string
  company: string
  notes: string
  region: string
  city: string
  phone: string
  country: string
}

import { CheckCircle, Loader2, Calendar, Clock, Users, Target, Sparkles, ArrowRight, Star, Zap, Shield, TrendingUp, Rocket, Award, Heart, MapPin, Sun } from "lucide-react"

export default function BookAustraliaPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
    region: "",
    city: "",
    phone: "",
    country: "Australia"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "James Mitchell",
      company: "Sydney Digital Hub",
      title: "Managing Director",
      location: "Sydney, NSW",
      text: "STENTH's understanding of the Australian market is unmatched. Our lead generation improved by 310% targeting both urban and regional markets.",
      rating: 5
    },
    {
      name: "Emma Clarke",
      company: "Melbourne Marketing Solutions",
      title: "CEO",
      location: "Melbourne, VIC",
      text: "From Bondi to Perth, STENTH delivered results across all major Australian cities. Their local insights made all the difference.",
      rating: 5
    },
    {
      name: "Michael O'Brien",
      company: "Queensland Growth Co",
      title: "Founder",
      location: "Brisbane, QLD",
      text: "Finally, a marketing partner who gets the Aussie market. Our tourism business saw record bookings after their strategic overhaul.",
      rating: 5
    }
  ]

  const australianStates = [
    "New South Wales", "Victoria", "Queensland", "Western Australia",
    "South Australia", "Tasmania", "Australian Capital Territory", "Northern Territory"
  ]

  const australianCities = {
    "New South Wales": ["Sydney", "Newcastle", "Wollongong", "Albury", "Wagga Wagga", "Lismore"],
    "Victoria": ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton", "Warrnambool"],
    "Queensland": ["Brisbane", "Gold Coast", "Townsville", "Cairns", "Toowoomba", "Rockhampton"],
    "Western Australia": ["Perth", "Fremantle", "Rockingham", "Mandurah", "Bunbury", "Geraldton"],
    "South Australia": ["Adelaide", "Mount Gambier", "Whyalla", "Murray Bridge", "Port Augusta"],
    "Tasmania": ["Hobart", "Launceston", "Devonport", "Burnie"],
    "Australian Capital Territory": ["Canberra"],
    "Northern Territory": ["Darwin", "Alice Springs", "Katherine", "Nhulunbuy"]
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: Date.now() + Math.random(),
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3000 + 2000
      }
      setParticles(prev => [...prev.slice(-20), newParticle])

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id))
      }, newParticle.duration)
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(testimonialInterval)
  }, [testimonials.length])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "australia_booking_page"
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Reset city when region changes
      ...(name === 'region' && { city: '' })
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/30 to-yellow-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          {/* Success Message */}
          <div className="text-center space-y-8">
            <div className="relative inline-block">
              <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/40">
                <CheckCircle className="h-16 w-16 text-white" />
              </div>
              <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full mx-auto animate-ping opacity-30"></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                G'day! You Beauty! Almost There! 🏄‍♂️
              </h2>
              <p className="text-2xl md:text-3xl text-white font-semibold leading-relaxed max-w-3xl mx-auto">
                Now, let's lock in your perfect time, mate!
              </p>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Your information has been received. Choose a time slot below that works best for your Aussie timezone,
                and we'll meet to discuss how we can <span className="text-green-400 font-bold">grow your business Down Under</span>.
              </p>
            </div>

            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600/50 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">Instant Confirmation</p>
                  <p className="text-slate-400 text-sm">Get calendar invite immediately</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">Pick Your Time</p>
                  <p className="text-slate-400 text-sm">AEST/AWST/ACST friendly</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">Start Growing</p>
                  <p className="text-slate-400 text-sm">Your transformation begins</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Need help? Email us at <a href="mailto:info@stenth.com" className="text-green-400 hover:text-green-300">info@stenth.com</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-400/10 via-yellow-400/5 to-blue-400/10 blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
          }}
        />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-green-400/20 to-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-20 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-yellow-400/10 border border-green-500/30 rounded-full px-8 py-3 mb-8 backdrop-blur-sm">
              <div className="text-2xl md:hidden">🇦🇺</div>
              <span className="text-sm font-semibold text-green-400 tracking-wide">FREE AUSSIE STRATEGY SESSION</span>
              <Sun className="w-5 h-5 text-yellow-400" />
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-white">Scale Your Business</span>
              <span className="block bg-gradient-to-r from-green-400 via-yellow-400 to-blue-400 bg-clip-text text-transparent">
                Down Under 🏄‍♂️
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Book a personalized 30-minute consultation with our Australian digital growth experts.
              <span className="text-green-400 font-semibold"> Discover strategies that work in the Aussie market</span> from Sydney to Perth.
            </p>

            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 max-w-3xl mx-auto mb-12">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-slate-200 mb-6 italic leading-relaxed font-medium">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="text-center">
                <div className="text-lg font-bold text-green-400 mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-base text-yellow-300/80 mb-1">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-sm text-slate-400 mb-1">
                  {testimonials[currentTestimonial].company}
                </div>
                <div className="text-xs text-green-300 flex items-center justify-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{testimonials[currentTestimonial].location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 mb-16">
              <div className="flex items-center space-x-3 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">200+</span>
                  </div>
                </div>
                <span className="font-medium">Aussie businesses served</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <div className="text-lg">🦘</div>
                <span className="font-medium">Coast-to-coast expertise</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="font-medium">Local market insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-white via-green-200 to-yellow-200 bg-clip-text text-transparent">
                Aussie Market Expertise
              </h2>

              <div className="grid gap-10">
                {[
                  {
                    icon: Target,
                    title: "Australian Market Strategy",
                    description: "Custom digital roadmap designed for Australian consumers, regulations, and market dynamics. We know what works from Bondi to Byron Bay.",
                    color: "from-green-400 to-green-500",
                  },
                  {
                    icon: Zap,
                    title: "Local Compliance & Insights",
                    description: "Expert knowledge of Australian privacy laws (Privacy Act), consumer protection, and local market trends that impact your digital marketing success.",
                    color: "from-yellow-400 to-green-400",
                  },
                  {
                    icon: Rocket,
                    title: "Seasonal Aussie Campaigns",
                    description: "Leverage Australian holidays, sports seasons, and cultural moments that resonate with Aussie audiences from AFL finals to summer cricket.",
                    color: "from-blue-400 to-green-500",
                  }
                ].map((benefit, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-green-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-xl shadow-green-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <benefit.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-green-300 transition-colors duration-300">{benefit.title}</h3>
                          <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-yellow-400/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-green-500/30 rounded-3xl p-10 shadow-2xl shadow-green-500/20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-yellow-400 shadow-lg">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">Aussie Session Details</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Duration", value: "30 focused minutes", icon: Clock, color: "text-green-400" },
                    { label: "Timezone", value: "Your Aussie timezone", icon: MapPin, color: "text-yellow-400" },
                    { label: "Investment", value: "Completely FREE", icon: Shield, color: "text-green-400" },
                    { label: "Style", value: "No worries, mate!", icon: Heart, color: "text-blue-400" }
                  ].map((detail, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-green-500/30 transition-all duration-300">
                      <detail.icon className={`h-6 w-6 ${detail.color}`} />
                      <div>
                        <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{detail.label}</p>
                        <p className="text-white font-bold text-lg">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 to-yellow-400/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/95 backdrop-blur-2xl border border-slate-800/50 rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center justify-center space-x-2">
                  <span className="md:hidden">🇦🇺</span>
                  <span>Book Your Aussie Session</span>
                </h3>
                <p className="text-slate-400 text-lg">
                  Join Aussie businesses scaling with Stenth
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">Work Email *</label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                      placeholder="john@company.com.au"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">Company Name</label>
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                      placeholder="Your Aussie business"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">State/Territory</label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    >
                      <option value="">Select State/Territory</option>
                      {australianStates.map(state => (
                        <option key={state} value={state} className="bg-slate-800">{state}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.region && australianCities[formData.region as keyof typeof australianCities] && (
                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">City</label>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    >
                      <option value="">Select City</option>
                      {australianCities[formData.region as keyof typeof australianCities].map(city => (
                        <option key={city} value={city} className="bg-slate-800">{city}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="space-y-3">
                  <label className="text-white font-semibold text-sm uppercase tracking-wide">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    placeholder="+61 (04) 1234 5678"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-white font-semibold text-sm uppercase tracking-wide">Tell us about your Aussie business goals</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/30 transition-all duration-300 resize-none text-lg backdrop-blur-sm"
                    placeholder="What would you like to achieve in the Australian market? Any specific challenges with local regulations, seasonal campaigns, or regional targeting?"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-900/30 p-5 rounded-2xl border border-red-800/50 backdrop-blur-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.email || !formData.name}
                  className="w-full relative bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500 text-white py-5 px-8 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-2xl shadow-green-500/30 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Securing Your Aussie Session...</span>
                      </>
                    ) : (
                      <>
                        <div className="text-xl md:hidden">🇦🇺</div>
                        <span>
                          {!formData.email || !formData.name
                            ? 'Please Fill Required Fields'
                            : 'Book My Free Aussie Strategy Session'
                          }
                        </span>
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>

                <div className="text-center">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your information is 100% secure and Privacy Act compliant. Fair dinkum!
                    <br />
                    By booking, you agree to our Australian privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
