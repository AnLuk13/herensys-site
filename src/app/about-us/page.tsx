import AboutUs from '@/page-components/AboutUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Herensys - your trusted partner for global talent acquisition, employer of record services, and international workforce solutions.',
  alternates: {
    canonical: '/about-us',
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

export default function AboutUsPage() {
  return <AboutUs />;
}
