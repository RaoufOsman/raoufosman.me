import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getPostsByTagId } from "@/api/blog";
import { getAllTags, getPageMetadataByTagId } from "@/api/tags";
import PostPreview from "@/components/Blog/PostPreview";
import TagsLayout from "@/layouts/TagsLayout";
import { BLOG_TAG_IDS } from "@/lookups";

interface ITagProps {
  posts: any[];
  pageMetadata: any
}

export default function Tag({ posts, pageMetadata }: ITagProps) {
  const router = useRouter();

  // if (pageMeta().title === "") {
  //   router.push(`blog`);
  // }

  return (
    <TagsLayout title={`RO - ${pageMetadata.title}`} description={pageMetadata.description}>
      <h2 className="text-3xl mt-5">{pageMetadata.title}</h2>
      <h3 className="text-xl my-6">{pageMetadata.description}</h3>
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
      pageMetadata: pageMeta,
      posts: posts ?? [],
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  const tags = await getAllTags();
  return {
    paths: tags?.map((t: any) => `/tags/${t.id}`) ?? [],
    fallback: true,
  }
}