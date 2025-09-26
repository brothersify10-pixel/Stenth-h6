import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Melbourne Digital Marketing Agency | STENTH - Creative & Cultural Capital',
  description: 'Melbourne\'s premier digital marketing agency. Expert SEO, Google Ads, social media, web design & content marketing. Serving Melbourne CBD, South Yarra, Richmond & all Melbourne areas. 385% proven growth results.',
  keywords: 'Melbourne digital marketing, SEO Melbourne, Google Ads Melbourne, social media marketing Melbourne, web design Melbourne, content marketing Melbourne, Melbourne marketing agency, digital agency Melbourne',
  openGraph: {
    title: 'Melbourne Digital Marketing Agency | STENTH',
    description: 'Complete digital marketing services for Melbourne businesses. From coffee culture to Grand Prix campaigns - we speak Melbourne.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://stenth.com/au/melbourne',
  },
};

export default function MelbourneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}