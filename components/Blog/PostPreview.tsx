import Link from "next/link";
import Image from "@/components/Contentful/Image";
import Avatar from "@/components/Contentful/Avatar";
import DateFormat from "@/components/Contentful/DateFormat";
import CoverImage from "@/components/Blog/CoverImage";
import MediumStylePost from "./MediumStylePost";

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
      <div className="flex flex-col">
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="mb-2">
          <h1 className="subpixel-antialiased text-xl font-bold">{title}</h1>
        </div>
        <div className="text-md antialiased text-gray-500 mb-2 hidden sm:block">
          {excerpt}
        </div>
        <div className="flex">
          <div className="text-xs antialiased text-gray-500 mr-5 mt-2 sm:mt-1 sm:text-sm">
            <DateFormat dateString={date} />
          </div>
          {/* <div className="text-sm antialiased text-gray-500 mr-5 mt-1">
            4 min read
          </div> */}
          {tags.map((t: any) => (
            <div className="text-xs antialiased text-gray-500 mr-5" key={t.id}>
              <div className="bg-gray-100 p-2 rounded-full">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          width={300}
          height={300}
          className="mt-4 rounded-md sm:p-0 sm:rounded-lg h-30 w-40 sm:h-30 sm:w-60"
          alt={`Cover Image for ${title}`}
          src={coverImage.url}
        />
      </div>
    </div>
  );
}
