import VisasWorkPermits from '@/page-components/services-pages/VisasWorkPermits';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visas and Work Permits',
  description:
    'Navigate international work authorization with ease. We handle visa applications, work permits, and immigration compliance for your global workforce.',
  alternates: {
    canonical: '/visas-work-permits',
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

export default function VisasWorkPermitsPage() {
  return <VisasWorkPermits />;
}
