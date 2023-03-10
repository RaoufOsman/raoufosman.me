import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Metatags from '@/components/Metatags';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import Custom404 from '@/pages/404';

interface IBlankLayoutProps {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  additionalMetaTags?: React.ReactNode;
};

export default function BaseLayout({ title, pageDescription, children, additionalMetaTags = null }: IBlankLayoutProps) {
  const router = useRouter();

  // if (!router.isFallback) {
  //   return <Custom404 />
  // }

  return (
    <>
      <Metatags title={title} pageDescription={pageDescription}>
        {additionalMetaTags}
      </Metatags>
      <div className="bg-white dark:bg-black dark:text-white">
        <Header />
        <div className="px-6 lg:px-8 min-h-[80vh]">
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}