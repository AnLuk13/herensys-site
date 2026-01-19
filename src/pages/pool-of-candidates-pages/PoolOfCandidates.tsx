import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import PoolOfCandidatesSection from '@/components/pool-of-candidates/PoolOfCandidatesSection';
import manifest from '@/lib/assets-manifest.json';
import CTASection from '@/components/CTASection';
import poolData from '@/data/pool-of-candidates.json';
import eorData from '@/data/employer-of-record.json';

function PoolOfCandidates({ initialCandidates }: { initialCandidates?: any[] }) {
  const heroImage = manifest.hero.find(image => image.alt === 'global-recruiting-banner');
  return (
    <main id="main-content">
      <HeroSection
        {...poolData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Services hero banner"
      />
      <FirestoreSection
        route="/candidates"
        Component={PoolOfCandidatesSection}
        additionalProps={{ background: 'var(--white)' }}
        initialData={initialCandidates}
      />
      <CTASection {...eorData.ctaSection} displayGlobe />
    </main>
  );
}

export default PoolOfCandidates;
