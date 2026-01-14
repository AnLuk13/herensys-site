import CountryDetails from '@/pages/countries-pages/CountryDetails';
import { Metadata } from 'next';
import countriesData from '@/data/countries.json';

type Props = {
  params: Promise<{ region: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const countryName = id
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: countryName,
    description: `Hire top talent in ${countryName} with Herensys employer of record services. Compliant, efficient, and hassle-free international employment solutions.`,
  };
}

export async function generateStaticParams() {
  return countriesData.countriesData.map(country => ({
    region: country.region,
    id: country.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export const revalidate = 3600;

function CountryDetailsPage({ params }: Props) {
  return <CountryDetails params={params} />;
}

export default CountryDetailsPage;
