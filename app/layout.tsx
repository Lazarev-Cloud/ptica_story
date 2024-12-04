import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from './components/Header'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Птичьи перелеты - Жизнь в Сербии',
  description: 'Полезные статьи и руководства о жизни в Сербии: гражданство, покупка авто, аренда жилья и многое другое.',
  keywords: ['Сербия', 'иммиграция', 'гражданство', 'авто в Сербии', 'аренда в Сербии'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <footer className="border-t">
              <div className="container mx-auto px-4">
                <div className="flex h-14 items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Птичьи перелеты. Все права защищены.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}