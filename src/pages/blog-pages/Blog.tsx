import { heroSectionData } from '@/lib/consts/servicesContent';
import manifest from '@/lib/assets-manifest.json';
import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import BlogListSection from '@/components/blog/BlogListSection';
import AllBlogPostsSection from '@/components/blog/AllBlogPostsSection';

function Blog() {
  const heroImage = manifest.home.find(image => image.alt === 'Hero banner1');

  return (
    <main>
      <HeroSection {...heroSectionData} imageSrc={heroImage!.src} imageAlt="Services hero banner" />
      <FirestoreSection
        route="/blogs"
        Component={BlogListSection}
        additionalProps={{ background: 'var(--white)' }}
      />
      <FirestoreSection route="/blogs" Component={AllBlogPostsSection} />
    </main>
  );
}

export default Blog;
