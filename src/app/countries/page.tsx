import Countries from '@/pages/countries-pages/Countries';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries',
  description:
    'Explore our global presence across Albania, Algeria, Armenia, Georgia, Kosovo, Moldova and more. Hire talent worldwide with Herensys employer of record services.',
};

function CountriesPage() {
  return <Countries />;
}

export default CountriesPage;
