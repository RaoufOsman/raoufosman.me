import Link from "next/link";
import cn from "classnames";

import Image from "@/components/Contentful/Image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function CoverImage({
  title,
  url,
  slug,
  width,
  height,
  className,
  description
}: any) {
  const image = (
    <Image
      width={width ?? 1000}
      height={height ?? 1000}
      alt={`Cover Image for ${title}`}
      className={className}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
          <>
            {image}
            <span className="text-sm text-gray-400"><ReactMarkdown>{description}</ReactMarkdown></span>
          </>
      )}
    </div>
  );
}
