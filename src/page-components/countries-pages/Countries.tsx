'use client';

import HeroSection from '@/components/hero/HeroSection';
import manifest from '@/lib/assets-manifest.json';
import PresentCountriesSection from '@/components/countries-presence/PresentCountriesSection';
import ContactForm from '@/components/contact-form/ContactForm';
import { use } from 'react';
import countriesData from '@/data/countries.json';

function Countries({ params }: { params?: Promise<{ region: string }> }) {
  const heroImage = manifest.hero.find(image => image.alt === 'countries-banner')!;

  const region = params ? use(params).region : undefined;

  return (
    <main id="main-content">
      <HeroSection
        {...countriesData.heroSection}
        showArrow={false}
        imageSrc={heroImage!.src}
        imageAlt="Countries hero banner"
      />
      <PresentCountriesSection initialFilter={region} />
      <ContactForm />
    </main>
  );
}

export default Countries;
