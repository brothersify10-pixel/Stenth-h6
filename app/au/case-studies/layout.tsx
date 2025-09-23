import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Australian Success Stories | Digital Marketing Case Studies | Stenth",
  description:
    "Explore real Australian digital marketing success stories. See how businesses across Australia achieved 300%+ growth with our SEO, PPC, and social media strategies.",
  keywords: [
    "digital marketing case studies Australia",
    "Australian marketing success stories",
    "SEO results Australia",
    "PPC case studies Sydney",
    "marketing ROI Melbourne",
    "digital marketing results Brisbane",
    "Australian business growth",
    "marketing agency testimonials",
    "SEO success stories Perth",
    "digital transformation Australia"
  ],
  alternates: {
    canonical: "/au/case-studies/"
  },
  openGraph: {
    title: "Australian Success Stories | Digital Marketing Case Studies | Stenth",
    description:
      "Explore real Australian digital marketing success stories. See how businesses achieved 300%+ growth with our proven strategies.",
    url: "https://www.stenth.com/au/case-studies/",
    type: "website",
  },
  twitter: {
    title: "Australian Success Stories | Digital Marketing Case Studies | Stenth",
    description:
      "Explore real Australian digital marketing success stories. See how businesses achieved 300%+ growth with our proven strategies.",
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const caseStudiesJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Australian Digital Marketing Case Studies",
    "description": "Real success stories from Australian businesses that achieved significant growth through digital marketing strategies.",
    "url": "https://www.stenth.com/au/case-studies/",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "name": "Sydney E-commerce Growth Story",
          "description": "Fashion retailer achieves 420% organic growth and $3.2M AUD revenue increase"
        },
        {
          "@type": "Article",
          "position": 2,
          "name": "Melbourne Tech Startup Expansion",
          "description": "SaaS company grows B2B leads 190% across Australian market"
        },
        {
          "@type": "Article",
          "position": 3,
          "name": "Brisbane Tradie Business Success",
          "description": "Electrical contractor increases local bookings 240% across Queensland"
        },
        {
          "@type": "Article",
          "position": 4,
          "name": "Perth Mining Services Growth",
          "description": "Mining equipment supplier generates $4.1M AUD through B2B marketing"
        }
      ]
    },
    "about": {
      "@type": "Organization",
      "name": "Stenth Digital Marketing Agency Australia",
      "url": "https://www.stenth.com/au/"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(caseStudiesJsonLd)
        }}
      />
      {children}
    </>
  )
}