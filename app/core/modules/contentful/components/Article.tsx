import Link from "next/link"
import Image from "next/image"

interface ArticleProps {
  articleData: {
    articleImage: { url: string }
    sys: { id: string }
    slug: string
    title: string
    categoryName: string
    summary: string
    authorName: string
  }
}

const Article: React.FC<ArticleProps> = ({ articleData }) => {
  const { articleImage, sys, slug, title, categoryName, summary, authorName } = articleData

  return (
    <article key={sys.id} className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden">
      <Image
        alt="placeholder"
        className="aspect-[4/3] object-cover w-full"
        height="263"
        src={articleImage.url}
        width="350"
      />
      <div className="flex-1 p-6">
        <Link href={`/blog/articles/${slug}`}>
          <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
            {title}
          </h3>
        </Link>
        <div className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800">
          {categoryName}
        </div>
        <p className="max-w-none text-zinc-500 mt-4 mb-2 text-sm dark:text-zinc-400">{summary}</p>
        <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
          Written by: {authorName}
        </p>
        <div className="flex justify-end">
          <Link
            className="inline-flex h-10 items-center justify-center text-sm font-medium"
            href={`/articles/${slug}`}
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}

export default Article
