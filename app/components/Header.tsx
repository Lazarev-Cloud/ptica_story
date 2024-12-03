import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="hover:underline text-lg">Главная</Link></li>
          <li><Link href="/articles" className="hover:underline text-lg">Статьи</Link></li>
          <li><Link href="#citizenship" className="hover:underline text-lg">Гражданство</Link></li>
          <li><Link href="#car" className="hover:underline text-lg">Покупка авто</Link></li>
          <li><Link href="#apartment" className="hover:underline text-lg">Аренда жилья</Link></li>
        </ul>
      </nav>
    </header>
  )
}

