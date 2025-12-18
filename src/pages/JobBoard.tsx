import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import JobListingSection from '@/components/job-board/JobListingSection';
import { ctaSectionData, heroSectionData } from '@/lib/consts/servicesContent';
import CTASection from '@/components/CTASection';

function JobBoard() {
  const heroImage = 'https://picsum.photos/800/600';

  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage} imageAlt="Job Board Hero Image" />
      <FirestoreSection route="/jobs" Component={JobListingSection} additionalProps={{}} />
      <CTASection {...ctaSectionData} displayGlobe />
    </main>
  );
}

export default JobBoard;
