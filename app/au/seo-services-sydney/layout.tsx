import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Sydney | Complete Growth Solutions | Stenth Australia",
  description: "🚀 Sydney's most comprehensive digital marketing agency. SEO, Google Ads, Social Media, Web Design & more. 340% average revenue increase. Launch special: 50% OFF!",
  keywords: [
    "digital marketing Sydney",
    "Sydney digital marketing agency",
    "Google Ads Sydney",
    "social media marketing Sydney",
    "SEO services Sydney",
    "web design Sydney",
    "Sydney marketing agency",
    "paid advertising Sydney",
    "content marketing Sydney",
    "email marketing Sydney",
    "brand strategy Sydney",
    "conversion optimization Sydney",
    "marketing automation Sydney",
    "Sydney business growth",
    "digital transformation Sydney"
  ],
  alternates: {
    canonical: "/au/seo-services-sydney/"
  },
  openGraph: {
    title: "Digital Marketing Sydney | Complete Growth Solutions | Stenth Australia",
    description: "🚀 Sydney's most comprehensive digital marketing agency. 340% average revenue increase. Launch special: 50% OFF first 3 months!",
    url: "https://www.stenth.com/au/seo-services-sydney/",
  },
}

export default function SydneySEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
