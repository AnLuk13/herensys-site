import GlobalPayroll from '@/pages/services-pages/GlobalPayroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Payroll',
  description: 'Streamline international payroll management with automated, compliant solutions. Pay your global workforce accurately and on time, every time.',
  alternates: {
    canonical: '/global-payroll',
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

export default function GlobalPayrollPage() {
  return <GlobalPayroll />;
}
