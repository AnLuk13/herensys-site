import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import JobListingSection from '@/components/job-board/JobListingSection';
import CTASection from '@/components/CTASection';
import jobBoardData from '@/data/job-board.json';
import eorData from '@/data/employer-of-record.json';

function JobBoard({ initialJobs }: { initialJobs?: any[] }) {
  const heroImage = 'https://picsum.photos/800/600';

  return (
    <main id="main-content">
      <HeroSection
        {...jobBoardData.heroSection}
        imageSrc={heroImage}
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
