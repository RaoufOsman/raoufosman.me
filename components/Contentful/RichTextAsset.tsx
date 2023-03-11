import Image from 'next/image'

export default function RichTextAsset({ id, assets }: any) {
  const asset = assets?.find((asset: any) => asset.sys.id === id)

  if (asset?.url) {

    return <Image className="h-full w-full py-4" height={1000} width={1000} src={asset.url} alt={asset.description} />
  }

  return null
}
