import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { getAllPages, getPage } from "../../core/modules/contentful/content_types/wikiPages"
import DefaultTemplate from "../../core/components/layout/Template"

export async function generateStaticParams() {
  const allPages = await getAllPages()

  return allPages.map((page: any) => ({
    slug: page.slug,
  }))
}

export default async function wikiPage({ params }: any) {
  const { isEnabled } = draftMode()
  const page = await getPage(params.slug, isEnabled)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate title={page.title} introduction={page.title}>
      <div>{documentToReactComponents(page.details.json)}</div>
    </DefaultTemplate>
  )
}
