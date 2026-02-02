import React from 'react';
import styles from '@/styles/blog/blogHeroSection.module.scss';
import BlurImage from '@/components/helper/BlurImage';
import CircleIcon from '../svg-icons/hero/CicleIcon';
import DecorativeDots from '../svg-icons/hero/DecorativeDots';
import { formatDate } from '@/lib/utils/dateMethods';

interface BlogHeroSection {
  title: string;
  descriptions: string[];
  imageSrc: string;
  imageAlt?: string;
  tags?: string[];
  author: string;
  date: string;
  showArrow?: boolean;
  showDecorations?: boolean;
}

function BlogHeroSection({
  title,
  descriptions,
  imageSrc,
  imageAlt = 'Hero banner',
  tags,
  author,
  date,
  showDecorations = true,
}: BlogHeroSection) {
  return (
    <section className={styles.blogHeroSection}>
      <div className={styles.blogHeroContainer}>
        <div className={styles.blogContentWrapper}>
          <div className={styles.blogContent}>
            <div className={styles.blogAuthor}>{`${author} • ${formatDate(date)}`}</div>
            <div>
              <div
                className={styles.blogTitle}
                // style={line.CSSProperties ? line.CSSProperties : undefined}
              >
                {title}
              </div>
            </div>
            <div className={'flexColumn'}>
              {descriptions.map((desc, index) => (
                <div key={index} className={styles.blogDescription}>
                  {desc}
                </div>
              ))}
            </div>
            {tags &&
              tags.length > 0 &&
              tags.map((tag, index) => (
                <div key={index} className={styles.blogTag}>
                  {tag}
                </div>
              ))}
          </div>
        </div>
        <div className={styles.blogImageWrapper}>
          <BlurImage src={imageSrc} alt={imageAlt} priority fill className={styles.blogImage} />
          {showDecorations && (
            <>
              <DecorativeDots style={{ position: 'absolute', top: '40%', left: '-10%' }} />
              <CircleIcon style={{ position: 'absolute', top: '35%', left: '50%' }} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogHeroSection;
