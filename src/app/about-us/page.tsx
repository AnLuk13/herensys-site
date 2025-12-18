import AboutUs from '@/pages/AboutUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Herensys - your trusted partner for global talent acquisition, employer of record services, and international workforce solutions.',
};

export default function AboutUsPage() {
  return <AboutUs />;
}
