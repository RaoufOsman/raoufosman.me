import { getAllPostsWithSlug } from "@/api/blog";
import { useTheme } from "@/context/ThemeContext";
import BlogLayout from "@/layouts/BlogLayout";

import PostPreview from "@/components/Blog/PostPreview";
import Paginate from "@/components/Paginate";

export default function Blog({ posts }: any) {
  const { state } = useTheme();

  const loading = (darkMode: boolean) => {
    return (
      darkMode
        ? <img height={500} className="flex justify-center" width={500} src="/images/ro-light.gif" />
        : <img height={500} className="flex justify-center" width={500} src="/images/ro-dark.gif" />
    )
  }

  if (!posts) return loading(state.darkMode);

  const paginateItemRenderer = (post: any) =>
    <PostPreview
      tags={post.contentfulMetadata.tags}
      key={post.slug}
      title={post.title}
      coverImage={post.coverImage}
      date={post.date}
      author={post.author}
      slug={post.slug}
      excerpt={post.excerpt}
    />

  return (
    <BlogLayout title={`RO - Blog`} description="RO Blog Weekly Series">
      <h2 className="text-xl pt-3">Welcome to our blog! We bring you fresh content on a variety of topics to help you stay motivated and informed. From software engineering to tech trends, our blog covers a range of subjects to help you grow both personally and professionally. Check out some of our recent posts below and join us on this journey of discovery.</h2>
      <div className="my-10">
        <Paginate items={posts} itemsPerPage={5} renderer={paginateItemRenderer} />
      </div>
    </BlogLayout>
  )
}

export async function getStaticProps({ preview = true }) {
  const posts = await getAllPostsWithSlug();
  return {
    props: {
      posts
    },
    revalidate: 5
  }
}