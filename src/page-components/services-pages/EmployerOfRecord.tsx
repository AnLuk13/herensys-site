import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import manifest from '@/lib/assets-manifest.json';
import eorData from '@/data/employer-of-record.json';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import { mapCardsWithIcons } from '@/lib/utils/iconMapper';

function EmployerOfRecord() {
  const heroImage = manifest.hero.find(image => image.alt === 'employer-of-record-banner');
  const keyFeaturesImage = manifest.keyFeatures.find(
    image => image.alt === 'employer-of-record-features',
  );

  const valuePropsSection = {
    ...eorData.valuePropsSection,
    cards: mapCardsWithIcons(eorData.valuePropsSection.cards),
  };

  return (
    <main id="main-content">
      <HeroSection
        {...eorData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Employer of Record hero banner"
      />
      <BuildDreamTeamSection {...valuePropsSection} />
      <ImageContentSection
        {...eorData.keyFeaturesSection}
        imageSrc={keyFeaturesImage!.src}
        imageAlt="Employer of Record services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...eorData.faqSection} />
      <CTASection {...eorData.ctaSection} />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
    </main>
  );
}

export default EmployerOfRecord;
