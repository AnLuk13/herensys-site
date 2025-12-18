import CountryDetails from '@/pages/countries-pages/CountryDetails';
import { Metadata } from 'next';
import { countriesData } from '@/lib/consts/common';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const countryName = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: countryName,
    description: `Hire top talent in ${countryName} with Herensys employer of record services. Compliant, efficient, and hassle-free international employment solutions.`,
  };
}

export async function generateStaticParams() {
  return countriesData.map((country) => ({
    id: country.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export const revalidate = 3600;

function CountryDetailsPage() {
  return <CountryDetails />;
}

export default CountryDetailsPage;
