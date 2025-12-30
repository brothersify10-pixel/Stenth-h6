import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agence Marketing Numérique Montréal | STENTH - Experts Créatifs Bilingues',
  description: 'Agence marketing numérique de Montréal pour entreprises créatives et culturelles. SEO bilingue, publicités, médias sociaux et web design. Plateau, Mile End, Centre-ville.',
  keywords: 'marketing numérique Montréal, SEO Montréal, publicité Google Montréal, médias sociaux Montréal, agence marketing Montréal, marketing bilingue Québec, agence créative Montréal',
  openGraph: {
    title: 'Agence Marketing Numérique Montréal | STENTH',
    description: 'Services marketing numériques complets pour entreprises montréalaises. Créativité bilingue et expertise culturelle québécoise.',
    type: 'website',
    locale: 'fr_CA',
  },
  alternates: {
    canonical: 'https://stenth.com/ca/montreal',
  },
};

export default function MontrealLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
