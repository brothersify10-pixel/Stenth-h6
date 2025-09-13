// app/stenth/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Stenth?",
  description:
    "Stenth is a digital marketing partner focused on measurable growth: strategy, brand, SEO, paid, content, and analytics.",
  alternates: { canonical: "https://www.stenth.com/stenth" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Stenth different?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "We don’t ship vanity campaigns. We build growth systems: strategy, brand, paid, SEO, content, and analytics tied to ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Which services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Brand strategy & identity, SEO, paid advertising, social, content, web development, analytics & tracking.",
      },
    },
    {
      "@type": "Question",
      name: "How do you report ROI?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Monthly growth sessions with lead and conversion reports, CPL/CPA tracking, and clear next actions.",
      },
    },
  ],
}

export default function Page() {
  return (
    <main className="prose mx-auto px-4 py-12">
      <h1>What is Stenth?</h1>
      <p>
        We’re a digital marketing agency that builds businesses, not just campaigns. Data-driven strategy, clear execution, and measurable ROI.
      </p>

      <h2>Services</h2>
      <ul>
        <li>Brand strategy & identity</li>
        <li>SEO & content</li>
        <li>Paid advertising</li>
        <li>Social media</li>
        <li>Web development</li>
        <li>Analytics & tracking</li>
      </ul>

      <h2>FAQs</h2>
      <details><summary>What makes Stenth different?</summary><p>We build growth systems tied to revenue, not vanity metrics.</p></details>
      <details><summary>Which services do you offer?</summary><p>Brand, SEO, paid, social, content, web, analytics.</p></details>
      <details><summary>How do you report ROI?</summary><p>Monthly growth sessions with transparent numbers.</p></details>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  )
}
