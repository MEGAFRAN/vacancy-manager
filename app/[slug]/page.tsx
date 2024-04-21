import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { notFound } from "next/navigation"
import DefaultTemplate from "../core/components/layout/DefaultTemplate"
import { Page } from "../core/modules/contentful/interfaces"
import Post from "../core/components/layout/Post"
import { getAllPages, getPage } from "../core/modules/contentful/queryService"
import pagesArguments from "../core/modules/contentful/content_types/pages"

const { collection, fields, limit } = pagesArguments
export async function generateStaticParams() {
  const allPages = await getAllPages(collection, fields, limit)

  return allPages.map((page: Page) => ({
    slug: page.slug,
  }))
}

export default async function generalPage({ params }: any) {
  const page = await getPage(collection, fields, params.slug)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate>
      <Post>{documentToReactComponents(page?.details?.json)}</Post>
    </DefaultTemplate>
  )
}
