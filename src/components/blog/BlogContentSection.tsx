'use client';

import { Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
import styles from '@/styles/blog/blogContent.module.scss';
import type { BlogContentSectionProps } from '@/types/sections';

function BlogContentSection({ data }: BlogContentSectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
    // Load Tailwind CSS for Plate.js content
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://platejs.org/tailwind.css';
    link.onload = () => setStyleLoaded(true);
    link.onerror = () => setStyleLoaded(true); // Continue even if load fails
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  useEffect(() => {
    // Ensure styles and images are loaded
    if (data?.htmlContent && styleLoaded) {
      const timer = setTimeout(() => setIsLoading(false), 100);
      return () => clearTimeout(timer);
    }
  }, [data, styleLoaded]);

  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <article>
          {isLoading && (
            <div className={styles.skeletonWrapper}>
              <Skeleton variant="text" width="60%" height={60} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="90%" height={20} />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ marginTop: '2rem' }}
              />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
              <Skeleton variant="text" width="100%" height={20} sx={{ marginTop: '1rem' }} />
              <Skeleton variant="text" width="100%" height={20} />
              <Skeleton variant="text" width="85%" height={20} />
            </div>
          )}
          {!isLoading && data?.htmlContent && (
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: data.htmlContent }}
            />
          )}
        </article>
      </div>
    </section>
  );
}

BlogContentSection.displayName = 'blogContentSection';

export default BlogContentSection;
