import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services Melbourne | Stenth Australia",
  description: "Leading SEO agency in Melbourne helping VIC businesses dominate local search results. Expert Melbourne SEO services for higher rankings and more customers.",
  keywords: [
    "SEO services Melbourne",
    "Melbourne SEO agency",
    "SEO company Melbourne",
    "search engine optimisation Melbourne",
    "local SEO Melbourne",
    "Melbourne digital marketing",
    "VIC SEO services",
    "Melbourne SEO expert",
    "SEO consultant Melbourne",
    "Melbourne website optimisation"
  ],
  alternates: {
    canonical: "/au/seo-services-melbourne/"
  },
  openGraph: {
    title: "SEO Services Melbourne | Stenth Australia",
    description: "Leading SEO agency in Melbourne helping VIC businesses dominate local search results.",
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
