import BlogHeroSection from '@/components/hero/BlogHeroSection';
import FirestoreSection from '@/components/wrapper/FireStoreSection';
import BlogContentSection from '@/components/blog/BlogContentSection';
import RecentBlogPostsSection from '@/components/recent-blog-posts/RecentBlogPostsSection';
import { blogHeroSectionData, ctaSectionData } from '@/lib/consts/servicesContent';
import CTASection from '@/components/CTASection';

function BlogPost({ params }: { params: { id: string } }) {
  const heroImage = 'https://picsum.photos/800/600';

  return (
    <main>
      <BlogHeroSection
        {...blogHeroSectionData}
        imageSrc={heroImage}
        imageAlt="AI Transforming Hiring"
      />
      <FirestoreSection
        route={`/blogs/${params.id}`}
        Component={BlogContentSection}
        additionalProps={{}}
      />
      <CTASection {...ctaSectionData} displayGlobe />
      <FirestoreSection
        route="/blogs/latest"
        Component={RecentBlogPostsSection}
        additionalProps={{}}
      />
    </main>
  );
}

export default BlogPost;
