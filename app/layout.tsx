import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Barlow } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingInquiry } from '@/components/floating-inquiry'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const SITE_URL = 'https://www.lixingprinting.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Lixing Packaging | Custom Flexible Packaging Bags & Films Manufacturer',
    template: '%s | Lixing Packaging',
  },
  description:
    'CHAOZHOU CHAOAN LIXING PACKAGING CO., LTD. is a China-based manufacturer of custom flexible packaging bags and films for food, pet food, daily chemicals, seasonings and baking. OEM/ODM, full export qualification, 300 tons monthly capacity.',
  keywords: [
    'flexible packaging',
    'packaging bags',
    
    'packaging film',
    'stand-up pouch',
    'custom packaging manufacturer',
    'OEM packaging',
    'ODM packaging',
    'food packaging',
    'pet food packaging',
    'China packaging factory',
  ],
  authors: [{ name: 'Lixing Packaging' }],
  generator: 'v0.app',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Lixing Packaging',
    title:
      'Lixing Packaging | Custom Flexible Packaging Bags & Films Manufacturer',
    description:
      'Custom flexible packaging bags and films for food, pet food, daily chemicals and more. OEM/ODM, full export qualification, exported to Southeast Asia, Europe and America.',
    images: [
      {
        url: '/images/hero-bags.png',
        width: 1200,
        height: 630,
        alt: 'Custom flexible packaging pouches by Lixing Packaging',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lixing Packaging | Custom Flexible Packaging Manufacturer',
    description:
      'Custom flexible packaging bags and films. OEM/ODM, full export qualification.',
    images: ['/images/hero-bags.png'],
  },
  icons: {
    icon: '/favicon.jpg',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1863b0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${inter.variable} ${barlow.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        <FloatingInquiry />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
