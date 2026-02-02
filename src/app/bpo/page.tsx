import BPOServices from '@/page-components/services-pages/BPOServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BPO Services',
  description:
    'Business Process Outsourcing solutions that help you scale operations efficiently. Focus on core business while we handle back-office functions.',
  alternates: {
    canonical: '/bpo',
  },
  openGraph: {
    images: [
      {
        url: '/assets/optimized-images/hero/bpo-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Herensys',
      },
    ],
  },
};

export default function BPOServicesPage() {
  return <BPOServices />;
}
