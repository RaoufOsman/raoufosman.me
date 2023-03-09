import { default as NextImage } from 'next/image'

const contentfulLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

export default function Image(props: any) {
  return <NextImage loader={contentfulLoader} {...props} />
}
