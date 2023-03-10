import { getAllPostsWithSlug, getPostBySlug } from '@/api/blog';
import PostHeader from '@/components/Blog/PostHeader';
import RichText from '@/components/Contentful/RichText';
import BlogLayout from '@/layouts/BlogLayout';

interface IPostProps {
  post: any
}

const getAdditionalMetaTags = (post: any) => {
  return (
    <meta property="og:image" content={post.coverImage.url} />
  )
}

export default function Post({ post }: IPostProps) {
  return (
    <BlogLayout title={`RO - ${post.title}`} description={post.excerpt} additionalMetaTags={getAdditionalMetaTags(post)}>
      <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} tags={post.contentfulMetadata.tags} />
      <RichText content={post.content} />
    </BlogLayout>
  )
}

export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((p: any) => `/blog/${p.slug}`) ?? [],
    fallback: true,
  }
}