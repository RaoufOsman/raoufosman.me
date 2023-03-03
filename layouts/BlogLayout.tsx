import BaseLayout from "./BaseLayout";

interface IBlogLayoutProps {
  children: React.ReactNode;
};

export default function BlogLayout({ children }: IBlogLayoutProps) {
  return (
    <BaseLayout title="RO - Blog" pageDescription="RO Blog Page">
      {children}
    </BaseLayout>
  )
}