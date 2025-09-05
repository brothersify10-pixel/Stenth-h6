"use client"
import { useState } from "react"
import type React from "react"

import Header from "@/components/header"
import FloatingElements from "@/components/floating-elements"
import BookingCalendar from "@/components/booking-calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    notes: "",
  })
  const [submitting, setSubmitting] = useState(false)
  const [saved, setSaved] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setSaved(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <FloatingElements />
      <Header />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Book Your Free Growth Session
              </span>
            </h1>

            <div className="bg-slate-900/80 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                Schedule a complimentary 30-minute strategy session where we'll analyze your business and provide
                actionable insights for immediate growth.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 space-y-6"
          >
            <div>
              <label className="block text-white font-medium mb-2">Your Name</label>
              <Input
                required
                className="bg-slate-700/50 border-slate-600 text-white"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <Input
                required
                type="email"
                className="bg-slate-700/50 border-slate-600 text-white"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Company</label>
              <Input
                className="bg-slate-700/50 border-slate-600 text-white"
                placeholder="Enter your company name"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Notes (optional)</label>
              <Textarea
                className="bg-slate-700/50 border-slate-600 text-white"
                rows={4}
                placeholder="Tell us about your current challenges..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
              />
            </div>

            <Button
              disabled={submitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 text-lg font-semibold"
            >
              {submitting ? "Saving..." : "Save Details"}
            </Button>

            {saved && <p className="text-green-400 text-sm text-center">Saved! Now pick a time below.</p>}
          </form>

          <BookingCalendar />

          <p className="text-sm text-slate-400 text-center">
            You'll get a calendar invite and confirmation email after booking.
          </p>
        </div>
      </section>
    </main>
  )
}
