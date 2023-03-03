import BaseLayout from "@/layouts/BaseLayout";
import { getBio } from "@/api/bio";
import { getAllPostsForHome, getAllPostsWithSlug } from "@/api/blog";
import RichText from "@/components/Contentful/RichText";

interface IHomeProps {
  bio: any,
  allPosts: any
}

export default function Home({ bio }: IHomeProps) {
  return (
    <BaseLayout title="RO - Home" pageDescription="Home page">
      <div className="max-w-2xl h-full dark:text-white">
        <RichText content={bio.content} />
      </div>
    </BaseLayout>
  )
}

export async function getStaticProps({ preview = false }) {
  //const allPosts = await getAllPostsForHome(preview)
  const bio = await getBio();

  return {
    props: {
      bio
      // allPosts
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
