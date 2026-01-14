import styles from '@/styles/landing/whatWeDoSection.module.scss';
import OfferButton from '../../buttons/OfferButton';

interface WhatWeDoCardProps {
  icon: string;
  IconComponent: React.ComponentType;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

function WhatWeDoCard({
  icon,
  IconComponent,
  title,
  description,
  buttonText,
  buttonHref,
}: WhatWeDoCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={`${styles.iconBox} ${styles[icon]}`}>
          <IconComponent />
        </div>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      {buttonText && <OfferButton text={buttonText} href={buttonHref} />}
    </div>
  );
}

export default WhatWeDoCard;
