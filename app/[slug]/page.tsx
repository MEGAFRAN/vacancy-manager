import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { notFound } from "next/navigation"
import { getAllPages, getPage } from "../core/modules/contentful/content_types/pages"
import DefaultTemplate from "../core/components/layout/Template"
import { Page } from "../core/modules/contentful/interfaces"

export async function generateStaticParams() {
  const allPages = await getAllPages()

  return allPages.map((page: Page) => ({
    slug: page.slug,
  }))
}

export default async function generalPage({ params }: any) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate>
      <div>{documentToReactComponents(page?.details?.json)}</div>
    </DefaultTemplate>
  )
}
