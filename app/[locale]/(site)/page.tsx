import PageBody from '@/components/PageBody'
import { getSettings } from '@/lib/kernel/content'
import { brandStructuredData, jsonLd, publicMetadata } from '@/lib/seo'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const settings = await getSettings()
  return publicMetadata({
    settings, locale, path: '/',
    title: settings.seo.default_title || settings.identity.site_name,
    description: settings.seo.default_description || settings.identity.description,
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const settings = await getSettings()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(brandStructuredData(settings)) }} />
      <PageBody slug="home" locale={locale} />
    </>
  )
}
