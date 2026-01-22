import JobBoard from '@/page-components/JobBoard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Board',
  description:
    'Explore career opportunities at Herensys. Join our global team and work on exciting projects with international clients.',
  alternates: {
    canonical: '/job-board',
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

async function getJobs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${apiUrl}/jobs`, {
      next: { revalidate: 1800 },
    });
    return await res.json();
  } catch {
    return [];
  }
}

export default async function JobBoardPage() {
  const jobs = await getJobs();
  return <JobBoard initialJobs={jobs} />;
}
