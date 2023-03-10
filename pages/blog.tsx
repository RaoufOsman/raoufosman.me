import { getAllPostsWithSlug } from "@/api/blog";
import PostPreview from "@/components/Blog/PostPreview";
import { useTheme } from "@/context/ThemeContext";
import BlogLayout from "@/layouts/BlogLayout";

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

  return (
    <BlogLayout title={`RO - Blog`} description="RO Blogs page">
      <h2 className="text-2xl pt-3">Welcome to our weekly blog series! Each day, we bring you fresh content on a specific topic to help you stay motivated and informed. Here's a brief overview of what you can expect:</h2>
      <p className="text-lg py-2">Motivation Monday: Start your week off right with a dose of inspiration and motivation. We'll share tips on how to stay motivated, stories of success, and insights into how to overcome challenges.</p>
      <p className="text-lg py-2">Technical Tuesday: Dive into the world of technology with our Technical Tuesday posts. We'll explore the latest tech trends, highlight new tools and technologies, and share tips and tricks for developers and engineers.</p>
      <p className="text-lg py-2">Wisdom Wednesday: Gain insights and broaden your horizons with our Wisdom Wednesday posts. We'll share quotes from thought leaders, lessons learned from industry experts, and other pearls of wisdom to help you grow both personally and professionally.</p>
      <p className="text-lg py-2">Tutorial Thursday: Ready to master new skills? Our Tutorial Thursday posts are packed with step-by-step guides and how-to tutorials to help you level up your technical abilities.</p>
      <p className="text-lg py-2">Fundamental Friday: Wrap up your week with a focus on the basics. Our Fundamental Friday posts will cover essential concepts in software engineering, including coding principles, software architecture, and more.</p>
      <div className="my-10">
        {posts.map((post: any) => (
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
    </BlogLayout>
  )
}

export async function getStaticProps({ preview = true }) {
  const posts = await getAllPostsWithSlug();
  return {
    props: {
      posts
    },
  }
}