import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import MountainDetails from '../components/hero/helper/MountainDetails';
import WhatWeDoSection from '../components/landing/what-we-do/WhatWeDoSection';
import BuildDreamTeamSection from '../components/build-your-team/BuildDreamTeamSection';
import { buildDreamTeamSection } from '@/lib/consts/common';
import CountriesPresenceSection from '../components/swiper/SwiperSection';
import HireQualityCandidatesSection from '../components/landing/hire-quality-candidates/HireQualityCandidatesSection';
import PresentCountriesSection from '../components/countries-presence/PresentCountriesSection';
import RecentBlogPostsSection from '../components/recent-blog-posts/RecentBlogPostsSection';
import ContactForm from '../components/contact-form/ContactForm';
import manifest from '@/lib/assets-manifest.json';

function Home() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <HeroSection
        titleLines={[
          { text: 'Hire Smarter —' },
          { text: 'Fast, Compliant Access', CSSProperties: { color: 'var(--accent)' } },
          { text: 'to Emerging‑Market Talent' },
        ]}
        descriptions={[
          'Build loyal local teams across Eastern Europe, the Balkans, and North Africa.',
          'We combine EOR, BPO, and targeted recruitment so you can scale without adding overhead.',
        ]}
        buttonText="Book a call"
        buttonDetails="15‑minute discovery call — no obligation"
        imageSrc={heroImage!.src}
        imageAlt="Hero banner"
        showArrow={true}
        showDecorations={true}
      />
      <MountainDetails />
      <WhatWeDoSection />
      <BuildDreamTeamSection {...buildDreamTeamSection} />
      <CountriesPresenceSection />
      <HireQualityCandidatesSection />
      <PresentCountriesSection />
      <RecentBlogPostsSection />
      <ContactForm />
      {/* <FirestoreSection
        route="sponsorsSection"
        Component={SponsorsSectionWithColor}
        additionalProps={{ color: 'var(--background)' }}
      /> */}
      {/* <CatalogSection content={t} />
      <OfferSection bgColor="var(--background)" route="/" />
      <AboutSection showAboutInfo />
      <SliderSectionWrapper content={t} route="home" />
      <Footer />  */}
    </main>
  );
}

export default Home;
