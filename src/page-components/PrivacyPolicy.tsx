import HeroSection from '@/components/hero/HeroSection';
import manifest from '@/lib/assets-manifest.json';
import privacyPolicyData from '@/data/privacy-policy.json';
import styles from '@/styles/globals/privacyPolicy.module.scss';

function PrivacyPolicy() {
  const heroImage = manifest.home.find(image => image.alt === 'banner');

  return (
    <main id="main-content">
      <HeroSection
        {...privacyPolicyData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Privacy Policy"
      />
      <section className="sectionWrapper" style={{ background: 'var(--white)' }}>
        <div className="contentContainer">
          {/* <div className={styles.privacyContent}> */}
          {privacyPolicyData.sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className={styles.list}>
                  {section.list.map((item, lIndex) => (
                    <li key={lIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {section.contentTwo &&
                section.contentTwo.map((paragraph, pIndex) => (
                  <p key={`content2-${pIndex}`} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
            </div>
          ))}
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}

export default PrivacyPolicy;
