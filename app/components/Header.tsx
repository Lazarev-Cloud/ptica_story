"use client"

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'

const navigationLinks = [
  { href: "/", label: "Главная" },
  { href: "/articles", label: "Статьи" },
  { href: "#citizenship", label: "Гражданство" },
  { href: "#car", label: "Покупка авто" },
  { href: "#apartment", label: "Аренда жилья" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo or Brand */}
          <Link 
            href="/" 
            className="text-xl font-semibold"
          >
            Птичьи перелеты
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:space-x-6">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="border-t py-4">
              <ul className="space-y-4">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}