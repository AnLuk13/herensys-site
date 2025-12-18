'use client';

import styles from '@/styles/blog/blogListSection.module.scss';
import BlogListCard from './BlogListCard';
import type { BlogListSectionProps } from '@/types/sections';

function BlogListSection({ data, background }: BlogListSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>Blogs</h2>

        <div className={styles.blogGrid}>
          {data?.map((post, index) => (
            <BlogListCard key={index} {...post} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

BlogListSection.displayName = 'blogListSection';

export default BlogListSection;
