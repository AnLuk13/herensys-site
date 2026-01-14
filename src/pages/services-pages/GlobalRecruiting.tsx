import HeroSection from '@/components/hero/HeroSection';
import HowItWorksSection from '@/components/how-it-works/HowItWorksSection';
import manifest from '@/lib/assets-manifest.json';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import CTASection from '@/components/CTASection';
import globalRecruitingData from '@/data/global-recruiting.json';

function GlobalRecruiting() {
  const heroImage = manifest.hero.find(image => image.alt === 'global-recruiting-banner');

  return (
    <main>
      <HeroSection {...globalRecruitingData.heroSection} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <HowItWorksSection {...globalRecruitingData.howItWorksSection} />
      <ImageContentSection
        {...globalRecruitingData.globalHiringSection}
        imageSrc={heroImage!.src}
        imageAlt="Global hiring services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...globalRecruitingData.faqSection} />
      <CTASection {...globalRecruitingData.ctaSection} />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
    </main>
  );
}

export default GlobalRecruiting;
