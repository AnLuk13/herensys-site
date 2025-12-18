import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
import ContactForm from '@/components/contact-form/ContactForm';
import CountryFactsSection from '@/components/country-facts/CountryFactsSection';
import CountryHeroSection from '@/components/hero/CountryHeroSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import manifest from '@/lib/assets-manifest.json';
import { moldovaFactsData } from '@/lib/consts/countriesContent';
import { ctaSectionData, faqSectionData, goGlobalSection } from '@/lib/consts/servicesContent';

function CountryDetails() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <CountryHeroSection
        title="Moldova at a Glance"
        description="Here's where you get started with human resources best practices and hiring in Moldova."
        buttonText="Book a call"
        imageSrc={heroImage!.src}
        imageAlt="Moldova flags"
      />
      <BuildDreamTeamSection {...goGlobalSection} showTitleDescription={false} />
      <CountryFactsSection {...moldovaFactsData} />
      <FAQSection {...faqSectionData} faqQuestionStyle={{ color: 'var(--accent)' }} />
      <CTASection {...ctaSectionData} displayGlobe={true} />
      <RecentBlogPostsSection />
      <ContactForm />
    </main>
  );
}

export default CountryDetails;
