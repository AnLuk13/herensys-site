import PrivacyPolicy from '@/pages/PrivacyPolicy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read our privacy policy to understand how Herensys collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy',
    description:
      'Read our privacy policy to understand how Herensys collects, uses, and protects your personal information.',
    images: ['/assets/optimized-images/home/banner.webp'],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
