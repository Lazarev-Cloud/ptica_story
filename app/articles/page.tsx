import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 'citizenship-guide',
    title: 'Процесс получения гражданства Сербии',
    description: 'Подробное руководство по всем этапам получения гражданства Сербии, от временного ВНЖ до принятия присяги.',
    href: '/articles/citizenship-guide'
  },
  {
    id: 'buying-car',
    title: 'Покупка автомобиля в Сербии',
    description: 'Все, что нужно знать о покупке автомобиля в Сербии: от выбора до оформления документов.',
    href: '/articles/buying-car'
  },
  {
    id: 'renting-apartment',
    title: 'Аренда квартиры в Сербии',
    description: 'Практические советы по поиску, осмотру и аренде квартиры в Сербии для иностранцев.',
    href: '/articles/renting-apartment'
  }
]

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight mb-12">Статьи</h1>
      
      <div className="grid gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            className="group relative"
          >
            <article className="relative rounded-lg border p-6 hover:bg-accent transition-colors">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {article.description}
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium pt-2">
                    Читать далее
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  )
}