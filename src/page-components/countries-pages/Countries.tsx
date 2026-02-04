'use client';

import HeroSection from '@/components/hero/HeroSection';
import manifest from '@/lib/assets-manifest.json';
import PresentCountriesSection from '@/components/countries-presence/PresentCountriesSection';
import ContactForm from '@/components/contact-form/ContactForm';
import { use } from 'react';
import countriesData from '@/data/countries.json';
import { capitalizeFirstLetter } from '@/lib/utils/capitalizeFirstLetter';

function Countries({ params }: { params?: Promise<{ region: string }> }) {
  const region = params && use(params).region;

  const heroImage = region 
    ? manifest.countries.find(image => image.alt === region)
    : manifest.hero.find(image => image.alt === 'countries-banner');

  const heroSection =
    region && countriesData.heroSections[region as keyof typeof countriesData.heroSections]
      ? countriesData.heroSections[region as keyof typeof countriesData.heroSections]
      : countriesData.heroSections.all;

  return (
    <main id="main-content">
      <HeroSection
        {...heroSection}
        showArrow={false}
        imageSrc={heroImage?.src || '/assets/images/hero/countries-banner.jpg'}
        imageAlt={`${capitalizeFirstLetter(region ?? 'Country')} hero banner`}
      />
      <PresentCountriesSection initialFilter={region} />
      <ContactForm />
    </main>
  );
}

export default Countries;
