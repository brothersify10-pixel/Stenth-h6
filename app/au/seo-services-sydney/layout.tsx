import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services Sydney | Stenth Australia",
  description: "Leading SEO agency in Sydney helping NSW businesses dominate local search results. Expert Sydney SEO services for higher rankings and more customers.",
  keywords: [
    "SEO services Sydney",
    "Sydney SEO agency",
    "SEO company Sydney",
    "search engine optimisation Sydney",
    "local SEO Sydney",
    "Sydney digital marketing",
    "NSW SEO services",
    "Sydney SEO expert",
    "SEO consultant Sydney",
    "Sydney website optimisation"
  ],
  alternates: {
    canonical: "/au/seo-services-sydney/"
  },
  openGraph: {
    title: "SEO Services Sydney | Stenth Australia",
    description: "Leading SEO agency in Sydney helping NSW businesses dominate local search results.",
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
