import { notFound } from "next/navigation"
import LinksGrid from "@/app/core/components/LinkGrid"
import { DirectoryPage } from "@/app/core/modules/contentful/interfaces"
import { getAllPages, getPage } from "../../core/modules/contentful/content_types/directoryPages"
import DefaultTemplate from "../../core/components/layout/Template"

export async function generateStaticParams() {
  const allPages = await getAllPages()

  return allPages.map((page: DirectoryPage) => ({
    slug: page.slug,
  }))
}

export default async function directoryPage({ params }: any) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <DefaultTemplate title={page.title} introduction={page.title}>
      <LinksGrid urls={page.content.links} />
    </DefaultTemplate>
  )
}
