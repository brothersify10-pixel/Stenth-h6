import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calgary Digital Marketing Agency | STENTH - Energy & Resources Hub Experts',
  description: 'Calgary\'s premier B2B digital marketing agency for energy, oil & gas, and resource sectors. Expert SEO, LinkedIn campaigns & web design. Serving Downtown, Beltline, Energy Centre.',
  keywords: 'Calgary digital marketing, B2B marketing Calgary, energy marketing Calgary, oil gas marketing Calgary, LinkedIn marketing Calgary, Calgary marketing agency, Alberta digital agency',
  openGraph: {
    title: 'Calgary Digital Marketing Agency | STENTH',
    description: 'Complete B2B digital marketing services for Calgary energy and resource companies. Alberta business ecosystem experts.',
    type: 'website',
    locale: 'en_CA',
  },
  alternates: {
    canonical: 'https://stenth.com/ca/calgary',
  },
};

export default function CalgaryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
