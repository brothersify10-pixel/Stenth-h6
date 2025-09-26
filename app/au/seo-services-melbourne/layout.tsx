import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Digital Marketing Melbourne | Creative Growth Solutions | Stenth Australia",
  description: "☕ Melbourne's most creative digital marketing agency. SEO, Social Media, Web Design & more. 385% average revenue growth. Melbourne launch special: 50% OFF!",
  keywords: [
    "digital marketing Melbourne",
    "Melbourne digital marketing agency",
    "creative marketing Melbourne",
    "Instagram marketing Melbourne",
    "Google Ads Melbourne",
    "social media marketing Melbourne",
    "SEO services Melbourne",
    "web design Melbourne",
    "Melbourne marketing agency",
    "café marketing Melbourne",
    "restaurant marketing Melbourne",
    "creative agency Melbourne",
    "content marketing Melbourne",
    "brand strategy Melbourne",
    "Melbourne business growth"
  ],
  alternates: {
    canonical: "/au/seo-services-melbourne/"
  },
  openGraph: {
    title: "Digital Marketing Melbourne | Creative Growth Solutions | Stenth Australia",
    description: "☕ Melbourne's most creative digital marketing agency. 385% revenue growth for local businesses. Launch special: 50% OFF!",
    url: "https://www.stenth.com/au/seo-services-melbourne/",
  },
}

export default function MelbourneSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
