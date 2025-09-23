import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO for Law Firms Canada | Legal Marketing Experts - Stenth',
  description: 'Specialized SEO services for Canadian law firms. Increase client acquisition, improve local search rankings, and dominate legal search results.',
  keywords: 'law firm seo canada, legal seo canada, lawyer seo canada, attorney marketing canada, legal marketing canada',
  alternates: {
    canonical: 'https://stenth.com/ca/seo-for-law-firms-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/seo-for-law-firms-canada/',
      'en-AU': 'https://stenth.com/au/seo-for-law-firms-australia/',
    },
  },
  openGraph: {
    title: 'SEO for Law Firms Canada | Legal Marketing Experts - Stenth',
    description: 'Specialized SEO services for Canadian law firms. Increase client acquisition, improve local search rankings, and dominate legal search results.',
    url: 'https://stenth.com/ca/seo-for-law-firms-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function SEOForLawFirmsCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/seo-for-law-firms-canada/',
    name: 'Stenth SEO Services for Law Firms Canada',
    image: 'https://stenth.com/images/law-firm-seo.jpg',
    url: 'https://stenth.com/ca/seo-for-law-firms-canada/',
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
      name: 'Law Firm SEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Local SEO for Law Firms',
            description: 'Local search optimization to attract clients in your practice area'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Legal Content Marketing',
            description: 'Expert legal content creation and thought leadership development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Law Firm Website Optimization',
            description: 'Technical and on-page SEO optimization for legal websites'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Legal Directory Management',
            description: 'Optimization of legal directory listings and citations'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '98',
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