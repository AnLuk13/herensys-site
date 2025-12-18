import Blog from '@/pages/blog-pages/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read insights on global recruitment, employer of record services, international hiring strategies, and workforce management best practices.',
};

export const revalidate = 1800;

export default function BlogPage() {
  return <Blog />;
}
