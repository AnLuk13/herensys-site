import Countries from '@/pages/countries-pages/Countries';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ region: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://herensys.com';
  
  const regionName = region.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${region} Countries`,
    description: `Explore our presence in ${region}. Hire talent with Herensys employer of record services across multiple countries in the region.`,
    alternates: {
      canonical: `/countries/${region}`,
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
        ],
      }),
    },
  };
}

export async function generateStaticParams() {
  return [
    { region: 'balkans' },
    { region: 'eastern-europe' },
    { region: 'north-africa' },
  ];
}

// export const revalidate = 3600;

function CountriesRegionPage({ params }: { params: Promise<{ region: string }> }) {
  return <Countries params={params} />;
}

export default CountriesRegionPage;
