import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Melbourne | Certified Google Partner - Stenth',
  description: 'Expert Google Ads management in Melbourne. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Melbourne businesses.',
  keywords: 'google ads melbourne, google ads management melbourne, ppc melbourne, google advertising melbourne, google ads agency melbourne, sem melbourne',
  alternates: {
    canonical: 'https://stenth.com/au/google-ads-melbourne/',
    languages: {
      'en-AU': 'https://stenth.com/au/google-ads-melbourne/',
      'en-CA': 'https://stenth.com/ca/google-ads-toronto/',
    },
  },
  openGraph: {
    title: 'Google Ads Management Melbourne | Certified Google Partner - Stenth',
    description: 'Expert Google Ads management in Melbourne. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Melbourne businesses.',
    url: 'https://stenth.com/au/google-ads-melbourne/',
    type: 'website',
    locale: 'en_AU',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function GoogleAdsMelbourneLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stenth Google Ads Management Melbourne',
    image: 'https://stenth.com/images/melbourne-office.jpg',
    url: 'https://stenth.com/au/google-ads-melbourne/',
    telephone: '+61-3-9555-0123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Collins Street',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631
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
            description: 'Google Search advertising campaigns for Melbourne businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Ads',
            description: 'Google Shopping campaign management for Melbourne retailers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Ads',
            description: 'Display network advertising targeting Melbourne audiences'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Ads',
            description: 'YouTube video advertising campaigns for Melbourne market'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '92',
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