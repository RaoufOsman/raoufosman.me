import Image from '@/components/Contentful/Image'

interface IAvatarProps {
  name: string,
  picture: any
}

export default function Avatar({ name, picture }: IAvatarProps) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={picture.url}
          layout="fill"
          className="rounded-full w-16 md:w-32 lg:w-48"
          alt={name}
        />
      </div>
      <div className="text-l font-bold">{name}</div>
    </div>
  )
}
