import GlobalRecruiting from '@/pages/services-pages/GlobalRecruiting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Recruiting',
  description: 'Access top global talent with our international recruitment services. Find skilled professionals across IT, operations, sales, and more.',
  alternates: {
    canonical: '/global-recruiting',
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

export default function GlobalRecruitingPage() {
  return <GlobalRecruiting />;
}
