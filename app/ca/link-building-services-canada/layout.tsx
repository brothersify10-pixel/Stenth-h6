import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Link Building Services Canada | High-Quality Backlinks - Stenth',
  description: 'Professional link building services across Canada. Increase domain authority, improve search rankings, and build high-quality backlinks from Canadian websites.',
  keywords: 'link building canada, backlink services canada, seo link building canada, canadian backlinks, authority link building canada',
  alternates: {
    canonical: 'https://stenth.com/ca/link-building-services-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/link-building-services-canada/',
      'en-AU': 'https://stenth.com/au/link-building-services-australia/',
    },
  },
  openGraph: {
    title: 'Link Building Services Canada | High-Quality Backlinks - Stenth',
    description: 'Professional link building services across Canada. Increase domain authority, improve search rankings, and build high-quality backlinks from Canadian websites.',
    url: 'https://stenth.com/ca/link-building-services-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function LinkBuildingServicesCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/link-building-services-canada/',
    name: 'Stenth Link Building Services Canada',
    image: 'https://stenth.com/images/link-building-services.jpg',
    url: 'https://stenth.com/ca/link-building-services-canada/',
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
      name: 'Link Building Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'High-Authority Link Building',
            description: 'Secure backlinks from high-domain authority Canadian websites'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Guest Post Outreach',
            description: 'Strategic guest posting on relevant Canadian industry publications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital PR Link Building',
            description: 'Earn links through newsworthy content and media outreach'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Link Audit & Recovery',
            description: 'Comprehensive link profile analysis and toxic link removal'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '134',
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
