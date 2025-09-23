import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technical SEO Audit Canada | Expert Website Analysis - Stenth',
  description: 'Comprehensive technical SEO audit services across Canada. Identify and fix critical SEO issues affecting your search rankings. Free technical SEO consultation.',
  keywords: 'technical seo audit canada, website audit canada, seo analysis canada, technical seo services canada, site audit canada',
  alternates: {
    canonical: 'https://stenth.com/ca/technical-seo-audit-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/technical-seo-audit-canada/',
      'en-AU': 'https://stenth.com/au/technical-seo-audit-australia/',
    },
  },
  openGraph: {
    title: 'Technical SEO Audit Canada | Expert Website Analysis - Stenth',
    description: 'Comprehensive technical SEO audit services across Canada. Identify and fix critical SEO issues affecting your search rankings.',
    url: 'https://stenth.com/ca/technical-seo-audit-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function TechnicalSEOAuditCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/technical-seo-audit-canada/',
    name: 'Stenth Technical SEO Audit Services Canada',
    image: 'https://stenth.com/images/technical-seo-audit.jpg',
    url: 'https://stenth.com/ca/technical-seo-audit-canada/',
    telephone: '+1-888-555-0123',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'ON',
      addressLocality: 'Toronto'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Canada'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Technical SEO Audit Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Comprehensive Technical SEO Audit',
            description: 'Full website technical analysis and optimization recommendations'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Site Speed Optimization',
            description: 'Page speed analysis and performance improvements'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile SEO Audit',
            description: 'Mobile-first indexing optimization and mobile usability analysis'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Schema Markup Implementation',
            description: 'Structured data optimization for better search visibility'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '156',
      bestRating: '5'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}