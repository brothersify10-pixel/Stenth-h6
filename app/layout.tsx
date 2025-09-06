import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Stenth - Digital Marketing Excellence",
  description: "Professional digital marketing services to elevate your brand",
  generator: "v0.app",
}

export default function RootLayout({
  children,
  modal, // Added modal slot for intercepting routes
}: Readonly<{
  children: React.ReactNode
  modal?: React.ReactNode // Added optional modal prop
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        {modal && <Suspense fallback={null}>{modal}</Suspense>}
        <Analytics />
      </body>
    </html>
  )
}
