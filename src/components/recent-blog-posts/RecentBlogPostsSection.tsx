'use client';

import styles from '@/styles/blog/allBlogPosts.module.scss';
import BlogListCard from '@/components/blog/BlogListCard';
import type { RecentBlogPostsSectionProps } from '@/types/sections';

function RecentBlogPostsSection({ data }: RecentBlogPostsSectionProps) {
  return (
    <section className="sectionWrapper">
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>Recent blog posts</h2>
        <div className={styles.blogGrid}>
          {data?.map((post, index) => (
            <BlogListCard key={index} {...post} featured={false} isFromAllBlogPosts={true} />
          ))}
        </div>
      </div>
    </section>
  );
}

RecentBlogPostsSection.displayName = 'recentBlogPostsSection';

export default RecentBlogPostsSection;
