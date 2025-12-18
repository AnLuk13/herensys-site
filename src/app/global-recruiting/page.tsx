import GlobalRecruiting from '@/pages/services-pages/GlobalRecruiting';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Global Recruiting',
  description: 'Access top global talent with our international recruitment services. Find skilled professionals across IT, operations, sales, and more.',
};

export default function GlobalRecruitingPage() {
  return <GlobalRecruiting />;
}
