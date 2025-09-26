import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Brisbane Digital Marketing Agency | STENTH - Tourism & Hospitality Experts',
  description: 'Brisbane\'s leading digital marketing agency for tourism, hospitality & lifestyle businesses. Expert SEO, Google Ads, social media & web design. Serving Brisbane CBD, South Bank, Fortitude Valley.',
  keywords: 'Brisbane digital marketing, SEO Brisbane, Google Ads Brisbane, tourism marketing Brisbane, hospitality marketing Brisbane, Brisbane marketing agency, Queensland digital agency',
  openGraph: {
    title: 'Brisbane Digital Marketing Agency | STENTH',
    description: 'Complete digital marketing services for Brisbane tourism and hospitality. Capturing Queensland\'s booming tourism market.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://stenth.com/au/brisbane',
  },
};

export default function BrisbaneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}