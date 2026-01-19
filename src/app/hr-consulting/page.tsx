import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Consulting',
  description: 'Expert HR consulting services across the employment lifecycle. From hiring strategies to performance management and compliance advisory.',
  alternates: {
    canonical: '/hr-consulting',
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

export default function HRConsultingPage() {
  return (
    <div>
      <h1>HR Consulting</h1>
      <p>Tap into HR services across the employment lifespan.</p>
    </div>
  );
}
