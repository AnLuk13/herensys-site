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
      style={{
        background,
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        minHeight: '280px',
      }}
    >
      <div className="contentContainer">
        <div className={`${styles.ctaContent} ${displayGlobe ? styles.withGlobe : ''}`}>
          <div
            className={styles.textContent}
            style={displayGlobe ? { flexDirection: 'column' } : {}}
          >
            <div className={styles.textBox}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.buttonWrapper} style={displayGlobe ? { width: '100%' } : {}}>
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
