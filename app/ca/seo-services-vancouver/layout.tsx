import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services Vancouver | Local SEO Agency BC | Stenth",
  description:
    "Leading SEO services in Vancouver, BC. Dominate local search results across Metro Vancouver with our proven SEO strategies. Free consultation available.",
  keywords: [
    "SEO services Vancouver",
    "Vancouver SEO agency",
    "local SEO Vancouver",
    "SEO company Vancouver",
    "Vancouver digital marketing",
    "search engine optimization Vancouver",
    "Vancouver SEO expert",
    "BC SEO services",
    "Vancouver local search",
    "Metro Vancouver SEO",
    "Richmond SEO",
    "Burnaby SEO",
    "Surrey SEO",
    "North Vancouver SEO"
  ],
  alternates: {
    canonical: "/ca/seo-services-vancouver/"
  },
  openGraph: {
    title: "SEO Services Vancouver | Local SEO Agency BC | Stenth",
    description:
      "Leading SEO services in Vancouver, BC. Dominate local search results across Metro Vancouver with our proven SEO strategies.",
    url: "https://www.stenth.com/ca/seo-services-vancouver/",
  },
  twitter: {
    title: "SEO Services Vancouver | Local SEO Agency BC | Stenth",
    description:
      "Leading SEO services in Vancouver, BC. Dominate local search results across Metro Vancouver with our proven SEO strategies.",
  },
}

export default function VancouverSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const vancouverSEOJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stenth SEO Services Vancouver",
    "description": "Professional SEO services helping Vancouver businesses dominate local search results across Metro Vancouver and British Columbia.",
    "url": "https://www.stenth.com/ca/seo-services-vancouver/",
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      {
        "@type": "City",
        "name": "Richmond",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      {
        "@type": "City",
        "name": "Burnaby",
        "addressRegion": "BC",
        "addressCountry": "CA"
      },
      {
        "@type": "City",
        "name": "Surrey",
        "addressRegion": "BC",
        "addressCountry": "CA"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "49.2827",
        "longitude": "-123.1207"
      },
      "geoRadius": "50000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-705-790-1965",
      "contactType": "customer service",
      "email": "vancouver@stenth.com",
      "areaServed": "CA",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "49.2827",
      "longitude": "-123.1207"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vancouver SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Vancouver SEO",
            "description": "Local SEO services for Vancouver businesses targeting neighborhood customers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Vancouver SEO",
            "description": "Comprehensive SEO for large Vancouver corporations and enterprises"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Vancouver SEO",
            "description": "Specialized SEO to drive online sales for Vancouver e-commerce businesses"
          }
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(vancouverSEOJsonLd)
        }}
      />
      {children}
    </>
  )
}