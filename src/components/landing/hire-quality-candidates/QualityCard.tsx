import styles from '@/styles/landing/hireQualityCandidates.module.scss';

interface QualityCardProps {
  title: string;
  items: string[];
}

function QualityCard({ title, items }: QualityCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBox} />
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <ul className={styles.itemsList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default QualityCard;
