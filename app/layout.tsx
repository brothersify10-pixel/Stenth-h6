import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Stenth - Digital Marketing Excellence",
  description: "Professional digital marketing services to elevate your brand",
  generator: "v0.app",
  // ✅ Favicons / app icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // ok if this file is missing; you can add later
      { url: "/web-app-manifest-32x32.png", sizes: "32x32", type: "image/png" }, // optional if you have it
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }], // ok if missing
  },
  manifest: "/site.webmanifest", // create this in /public if you have it
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Apple title as requested by the generator */}
        <meta name="apple-mobile-web-app-title" content="Stenth" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
