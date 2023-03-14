import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getPostsByTagId } from "@/api/blog";
import { getAllTags, getPageMetadataByTagId } from "@/api/tags";
import PostPreview from "@/components/Blog/PostPreview";
import TagsLayout from "@/layouts/TagsLayout";
import { BLOG_TAG_IDS } from "@/lookups";

interface ITagProps {
  posts: any[];
  title: string;
  description: string;
}

export default function Tag({ posts, title, description }: ITagProps) {
  const router = useRouter();

  // if (pageMeta().title === "") {
  //   router.push(`blog`);
  // }

  return (
    <TagsLayout title={`RO - ${title}`} description={description}>
      <h2 className="text-3xl mt-5">{title}</h2>
      <h3 className="text-xl my-6">{description}</h3>
      {
        posts && posts.length > 0
          ? posts.map((post: any) => (
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
          ))
          : <h2 className="text-2xl">No posts for this tag.</h2>
      }
    </TagsLayout>
  )
}

export async function getStaticProps({ params }: any) {
  const posts = await getPostsByTagId(params.tagId);
  const pageMeta = getPageMetadataByTagId(params.tagId);

  return {
    props: {
      title: pageMeta.title,
      description: pageMeta.description,
      posts: posts ?? [],
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  return {
    paths: tags?.map((t: any) => `/tags/${t.sys.id}`) ?? [],
    fallback: true,
  }
}