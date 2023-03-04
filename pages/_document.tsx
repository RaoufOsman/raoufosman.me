import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
