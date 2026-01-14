import BlurImage from '@/components/helper/BlurImage';
import styles from '@/styles/landing/swiper.module.scss';

interface SwiperCardProps {
  name: string;
  company: string;
  image: string;
  text: string;
}

function SwiperCard({ name, company, image, text }: SwiperCardProps) {
  return (
    <div className={styles.countryCard}>
      <div className={styles.countryCardHeader}>
        <BlurImage src={image} alt={name} className={styles.avatar} width={60} height={60} />
        <div className={styles.countryCardInfo}>
          <h4 className={styles.countryCardName}>{name}</h4>
          <p className={styles.countryCardCompany}>{company}</p>
        </div>
      </div>
      <p className={styles.countryCardText}>{text}</p>
    </div>
  );
}

export default SwiperCard;
