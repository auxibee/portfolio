import type { Metadata } from 'next'

import '@/app/ui/global.css'


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
      <body>{children}</body>
    </html>
  )
}
