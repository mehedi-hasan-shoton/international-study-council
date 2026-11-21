import type { Metadata } from 'next'
import { DEFAULT_LOCALE, LOCALES, isLocale } from '@/lib/kernel/dictionary'
import type { SiteSettings } from '@/lib/kernel/types'

// The public domain stays the same on preview and production deployments.
export const SITE_ORIGIN = 'https://internationalstudycouncil.com'

export function enabledLocales(settings: SiteSettings) {
  const enabled = settings.languages?.enabled || [DEFAULT_LOCALE]
  return LOCALES.filter(({ code }) => code === DEFAULT_LOCALE || enabled.includes(code))
}

export function publicUrl(locale: string, path: string) {
  const code = isLocale(locale) ? locale : DEFAULT_LOCALE
  const prefix = code === DEFAULT_LOCALE ? '' : `/${code}`
  return `${SITE_ORIGIN}${prefix}${path === '/' && prefix ? '' : path}`
}

export function publicMetadata({
  settings, locale, path, title, description,
}: {
  settings: SiteSettings
  locale: string
  path: string
  title: string
  description?: string
}): Metadata {
  const brand = settings.identity.site_name
  const fullTitle = title.toLowerCase().includes(brand.toLowerCase()) ? title : `${title} · ${brand}`
  const summary = description || settings.seo.default_description || settings.identity.description
  const canonical = publicUrl(locale, path)
  const languages = Object.fromEntries([
    ...enabledLocales(settings).map(({ code }) => [code, publicUrl(code, path)]),
    ['x-default', publicUrl(DEFAULT_LOCALE, path)],
  ])

  return {
    title: { absolute: fullTitle },
    description: summary,
    alternates: { canonical, languages },
    openGraph: {
      title: fullTitle, description: summary, url: canonical,
      siteName: brand, type: 'website', images: [`${SITE_ORIGIN}/isc-logo.png`],
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description: summary, images: [`${SITE_ORIGIN}/isc-logo.png`] },
  }
}

export function brandStructuredData(settings: SiteSettings) {
  const { identity, contact, social, seo } = settings
  const name = identity.site_name
  const description = identity.description || seo.default_description
  const sameAs = [...new Set(Object.values(social).filter((value) => {
    try {
      const url = new URL(value)
      return ['https:', 'http:'].includes(url.protocol) && url.pathname !== '/'
    } catch {
      return false
    }
  }))]
  const organizationId = `${SITE_ORIGIN}/#organization`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': organizationId,
        name, ...(identity.site_short ? { alternateName: identity.site_short } : {}),
        url: `${SITE_ORIGIN}/`, logo: `${SITE_ORIGIN}/isc-logo.png`,
        ...(description ? { description } : {}),
        ...(contact.email ? { email: contact.email } : {}),
        ...(contact.phone ? { telephone: contact.phone } : {}),
        ...(contact.address ? { address: contact.address } : {}),
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        '@type': 'WebSite', '@id': `${SITE_ORIGIN}/#website`,
        name, ...(identity.site_short ? { alternateName: identity.site_short } : {}),
        url: `${SITE_ORIGIN}/`, publisher: { '@id': organizationId },
        inLanguage: enabledLocales(settings).map(({ code }) => code),
      },
    ],
  }
}

/** CMS strings must stay JSON data even when they contain HTML characters. */
export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
