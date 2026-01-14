'use client';

import { useState } from 'react';
import styles from '@/styles/blog/allBlogPosts.module.scss';
import BlogListCard from './BlogListCard';
import NewsletterCard from './NewsletterCard';
import type { AllBlogPostsSectionProps } from '@/types/sections';

function AllBlogPostsSection({ data, background }: AllBlogPostsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All blog posts');

  // Get unique tags from posts (flatten tags arrays)
  const allTags = Array.from(new Set(data?.flatMap(post => post.tags) || []));
  const filters = ['All blog posts', ...allTags];

  // Filter posts based on active filter
  const filteredPosts =
    activeFilter === 'All blog posts'
      ? data
      : data?.filter(post => post.tags.includes(activeFilter));

  // Determine newsletter card position: after 4th post if available, otherwise after last post
  const newsletterPosition = Math.min(4, filteredPosts?.length || 0);

  // Insert newsletter card into the grid items
  const gridItems = filteredPosts ? [...filteredPosts] : [];
  if (gridItems.length > 0) {
    gridItems.splice(newsletterPosition, 0, { isNewsletter: true } as any);
  }

  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>All Blog Posts</h2>

        <div className={styles.filterButtons}>
          {filters.map(filter => (
            <button
              key={filter}
              className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className={styles.blogGrid}>
          {gridItems.map((item: any, index) =>
            item.isNewsletter ? (
              <NewsletterCard key="newsletter" />
            ) : (
              <BlogListCard key={index} {...item} isFromAllBlogPosts={true} />
            )
          )}
        </div>
      </div>
    </section>
  );
}

AllBlogPostsSection.displayName = 'allBlogPostsSection';

export default AllBlogPostsSection;
