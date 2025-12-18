import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/globals/recentBlogPosts.module.scss';

interface BlogPostCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  link: string;
}

function BlogPostCard({ author, date, title, description, image, tag, link }: BlogPostCardProps) {
  return (
    <Link href={link} className={styles.blogCard}>
      <div className={styles.imageWrapper}>
        <Image
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
        <span className={styles.tag}>{tag}</span>
      </div>
    </Link>
  );
}

export default BlogPostCard;
