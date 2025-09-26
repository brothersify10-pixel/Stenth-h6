import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perth Digital Marketing Agency | STENTH - B2B Mining & Resources Experts',
  description: 'Perth\'s premier B2B digital marketing agency for mining, resources & industrial sectors. Expert SEO, LinkedIn campaigns & web design. Serving Perth CBD, West Perth, Fremantle.',
  keywords: 'Perth digital marketing, B2B marketing Perth, SEO Perth, LinkedIn marketing Perth, mining marketing Perth, resources marketing Perth, Perth marketing agency, industrial marketing WA',
  openGraph: {
    title: 'Perth Digital Marketing Agency | STENTH',
    description: 'Complete B2B digital marketing services for Perth mining, resources and industrial sectors. Western Australia business ecosystem experts.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: 'https://stenth.com/au/perth',
  },
};

export default function PerthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}