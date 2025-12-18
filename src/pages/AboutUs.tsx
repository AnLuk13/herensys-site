import {
  ctaSectionData,
  faqSectionData,
  globalHiringSection,
  goGlobalSection,
  heroSectionData,
} from '@/lib/consts/servicesContent';
import manifest from '@/lib/assets-manifest.json';
import HeroSection from '@/components/hero/HeroSection';
import ImageContentSection from '@/components/ImageContentSection';
import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
import TeamSection from '@/components/team/TeamSection';
import BrandsSection from '@/components/brands/BrandsSection';
import { teamMembers, brands } from '@/lib/consts/common';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/contact-form/ContactForm';
import CTASection from '@/components/CTASection';

function AboutUs() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <ImageContentSection
        {...globalHiringSection}
        imageSrc={heroImage!.src}
        imageAlt="Global hiring services"
      />
      <BuildDreamTeamSection {...goGlobalSection} />
      <ImageContentSection
        {...globalHiringSection}
        imageSrc={heroImage!.src}
        imageAlt="Global hiring services"
        reverse={true}
        background="var(--gray-background)"
      />
      <TeamSection
        sectionTitle="Team of action"
        teamMembers={teamMembers}
        background="var(--white)"
      />
      <BrandsSection
        sectionTitle="Brands We Work With"
        brands={brands}
        background="var(--gray-background)"
      />
      <FAQSection {...faqSectionData} />
      <ContactForm />
      <CTASection {...ctaSectionData} />
    </main>
  );
}

export default AboutUs;
