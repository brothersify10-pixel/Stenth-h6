import { TrendingUp, Users, DollarSign } from "lucide-react";

export const caseStudyData = {
  "stenth-x": {
    title: "STENTH X Campaign",
    industry: "Multi-Channel Growth",
    metric: "300% ROI Growth",
    description: "A comprehensive digital transformation that revolutionized lead generation and customer acquisition.",
    challenge:
      "The client struggled with low-quality leads and poor conversion rates across multiple marketing channels.",
    solution:
      "We implemented a data-driven approach with advanced targeting, conversion optimization, and multi-touch attribution.",
    results: [
      "300% increase in ROI within 4 months",
      "5x improvement in qualified lead generation",
      "45% reduction in customer acquisition cost",
      "Established scalable growth systems",
    ],
    icon: TrendingUp,
    images: [
       "/portfolio/stenth-x/dashboard.png",
      "/portfolio/stenth-x/campaigns.png",
      "/portfolio/stenth-x/results.png",
    ],
  },
  "retail-boost": {
    title: "Retail Boost Project",
    industry: "E-commerce",
    metric: "Leads Doubled",
    description:
      "Complete brand overhaul and strategic campaign that transformed an underperforming e-commerce business.",
    challenge: "Declining sales, poor brand recognition, and ineffective marketing campaigns across all channels.",
    solution:
      "Full brand redesign, optimized product positioning, and integrated marketing campaigns across social and search.",
    results: [
      "100% increase in monthly qualified leads",
      "45% boost in conversion rates",
      "60% improvement in brand recognition",
      "Sustainable 6-month growth trajectory",
    ],
    icon: Users,
    images: [
      "/portfolio/retail-boost/store.png",
      "/portfolio/retail-boost/qr-campaign.png",
      "/portfolio/retail-boost/analytics.png",
    ],
  },
  "leadgen-saas": {
    title: "LeadGen SaaS Success",
    industry: "Fintech SaaS",
    metric: "$2M Revenue Growth",
    description:
      "Strategic marketing automation and targeted campaigns that generated massive revenue growth for a fintech startup.",
    challenge: "Limited market penetration, complex product positioning, and inefficient sales funnel conversion.",
    solution:
      "Implemented advanced marketing automation, refined messaging strategy, and optimized the entire customer journey.",
    results: [
      "$2M in additional annual revenue",
      "150% improvement in lead quality scores",
      "8-month ROI achievement timeline",
      "Scalable automation systems deployed",
    ],
    icon: DollarSign,
    images: [
      "/portfolio/leadgen-saas/creative-tests.png",
      "/portfolio/leadgen-saas/pipeline.png",
      "/portfolio/leadgen-saas/dashboard.png",
    ],
  },
} as const;

export type CaseStudySlug = keyof typeof caseStudyData;