import PostPreview from "@/components/Blog/PostPreview";

interface IPostProps {
  limit: number,
  filter: number,
  posts: any[]
}

export default function Posts({ limit, filter, posts }: IPostProps) {
  return (
    <div className="mt-10">
      <h2 className="text-3xl leading-6 mt-3 mb-1">Recent Blog Posts</h2>
      <div className="mb-5 mt-5">
        {posts.map((post) => (
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