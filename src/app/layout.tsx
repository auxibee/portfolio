import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Auxibee | Portfolio',
  description: 'A personal site by Auxibee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'text-gray-700')}>{children}</body>
    </html>
  )
}
