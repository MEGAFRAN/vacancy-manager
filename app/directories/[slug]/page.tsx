import { notFound } from "next/navigation"
import LinksGrid from "@/app/core/components/LinkGrid"
import { DirectoryPage } from "@/app/core/modules/contentful/interfaces"
import directoryPagesArguments from "@/app/core/modules/contentful/content_types/directoryPages"
import { getAllPages, getPage } from "@/app/core/modules/contentful/queryService"
import DefaultTemplate from "../../core/components/layout/Template"

const { collection, fields, limit } = directoryPagesArguments
export async function generateStaticParams() {
  const allPages = await getAllPages(collection, fields, limit)

  return allPages.map((page: DirectoryPage) => ({
    slug: page.slug,
  }))
}

export default async function directoryPage({ params }: any) {
  const page = await getPage(collection, fields, params.slug)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate title={page.title} introduction={page.title}>
      <LinksGrid urls={page.content.links} />
    </DefaultTemplate>
  )
}
