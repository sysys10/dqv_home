import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notosansKr = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
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
      <body className={`${notosansKr.variable} font-noto-sans-kr`}>{children}</body>
    </html>
  )
}
