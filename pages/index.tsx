import BaseLayout from "@/layouts/BaseLayout";
import { getHomePageBio } from "@/api/homePageBio";
import { getAllPostsForHome, getAllPostsWithSlug } from "@/api/blog";

import HomePageBio from "@/components/Home/HomePageBio";
import Posts from "@/components/Blog/Posts";

import { BLOG_FILTERS } from "@/lookups";
import Link from "next/link";

interface IHomeProps {
  bio: any,
  posts: any
}

export default function Home({ bio, posts }: IHomeProps) {
  return (
    <BaseLayout title="RO - Home" pageDescription="Home page">
      <div className="max-w-3xl mx-auto">
        <HomePageBio bio={bio} />
        <Posts limit={3} filter={BLOG_FILTERS.NONE} posts={posts} />
      </div>
    </BaseLayout>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getAllPostsForHome(5, preview);
  const bio = await getHomePageBio();
  return {
    props: {
      bio,
      posts
    },
    revalidate: 5
  }
}
