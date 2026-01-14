import manifest from '@/lib/assets-manifest.json';
import HeroSection from '@/components/hero/HeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import BlogListSection from '@/components/blog/BlogListSection';
import AllBlogPostsSection from '@/components/blog/AllBlogPostsSection';
import blogData from '@/data/blog.json';

function Blog() {
  const heroImage = manifest.home.find(image => image.alt === 'banner');

  return (
    <main>
      <HeroSection
        {...blogData.heroSection}
        imageSrc={heroImage!.src}
        imageAlt="Services hero banner"
      />
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
