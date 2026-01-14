'use client';

import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
import ContactForm from '@/components/contact-form/ContactForm';
import CountryFactsSection from '@/components/country-facts/CountryFactsSection';
import CountryHeroSection from '@/components/hero/CountryHeroSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import CTASection from '@/components/CTASection';
import FAQSection from '@/components/FAQSection';
import manifest from '@/lib/assets-manifest.json';
import { use } from 'react';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import balkansData from '@/data/balkans.json';
import easternEuropeData from '@/data/eastern-europe.json';
import northAfricaData from '@/data/north-africa.json';
import countriesData from '@/data/countries.json';
import globalRecruitingData from '@/data/global-recruiting.json';
import eorData from '@/data/employer-of-record.json';
import { mapCardsWithIcons } from '@/lib/utils/iconMapper';

function CountryDetails({ params }: { params: Promise<{ region: string; id: string }> }) {
  const { region, id } = use(params);

  const country = countriesData.countriesData.find(
    c => c.name.toLowerCase().replace(/\s+/g, '-') === id,
  );

  if (!country) {
    return <div>Country not found</div>;
  }

  // Load region-specific data
  let regionData;
  switch (region) {
    case 'balkans':
      regionData = balkansData;
      break;
    case 'eastern-europe':
      regionData = easternEuropeData;
      break;
    case 'north-africa':
      regionData = northAfricaData;
      break;
  }

  const countryData = regionData?.countries.find(
    c => c.name.toLowerCase() === country.name.toLowerCase(),
  );

  if (!countryData) {
    return <div>Country data not found for {country.name}</div>;
  }

  const goGlobalSection = {
    ...globalRecruitingData.goGlobalSection,
    cards: mapCardsWithIcons(globalRecruitingData.goGlobalSection.cards),
  };

  return (
    <main>
      <CountryHeroSection
        title={`${countryData.name} at a Glance`}
        description={`Here's where you get started with human resources best practices and hiring in ${countryData.name}.`}
        buttonText="Book a call"
        imageSrc={countryData.imageSrc}
        imageAlt={`${countryData.name} flags`}
      />
      <BuildDreamTeamSection {...goGlobalSection} showTitleDescription={false} />
      <CountryFactsSection {...countryData.facts} />
      {countryData.faqSection && (
        <FAQSection {...countryData.faqSection} faqQuestionStyle={{ color: 'var(--accent)' }} />
      )}
      {countryData.ctaSection && <CTASection {...countryData.ctaSection} displayGlobe={true} />}
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
      <ContactForm />
    </main>
  );
}

export default CountryDetails;
