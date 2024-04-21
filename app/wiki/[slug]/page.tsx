import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { WikiPage } from "@/app/core/modules/contentful/interfaces"
import Post from "@/app/core/components/layout/Post"
import { getAllPages, getPage } from "@/app/core/modules/contentful/queryService"
import wikiPagesArguments from "@/app/core/modules/contentful/content_types/wikiPages"
import DefaultTemplate from "../../core/components/layout/DefaultTemplate"

const { collection, fields, limit, section } = wikiPagesArguments
export async function generateStaticParams() {
  const allPages = await getAllPages(collection, fields, limit, section)

  return allPages.map((page: WikiPage) => ({
    slug: page.slug,
  }))
}

export default async function Home({ params }: any) {
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
