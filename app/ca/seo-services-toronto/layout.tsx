import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "SEO Services Toronto | Stenth Canada",
  description: "Leading SEO agency in Toronto helping GTA businesses dominate local search results. Expert Toronto SEO services for higher rankings and more customers.",
  keywords: [
    "SEO services Toronto",
    "Toronto SEO agency",
    "SEO company Toronto",
    "search engine optimization Toronto",
    "local SEO Toronto",
    "Toronto digital marketing",
    "GTA SEO services",
    "Toronto SEO expert",
    "SEO consultant Toronto",
    "Toronto website optimization"
  ],
  alternates: {
    canonical: "/ca/seo-services-toronto/"
  },
  openGraph: {
    title: "SEO Services Toronto | Stenth Canada",
    description: "Leading SEO agency in Toronto helping GTA businesses dominate local search results.",
    url: "https://www.stenth.com/ca/seo-services-toronto/",
  },
}

export default function TorontoSEOLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
