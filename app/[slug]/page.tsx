import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { getAllPages, getPage } from "../core/modules/contentful/content_types/pages"
import DefaultTemplate from "../core/components/layout/Template"

export async function generateStaticParams() {
  const allPages = await getAllPages()

  return allPages.map((page: any) => ({
    slug: page.slug,
  }))
}

export default async function generalPage({ params }: any) {
  const { isEnabled } = draftMode()
  const page = await getPage(params.slug, isEnabled)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate>
      <div>{documentToReactComponents(page.details.json)}</div>
    </DefaultTemplate>
  )
}
