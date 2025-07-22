import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mohammad',
  description: 'Created by Mohammad',
  generator: 'Mohammad',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
