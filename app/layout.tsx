import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getSettings } from '@/lib/kernel/content'
import { SITE_ORIGIN } from '@/lib/seo'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  const title = settings.seo.default_title || settings.identity.site_name
  const description = settings.seo.default_description || settings.identity.description
  return {
    title: { default: title, template: `%s · ${settings.identity.site_name}` },
    description,
    metadataBase: new URL(SITE_ORIGIN),
    openGraph: { title, description, type: 'website', siteName: settings.identity.site_name, images: ['/isc-logo.png'] },
    twitter: { card: 'summary_large_image', title, description, images: ['/isc-logo.png'] },
    icons: { icon: '/isc-mark.png', apple: '/isc-mark.png' },
  }
}

/**
 * The middleware resolves the locale and passes it down as a request header, so
 * the document element can carry the right `lang` and `dir` — Arabic needs RTL
 * from the very first paint, not after hydration.
 */
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const head = await headers()
  const locale = head.get('x-isc-locale') || 'en'
  const dir = head.get('x-isc-dir') || 'ltr'

  return (
    <html lang={locale} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500&family=JetBrains+Mono:wght@400;500&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
