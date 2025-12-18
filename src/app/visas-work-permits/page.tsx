import VisasWorkPermits from '@/pages/services-pages/VisasWorkPermits';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visas and Work Permits',
  description: 'Navigate international work authorization with ease. We handle visa applications, work permits, and immigration compliance for your global workforce.',
};

export default function VisasWorkPermitsPage() {
  return <VisasWorkPermits />;
}
