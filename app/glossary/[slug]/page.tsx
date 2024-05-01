import { GlossaryPage } from "@/app/core/modules/contentful/interfaces"
import { notFound } from "next/navigation"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Post from "@/app/core/components/layout/Post"
import glossaryPagesArguments from "@/app/core/modules/contentful/content_types/glossaryPages"
import { getAllPages } from "@/app/core/modules/contentful/queryService"
import { Metadata } from "next"
import DefaultTemplate from "../../core/components/layout/DefaultTemplate"

const { collection, fields, limit, section } = glossaryPagesArguments
const allPagesData: GlossaryPage[] = await getAllPages(collection, fields, limit)

export async function generateStaticParams() {
  const allPages = await getAllPages(collection, fields, limit, section)

  return allPages.map((page: GlossaryPage) => ({
    slug: page.slug,
  }))
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  try {
    const currentPageData: GlossaryPage | undefined = allPagesData.find(
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

export default async function Home({ params }: any) {
  const currentPageData: GlossaryPage | undefined = allPagesData.find(
    (page) => page.slug === params.slug,
  )

  if (!currentPageData) notFound()

  return (
    <DefaultTemplate>
      <Post>{documentToReactComponents(currentPageData?.details?.json)}</Post>
    </DefaultTemplate>
  )
}
