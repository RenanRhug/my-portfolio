import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.scss'

const inter = Poppins({ subsets: ['latin'], weight:['300','400', '500','600']})

export const metadata: Metadata = {
  title: 'Renan Hugentobler',
  description: 'Renan Hugentobler software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
