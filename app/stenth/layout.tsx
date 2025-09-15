// app/stenth/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Stenth? | Digital Marketing Agency",
  description:
    "Stenth is a digital marketing partner focused on measurable growth: strategy, brand, SEO, paid, content, and analytics. We build businesses, not just campaigns.",
  alternates: { canonical: "https://www.stenth.com/stenth" },
  keywords: [
    "what is stenth",
    "digital marketing agency",
    "business growth marketing",
    "ROI marketing",
    "data-driven marketing",
    "marketing strategy",
    "brand strategy",
    "SEO services",
    "paid advertising",
    "content marketing",
    "web development",
    "marketing analytics"
  ],
  openGraph: {
    title: "What is Stenth? | Digital Marketing Agency",
    description:
      "Stenth is a digital marketing partner focused on measurable growth: strategy, brand, SEO, paid, content, and analytics. We build businesses, not just campaigns.",
    url: "https://www.stenth.com/stenth",
    type: "website",
  },
}

export default function StenthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
