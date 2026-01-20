import BlurImage from '@/components/helper/BlurImage';
import Link from 'next/link';
import styles from '@/styles/blog/blogListCard.module.scss';
import { formatDate } from '@/lib/utils/dateMethods';

interface BlogListCardProps {
  id: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured?: boolean;
  isFromAllBlogPosts?: boolean;
}

function BlogListCard({
  id,
  author,
  date,
  title,
  description,
  image,
  tags,
  link,
  featured = false,
  isFromAllBlogPosts = false,
}: BlogListCardProps) {
  const truncateWords = (text: string, textLimit: number) => {
    const textLength = text.length;
    if (textLength <= textLimit) return text;
    return text.slice(0, textLimit) + '...';
  };

  const truncatedTitle = truncateWords(title, 20);
  const truncatedDescription = truncateWords(description, 40);

  return (
    <Link
      href={`/blog/${id}`}
      className={`${styles.blogListCard} ${featured ? styles.featured : ''} ${isFromAllBlogPosts ? styles.allBlogPostsCard : ''}`}
    >
      <div className={styles.imageWrapper}>
        <BlurImage
          src={image}
          alt={title}
          fill
          className={styles.blogImage}
          style={{ objectFit: 'cover' }}
          quality={80}
        />
        {/* <div className={styles.imageOverlay}>
          <h3 className={styles.imageTitle}>{truncatedTitle}</h3>
          <div className={styles.logoOverlay}>
            <span>HERENSYS</span>
          </div>
        </div> */}
      </div>
      {!featured && (
        <div className={styles.blogContent}>
          <div className={styles.blogMeta}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}> • {formatDate(date)}</span>
          </div>
          <h3 className={styles.blogTitle}>
            {truncatedTitle}
            <span className={styles.arrow}>↗</span>
          </h3>
          <p className={styles.blogDescription}>{truncatedDescription}</p>
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      {featured && (
        <div className={styles.featuredContent}>
          <div className={styles.blogMeta}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}> • {formatDate(date)}</span>
          </div>
          <h2 className={styles.featuredTitle}>
            {truncatedTitle}
            <span className={styles.arrow}>↗</span>
          </h2>
          <p className={styles.featuredDescription}>{truncatedDescription}</p>
          <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}

export default BlogListCard;
