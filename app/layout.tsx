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
    <html lang="en">
      <body 
        className={`
        ${inter.className} 
        bg-neutral-50 
        bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] 
        max-w-7xl
        mx-auto
        `}
      >
        {children}</body>
    </html>
  )
}
