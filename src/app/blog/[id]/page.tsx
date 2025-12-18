import BlogPost from '@/pages/blog-pages/BlogPost';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { id } = params;
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

function BlogPostPage({ params }: { params: { id: string } }) {
  return <BlogPost params={params} />;
}

export default BlogPostPage;
