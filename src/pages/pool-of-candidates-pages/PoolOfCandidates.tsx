import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import PoolOfCandidatesSection from '@/components/pool-of-candidates/PoolOfCandidatesSection';
import { ctaSectionData, heroSectionData } from '@/lib/consts/servicesContent';
import manifest from '@/lib/assets-manifest.json';
import CTASection from '@/components/CTASection';

function PoolOfCandidates() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');
  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <FirestoreSection
        route="/candidates"
        Component={PoolOfCandidatesSection}
        additionalProps={{ background: 'var(--white)' }}
      />
      <CTASection {...ctaSectionData} displayGlobe={true} />
    </main>
  );
}

export default PoolOfCandidates;
