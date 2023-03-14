import Avatar from "@/components/Contentful/Avatar";
import DateFormat from "@/components/Contentful/DateFormat";
import CoverImage from "@/components/Blog/CoverImage";
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  tags,
  coverImageDescription
}: any) {
  return (
    <>
      <div className="my-5">
        <h2 className="text-3xl">{title}</h2>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <div className="mt-5">
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
        <div className="flex mt-6">
          <div className="text-sm antialiased text-gray-500 mr-5 mt-1.5 sm:mt-1">
            <DateFormat dateString={date} />
          </div>
          <div className="hidden sm:block">
            {tags.map((t: any) => (
              <div
                className="text-xs antialiased text-gray-500 mr-5"
                key={t.id}
              >
                <div className="bg-gray-100 p-2 rounded-full">{t.name}</div>
              </div>
            ))}
          </div>
          <div className="hidden flex mt-1 sm:mt-0">
            <BookmarkIcon className="h-4 w-4 text-gray-400 mt-1 mr-1 sm:h-6 sm:w-6" />
            <ShareIcon className="h-4 w-4 text-gray-400 mt-1 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
      <CoverImage
        title={title}
        url={coverImage.url}
        description={coverImageDescription}
        className="rounded-lg w-full h-96 object-cover"
      />
    </>
  );
}
