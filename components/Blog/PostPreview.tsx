import Link from "next/link";
import Image from "@/components/Contentful/Image";
import Avatar from "@/components/Contentful/Avatar";
import DateFormat from "@/components/Contentful/DateFormat";
import CoverImage from "@/components/Blog/CoverImage";
import MediumStylePost from "./MediumStylePost";
import { BookmarkIcon, ShareIcon } from "@heroicons/react/24/outline";

export default function PostPreview({
  tags,
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: any) {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col basis-1/2">
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="mb-2">
          <h1 className="subpixel-antialiased text-xl font-bold">{title}</h1>
        </div>
        <div className="text-md antialiased text-gray-500 mb-2 hidden sm:block">
          {excerpt}
        </div>
        <div className="flex">
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
          <div className="flex mt-1 sm:mt-0">
            <BookmarkIcon className="h-4 w-4 text-gray-400 mt-1 mr-1 sm:h-6 sm:w-6" />
            <ShareIcon className="h-4 w-4 text-gray-400 mt-1 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          width={200}
          height={100}
          className="mt-4 rounded-md sm:p-0 sm:rounded-lg h-15 w-15 sm:h-15 sm:w-15"
          alt={`Cover Image for ${title}`}
          src={coverImage.url}
        />
      </div>
    </div>
  );
}
