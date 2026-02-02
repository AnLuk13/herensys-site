import HeroSection from '@/components/hero/HeroSection';
import HowItWorksSection from '@/components/how-it-works/HowItWorksSection';
import manifest from '@/lib/assets-manifest.json';
import ImageContentSection from '@/components/ImageContentSection';
import FAQSection from '@/components/FAQSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import CTASection from '@/components/CTASection';
import globalPayrollData from '@/data/global-payroll.json';

function GlobalPayroll() {
  const heroImage = manifest.hero.find(image => image.alt === 'global-payroll-banner');
  const keyFeaturesImage = manifest.keyFeatures.find(
    image => image.alt === 'global-payroll-features',
  );

  return (
    <main id="main-content">
      <HeroSection
        {...globalPayrollData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Global Payroll hero banner"
      />
      <HowItWorksSection {...globalPayrollData.howItWorksSection} />
      <ImageContentSection
        {...globalPayrollData.keyFeaturesSection}
        imageSrc={keyFeaturesImage!.src}
        imageAlt="Global Payroll services"
        reverse={true}
        background="var(--gray-background)"
      />
      <FAQSection {...globalPayrollData.faqSection} />
      <CTASection {...globalPayrollData.ctaSection} />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
    </main>
  );
}

export default GlobalPayroll;
