import Link from "next/link";
import { useRouter } from "next/router";

import Image from "@/components/Contentful/Image";
import Avatar from "@/components/Contentful/Avatar";
import DateFormat from "@/components/Contentful/DateFormat";
import CoverImage from "@/components/Blog/CoverImage";
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
  const router = useRouter();

  const navigateToBlog = (e: any) => {
    router.push(`blog/${slug}`);
  };

  const nagivateToTag = (e: any, t: any) => {
    router.push(`tags/${t.id}`)
  }

  const bookmark = (e: any) => {

  }

  return (
    <div
      className="flex flex-row justify-between md:mb-11 h-48"
    >
      <div className="flex flex-col">
        {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="mb-2">
          <h1 className="subpixel-antialiased cursor-pointer hover:underline text-xl font-bold sm:w-11/12">
            <Link href={`blog/${slug}`}>{title}</Link>
          </h1>
        </div>
        <div className="text-md antialiased text-gray-500 mb-2 hidden sm:block sm:w-11/12">
          {excerpt}
        </div>
        <div className="flex">
          <div className="text-sm antialiased text-gray-500 mr-5 mt-1.5 sm:mt-2">
            <DateFormat dateString={date} />
          </div>
          <div className="hidden sm:block mt-1">
            {tags.map((t: any) => (
              <button
                className="text-sm antialiased text-gray-500 mr-5"
                key={t.id}
              >
                <span className="bg-gray-100 px-4 py-1 rounded-full">
                  <Link href={`tags/${t.id}`}>{t.name}</Link>
                </span>
              </button>
            ))}
          </div>
          <div className="hidden flex mt-1 sm:mt-0">
            <BookmarkIcon className="h-4 w-4 text-gray-400 mt-1 mr-1 sm:h-6 sm:w-6" onClick={bookmark} />
            <ShareIcon className="h-4 w-4 text-gray-400 mt-1 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
      <div className="flex">
        <Link href={`blog/${slug}`}>
          <Image
            width={500}
            height={1000}
            className="hidden sm:block mt-4 cursor-pointer rounded-md sm:p-0 md:h-1/2 object-cover sm:h-3/4"
            alt={`Cover Image for ${title}`}
            src={coverImage.url}
          />
        </Link>
      </div>
    </div>
  );
}
