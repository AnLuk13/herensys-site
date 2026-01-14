import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import JobListingSection from '@/components/job-board/JobListingSection';
import CTASection from '@/components/CTASection';
import jobBoardData from '@/data/job-board.json';
import eorData from '@/data/employer-of-record.json';

function JobBoard() {
  const heroImage = 'https://picsum.photos/800/600';

  return (
    <main>
      <HeroSection {...jobBoardData.heroSection} imageSrc={heroImage} imageAlt="Job Board Hero Image" />
      <FirestoreSection route="/jobs" Component={JobListingSection} additionalProps={{}} />
      <CTASection {...eorData.ctaSection} displayGlobe />
    </main>
  );
}

export default JobBoard;
