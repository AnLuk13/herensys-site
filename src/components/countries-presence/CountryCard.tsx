import Image from 'next/image';
import styles from '@/styles/countries/presentCountries.module.scss';
import { objectFit } from '@/lib/consts/common';

interface CountryCardProps {
  name: string;
  image: string;
  flag: string;
}

function CountryCard({ name, image, flag }: CountryCardProps) {
  return (
    <div className={styles.countryCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={name}
          fill
          className={styles.countryImage}
          style={objectFit.cover}
        />
      </div>
      <div className={styles.countryInfo}>
        <h3 className={styles.countryName}>{name}</h3>
        <div className={styles.flagWrapper}>
          <Image
            src={flag}
            alt={`${name} flag`}
            width={32}
            height={24}
            className={styles.flagImage}
          />
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
