import PostPreview from "@/components/Blog/PostPreview";
import { BLOG_FILTERS, BLOG_TAG_IDS } from "@/lookups";

interface IPostProps {
  limit: number,
  filter: number,
  posts: any[]
}



export default function Posts({ limit, filter, posts }: IPostProps) {

  const filterBlogPosts = (p: any) => {
    switch (filter) {
      case BLOG_FILTERS.NONE:
        return p;
      case BLOG_FILTERS.MONDAY:
        return p.contentfulMetadata.tags[0].id === BLOG_TAG_IDS.MOTIVATION_MONDAY
      case BLOG_FILTERS.TUESDAY:
        return p.contentfulMetadata.tags[0].id === BLOG_TAG_IDS.TECHNICAL_TUESDAY
      case BLOG_FILTERS.WEDNESDAY:
        return p.contentfulMetadata.tags[0].id === BLOG_TAG_IDS.WISDOM_WEDNESDAY
      case BLOG_FILTERS.THURSDAY:
        return p.contentfulMetadata.tags[0].id === BLOG_TAG_IDS.TUTORIAL_THURSDAY
      case BLOG_FILTERS.FRIDAY:
        return p.contentfulMetadata.tags[0].id === BLOG_TAG_IDS.FUNDAMENTAL_FRIDAY
      default:
        return p;
    }
  }

  return (
    <div className="mt-10">
      <h2 className="text-3xl leading-6 mt-3 mb-1">Recent Blog Posts</h2>
      <div className="mb-5 mt-5">
        {posts.slice(0, limit).filter(filterBlogPosts).map((post) => (
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
        ))}
      </div>
    </div>
  )
}