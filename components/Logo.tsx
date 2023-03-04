import Image from 'next/image'
import { useEffect } from 'react';

import { useTheme } from '@/context/ThemeContext';

const logoSrc = "/images/3x/logo.png";
const invertedLogoSrc = "/images/3x/invertedlogo.png"

export default function Logo() {
  const { state } = useTheme();
  return (
    <>
      {state.darkMode
        ? <Image
          className="h-12 w-auto"
          src={logoSrc}
          alt=""
          width={100}
          height={100} />
        : <Image
          className="h-12 w-auto"
          src={invertedLogoSrc}
          alt=""
          width={100}
          height={100} />
      }
    </>
  )
}