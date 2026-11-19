import type { MetadataRoute } from 'next'
import { getSettings } from '@/lib/kernel/content'
import { query } from '@/lib/kernel/db'
import { DEFAULT_LOCALE, LOCALES } from '@/lib/kernel/dictionary'

// Read the CMS on each request so newly published and unpublished content is
// reflected without another deployment.
export const dynamic = 'force-dynamic'

const ORIGIN = 'https://internationalstudycouncil.com'
const DETAIL_ROUTES: Record<string, string> = {
  universities: 'universities',
  scholarships: 'scholarships',
  countries: 'destinations',
  posts: 'blog',
}

type PageRow = { slug: string; updated_at: string | Date }
type EntryRow = PageRow & { collection: string }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [settings, pages, entries] = await Promise.all([
    getSettings(),
    query<PageRow>(
      `select p.slug, greatest(p.updated_at, max(b.updated_at)) as updated_at
         from pages p left join blocks b on b.page_id = p.id
        where p.status = 'published'
        group by p.id
        order by p.slug`,
    ),
    query<EntryRow>(
      `select collection, slug, updated_at from entries
        where status = 'published' and slug is not null and slug <> ''
          and collection = any($1::text[])
        order by collection, slug`,
      [Object.keys(DETAIL_ROUTES)],
    ),
  ])

  const enabled = settings.languages?.enabled || [DEFAULT_LOCALE]
  const locales = LOCALES.filter(({ code }) => code === DEFAULT_LOCALE || enabled.includes(code))
  const paths = new Map<string, string | Date>()

  for (const page of pages) {
    if (['admin', 'api', 'robots.txt', 'sitemap.xml'].includes(page.slug)) continue
    const path = page.slug === 'home' ? '/' : `/${encodeURIComponent(page.slug)}`
    paths.set(path, page.updated_at)
  }
  for (const entry of entries) {
    const route = DETAIL_ROUTES[entry.collection]
    paths.set(`/${route}/${encodeURIComponent(entry.slug)}`, entry.updated_at)
  }

  const urlFor = (locale: string, path: string) =>
    `${ORIGIN}${locale === DEFAULT_LOCALE ? '' : `/${locale}`}${path === '/' && locale !== DEFAULT_LOCALE ? '' : path}`

  return [...paths].flatMap(([path, updatedAt]) => {
    const date = new Date(updatedAt)
    const lastModified = Number.isFinite(date.getTime()) ? date : undefined
    const languages = Object.fromEntries([
      ...locales.map(({ code }) => [code, urlFor(code, path)]),
      ['x-default', urlFor(DEFAULT_LOCALE, path)],
    ])

    return locales.map(({ code }) => ({
      url: urlFor(code, path),
      lastModified,
      alternates: { languages },
    }))
  })
}
