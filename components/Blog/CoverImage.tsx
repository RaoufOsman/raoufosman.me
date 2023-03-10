import Link from 'next/link'
import cn from 'classnames'

import Image from '@/components/Contentful/Image'

export default function CoverImage({ title, url, slug, width, height, className }: any) {
  const image = (
    <Image
      width={width ?? 300}
      height={height ?? 300}
      alt={`Cover Image for ${title}`}
      className={className}
      src={url}
    />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}
