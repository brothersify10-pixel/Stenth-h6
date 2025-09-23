import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Canada | Strategic Content Services - Stenth',
  description: 'Expert content marketing services across Canada. Boost brand awareness, engage audiences, and drive conversions with strategic content creation and distribution.',
  keywords: 'content marketing canada, content creation canada, blog writing canada, social media content canada, content strategy canada',
  alternates: {
    canonical: 'https://stenth.com/ca/content-marketing-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/content-marketing-canada/',
      'en-AU': 'https://stenth.com/au/content-marketing-australia/',
    },
  },
  openGraph: {
    title: 'Content Marketing Canada | Strategic Content Services - Stenth',
    description: 'Expert content marketing services across Canada. Boost brand awareness, engage audiences, and drive conversions with strategic content creation and distribution.',
    url: 'https://stenth.com/ca/content-marketing-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function ContentMarketingCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/content-marketing-canada/',
    name: 'Stenth Content Marketing Services Canada',
    image: 'https://stenth.com/images/content-marketing.jpg',
    url: 'https://stenth.com/ca/content-marketing-canada/',
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
      name: 'Content Marketing Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Blog Content Creation',
            description: 'Strategic blog writing and content optimization for SEO and engagement'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Content',
            description: 'Engaging social media content creation and management'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Strategy Development',
            description: 'Comprehensive content marketing strategy and planning'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Video Content Production',
            description: 'Professional video content creation and optimization'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '167',
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