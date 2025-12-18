import Image from 'next/image';
import styles from '@/styles/brands/brandLogo.module.scss';

interface BrandLogoProps {
  name: string;
  logo: string;
}

function BrandLogo({ name, logo }: BrandLogoProps) {
  return (
    <div className={styles.brandLogo}>
      <Image
        src={logo}
        alt={name}
        width={140}
        height={60}
        className={styles.logoImage}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
}

export default BrandLogo;
