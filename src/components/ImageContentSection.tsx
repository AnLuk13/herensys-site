import Image from 'next/image';
import styles from '@/styles/globals/imageContentSection.module.scss';
import OfferButton from './buttons/OfferButton';

interface ImageContentSectionProps {
  title: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
  reverse?: boolean;
  background?: string;
}

function ImageContentSection({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  buttonText,
  buttonHref,
  reverse = false,
  background = 'var(--white)',
}: ImageContentSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <div className={`${styles.contentWrapper} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.imageBox}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <ul className={styles.featuresList}>
              {features.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </li>
              ))}
            </ul>
            {buttonText && (
              <div className={styles.buttonWrapper}>
                <OfferButton text={buttonText} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageContentSection;
