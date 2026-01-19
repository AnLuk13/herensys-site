import Blog from '@/pages/blog-pages/Blog';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read insights on global recruitment, employer of record services, international hiring strategies, and workforce management best practices.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
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

export const revalidate = 1800;

async function getBlogs() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${apiUrl}/blogs`, {
      next: { revalidate: 1800 },
    });
    return await res.json();
  } catch {
    return [];
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return <Blog initialBlogs={blogs} />;
}
