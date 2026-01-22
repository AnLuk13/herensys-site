import CountryDetails from '@/page-components/countries-pages/CountryDetails';
import type { Metadata } from 'next';
import countriesData from '@/data/countries.json';

type Props = {
  params: Promise<{ region: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, id } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://herensys.com';

  const country = countriesData.countriesData.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === id,
  );

  const countryName =
    country?.name ||
    id
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  const regionName = region
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: id,
    description: `Hire top talent in ${id} with Herensys employer of record services. Compliant, efficient, and hassle-free international employment solutions.`,
    alternates: {
      canonical: `/countries/${region}/${id}`,
    },
    openGraph: {
      images: [
        {
          url: country?.image || '/assets/optimized-images/hero/countries-banner.webp', //TODO
          width: 1200,
          height: 630,
          alt: 'Herensys',
        },
      ],
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Countries',
            item: `${baseUrl}/countries`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: regionName,
            item: `${baseUrl}/countries/${region}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: countryName,
            item: `${baseUrl}/countries/${region}/${id}`,
          },
        ],
      }),
    },
  };
}

export async function generateStaticParams() {
  return countriesData.countriesData.map(country => ({
    region: country.region,
    id: country.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export const revalidate = 2592000; // Revalidate once a month (30 days)

function CountryDetailsPage({ params }: Props) {
  return <CountryDetails params={params} />;
}

export default CountryDetailsPage;
