export const portfolioCases = {
  "stenth-x": {
    title: "STENTH X Campaign",
    category: "Multi-Channel Growth",
    badges: ["8 weeks", "+58% MQLs", "-21% CAC"],
    overview:
      "A comprehensive multi-channel growth experiment targeting B2B SaaS companies through Meta, Google, and YouTube advertising channels.",
    goal: "Increase qualified leads while reducing customer acquisition costs for a growing SaaS platform.",
    strategy:
      "Implemented a data-driven approach combining audience segmentation, creative testing, and channel optimization.",
    execution:
      "Launched coordinated campaigns across three channels with unified messaging and progressive audience targeting.",
    stats: [
      { label: "MQLs Increase", value: "+58%", description: "More qualified leads generated" },
      { label: "CAC Reduction", value: "-21%", description: "Lower customer acquisition cost" },
      { label: "Lead→Call Rate", value: "+17%", description: "Better lead quality improvement" },
    ],
    timeline: "8 weeks",
    stack: ["Meta Ads", "Google Ads", "YouTube", "HubSpot", "Mixpanel"],
    images: [
      { src: "/portfolio/stenth-x/dashboard.jpg", alt: "Campaign dashboard overview" },
      { src: "/portfolio/stenth-x/campaigns.jpg", alt: "Multi-channel campaign setup" },
      { src: "/portfolio/stenth-x/results.jpg", alt: "Performance results analysis" },
    ],
    faq: [
      {
        question: "How did you achieve such a significant MQL increase?",
        answer:
          "Through strategic audience segmentation and creative testing across multiple channels, optimizing for quality over quantity.",
      },
      {
        question: "What was the key to reducing CAC?",
        answer:
          "Continuous optimization of targeting parameters and bid strategies, combined with improved landing page conversion rates.",
      },
    ],
  },
  "retail-boost": {
    title: "Retail Boost Project",
    category: "Local SEO",
    badges: ["8 weeks", "+23% Clicks", "+18% Redemptions"],
    overview:
      "Local SEO optimization combined with in-store QR code campaigns to drive measurable foot traffic for retail locations.",
    goal: "Increase local visibility and drive qualified foot traffic to physical retail locations.",
    strategy: "Combined local SEO optimization with innovative QR code campaigns and landing page optimization.",
    execution:
      "Implemented local search optimization, created location-specific landing pages, and deployed QR code campaigns.",
    stats: [
      { label: "Direction Clicks", value: "+23%", description: "More people finding directions" },
      { label: "Redemptions", value: "+18%", description: "Higher in-store conversions" },
      { label: "Email Signups", value: "+1.2k", description: "New customer database growth" },
    ],
    timeline: "8 weeks",
    stack: ["Google My Business", "Local SEO", "QR Codes", "Landing Pages"],
    images: [
      { src: "/portfolio/retail-boost/store.jpg", alt: "Retail store optimization" },
      { src: "/portfolio/retail-boost/qr-campaign.jpg", alt: "QR code campaign materials" },
      { src: "/portfolio/retail-boost/analytics.jpg", alt: "Local SEO performance metrics" },
    ],
    faq: [
      {
        question: "How do QR codes help with local marketing?",
        answer:
          "QR codes bridge the gap between offline and online experiences, allowing us to track and optimize the customer journey from discovery to purchase.",
      },
      {
        question: "What local SEO strategies were most effective?",
        answer:
          "Google My Business optimization, local keyword targeting, and location-specific content creation drove the most significant results.",
      },
    ],
  },
  "leadgen-saas": {
    title: "LeadGen SaaS Success",
    category: "Creative Testing",
    badges: ["12 weeks", "-32% CAC", "+44% Pipeline"],
    overview:
      "Comprehensive creative testing and search campaign restructuring for a B2B SaaS lead generation platform.",
    goal: "Optimize creative performance and search campaign structure to improve pipeline quality and reduce acquisition costs.",
    strategy:
      "Systematic creative testing methodology combined with search campaign restructuring and landing page optimization.",
    execution: "Implemented A/B testing framework, restructured search campaigns, and optimized conversion funnels.",
    stats: [
      { label: "CAC Reduction", value: "-32%", description: "Significant cost savings" },
      { label: "Pipeline Growth", value: "+44%", description: "More qualified opportunities" },
      { label: "Demo→SQL Rate", value: "+19%", description: "Better lead qualification" },
    ],
    timeline: "12 weeks",
    stack: ["Google Ads", "Facebook Ads", "Unbounce", "Salesforce", "Hotjar"],
    images: [
      { src: "/portfolio/leadgen-saas/cover.jpg", alt: "SaaS platform overview" },
      { src: "/portfolio/leadgen-saas/testing.jpg", alt: "Creative testing framework" },
      { src: "/portfolio/leadgen-saas/pipeline.jpg", alt: "Pipeline performance metrics" },
    ],
    faq: [
      {
        question: "What creative testing methodology did you use?",
        answer:
          "We implemented a systematic approach testing ad copy, visuals, and CTAs across multiple audience segments to identify top-performing combinations.",
      },
      {
        question: "How did search restructuring improve performance?",
        answer:
          "By reorganizing campaigns around user intent and implementing more granular keyword groupings, we improved relevance and Quality Scores.",
      },
    ],
  },
}

export type PortfolioCase = (typeof portfolioCases)[keyof typeof portfolioCases]
