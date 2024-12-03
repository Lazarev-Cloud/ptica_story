import { ArrowUpRight, Paperclip } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Птичьи перелеты</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">
            Как переехать в Сербию?
          </h1>
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Input
                className="h-12 rounded-lg pl-10 pr-20"
                placeholder="Задайте вопрос..."
                type="text"
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <Paperclip className="h-5 w-5 text-gray-400" />
              </div>
              <div className="absolute inset-y-0 right-3 flex items-center space-x-2">
                <Button size="sm" variant="ghost">
                  Project
                </Button>
                <Button size="icon" variant="ghost">
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/articles/citizenship-process"
              className="group rounded-lg border p-6 transition-colors hover:bg-gray-100"
            >
              <h2 className="mb-2 text-xl font-semibold">Гражданство</h2>
              <p className="text-gray-600">
                Процесс получения гражданства Сербии, от ВНЖ до паспорта
              </p>
              <ArrowUpRight className="mt-4 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/articles/buying-car-serbia"
              className="group rounded-lg border p-6 transition-colors hover:bg-gray-100"
            >
              <h2 className="mb-2 text-xl font-semibold">Покупка авто</h2>
              <p className="text-gray-600">
                Как купить и зарегистрировать автомобиль в Сербии
              </p>
              <ArrowUpRight className="mt-4 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/articles/renting-apartment-serbia"
              className="group rounded-lg border p-6 transition-colors hover:bg-gray-100"
            >
              <h2 className="mb-2 text-xl font-semibold">Аренда жилья</h2>
              <p className="text-gray-600">
                Руководство по поиску и аренде квартиры в Сербии
              </p>
              <ArrowUpRight className="mt-4 h-5 w-5 text-gray-400 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
              Built with Next.js and Tailwind CSS
            </p>
          </div>
          <nav className="flex items-center space-x-4 text-sm">
            <Link href="/pricing" className="text-gray-600 hover:underline">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-600 hover:underline">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:underline">
              Contact
            </Link>
            <Link href="/privacy" className="text-gray-600 hover:underline">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

