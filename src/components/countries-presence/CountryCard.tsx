import BlurImage from '@/components/helper/BlurImage';
import styles from '@/styles/countries/presentCountries.module.scss';
import { objectFit } from '@/lib/utils/cssHelpers';
import Link from 'next/link';
import manifest from '@/lib/assets-manifest.json';

interface CountryCardProps {
  name: string;
  image: string;
  flag: string;
  region: string;
}

function CountryCard({ name, image, flag, region }: CountryCardProps) {
  const countrySlug = name.toLowerCase().replace(/\s+/g, '-');

  // Try to find optimized image from manifest, fallback to provided image
  const countryImage =
    manifest.countries?.find(
      (img: { alt: string }) =>
        img.alt.toLowerCase() === countrySlug || img.alt.toLowerCase() === name.toLowerCase(),
    )?.src || image;

  return (
    <Link href={`/countries/${region}/${countrySlug}`} className={styles.countryCard}>
      <div className={styles.imageWrapper}>
        <BlurImage
          src={countryImage}
          alt={name}
          fill
          className={styles.countryImage}
          style={objectFit.cover}
          quality={100}
        />
      </div>
      <div className={styles.countryInfo}>
        <h3 className={styles.countryName}>{name}</h3>
        <div className={styles.flagWrapper}>
          <BlurImage
            src={`https://flagcdn.com/${flag}.svg`}
            alt={`${name} flag`}
            width={32}
            height={24}
            className={styles.flagImage}
            style={objectFit.cover}
          />
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
