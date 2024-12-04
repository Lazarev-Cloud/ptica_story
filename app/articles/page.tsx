import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'

interface Article {
  slug: string
  title: string
  excerpt: string
}

const articles: Article[] = [
  {
    slug: 'citizenship-process',
    title: 'Процесс получения гражданства Сербии',
    excerpt: 'Подробное руководство по всем этапам получения гражданства Сербии, от временного ВНЖ до принятия присяги.'
  },
  {
    slug: 'buying-car-serbia',
    title: 'Покупка автомобиля в Сербии',
    excerpt: 'Все, что нужно знать о покупке автомобиля в Сербии: от выбора до оформления документов.'
  },
  {
    slug: 'renting-apartment-serbia',
    title: 'Аренда квартиры в Сербии',
    excerpt: 'Практические советы по поиску, осмотру и аренде квартиры в Сербии для иностранцев.'
  }
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Статьи</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
              <p className="mb-4">{article.excerpt}</p>
              <Link href={`/articles/${article.slug}`} className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
                Читать далее
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
