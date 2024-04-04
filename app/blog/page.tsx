import { getAllArticles } from "../core/modules/contentful/api"
import Article from "../core/modules/contentful/components/Article"

export default async function Home() {
  const articles = await getAllArticles()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to our Knowledge Base
              </h1>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                Discover our latest articles and stay up to date with the newest technologies,
                features, and trends.
              </p>
            </div>
          </div>
          <div className="space-y-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article: any) => (
                <Article key={article.sys.id} articleData={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
