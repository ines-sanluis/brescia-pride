import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
    return (
        <>
        <style jsx global>{`
            html {
            font-family: ${inter.style.fontFamily};
            }
        `}</style>
        <Component {...pageProps} />
        <Analytics />
        </>
    )
}