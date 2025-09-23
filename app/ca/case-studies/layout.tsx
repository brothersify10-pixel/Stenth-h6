import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Canadian Success Stories | Digital Marketing Case Studies | Stenth",
  description:
    "Explore real Canadian digital marketing success stories. See how businesses across Canada achieved 200%+ growth with our SEO, PPC, and social media strategies.",
  keywords: [
    "digital marketing case studies Canada",
    "Canadian marketing success stories",
    "SEO results Canada",
    "PPC case studies Toronto",
    "marketing ROI Vancouver",
    "digital marketing results Montreal",
    "Canadian business growth",
    "marketing agency testimonials",
    "SEO success stories Calgary",
    "digital transformation Canada"
  ],
  alternates: {
    canonical: "/ca/case-studies/"
  },
  openGraph: {
    title: "Canadian Success Stories | Digital Marketing Case Studies | Stenth",
    description:
      "Explore real Canadian digital marketing success stories. See how businesses achieved 200%+ growth with our proven strategies.",
    url: "https://www.stenth.com/ca/case-studies/",
    type: "website",
  },
  twitter: {
    title: "Canadian Success Stories | Digital Marketing Case Studies | Stenth",
    description:
      "Explore real Canadian digital marketing success stories. See how businesses achieved 200%+ growth with our proven strategies.",
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
    "name": "Canadian Digital Marketing Case Studies",
    "description": "Real success stories from Canadian businesses that achieved significant growth through digital marketing strategies.",
    "url": "https://www.stenth.com/ca/case-studies/",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 4,
      "itemListElement": [
        {
          "@type": "Article",
          "position": 1,
          "name": "Toronto Tech Startup Success Story",
          "description": "SaaS company achieves 300% organic growth and $2.5M CAD revenue increase"
        },
        {
          "@type": "Article",
          "position": 2,
          "name": "Vancouver E-commerce Growth",
          "description": "Outdoor gear retailer grows online sales 400% across Western Canada"
        },
        {
          "@type": "Article",
          "position": 3,
          "name": "Montreal Law Firm Expansion",
          "description": "Bilingual law firm achieves 220% organic growth in English and French markets"
        },
        {
          "@type": "Article",
          "position": 4,
          "name": "Calgary Energy Consulting",
          "description": "Energy consulting firm generates $3.2M CAD through B2B digital marketing"
        }
      ]
    },
    "about": {
      "@type": "Organization",
      "name": "Stenth Digital Marketing Agency Canada",
      "url": "https://www.stenth.com/ca/"
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