import Image from 'next/image'

export const Logo = () => {
  return (
    <Image
      src="/images/1x/logo.png"
      alt="RO Logo"

      width={100}
      height={24}
      priority
    />
  )
}