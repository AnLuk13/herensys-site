import React from 'react';
import styles from '@/styles/globals/heroSection.module.scss';
import Image from 'next/image';
import OfferButton from '@/components/buttons/OfferButton';
import CircleIcon from '../svg-icons/hero/CicleIcon';
import DecorativeDots from '../svg-icons/hero/DecorativeDots';
import ArrowIcon from '../svg-icons/ArrowIcon';

interface HeroSectionProps {
  titleLines: Array<{
    text: string;
    CSSProperties?: React.CSSProperties;
  }>;
  descriptions: string[];
  buttonText?: string;
  buttonDetails?: string;
  imageSrc: string;
  imageAlt?: string;
  showArrow?: boolean;
  showDecorations?: boolean;
}

function HeroSection({
  titleLines,
  descriptions,
  buttonText = 'Book a call',
  buttonDetails,
  imageSrc,
  imageAlt = 'Hero banner',
  showArrow = true,
  showDecorations = true,
}: HeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionBox}>
        <div className={styles.heroSectionContent}>
          <div>
            {titleLines.map((line, index) => (
              <div
                key={index}
                className={styles.heroSectionContentTitle}
                style={line.CSSProperties ? line.CSSProperties : undefined} // or {...line.CSSProperties, additionalStyles} if you want to merge with other styles
              >
                {line.text}
              </div>
            ))}
          </div>
          <div className={'flexColumn'}>
            {descriptions.map((desc, index) => (
              <div key={index} className={styles.heroSectionContentDescription}>
                {desc}
              </div>
            ))}
          </div>
          <div className={'flexColumn'}>
            <OfferButton text={buttonText} />
            {buttonDetails && (
              <div className={styles.heroSectionContentDetails}>{buttonDetails}</div>
            )}
          </div>
          {showArrow && (
            <div className={styles.arrowDown}>
              <ArrowIcon />
            </div>
          )}
        </div>
        <div className={`${styles.heroSectionImageBox}`}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            priority
            fill
            className={`${styles.heroSectionImage}`}
          />
          {showDecorations && (
            <>
              <DecorativeDots style={{ position: 'absolute', top: '40%', left: '-10%' }} />
              <CircleIcon style={{ position: 'absolute', top: '35%', left: '50%' }} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
