import HeroSection from '@/components/hero/HeroSection';
import HowItWorksSection from '@/components/how-it-works/HowItWorksSection';
import manifest from '@/lib/assets-manifest.json';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import CTASection from '@/components/CTASection';
import visasData from '@/data/visas-work-permits.json';

function VisasWorkPermits() {
  const heroImage = manifest.hero.find(image => image.alt === 'global-recruiting-banner');

  return (
    <main>
      <HeroSection
        {...visasData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Services hero banner"
      />
      <HowItWorksSection {...visasData.howItWorksSection} />
      <ImageContentSection
        {...visasData.keyFeaturesSection}
        imageSrc={heroImage!.src}
        imageAlt="Global hiring services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...visasData.faqSection} />
      <CTASection {...visasData.ctaSection} />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
    </main>
  );
}

export default VisasWorkPermits;
