import HeroSection from '@/components/hero/HeroSection';
import HowItWorksSection from '@/components/how-it-works/HowItWorksSection';
import {
  ctaSectionData,
  faqSectionData,
  globalHiringSection,
  heroSectionData,
  howItWorksSectionData,
} from '@/lib/consts/servicesContent';
import manifest from '@/lib/assets-manifest.json';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import CTASection from '@/components/CTASection';

function VisasWorkPermits() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <HowItWorksSection {...howItWorksSectionData} />
      <ImageContentSection
        {...globalHiringSection}
        imageSrc={heroImage!.src}
        imageAlt="Global hiring services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...faqSectionData} />
      <CTASection {...ctaSectionData} />
      <RecentBlogPostsSection />
    </main>
  );
}

export default VisasWorkPermits;
