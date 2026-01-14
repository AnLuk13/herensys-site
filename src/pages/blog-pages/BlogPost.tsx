'use client';

import BlogHeroSection from '@/components/hero/BlogHeroSection';
import BlogContentSection from '@/components/blog/BlogContentSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import CTASection from '@/components/CTASection';
import { useApiQuery } from '@/lib/hooks/useRetrieveData';
import { use } from 'react';
import { MoonLoader } from 'react-spinners';
import eorData from '@/data/employer-of-record.json';

function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  const {
    data: blogData,
    isLoading: blogLoading,
    error: blogError,
  } = useApiQuery(`/blogs/${id}`, `/blogs/${id}`);

  const {
    data: latestPostsData,
    isLoading: latestLoading,
    error: latestError,
  } = useApiQuery('/blogs/latest', '/blogs/latest');

  const isLoading = blogLoading || latestLoading;
  const error = blogError || latestError;

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80dvh',
          width: '100%',
        }}
      >
        <MoonLoader color="var(--accent)" size={60} />
      </div>
    );
  }

  if (error) {
    console.error(`API error:`, error);
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50dvh',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontWeight: 'bold',
              fontSize: '4rem',
              marginBottom: '0.5rem',
              color: 'var(--accent)',
            }}
          >
            Failed to load content
          </p>
          <p
            style={{
              fontFamily: 'var(--font-family)',
              fontSize: '2rem',
              color: 'var(--text-secondary)',
            }}
          >
            {error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      </div>
    );
  }

  if (!blogData || !latestPostsData) {
    return null;
  }

  return (
    <main>
      <BlogHeroSection
        {...blogData}
        descriptions={[blogData.description]}
        imageSrc={blogData.image}
        imageAlt={blogData.title}
      />
      <BlogContentSection data={blogData} />
      <CTASection {...eorData.ctaSection} displayGlobe />
      <RecentBlogPostsSection data={latestPostsData} />
    </main>
  );
}

export default BlogPost;
