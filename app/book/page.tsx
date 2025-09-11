"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { CheckCircle, Loader2, Calendar, Clock, Users, Target } from "lucide-react"

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Thank You!</h2>
              <p className="text-gray-400">
                We've received your booking request. Our team will contact you shortly to schedule your session.
              </p>
              <Button onClick={() => (window.location.href = "/")} className="bg-purple-600 hover:bg-purple-700">
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Your <span className="text-purple-400">Strategy Session</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Schedule a personalized consultation with our experts and discover
            how we can accelerate your growth.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">What You'll Get</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Personalized Strategy</h3>
                    <p className="text-gray-400">
                      Tailored digital marketing roadmap based on your specific business goals and challenges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Consultation</h3>
                    <p className="text-gray-400">
                      Direct access to our senior strategists with proven track records in scaling businesses.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Actionable Insights</h3>
                    <p className="text-gray-400">
                      Walk away with concrete next steps and recommendations you can implement immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-5 w-5 text-purple-400" />
                <h3 className="font-semibold">Session Details</h3>
              </div>
              <ul className="space-y-2 text-gray-400">
                <li>• 30-minute focused consultation</li>
                <li>• Video call via Google Meet</li>
                <li>• Free strategy assessment</li>
                <li>• No commitment required</li>
              </ul>
            </div>
          </div>

          {/* Booking Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Schedule Your Session</CardTitle>
              <CardDescription className="text-gray-400">
                Fill out the form below and we'll contact you to schedule your consultation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-white">
                    Project Details
                  </Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                    placeholder="Tell us about your business goals, current challenges, or specific areas you'd like to discuss..."
                  />
                </div>

                {error && (
                  <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded border border-red-800">{error}</div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting || !formData.email}
                  className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    "Request Consultation"
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Cal.com Embed */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Or Schedule Directly</h2>
            <p className="text-gray-400">
              Prefer to book immediately? Use our calendar below to select your preferred time.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-1 border border-gray-800">
              <iframe
                src="https://cal.com/stenth/30min?embed=true&theme=dark"
                width="100%"
                height="600"
                frameBorder="0"
                className="rounded-lg"
                title="Schedule a consultation with Stenth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
