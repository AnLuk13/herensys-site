import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import MountainDetails from '../components/hero/helper/MountainDetails';
import WhatWeDoSection from '../components/landing/what-we-do/WhatWeDoSection';
import BuildDreamTeamSection from '../components/build-your-team/BuildDreamTeamSection';
import CountriesPresenceSection from '../components/swiper/SwiperSection';
import HireQualityCandidatesSection from '../components/landing/hire-quality-candidates/HireQualityCandidatesSection';
import PresentCountriesSection from '../components/countries-presence/PresentCountriesSection';
import RecentBlogPostsSection from '../components/recent-blog-posts/RecentBlogPostsSection';
import FirestoreSection from '../components/wrapper/FireStoreSection';
import ContactForm from '../components/contact-form/ContactForm';
import manifest from '@/lib/assets-manifest.json';
import homeData from '@/data/home.json';
import { mapCardsWithIcons } from '@/lib/utils/iconMapper';

function Home() {
  const heroImage = manifest.home.find(image => image.alt === 'banner');

  const buildDreamTeamSection = {
    ...homeData.buildDreamTeamSection,
    cards: mapCardsWithIcons(homeData.buildDreamTeamSection.cards),
  };

  return (
    <main>
      <HeroSection imageSrc={heroImage!.src} imageAlt="Hero banner" {...homeData.heroSection} />
      <MountainDetails />
      <WhatWeDoSection />
      <BuildDreamTeamSection {...buildDreamTeamSection} />
      <HireQualityCandidatesSection />
      <PresentCountriesSection />
      <CountriesPresenceSection />
      <FirestoreSection route="/blogs/latest" Component={RecentBlogPostsSection} />
      <ContactForm />
    </main>
  );
}

export default Home;
