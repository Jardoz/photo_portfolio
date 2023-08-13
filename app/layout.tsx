import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fresh.brand_',
  description: 'Fresh.brand photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx( inter.className, 'no-scrollbar')}>{children}</body>
    </html>
  )
}
