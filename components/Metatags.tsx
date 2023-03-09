import Head from "next/head";

interface IMetatagProps {
  title: string;
  pageDescription: string;
  additionalMetaTags?: React.ReactNode;
  image?: string;
  url?: string;
}

export default function Metatags({
  title,
  pageDescription,
  additionalMetaTags,
  image,
  url,
}: IMetatagProps) {
  return (
    <Head>
      {/* standard */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="apple-mobile-web-app-title" content="RO" />
      <meta name="application-name" content="RO" />
      <meta name="msapplication-TileColor" content="#0c0b1c" />
      <meta name="theme-color" content="#0c0b1c" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={image} />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={image} />
      {additionalMetaTags ?? ""}

      <link rel="icon" href="/images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/images/safari-pinned-tab.svg"
        color="#F2637E"
      />
    </Head>
  );
}
