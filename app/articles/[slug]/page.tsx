import { ArrowLeft } from 'lucide-react'
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import fs from 'fs/promises'
import path from 'path'

interface ArticlePageProps {
  params: {
    slug: string
  }
}

async function getArticleContent(slug: string) {
  const filePath = path.join(process.cwd(), 'public/articles', `${slug}.md`)
  try {
    return await fs.readFile(filePath, 'utf8')
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  const articlesDirectory = path.join(process.cwd(), 'public/articles')
  const files = await fs.readdir(articlesDirectory)
  
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => ({
      slug: file.replace(/\.md$/, ''),
    }))
}

const CustomLink = ({node, ...props}) => {
  const href = props.href || ''
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} className="text-blue-600 hover:text-blue-800 transition-colors">
        {props.children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a {...props} className="text-blue-600 hover:text-blue-800 transition-colors no-underline" />
    )
  }

  return (
    <a
      {...props}
      className="text-blue-600 hover:text-blue-800 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    />
  )
}

const CustomHeading = ({node, ...props}) => {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements
  const id = props.id || ''
  
  return (
    <Tag {...props} className="group flex items-center gap-2">
      {props.children}
      {id && (
        <a
          href={`#${id}`}
          className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity text-base"
          aria-label="Link to section"
        >
          #
        </a>
      )}
    </Tag>
  )
}

const CustomCode = ({node, inline, ...props}) => {
  return inline ? (
    <code {...props} className="bg-gray-100 text-pink-500 rounded px-1 py-0.5 text-sm" />
  ) : (
    <code {...props} className="text-sm" />
  )
}

const CustomBlockquote = ({node, ...props}) => {
  return (
    <blockquote {...props} className="border-l-4 border-gray-200 pl-4 italic text-gray-700" />
  )
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const content = await getArticleContent(params.slug)
  
  if (!content) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-10">
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
            className="prose prose-gray lg:prose-lg max-w-none"
            rehypePlugins={[
              rehypeRaw,
              rehypePrism,
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: 'append' }]
            ]}
            components={{
              a: CustomLink,
              h1: CustomHeading,
              h2: CustomHeading,
              h3: CustomHeading,
              h4: CustomHeading,
              h5: CustomHeading,
              h6: CustomHeading,
              code: CustomCode,
              blockquote: CustomBlockquote,
              img: ({node, ...props}) => (
                <img 
                  {...props} 
                  className="max-w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" 
                  loading="lazy"
                />
              ),
              table: ({node, ...props}) => (
                <div className="overflow-x-auto my-8">
                  <table {...props} className="min-w-full divide-y divide-gray-200" />
                </div>
              ),
              th: ({node, ...props}) => (
                <th {...props} className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" />
              ),
              td: ({node, ...props}) => (
                <td {...props} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" />
              ),
              pre: ({node, ...props}) => (
                <pre {...props} className="rounded-lg bg-gray-900 p-4 overflow-x-auto" />
              )
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </main>
      <footer className="border-t mt-16">
        <div className="container flex h-16 items-center justify-between px-4">
          <p className="text-sm text-gray-600">
            © 2024 Птичьи перелеты. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}