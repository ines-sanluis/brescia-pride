import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
    <html lang="it">
      <body 
        className={`
        ${inter.className} 
        bg-neutral-200
        `}
      >
        <main className="md:max-w-7xlmx-auto
        px-2">
          {children}
        </main>
      </body>
    </html>
  )
}
