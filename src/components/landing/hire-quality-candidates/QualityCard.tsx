import styles from '@/styles/landing/hireQualityCandidates.module.scss';
import BooksIcon from '@/components/svg-icons/details/BooksIcon';
import HandsIcon from '@/components/svg-icons/details/HandsIcon';
import LikeIcon from '@/components/svg-icons/details/LikeIcon';

interface QualityCardProps {
  icon: string;
  title: string;
  items: string[];
}

const iconMap: Record<string, React.ComponentType> = {
  booksIcon: BooksIcon,
  handsIcon: HandsIcon,
  likeIcon: LikeIcon,
};

function QualityCard({ icon, title, items }: QualityCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.iconBox}>{IconComponent && <IconComponent />}</div>
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
