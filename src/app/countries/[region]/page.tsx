import Countries from '@/pages/countries-pages/Countries';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ region: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const regionName = region
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${regionName} Countries`,
    description: `Explore our presence in ${regionName}. Hire talent with Herensys employer of record services across multiple countries in the region.`,
  };
}

export async function generateStaticParams() {
  return [
    { region: 'balkans' },
    { region: 'eastern-europe' },
    { region: 'north-africa' },
  ];
}

export const revalidate = 3600;

function CountriesRegionPage({ params }: { params: Promise<{ region: string }> }) {
  return <Countries params={params} />;
}

export default CountriesRegionPage;
