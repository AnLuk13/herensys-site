import GlobalPayroll from '@/pages/services-pages/GlobalPayroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Payroll',
  description: 'Streamline international payroll management with automated, compliant solutions. Pay your global workforce accurately and on time, every time.',
};

export default function GlobalPayrollPage() {
  return <GlobalPayroll />;
}
