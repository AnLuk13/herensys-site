import Home from '@/page-components/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
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

export default function Page() {
  return <Home />;
}
