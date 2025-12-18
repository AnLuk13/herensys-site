import HeroSection from '@/components/hero/HeroSection';
import { heroSectionData } from '@/lib/consts/servicesContent';
import manifest from '@/lib/assets-manifest.json';
import PresentCountriesSection from '@/components/countries-presence/PresentCountriesSection';
import ContactForm from '@/components/contact-form/ContactForm';

function Countries() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <PresentCountriesSection />
      <ContactForm />
    </main>
  );
}

export default Countries;
