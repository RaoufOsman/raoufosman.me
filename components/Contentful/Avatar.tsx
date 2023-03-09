import Image from '@/components/Contentful/Image'

interface IAvatarProps {
  name: string,
  picture: any
}

export default function Avatar({ name, picture }: IAvatarProps) {
  return (
    <div className="flex flex-row mb-2">
      <Image
        className="inline-block sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-15 lg:w-15 rounded-full mr-1"
        height={100}
        width={100}
        src={picture.url}
        alt={name}
      />
      <div className="flex mt-2">
        <span className="text-black text-lg font-bold ml-3">
          {name}
        </span>
        {/* <span className="text-gray-500 text-sm mr-1">in</span>
        <span className="text-black text-sm font-bold">Medium Staff</span> */}
      </div>
    </div>
    // <div className="flex items-center">
    //   <div className="relative w-12 h-12 mr-4">
    //     <Image
    //       src={picture.url}
    //       layout="fill"
    //       className="rounded-full w-16 md:w-32 lg:w-48"
    //       alt={name}
    //     />
    //   </div>
    // </div>
  )
}
