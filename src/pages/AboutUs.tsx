import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/contact-form/ContactForm';
import CTASection from '@/components/CTASection';
import manifest from '@/lib/assets-manifest.json';
import HeroSection from '@/components/hero/HeroSection';
import ImageContentSection from '@/components/ImageContentSection';
import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
import TeamSection from '@/components/team/TeamSection';
import BrandsSection from '@/components/brands/BrandsSection';
import aboutUsData from '@/data/about-us.json';
import eorData from '@/data/employer-of-record.json';
import { mapCardsWithIcons } from '@/lib/utils/iconMapper';

function AboutUs() {
  const heroImage = manifest.home.find(image => image.alt === 'banner');

  const goGlobalSection = {
    ...aboutUsData.goGlobalSection,
    cards: mapCardsWithIcons(aboutUsData.goGlobalSection.cards),
  };

  return (
    <main id="main-content">
      <HeroSection {...aboutUsData.heroSection} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <ImageContentSection
        {...aboutUsData.openingTheWorldSection}
        imageSrc={heroImage!.src}
        imageAlt="Opening the world to opportunity"
      />
      <BuildDreamTeamSection {...goGlobalSection} />
      <ImageContentSection
        {...aboutUsData.weGetThingsDoneSection}
        imageSrc={heroImage!.src}
        imageAlt="We Get Things Done"
      />
      <TeamSection
        sectionTitle="Team of action"
        teamMembers={aboutUsData.teamMembers}
        background="var(--white)"
      />
      <BrandsSection
        sectionTitle="Brands We Work With"
        brands={aboutUsData.brands}
        background="var(--gray-background)"
      />
      <FAQSection {...aboutUsData.faqSection} />
      <ContactForm />
      <CTASection {...eorData.ctaSection} />
    </main>
  );
}

export default AboutUs;
