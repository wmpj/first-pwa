import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import BlockEvent from '@/components/BlockEvent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My PWA',
  description: 'This is PWA',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <BlockEvent />
      <body className={`${inter.className} min-h-screen max-h-screen`}>{children}</body>
    </html>
  )
}
