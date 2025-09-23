"use client";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, MessageSquare, CheckCircle } from "lucide-react";
import { useState } from "react";
import STENTHFooter from "@/components/stenth-footer";
import FloatingElements from "@/components/floating-elements";

export default function AustraliaContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    state: "",
    message: "",
    budget: ""
  });

  const australianStates = [
    "New South Wales", "Victoria", "Queensland", "Western Australia",
    "South Australia", "Tasmania", "Northern Territory", "Australian Capital Territory"
  ];

  const services = [
    "SEO Services",
    "Google Ads Management",
    "Social Media Marketing",
    "Content Marketing",
    "Web Design & Development",
    "E-commerce SEO",
    "Technical SEO Audit",
    "Link Building",
    "Tradie Marketing",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000 AUD",
    "$5,000 - $10,000 AUD",
    "$10,000 - $25,000 AUD",
    "$25,000 - $50,000 AUD",
    "$50,000+ AUD"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Floating Background Elements */}
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/images/australia-flag.svg"
                alt="Australia Flag"
                width={48}
                height={32}
                className="mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Contact Stenth Australia
              </h1>
            </div>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to grow your Australian business? Get in touch with our digital marketing experts
              for a free consultation and customised strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Form */}
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                <h2 className="text-3xl font-bold text-white mb-6">Get Your Free Australian Market Analysis</h2>
                <p className="text-slate-300 mb-8">
                  Tell us about your business and we'll create a customised digital marketing strategy
                  for the Australian market.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="john@company.com.au"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="Your Company Pty Ltd"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                        placeholder="+61 2 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-slate-300 mb-2">
                        State/Territory *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      >
                        <option value="">Select State/Territory</option>
                        {australianStates.map((state) => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                      Monthly Budget (AUD)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Tell us about your goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve with digital marketing in Australia..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
                  >
                    Get My Free Australian Market Analysis
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">

                {/* Contact Details */}
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                        <p className="text-slate-300">
                          Level 15, 1 Bligh Street<br />
                          Sydney NSW 2000<br />
                          Australia
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                        <p className="text-slate-300">+61 2 8079 2145</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                        <p className="text-slate-300">australia@stenth.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Business Hours</h4>
                        <p className="text-slate-300">
                          Monday - Friday: 9:00 AM - 5:00 PM AEST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Free Consultation</h4>
                        <p className="text-slate-300">30-minute strategy call to understand your business and goals</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Market Analysis</h4>
                        <p className="text-slate-300">Detailed review of your Australian market opportunity</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">Custom Strategy</h4>
                        <p className="text-slate-300">Tailored digital marketing plan for your business</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">No Obligation</h4>
                        <p className="text-slate-300">Free consultation with no pressure or commitments</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-2xl p-8 border border-green-500/30">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Need Quick Help?</h3>
                    <p className="text-slate-300 mb-6">
                      Call us directly for immediate assistance with your digital marketing needs.
                    </p>
                    <a
                      href="tel:+61280792145"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-400 hover:to-green-500 transition-all duration-300 shadow-lg shadow-green-500/25"
                    >
                      Call Now: +61 2 8079 2145
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <STENTHFooter />
    </div>
  );
}