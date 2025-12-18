import JobBoard from '@/pages/JobBoard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Board',
  description: 'Explore career opportunities at Herensys. Join our global team and work on exciting projects with international clients.',
};

export const revalidate = 1800;

export default function JobBoardPage() {
  return <JobBoard />;
}
