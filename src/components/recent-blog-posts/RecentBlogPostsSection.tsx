'use client';

import { recentBlogPosts } from '@/lib/consts/common';
import styles from '@/styles/countries/presentCountries.module.scss';
import BlogPostCard from './BlogPostCard';
import type { RecentBlogPostsSectionProps } from '@/types/sections';

function RecentBlogPostsSection({ data }: RecentBlogPostsSectionProps) {
  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <h2 className="sectionTitle">Recent blog posts</h2>

        <div className={styles.countriesGrid}>
          {data?.map((post, index) => (
            <BlogPostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}

RecentBlogPostsSection.displayName = 'recentBlogPostsSection';

export default RecentBlogPostsSection;
