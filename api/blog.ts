import { fetchGraphQL } from "./common";

const BLOG_GRAPHQL_FIELDS = `
sys {
  id
}
contentfulMetadata {
  tags {
    id
    name
  }
}
featured
slug
title
coverImage {
  url
}
coverImageDescription
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

function extractBlogPost(fetchResponse: any) {
  return fetchResponse?.data?.blogCollection?.items?.[0]
}

function extractPostEntries(fetchResponse: any) {
  return fetchResponse?.data?.blogCollection?.items
}

export async function getPostBySlug(slug: string) {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractBlogPost(entry)
}

export async function getPreviewPostBySlug(slug: string, preview: boolean = false) {
  const entry = await fetchGraphQL(
    `query {
      blogCollection(where: { slug: "${slug}" }, preview: ${preview}, limit: 1) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractBlogPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(limit: number, preview: boolean = false) {
  const entries = await fetchGraphQL(
    `query {
      blogCollection(order: date_DESC, preview: ${preview}, limit: ${limit}) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}

export async function getPostsByTagId(tagId: string) {
  const entries = await fetchGraphQL(
    `query {
        blogCollection(
          where: {
            contentfulMetadata: {
              tags_exists: true
              tags: { id_contains_some: ["${tagId}"] }
            }
          }
        ) {
        items {
          ${BLOG_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractPostEntries(entries)
}
