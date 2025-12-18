import PoolOfCandidates from '@/pages/pool-of-candidates-pages/PoolOfCandidates';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pool of Candidates',
  description: 'Access our curated pool of pre-vetted global talent. Find experienced professionals ready to join your team across various roles and industries.',
};

export const revalidate = 1800;

export default function PoolOfCandidatesPage() {
  return <PoolOfCandidates />;
}
