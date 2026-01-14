import BlogPost from '@/pages/blog-pages/BlogPost';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = await params;
//   const blog = await getBlog(id);

//   return {
//     title: `${blog.title} | Herensys Blog`,
//     description: blog.metadataDescription,
//   };
// }

// export async function generateStaticParams() {
//   const posts = await getAllBlogs();
//   return posts.map(p => ({ id: p.id }));
// }

// export const revalidate = 3600;

function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  return <BlogPost params={params} />;
}

export default BlogPostPage;
