import BaseLayout from "./BaseLayout";

interface IBlogLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  additionalMetaTags: React.ReactNode;
};

export default function BlogLayout({ title, description, additionalMetaTags, children }: IBlogLayoutProps) {
  return (
    <BaseLayout title={title} pageDescription={description} additionalMetaTags={additionalMetaTags}>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </BaseLayout>
  )
}