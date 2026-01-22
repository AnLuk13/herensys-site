import HeroSection from '@/components/hero/HeroSection';
import HowItWorksSection from '@/components/how-it-works/HowItWorksSection';
import manifest from '@/lib/assets-manifest.json';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import CTASection from '@/components/CTASection';
import bpoData from '@/data/bpo-services.json';

function BPOServices() {
  const heroImage = manifest.hero.find(image => image.alt === 'global-recruiting-banner');

  return (
    <main id="main-content">
      <HeroSection
        {...bpoData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Services hero banner"
      />
      <HowItWorksSection {...bpoData.howItWorksSection} />
      <ImageContentSection
        {...bpoData.keyFeaturesSection}
        imageSrc={heroImage!.src}
        imageAlt="BPO services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...bpoData.faqSection} />
      <CTASection {...bpoData.ctaSection} />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
    </main>
  );
}

export default BPOServices;
