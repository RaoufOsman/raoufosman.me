import BaseLayout from "./BaseLayout";

interface ITagsLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  additionalMetaTags?: React.ReactNode;
};

export default function TagsLayout({ title, description, additionalMetaTags, children }: ITagsLayoutProps) {
  return (
    <BaseLayout title={title} pageDescription={description} additionalMetaTags={additionalMetaTags}>
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </BaseLayout>
  )
}