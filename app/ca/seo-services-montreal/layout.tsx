import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services Montreal | Services SEO Montréal | Stenth Canada",
  description: "Leading bilingual SEO agency in Montreal. Expert English & French SEO services for Quebec businesses. Référencement professionnel à Montréal.",
  keywords: [
    "SEO services Montreal",
    "Montreal SEO agency",
    "SEO company Montreal",
    "services SEO Montréal",
    "référencement Montréal",
    "agence SEO Montréal",
    "bilingual SEO Montreal",
    "Quebec SEO services",
    "Montreal digital marketing",
    "optimisation web Montréal"
  ],
  alternates: {
    canonical: "/ca/seo-services-montreal/"
  },
  openGraph: {
    title: "SEO Services Montreal | Services SEO Montréal | Stenth Canada",
    description: "Leading bilingual SEO agency in Montreal. Expert English & French SEO services for Quebec businesses.",
    url: "https://www.stenth.com/ca/seo-services-montreal/",
  },
}

export default function MontrealSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
