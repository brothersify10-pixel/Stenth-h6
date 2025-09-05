import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "STENTH | We Build Businesses, Not Just Brands",
  description:
    "From business analysis to brand recognition, STENTH manages every detail of your growth journey—strategy, marketing, ROI tracking, and beyond.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-16x16.jpg?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg?v=3", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.jpg?v=3", color: "#2563EB" }],
  },
  manifest: "/site.webmanifest?v=3",
  openGraph: {
    title: "STENTH | We Build Businesses, Not Just Brands",
    description:
      "From business analysis to brand recognition, STENTH manages every detail of your growth journey—strategy, marketing, ROI tracking, and beyond.",
    url: "https://stenth.com",
    siteName: "STENTH",
    type: "website",
    images: [
      {
        url: "/og.png?v=3",
        width: 1200,
        height: 630,
        alt: "STENTH | We Build Businesses, Not Just Brands",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "STENTH | We Build Businesses, Not Just Brands",
    description:
      "From business analysis to brand recognition, STENTH manages every detail of your growth journey—strategy, marketing, ROI tracking, and beyond.",
    images: ["/og.png?v=3"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal?: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        {modal}
        <Analytics />
      </body>
    </html>
  )
}
