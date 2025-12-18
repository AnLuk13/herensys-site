import React from 'react';
import styles from '@/styles/countries/countryHeroSection.module.scss';
import Image from 'next/image';
import OfferButton from '@/components/buttons/OfferButton';
import DecorativeDots from '@/components/svg-icons/hero/DecorativeDots';
import CircleIcon from '@/components/svg-icons/hero/CicleIcon';

interface CountryHeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  imageSrc: string;
  imageAlt?: string;
  showDecorations?: boolean;
}

function CountryHeroSection({
  title,
  description,
  buttonText = 'Book a call',
  imageSrc,
  imageAlt = 'Country banner',
  showDecorations = true,
}: CountryHeroSectionProps) {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionBox}>
        <div className={styles.heroSectionContent}>
          <h1 className={styles.heroSectionContentTitle}>{title}</h1>
          <p className={styles.heroSectionContentDescription}>{description}</p>
          <div>
            <OfferButton text={buttonText} />
          </div>
        </div>
        <div className={styles.heroSectionImageBox}>
          <Image src={imageSrc} alt={imageAlt} priority fill className={styles.heroSectionImage} />
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

export default CountryHeroSection;
