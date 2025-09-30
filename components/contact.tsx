"use client"

import { useContactForm } from '@/lib/use-contact-form'
import ContactForm from './contact-form'
import ContactInfo from './contact-info'

export default function Contact() {
  const { isSubmitting, submitStatus, errorMessage, submitForm } = useContactForm()

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss how we can accelerate your growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />
          <ContactForm
            onSubmit={submitForm}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </section>
  )
}
