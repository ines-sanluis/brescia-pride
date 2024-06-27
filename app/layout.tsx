import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StickyCountdown from './ui/countdown'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brescia Pride',
  description: 'La cultura si fa insieme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`
        ${inter.className} 
        bg-neutral-200
        `}
      >
        <StickyCountdown  />
        <main className="md:max-w-7xlmx-auto
        px-2">
          {children}
        </main>
      </body>
    </html>
  )
}
