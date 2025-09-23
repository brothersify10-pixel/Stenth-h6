import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Sydney | Certified Google Partner - Stenth',
  description: 'Expert Google Ads management in Sydney. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Sydney businesses.',
  keywords: 'google ads sydney, google ads management sydney, ppc sydney, google advertising sydney, google ads agency sydney, sem sydney',
  alternates: {
    canonical: 'https://stenth.com/au/google-ads-sydney/',
    languages: {
      'en-AU': 'https://stenth.com/au/google-ads-sydney/',
      'en-CA': 'https://stenth.com/ca/google-ads-vancouver/',
    },
  },
  openGraph: {
    title: 'Google Ads Management Sydney | Certified Google Partner - Stenth',
    description: 'Expert Google Ads management in Sydney. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Sydney businesses.',
    url: 'https://stenth.com/au/google-ads-sydney/',
    type: 'website',
    locale: 'en_AU',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function GoogleAdsSydneyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stenth Google Ads Management Sydney',
    image: 'https://stenth.com/images/sydney-office.jpg',
    url: 'https://stenth.com/au/google-ads-sydney/',
    telephone: '+61-2-9555-0123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '456 George Street',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      postalCode: '2000',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.8688,
      longitude: 151.2093
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:30'
    },
    sameAs: [
      'https://facebook.com/stenthaustralia',
      'https://linkedin.com/company/stenth',
      'https://twitter.com/stenthaustralia'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Google Ads Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search Ads',
            description: 'Google Search advertising campaigns for Sydney businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Ads',
            description: 'Google Shopping campaign management for Sydney retailers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Ads',
            description: 'Display network advertising targeting Sydney audiences'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Ads',
            description: 'YouTube video advertising campaigns for Sydney market'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '125',
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