import React from 'react';
import styles from '@/styles/blog/blogHeroSection.module.scss';
import Image from 'next/image';
import OfferButton from '@/components/buttons/OfferButton';
import CircleIcon from '../svg-icons/hero/CicleIcon';
import DecorativeDots from '../svg-icons/hero/DecorativeDots';
import ArrowIcon from '../svg-icons/ArrowIcon';
import { formatDate } from '@/lib/utils/dateMethods';

interface BlogHeroSection {
  titleLines: Array<{
    text: string;
    CSSProperties?: React.CSSProperties;
  }>;
  descriptions: string[];
  imageSrc: string;
  imageAlt?: string;
  tag?: string;
  author: string;
  date: string;
  showArrow?: boolean;
  showDecorations?: boolean;
}

function BlogHeroSection({
  titleLines,
  descriptions,
  imageSrc,
  imageAlt = 'Hero banner',
  tag,
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
              {titleLines.map((line, index) => (
                <div
                  key={index}
                  className={styles.blogTitle}
                  style={line.CSSProperties ? line.CSSProperties : undefined}
                >
                  {line.text}
                </div>
              ))}
            </div>
            <div className={'flexColumn'}>
              {descriptions.map((desc, index) => (
                <div key={index} className={styles.blogDescription}>
                  {desc}
                </div>
              ))}
            </div>
            <div className={styles.blogTag}>{tag}</div>
          </div>
        </div>
        <div className={styles.blogImageWrapper}>
          <Image src={imageSrc} alt={imageAlt} priority fill className={styles.blogImage} />
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
