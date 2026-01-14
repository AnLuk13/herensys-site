// import React from 'react';
// import HeroSection from '@/components/hero/HeroSection';
// import BuildDreamTeamSection from '@/components/build-your-team/BuildDreamTeamSection';
// import ImageContentSection from '@/components/ImageContentSection';
// import FAQSection from '@/components/FAQSection';
// import CTASection from '@/components/CTASection';
// import manifest from '@/lib/assets-manifest.json';
// import {
//   heroSectionData,
//   goGlobalSection,
//   globalHiringSection,
//   faqSectionData,
//   ctaSectionData,
// } from '@/lib/consts/servicesContent';
// import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';

// function Services() {
//   const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

//   return (
//     <main>
//       <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
//       <BuildDreamTeamSection {...goGlobalSection} />
//       <ImageContentSection
//         {...globalHiringSection}
//         imageSrc={heroImage!.src}
//         imageAlt="Global hiring services"
//       />
//       <ImageContentSection
//         {...globalHiringSection}
//         imageSrc={heroImage!.src}
//         imageAlt="Global hiring services"
//         reverse={true}
//         background="var(--gray-background)"
//       />
//       <FAQSection {...faqSectionData} />
//       <CTASection {...ctaSectionData} />
//       <RecentBlogPostsSection />
//     </main>
//   );
// }

// export default Services;
