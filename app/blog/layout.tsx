import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Blog - Digital Marketing Insights & Strategies | Stenth",
    template: "%s | Stenth Blog",
  },
  description:
    "Discover expert digital marketing tips, SEO strategies, and growth tactics from Stenth. Stay updated with the latest trends in business growth and online marketing.",
  keywords: [
    "digital marketing blog",
    "SEO tips",
    "marketing strategies",
    "business growth",
    "content marketing",
    "paid advertising insights",
    "Google Ads",
    "Meta Ads",
    "marketing automation",
    "conversion optimization",
    "Stenth blog",
  ],
  openGraph: {
    title: "Stenth Blog - Digital Marketing Insights",
    description:
      "Expert tips and strategies for growing your business online",
    images: [
      {
        url: "/Stenth_Logo-removebg.png",
        width: 1200,
        height: 630,
        alt: "Stenth Blog",
      },
    ],
    url: "https://www.stenth.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stenth Blog - Digital Marketing Insights",
    description:
      "Expert tips and strategies for growing your business online",
    images: ["/Stenth_Logo-removebg.png"],
  },
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
