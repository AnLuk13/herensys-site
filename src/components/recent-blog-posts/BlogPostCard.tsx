import BlurImage from '@/components/helper/BlurImage';
import Link from 'next/link';
import styles from '@/styles/globals/recentBlogPosts.module.scss';

interface BlogPostCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

function BlogPostCard({ author, date, title, description, image, tags, link }: BlogPostCardProps) {
  return (
    <Link href={link} className={styles.blogCard}>
      <div className={styles.imageWrapper}>
        <BlurImage
          src={image}
          alt={title}
          fill
          className={styles.blogImage}
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.logoOverlay}>
          <span>HERENSYS</span>
        </div>
      </div>
      <div className={styles.blogContent}>
        <div className={styles.blogMeta}>
          <span className={styles.author}>{author}</span>
          <span className={styles.date}> • {date}</span>
        </div>
        <h3 className={styles.blogTitle}>
          {title}
          <span className={styles.arrow}>↗</span>
        </h3>
        <p className={styles.blogDescription}>{description}</p>
        <div className={styles.tagsContainer}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default BlogPostCard;
