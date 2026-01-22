import EmployerOfRecord from '@/page-components/services-pages/EmployerOfRecord';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Employer of Record (EOR)',
  description:
    'Hire globally without setting up local entities. Our EOR services handle payroll, compliance, benefits, and HR administration in over 180 countries.',
  alternates: {
    canonical: '/employer-of-record',
  },
  openGraph: {
    images: [
      {
        url: '/assets/optimized-images/hero/global-recruiting-banner.webp', //TODO
        width: 1200,
        height: 630,
        alt: 'Herensys',
      },
    ],
  },
};

export default function EmployerOfRecordPage() {
  return <EmployerOfRecord />;
}
