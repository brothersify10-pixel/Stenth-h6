import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sydney Digital Marketing Agency | STENTH - Business Growth Experts',
  description: 'Sydney\'s premier digital marketing agency for enterprises & startups. Expert SEO, Google Ads, social media & web design. Serving Sydney CBD, North Sydney, Parramatta. 340% proven growth results.',
  keywords: 'Sydney digital marketing, SEO Sydney, Google Ads Sydney, social media marketing Sydney, web design Sydney, Sydney marketing agency, digital agency Sydney, fintech marketing Sydney',
  openGraph: {
    title: 'Sydney Digital Marketing Agency | STENTH',
    description: 'Complete digital marketing services for Sydney businesses. Dominating Australia\'s largest business market with data-driven strategies.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://stenth.com/au/sydney',
  },
};

export default function SydneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}