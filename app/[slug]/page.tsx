import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { getAllPages, getPage } from "../core/modules/contentful/page"

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{page.title}</h1>
          </div>
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  {documentToReactComponents(page.details.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
