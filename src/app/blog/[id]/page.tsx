import BlogPost from '@/page-components/blog-pages/BlogPost';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${apiUrl}/blogs/${id}`, {
      next: { revalidate: 3600 },
    });
    const blog = await res.json();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://herensys.com';

    return {
      title: blog.title,
      description: blog.description || `Read ${blog.title} on Herensys blog`,
      alternates: {
        canonical: `/blog/${id}`,
      },
      openGraph: {
        images: [
          {
            url: blog.image || '/assets/optimized-images/home/banner.webp', //TODO
            width: 1200,
            height: 630,
            alt: 'Herensys',
          },
        ],
      },
      other: {
        'script:ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: baseUrl,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Blog',
              item: `${baseUrl}/blog`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: blog.title,
              item: `${baseUrl}/blog/${id}`,
            },
          ],
        }),
      },
    };
  } catch {
    return {
      title: id,
      description: 'Read our latest insights on global recruitment and EOR services',
      alternates: {
        canonical: `/blog/${id}`,
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
  }
}

export const revalidate = 3600;

async function getBlogData(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  try {
    const [blogRes, latestRes] = await Promise.all([
      fetch(`${apiUrl}/blogs/${id}`, { next: { revalidate: 3600 } }),
      fetch(`${apiUrl}/blogs/latest`, { next: { revalidate: 3600 } }),
    ]);
    const blog = await blogRes.json();
    const latestPosts = await latestRes.json();
    return { blog, latestPosts };
  } catch {
    return { blog: null, latestPosts: [] };
  }
}

async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const { blog, latestPosts } = await getBlogData(id);
  return <BlogPost params={params} initialBlog={blog} initialLatestPosts={latestPosts} />;
}

export default BlogPostPage;
