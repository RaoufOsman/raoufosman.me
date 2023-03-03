import BaseLayout from "@/layouts/BaseLayout";

export default function Custom404() {
  return (
    <BaseLayout title="RO - 404" pageDescription="404 page">
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
        <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
      </div>
    </BaseLayout>
  )
}
