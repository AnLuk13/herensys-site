import BlurImage from '@/components/helper/BlurImage';
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
            <BlurImage
              src={imageSrc}
              alt={imageAlt}
              fill
              className={styles.image}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            {features.length > 0 && (
              <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                  <li key={index}>
                    <span style={{ fontWeight: '600', color: 'var(--black)' }}>
                      {feature.title}
                    </span>
                    <span>{feature.description}</span>
                  </li>
                ))}
              </ul>
            )}
            {description && <p className={styles.description}>{description}</p>}
            {buttonText && (
              <div className={styles.buttonWrapper}>
                <OfferButton text={buttonText} href={buttonHref} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageContentSection;
