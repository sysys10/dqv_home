import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notosansKr = Noto_Sans_KR({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'DQV_HOME',
  description: 'SS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notosansKr.className} font-noto-sans-kr`}>{children}</body>
    </html>
  )
}
