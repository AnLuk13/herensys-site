import GlobalPayroll from '@/page-components/services-pages/GlobalPayroll';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Payroll',
  description:
    'Streamline international payroll management with automated, compliant solutions. Pay your global workforce accurately and on time, every time.',
  alternates: {
    canonical: '/global-payroll',
  },
  openGraph: {
    images: [
      {
        url: '/assets/optimized-images/hero/global-payroll-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Herensys',
      },
    ],
  },
};

export default function GlobalPayrollPage() {
  return <GlobalPayroll />;
}
