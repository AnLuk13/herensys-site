import PoolOfCandidates from '@/page-components/pool-of-candidates-pages/PoolOfCandidates';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pool of Candidates',
  description:
    'Access our curated pool of pre-vetted global talent. Find experienced professionals ready to join your team across various roles and industries.',
  alternates: {
    canonical: '/pool-of-candidates',
  },
  openGraph: {
    images: [
      {
        url: '/assets/optimized-images/home/banner.webp', //TODO
        width: 1200,
        height: 630,
        alt: 'Herensys',
      },
    ],
  },
};

export const revalidate = 1800;

async function getCandidates() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${apiUrl}/candidates`, {
      next: { revalidate: 1800 },
    });
    return await res.json();
  } catch {
    return [];
  }
}

export default async function PoolOfCandidatesPage() {
  const candidates = await getCandidates();
  return <PoolOfCandidates initialCandidates={candidates} />;
}
