import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vancouver Digital Marketing Agency | STENTH - Tech & Innovation Experts',
  description: 'Vancouver\'s premier tech digital marketing agency for startups, SaaS & innovation companies. Expert SEO, Google Ads, social media & web design. Downtown, Yaletown, Gastown.',
  keywords: 'Vancouver digital marketing, SEO Vancouver, tech marketing Vancouver, startup marketing Vancouver, SaaS marketing Vancouver, Vancouver marketing agency, innovation marketing BC',
  openGraph: {
    title: 'Vancouver Digital Marketing Agency | STENTH',
    description: 'Complete digital marketing services for Vancouver tech companies. Fueling BC\'s startup ecosystem and innovation leaders.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://stenth.com/ca/vancouver',
  },
};

export default function VancouverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
