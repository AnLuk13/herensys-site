import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import JobListingSection from '@/components/job-board/JobListingSection';
import CTASection from '@/components/CTASection';
import jobBoardData from '@/data/job-board.json';
import eorData from '@/data/employer-of-record.json';
import manifest from '@/lib/assets-manifest.json';

function JobBoard({ initialJobs }: { initialJobs?: any[] }) {
  const heroImage = manifest.hero.find(image => image.alt === 'job-board-banner');

  return (
    <main id="main-content">
      <HeroSection
        {...jobBoardData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Job Board Hero Image"
      />
      <FirestoreSection
        route="/jobs"
        Component={JobListingSection}
        additionalProps={{}}
        initialData={initialJobs}
      />
      <CTASection {...eorData.ctaSection} displayGlobe />
    </main>
  );
}

export default JobBoard;
