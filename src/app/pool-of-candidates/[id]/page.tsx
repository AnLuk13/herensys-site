import PoolOfCandidatesPerson from '@/page-components/pool-of-candidates-pages/PoolOfCandidatesPerson';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}/candidates/${id}`, {
      next: { revalidate: 3600 },
    });
    const candidate = await res.json();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://herensys.com';

    return {
      title: `${candidate.name} - ${candidate.role}`,
      description: `${candidate.experience} professional in ${candidate.region}. ${candidate.summary || `View the full profile and hire through Herensys global recruitment services.`}`,
      alternates: {
        canonical: `/pool-of-candidates/${id}`,
      },
      openGraph: {
        images: [
          {
            url: candidate.image || '/assets/optimized-images/home/banner.webp', //TODO
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
              name: 'Pool of Candidates',
              item: `${baseUrl}/pool-of-candidates`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: `${candidate.name} - ${candidate.role}`,
              item: `${baseUrl}/pool-of-candidates/${id}`,
            },
          ],
        }),
      },
    };
  } catch {
    return {
      title: `Candidate Profile`,
      description: `View the professional profile of ${id}. Experience, skills, and background of top talent available through Herensys global recruitment services.`,
      alternates: {
        canonical: `/pool-of-candidates/${id}`,
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
  }
}

export const revalidate = 3600;

async function getCandidateData(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const [candidateRes, allCandidatesRes] = await Promise.all([
      fetch(`${apiUrl}/candidates/${id}`, { next: { revalidate: 3600 } }),
      fetch(`${apiUrl}/candidates`, { next: { revalidate: 3600 } }),
    ]);
    const candidate = await candidateRes.json();
    const allCandidates = await allCandidatesRes.json();
    return { candidate, allCandidates };
  } catch {
    return { candidate: null, allCandidates: [] };
  }
}

async function PoolOfCandidatesPersonPage({ params }: Props) {
  const { id } = await params;
  const { candidate, allCandidates } = await getCandidateData(id);
  return (
    <PoolOfCandidatesPerson
      params={Promise.resolve({ id })}
      initialCandidate={candidate}
      initialAllCandidates={allCandidates}
    />
  );
}

export default PoolOfCandidatesPersonPage;
