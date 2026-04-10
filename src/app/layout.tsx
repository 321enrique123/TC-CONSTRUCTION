import type { Metadata } from 'next'
import { Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://buildwithtc.com'),
  title: {
    default: 'TC Construction | Contractor for Remodels & Commercial Builds',
    template: '%s | TC Construction',
  },
  description:
    'TC Construction is a family-owned general contractor specializing in interior remodels, commercial construction, additions, kitchen & bath, framing, and custom builds. Licensed & insured.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TC Construction',
    images: ['/assets/wide-industrial.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${inter.variable}`}>
      <body className="bg-charcoal text-offwhite font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
