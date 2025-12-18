import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/blog/blogListCard.module.scss';

interface BlogListCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  link: string;
  featured?: boolean;
  isFromAllBlogPosts?: boolean;
}

function BlogListCard({
  author,
  date,
  title,
  description,
  image,
  tag,
  link,
  featured = false,
  isFromAllBlogPosts = false,
}: BlogListCardProps) {
  const truncateWords = (text: string, textLimit: number) => {
    const textLength = text.length;
    console.log(textLength);
    if (textLength <= textLimit) return text;
    return text.slice(0, textLimit) + '...';
  };

  const truncatedTitle = truncateWords(title, 20);
  const truncatedDescription = truncateWords(description, 40);

  return (
    <Link href={link} className={`${styles.blogListCard} ${featured ? styles.featured : ''} ${isFromAllBlogPosts ? styles.allBlogPostsCard : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          className={styles.blogImage}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.imageOverlay}>
          <h3 className={styles.imageTitle}>{truncatedTitle}</h3>
          <div className={styles.logoOverlay}>
            <span>HERENSYS</span>
          </div>
        </div>
      </div>
      {!featured && (
        <div className={styles.blogContent}>
          <div className={styles.blogMeta}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}> • {date}</span>
          </div>
          <h3 className={styles.blogTitle}>
            {truncatedTitle}
            <span className={styles.arrow}>↗</span>
          </h3>
          <p className={styles.blogDescription}>{truncatedDescription}</p>
          <span className={styles.tag}>{tag}</span>
        </div>
      )}
      {featured && (
        <div className={styles.featuredContent}>
          <div className={styles.blogMeta}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}> • {date}</span>
          </div>
          <h2 className={styles.featuredTitle}>
            {truncatedTitle}
            <span className={styles.arrow}>↗</span>
          </h2>
          <p className={styles.featuredDescription}>{truncatedDescription}</p>
          <span className={styles.tag}>{tag}</span>
        </div>
      )}
    </Link>
  );
}

export default BlogListCard;
