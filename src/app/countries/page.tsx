import Countries from '@/page-components/countries-pages/Countries';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries',
  description:
    'Explore our global presence across Albania, Algeria, Armenia, Georgia, Kosovo, Moldova and more. Hire talent worldwide with Herensys employer of record services.',
  alternates: {
    canonical: '/countries',
  },
  openGraph: {
    images: [
      {
        url: '/assets/optimized-images/hero/countries-banner.webp', //TODO
        width: 1200,
        height: 630,
        alt: 'Herensys',
      },
    ],
  },
};

function CountriesPage() {
  return <Countries />;
}

export default CountriesPage;
