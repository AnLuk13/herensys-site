import styles from '@/styles/brands/brandsSection.module.scss';
import BrandLogo from './BrandLogo';

interface Brand {
  name: string;
  logo: string;
}

interface BrandsSectionProps {
  sectionTitle: string;
  brands: Brand[];
  background?: string;
}

function BrandsSection({ sectionTitle, brands, background }: BrandsSectionProps) {
  return (
    <section className="sectionWrapper" style={{ background }}>
      <div className="contentContainer">
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>

        <div className={styles.brandsGrid}>
          {brands.map((brand, index) => (
            <BrandLogo key={index} {...brand} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
