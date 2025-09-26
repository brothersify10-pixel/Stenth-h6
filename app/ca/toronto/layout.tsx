import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toronto Digital Marketing Agency | STENTH - Financial & Tech Hub Experts',
  description: 'Toronto\'s premier digital marketing agency for fintech, finance & technology companies. Expert SEO, Google Ads, social media & web design. Serving Financial District, King West, Liberty Village.',
  keywords: 'Toronto digital marketing, SEO Toronto, Google Ads Toronto, fintech marketing Toronto, social media marketing Toronto, Toronto marketing agency, digital agency Toronto, financial services marketing',
  openGraph: {
    title: 'Toronto Digital Marketing Agency | STENTH',
    description: 'Complete digital marketing services for Toronto businesses. Dominating Canada\'s financial capital with data-driven strategies.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://stenth.com/ca/toronto',
  },
};

export default function TorontoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}