import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { WikiPage } from "@/app/core/modules/contentful/interfaces"
import { getAllPages, getPage } from "../../core/modules/contentful/content_types/wikiPages"
import DefaultTemplate from "../../core/components/layout/Template"

export async function generateStaticParams() {
  const allPages = await getAllPages()

  return allPages.map((page: WikiPage) => ({
    slug: page.slug,
  }))
}

export default async function wikiPage({ params }: any) {
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
