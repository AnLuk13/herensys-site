'use client';

import { useState } from 'react';
import styles from '@/styles/blog/allBlogPosts.module.scss';
import BlogListCard from './BlogListCard';
import NewsletterCard from './NewsletterCard';
import type { AllBlogPostsSectionProps } from '@/types/sections';

function AllBlogPostsSection({ data, background }: AllBlogPostsSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All blog posts');

  // Get unique tags from posts
  const allTags = Array.from(new Set(data?.map(post => post.tag)));
  const filters = ['All blog posts', ...allTags];

  // Filter posts based on active filter
  const filteredPosts =
    activeFilter === 'All blog posts' ? data : data?.filter(post => post.tag === activeFilter);

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
          {filteredPosts?.map((post, index) => (
            <div key={index}>
              <BlogListCard key={index} {...post} isFromAllBlogPosts={true} />
              {index === 2 && <NewsletterCard key="newsletter" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

AllBlogPostsSection.displayName = 'allBlogPostsSection';

export default AllBlogPostsSection;
