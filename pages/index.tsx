import BaseLayout from "@/layouts/BaseLayout";
import { getHomePageBio } from "@/api/homePageBio";
import { getAllPostsForHome, getAllPostsWithSlug } from "@/api/blog";

import HomePageBio from "@/components/Home/HomePageBio";
import Posts from "@/components/Blog/Posts";

import { BLOG_FILTERS } from "@/lookups";

interface IHomeProps {
  bio: any,
  posts: any
}

export default function Home({ bio, posts }: IHomeProps) {
  return (
    <BaseLayout title="RO - Home" pageDescription="Home page">
      <div className="max-w-3xl mx-auto">
        <HomePageBio bio={bio} />
        <Posts limit={5} filter={BLOG_FILTERS.NONE} posts={posts} />
      </div>
    </BaseLayout>
  )
}

export async function getStaticProps({ preview = true }) {
  const posts = await getAllPostsForHome(preview, 5);
  const bio = await getHomePageBio();
  return {
    props: {
      bio,
      posts
    },
  }
}

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map((p: any) => `/posts/${p.slug}`) ?? [],
//     fallback: true,
//   }
// }
