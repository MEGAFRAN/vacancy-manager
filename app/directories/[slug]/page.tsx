import { notFound } from "next/navigation"
import LinksGrid from "@/app/core/components/LinkGrid"
import { DirectoryPage } from "@/app/core/modules/contentful/interfaces"
import directoryPagesArguments from "@/app/core/modules/contentful/content_types/directoryPages"
import { getAllPages } from "@/app/core/modules/contentful/queryService"
import DefaultTemplate from "@/app/core/components/layout/Template"
import { Metadata } from "next"

const { collection, fields, limit } = directoryPagesArguments
const allPagesData: DirectoryPage[] = await getAllPages(collection, fields, limit)

export async function generateStaticParams() {
  return allPagesData.map((page: DirectoryPage) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const currentPageData: DirectoryPage | undefined = allPagesData.find(
      (page) => page.slug === params.slug,
    )

    return {
      title: currentPageData?.metadata.title,
      description: currentPageData?.metadata.description,
      alternates: {
        canonical: currentPageData?.metadata.canonicalUrl,
      },
    }
  } catch (e) {
    return {
      title: "Exercise not Found",
    }
  }
}

const directoryPage = async ({ params }: any) => {
  const currentPageData: DirectoryPage | undefined = allPagesData.find(
    (page) => page.slug === params.slug,
  )

  if (!currentPageData) notFound()

  return (
    <DefaultTemplate
      title={currentPageData.content.h1}
      introduction={currentPageData.content.h1Paragraph}
    >
      <LinksGrid urls={currentPageData.content.links} />
    </DefaultTemplate>
  )
}

export default directoryPage
