import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

async function getArticleContent(slug: string) {
  try {
    const response = await fetch(`/articles/${slug}.md`)
    if (!response.ok) return null
    return await response.text()
  } catch (error) {
    return null
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const content = await getArticleContent(params.slug)
  
  if (!content) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <article className="container mx-auto max-w-3xl px-4">
          <ReactMarkdown 
            className="prose prose-gray max-w-none"
            rehypePlugins={[rehypeRaw]}
            components={{
              a: ({node, ...props}) => <a {...props} className="text-blue-600 hover:underline" />,
              img: ({node, ...props}) => <img {...props} className="max-w-full h-auto rounded-lg shadow-md" />
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between px-4">
          <p className="text-sm text-gray-600">
            © 2024 Птичьи перелеты. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

