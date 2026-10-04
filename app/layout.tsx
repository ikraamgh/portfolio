import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ikram Ghiouan Soussi — Full Stack Developer & AI Enthusiast',
  description:
    'Portfolio of Ikram Ghiouan Soussi, a Full Stack Developer and AI Enthusiast based in Tangier, Morocco. Experienced in Laravel, React, Node.js and building AI-powered backend services.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'AI Developer',
    'Laravel',
    'React',
    'Node.js',
    'Python',
    'FastAPI',
    'Tangier',
    'Morocco',
    'Ikram Ghiouan Soussi',
  ],
  authors: [{ name: 'Ikram Ghiouan Soussi' }],
  generator: 'v0.app',
  openGraph: {
    title: 'Ikram Ghiouan Soussi — Full Stack Developer & AI Enthusiast',
    description:
      'Full Stack Developer & AI Enthusiast based in Tangier, Morocco. Building practical, scalable and user-focused digital solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1220',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
