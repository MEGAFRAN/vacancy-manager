import { GlossaryPage } from "@/app/core/modules/contentful/interfaces"
import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Post from "@/app/core/components/layout/Post"
import glossaryPagesArguments from "@/app/core/modules/contentful/content_types/glossaryPages"
import { getAllPages, getPage } from "@/app/core/modules/contentful/queryService"
import DefaultTemplate from "../../core/components/layout/Template"

const { collection, fields, limit, section } = glossaryPagesArguments

export async function generateStaticParams() {
  const allPages = await getAllPages(collection, fields, limit, section)

  return allPages.map((page: GlossaryPage) => ({
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
