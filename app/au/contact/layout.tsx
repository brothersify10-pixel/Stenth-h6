import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Stenth Australia | Digital Marketing Agency",
  description:
    "Contact Stenth's Australian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing across Australia.",
  keywords: [
    "contact digital marketing agency Australia",
    "free consultation Australia",
    "digital marketing contact Sydney",
    "marketing agency contact Melbourne",
    "SEO consultation Brisbane",
    "PPC consultation Perth",
    "Australian marketing consultation",
    "digital marketing quote Australia",
    "marketing strategy consultation",
    "contact Stenth Australia"
  ],
  alternates: {
    canonical: "/au/contact/"
  },
  openGraph: {
    title: "Contact Stenth Australia | Digital Marketing Agency",
    description:
      "Contact Stenth's Australian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing.",
    url: "https://www.stenth.com/au/contact/",
  },
  twitter: {
    title: "Contact Stenth Australia | Digital Marketing Agency",
    description:
      "Contact Stenth's Australian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing.",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Stenth Australia",
    "description": "Contact Stenth's Australian digital marketing team for expert SEO, PPC, and social media marketing services.",
    "url": "https://www.stenth.com/au/contact/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Stenth Digital Marketing Agency Australia",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61-2-8079-2145",
        "contactType": "customer service",
        "email": "australia@stenth.com",
        "availableLanguage": ["English"],
        "areaServed": "AU"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Level 15, 1 Bligh Street",
        "addressLocality": "Sydney",
        "addressRegion": "NSW",
        "postalCode": "2000",
        "addressCountry": "AU"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd)
        }}
      />
      {children}
    </>
  )
}
