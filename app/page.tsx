import { ArrowUpRight, Search } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Как переехать в Сербию?
        </h1>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Задайте вопрос..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background hover:bg-accent/50 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Citizenship Card */}
        <Link
          href="/citizenship"
          className="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-xl mb-2">Гражданство</h2>
              <p className="text-muted-foreground text-sm">
                Процесс получения гражданства Сербии, от ВНЖ до паспорта
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>

        {/* Car Purchase Card */}
        <Link
          href="/car"
          className="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-xl mb-2">Покупка авто</h2>
              <p className="text-muted-foreground text-sm">
                Как купить и зарегистрировать автомобиль в Сербии
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>

        {/* Apartment Rental Card */}
        <Link
          href="/apartment"
          className="group relative rounded-lg border p-6 hover:bg-accent transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-xl mb-2">Аренда жилья</h2>
              <p className="text-muted-foreground text-sm">
                Руководство по поиску и аренде квартиры в Сербии
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </Link>
      </div>
    </div>
  )
}