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
  const heroImage = manifest.hero.find(image => image.alt === 'visas-and-work-permits-banner');
  const keyFeaturesImage = manifest.keyFeatures.find(
    image => image.alt === 'visas-and-work-permits-features',
  );

  return (
    <main id="main-content">
      <HeroSection
        {...visasData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Visas and Work Permits hero banner"
      />
      <HowItWorksSection {...visasData.howItWorksSection} />
      <ImageContentSection
        {...visasData.keyFeaturesSection}
        imageSrc={keyFeaturesImage!.src}
        imageAlt="Visas and Work Permits services"
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
