import { getAllPostsWithSlug, getPostBySlug } from '@/api/blog';
import PostHeader from '@/components/Blog/PostHeader';
import RichText from '@/components/Contentful/RichText';
import { useTheme } from '@/context/ThemeContext';
import BlogLayout from '@/layouts/BlogLayout';
import darkLoading from '@/public/images/ro-dark.gif';
import lightLoading from '@/public/images/ro-light.gif';

interface IPostProps {
  post: any
}

const getAdditionalMetaTags = (post: any) => {
  return (
    <meta property="og:image" content={post.coverImage.url} />
  )
}

const loading = (darkMode: boolean) => {
  return (
    darkMode
      ? <img height={500} className="flex justify-center" width={500} src="/images/ro-light.gif" />
      : <img height={500} className="flex justify-center" width={500} src="/images/ro-dark.gif" />
  )
}

export default function Post({ post }: IPostProps) {
  const { state } = useTheme();
  return (
    <>
      {!post ? loading(state.darkMode) :
        <BlogLayout title={`RO - ${post.title}`} description={post.excerpt} additionalMetaTags={getAdditionalMetaTags(post)}>
          <PostHeader title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} tags={post.contentfulMetadata.tags} />
          <RichText content={post.content} />
        </BlogLayout>
      }
    </>
  )
}

export async function getStaticProps({ params }: any) {
  const post = await getPostBySlug(params.slug);
  return {
    props: {
      post: post ?? null
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