import React from 'react';
import OfferButton from '@/components/buttons/OfferButton';
import styles from '@/styles/globals/ctaSection.module.scss';
import GlobeIcon from './svg-icons/details/GlobeIcon';

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  background?: string;
  displayGlobe?: boolean;
}

function CTASection({
  title,
  description,
  buttonText,
  background,
  displayGlobe = false,
}: CTASectionProps) {
  return (
    <section
      className="sectionWrapper"
      style={{ background, position: 'relative', overflow: 'hidden' }}
    >
      <div className="contentContainer">
        <div className={`${styles.ctaContent} ${displayGlobe ? styles.withGlobe : ''}`}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttonWrapper}>
              <OfferButton text={buttonText} />
            </div>
          </div>
          {displayGlobe && (
            <div className={styles.globeIcon}>
              <GlobeIcon />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTASection;
