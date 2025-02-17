import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import Provider from './provider'

import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lite Tech',
  description: 'Lite Tech Blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
