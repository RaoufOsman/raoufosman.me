import Link from 'next/link'
import Avatar from '@/components/Contentful/Avatar';
import DateFormat from '@/components/Contentful/DateFormat';
import CoverImage from '@/components/Blog/CoverImage'

export default function PostPreview({
  tags,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  key
}: any) {
  return (
    <div className="mx-auto grid grid-flow-col auto-cols-max gap-4" key={key}>
      <div>
        <div className="grid grid-flow-col auto-cols-max gap-4">
          <div>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
          <div className="h-12 mt-3">
            <DateFormat dateString={date} />
          </div>
        </div>
        <div className="grid grid-flow-row auto-rows-max">
          <h3 className="text-xl mb-3 leading-snug">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <div>
            {tags.map((t: any) =>
              <a key={t.id}
                href={`/tags/${t.id}`}
                className="rounded-full bg-gray-50 py-1.5 px-3 text-sm text-gray-600 hover:bg-gray-100"
              >
                {t.name}
              </a>)}
          </div>
        </div>
      </div>
      <div>
        <CoverImage className="rounded-lg" title={title} slug={slug} url={coverImage.url} height={200} width={200} />
      </div>
    </div>
  )
}
