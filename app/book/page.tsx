"use client"

import React, { useState, useEffect } from "react"
import { CheckCircle, Loader2, Calendar, Clock, Users, Target, Sparkles, ArrowRight, Star, Zap, Shield, TrendingUp, Rocket, Award, Heart } from "lucide-react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    { 
      name: "Balvinder Singh", 
      company: "Mr. Sub 6 FMCG", 
      title: "Owner/CEO",
      text: "STENTH transformed our business with clear strategies, monthly insights, and ROI-focused marketing. We achieved real growth within 6 months.", 
      rating: 5 
    },
    { 
      name: "John Castillo", 
      company: "Sertuca Tours & Travels", 
      title: "Managing Director",
      text: "The monthly growth sessions are game-changing. Finally, we know exactly where our marketing budget goes and what results we're getting.", 
      rating: 5 
    },
    { 
      name: "Emily Rodriguez", 
      company: "FinanceFlow", 
      title: "Founder",
      text: "From strategy to execution, STENTH handles everything. Our lead quality improved by 150% and conversion rates doubled in just 4 months.", 
      rating: 5 
    }
  ]

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-green-400/30 to-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-lg w-full">
          <div className="bg-slate-900/95 backdrop-blur-3xl border border-green-500/30 rounded-3xl p-10 shadow-2xl shadow-green-500/20">
            <div className="text-center space-y-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-green-500/40">
                  <CheckCircle className="h-12 w-12 text-white" />
                </div>
                <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mx-auto animate-ping opacity-30"></div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                  Success!
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Your strategy session request has been received. Get ready to transform your business!
                </p>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-6 border border-slate-600/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center justify-center space-x-2">
                  <Rocket className="w-5 h-5 text-cyan-400" />
                  <span>What Happens Next</span>
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-left">
                    <Heart className="w-5 h-5 text-pink-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Confirmation email sent to your inbox</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <Users className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Our strategist will call within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-left">
                    <Calendar className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">Session scheduled at your convenience</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => window.location.href = "/"} 
                className="w-full relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white py-4 px-6 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-cyan-500/30 overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center space-x-2">
                  <span>Back to Home</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
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
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
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
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-purple-600/10 blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
          }}
        />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-20 pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full px-8 py-3 mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-sm font-semibold text-cyan-400 tracking-wide">FREE STRATEGY SESSION</span>
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight">
              <span className="block text-white">Transform Your</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Digital Empire
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Book a personalized 30-minute consultation with our digital growth experts. 
              <span className="text-cyan-400 font-semibold"> Discover strategies that could 10x your business</span> in just one session.
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
                <div className="text-lg font-bold text-cyan-400 mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-base text-purple-300 mb-1">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-sm text-slate-400">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400 mb-16">
              <div className="flex items-center space-x-3 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">500+</span>
                  </div>
                </div>
                <span className="font-medium">businesses transformed</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 average rating</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-900/30 rounded-full px-4 py-2 border border-slate-800/50">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="font-medium">300% average ROI increase</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start max-w-7xl mx-auto">
          <div className="space-y-12">
            <div>
              <h2 className="text-5xl font-bold mb-10 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
                What You'll Unlock
              </h2>
              
              <div className="grid gap-10">
                {[
                  {
                    icon: Target,
                    title: "Personalized Growth Blueprint",
                    description: "Custom digital roadmap designed specifically for your business goals, industry, and current challenges. No generic advice - only strategies that work for YOU.",
                    color: "from-cyan-400 to-blue-500",
                  },
                  {
                    icon: Zap,
                    title: "Expert Analysis & Insights", 
                    description: "In-depth review of your current digital presence with actionable recommendations from our senior strategists. Discover hidden opportunities your competitors are missing.",
                    color: "from-purple-400 to-pink-500",
                  },
                  {
                    icon: Rocket,
                    title: "30-Day Quick Win Plan",
                    description: "Walk away with concrete action steps you can implement immediately to start seeing measurable results within 30 days. No fluff, just results.",
                    color: "from-emerald-400 to-green-500",
                  }
                ].map((benefit, index) => (
                  <div key={index} className="group relative">
                    <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.color} shadow-xl shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <benefit.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-2xl mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">{benefit.title}</h3>
                          <p className="text-slate-400 leading-relaxed text-lg group-hover:text-slate-300 transition-colors duration-300">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-10 shadow-2xl shadow-cyan-500/20">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">Session Details</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: "Duration", value: "30 focused minutes", icon: Clock, color: "text-cyan-400" },
                    { label: "Format", value: "Secure video call", icon: Users, color: "text-purple-400" },
                    { label: "Investment", value: "Completely FREE", icon: Shield, color: "text-green-400" },
                    { label: "Commitment", value: "Zero pressure", icon: Heart, color: "text-pink-400" }
                  ].map((detail, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-800/30 border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-300">
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
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/95 backdrop-blur-2xl border border-slate-800/50 rounded-3xl p-10 shadow-2xl">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white mb-3">Claim Your Free Session</h3>
                <p className="text-slate-400 text-lg">
                  Join the exclusive group of businesses scaling with Stenth
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-white font-semibold text-sm uppercase tracking-wide">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                      placeholder="John Doe"
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
                      className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-white font-semibold text-sm uppercase tracking-wide">Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 text-lg backdrop-blur-sm"
                    placeholder="Your amazing company"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-white font-semibold text-sm uppercase tracking-wide">Tell us about your goals</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-800/60 border border-slate-700/50 rounded-2xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 resize-none text-lg backdrop-blur-sm"
                    placeholder="What would you like to achieve? Any specific challenges or goals you'd like to discuss during our session?"
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-900/30 p-5 rounded-2xl border border-red-800/50 backdrop-blur-sm">
                    {error}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.email || !formData.name}
                  className="w-full relative bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 text-white py-5 px-8 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-2xl shadow-cyan-500/30 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  
                  <span className="relative flex items-center justify-center space-x-3">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        <span>Securing Your Session...</span>
                      </>
                    ) : (
                      <>
                        <Rocket className="h-6 w-6" />
                        <span>
                          {!formData.email || !formData.name 
                            ? 'Please Fill Required Fields' 
                            : 'Book My Free Strategy Session'
                          }
                        </span>
                        <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>

                <div className="text-center">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Your information is 100% secure. We respect your privacy and will never spam you.
                    <br />
                    By booking, you agree to our privacy policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Or Book Instantly
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See our live availability and secure your preferred time slot in seconds
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-3xl p-3 border border-slate-800/50 shadow-2xl">
              <iframe
                src="https://cal.com/stenth/30min"
                width="100%"
                height="650"
                frameBorder="0"
                className="rounded-2xl"
                title="Schedule a consultation with Stenth"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
