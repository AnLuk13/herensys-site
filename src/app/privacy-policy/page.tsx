import PrivacyPolicy from '@/page-components/PrivacyPolicy';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read our privacy policy to understand how Herensys collects, uses, and protects your personal information.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy',
    description:
      'Read our privacy policy to understand how Herensys collects, uses, and protects your personal information.',
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

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
