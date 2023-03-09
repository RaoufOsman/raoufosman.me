import Avatar from '@/components/Contentful/Avatar';
import DateFormat from '@/components/Contentful/DateFormat';
import CoverImage from '@/components/Blog/CoverImage'

export default function PostHeader({ title, coverImage, date, author }: any) {
  return (
    <>
      <h2>{title}</h2>
      <div className="hidden md:block md:mb-12">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
        <div className="mb-6 text-lg">
          <DateFormat dateString={date} />
        </div>
      </div>
    </>
  )
}