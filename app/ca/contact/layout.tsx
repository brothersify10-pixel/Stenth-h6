import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Stenth Canada | Digital Marketing Agency",
  description:
    "Contact Stenth's Canadian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing across Canada.",
  keywords: [
    "contact digital marketing agency Canada",
    "free consultation Canada",
    "digital marketing contact Toronto",
    "marketing agency contact Vancouver",
    "SEO consultation Montreal",
    "PPC consultation Calgary",
    "Canadian marketing consultation",
    "digital marketing quote Canada",
    "marketing strategy consultation",
    "contact Stenth Canada"
  ],
  alternates: {
    canonical: "/ca/contact/"
  },
  openGraph: {
    title: "Contact Stenth Canada | Digital Marketing Agency",
    description:
      "Contact Stenth's Canadian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing.",
    url: "https://www.stenth.com/ca/contact/",
  },
  twitter: {
    title: "Contact Stenth Canada | Digital Marketing Agency",
    description:
      "Contact Stenth's Canadian digital marketing team. Get your free consultation and custom strategy for SEO, PPC, and social media marketing.",
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
    "name": "Contact Stenth Canada",
    "description": "Contact Stenth's Canadian digital marketing team for expert SEO, PPC, and social media marketing services.",
    "url": "https://www.stenth.com/ca/contact/",
    "mainEntity": {
      "@type": "Organization",
      "name": "Stenth Digital Marketing Agency Canada",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-705-790-1965",
        "contactType": "customer service",
        "email": "canada@stenth.com",
        "availableLanguage": ["English", "French"],
        "areaServed": "CA"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "368 Prince of Wales Dr",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "postalCode": "L5B 0A1",
        "addressCountry": "CA"
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
