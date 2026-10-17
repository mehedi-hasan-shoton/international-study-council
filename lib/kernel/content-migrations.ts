/**
 * Kernel · content migrations
 * ---------------------------------------------------------------------------
 * The first seed (`bootstrap.ts`) only runs when a table is empty, so content
 * changes made after launch would never reach an existing database. This
 * module is the second half of that story: a list of small, idempotent content
 * migrations that run once each, tracked in the `content_migrations` setting.
 *
 * Bootstrap (fresh installs) and these migrations share their content through
 * seed-updates.ts / seed-*.ts, so a brand-new database and an upgraded one
 * converge on the same state.
 */

import { raw, type Row } from './db'
import { id } from './ids'
import {
  HOME_BLOCKS,
  ABOUT_BLOCKS,
  SERVICES_BLOCKS,
  APPLY_BLOCKS,
  PLAN_BLOCKS,
  RESOURCES_PAGE,
  REAL_SERVICES,
  SOCIAL_SETTINGS,
  CONTACT_PATCH,
  CONTACT_BODY,
  CONTACT_FORM_DATA,
  NAV_TRANSLATIONS,
  CTA_TRANSLATIONS,
} from './seed-updates'
import { NEW_COUNTRIES } from './seed-countries'
import { UNIVERSITIES_A } from './seed-universities-a'
import { UNIVERSITIES_B } from './seed-universities-b'
import { UNIVERSITIES_C } from './seed-universities-c'

const KEY = 'content_migrations'

type BlockSeed = { type: string; data: Record<string, any> }
type PageSeed = {
  slug: string
  title: string
  seo_title: string
  seo_description: string
  show_in_nav: boolean
  nav_label: string
  nav_order: number
  blocks: BlockSeed[]
}
type EntrySeed = { slug: string; title: string; data: Record<string, any> }

/* ------------------------------- primitives ------------------------------- */

async function appliedMigrations(): Promise<string[]> {
  const res = await raw(`select value from settings where key = $1`, [KEY])
  const value = (res.rows[0] as Row | undefined)?.value
  return Array.isArray(value?.applied) ? (value.applied as string[]) : []
}

async function markApplied(applied: string[]): Promise<void> {
  await raw(
    `insert into settings (key, value) values ($1, $2::jsonb)
     on conflict (key) do update set value = $2::jsonb`,
    [KEY, JSON.stringify({ applied })],
  )
}

async function pageId(slug: string): Promise<number | null> {
  const res = await raw(`select id from pages where slug = $1`, [slug])
  const row = res.rows[0] as Row | undefined
  return row ? Number(row.id) : null
}

async function writeBlocks(pageId: number, blocks: BlockSeed[]): Promise<void> {
  await raw(`delete from blocks where page_id = $1`, [pageId])
  let position = 0
  for (const block of blocks) {
    await raw(
      `insert into blocks (id, page_id, type, position, enabled, data)
       values ($1, $2, $3, $4, true, $5::jsonb)`,
      [id('blk'), pageId, block.type, position++, JSON.stringify(block.data)],
    )
  }
}

/** Replace a page's whole block stack (idempotent; guarded by the marker). */
async function replaceBlocks(slug: string, blocks: BlockSeed[]): Promise<void> {
  const pid = await pageId(slug)
  if (!pid) return
  await writeBlocks(pid, blocks)
}

async function updatePage(slug: string, patch: Record<string, any>): Promise<void> {
  const entries = Object.entries(patch)
  if (!entries.length) return
  const sets = entries.map(([key], index) => `${key} = $${index + 1}`)
  const params = [...entries.map(([, value]) => value), slug]
  await raw(`update pages set ${sets.join(', ')} where slug = $${params.length}`, params)
}

async function insertPageIfMissing(page: PageSeed): Promise<void> {
  if (await pageId(page.slug)) return
  const inserted = await raw(
    `insert into pages (slug, title, seo_title, seo_description, status, show_in_nav, nav_label, nav_order)
     values ($1, $2, $3, $4, 'published', $5, $6, $7) returning id`,
    [page.slug, page.title, page.seo_title, page.seo_description, page.show_in_nav, page.nav_label, page.nav_order],
  )
  await writeBlocks(Number((inserted.rows[0] as Row).id), page.blocks)
}

/** Merge a patch into the first block of a given type on a page. */
async function patchBlockData(slug: string, type: string, patch: Record<string, any>): Promise<void> {
  const pid = await pageId(slug)
  if (!pid) return
  const res = await raw(`select id, data from blocks where page_id = $1 and type = $2 order by position limit 1`, [pid, type])
  const row = res.rows[0] as Row | undefined
  if (!row) return
  const data = { ...((row.data as Record<string, any>) || {}), ...patch }
  await raw(`update blocks set data = $2::jsonb where id = $1`, [String(row.id), JSON.stringify(data)])
}

/** Replace every entry in a collection with the given list. */
async function replaceCollection(collection: string, items: EntrySeed[]): Promise<void> {
  await raw(`delete from entries where collection = $1`, [collection])
  let position = 0
  for (const item of items) {
    await raw(
      `insert into entries (id, collection, slug, title, status, position, data)
       values ($1, $2, $3, $4, 'published', $5, $6::jsonb)
       on conflict do nothing`,
      [id('ent'), collection, item.slug, item.title, position++, JSON.stringify(item.data)],
    )
  }
}

/** Add entries that do not exist yet, keeping existing ones untouched. */
async function addEntriesIfMissing(collection: string, items: EntrySeed[]): Promise<void> {
  let position = 0
  for (const item of items) {
    const existing = await raw(`select id from entries where collection = $1 and slug = $2`, [collection, item.slug])
    if (existing.rows.length) continue
    await raw(
      `insert into entries (id, collection, slug, title, status, position, data)
       values ($1, $2, $3, $4, 'published', $5, $6::jsonb)
       on conflict do nothing`,
      [id('ent'), collection, item.slug, item.title, position++, JSON.stringify(item.data)],
    )
  }
}

/** Merge a patch into a jsonb settings row, preserving owner edits. */
async function patchSetting(key: string, patch: Record<string, any>): Promise<void> {
  const res = await raw(`select value from settings where key = $1`, [key])
  const current = ((res.rows[0] as Row | undefined)?.value || {}) as Record<string, any>
  const next = { ...current, ...patch }
  await raw(
    `insert into settings (key, value) values ($1, $2::jsonb)
     on conflict (key) do update set value = $2::jsonb`,
    [key, JSON.stringify(next)],
  )
}

async function setTranslation(locale: string, key: string, value: string): Promise<void> {
  await raw(
    `insert into translations (locale, key, value) values ($1, $2, $3)
     on conflict (locale, key) do update set value = excluded.value`,
    [locale, key, value],
  )
}

/* ------------------------------- migrations ------------------------------- */

const NEW_UNIVERSITIES: EntrySeed[] = [
  ...UNIVERSITIES_A,
  ...UNIVERSITIES_B,
  ...UNIVERSITIES_C,
].map((entry) => ({ slug: entry.slug, title: entry.name, data: entry.data }))

const NEW_DESTINATIONS: EntrySeed[] = NEW_COUNTRIES.map((entry) => ({
  slug: entry.slug,
  title: entry.name,
  data: entry.data,
}))

const MIGRATIONS: Array<{ id: string; run: () => Promise<void> }> = [
  {
    id: '2026-10-17a-home-booking-cta',
    run: () => replaceBlocks('home', HOME_BLOCKS),
  },
  {
    id: '2026-10-17b-nav-who-we-are',
    run: async () => {
      await updatePage('about', { show_in_nav: true, nav_label: 'Who we are', nav_order: 1 })
      await updatePage('plan', { show_in_nav: false })
      for (const [locale, key, value] of NAV_TRANSLATIONS) {
        await setTranslation(locale, key, value)
      }
    },
  },
  {
    id: '2026-10-17c-about-mission',
    run: () => replaceBlocks('about', ABOUT_BLOCKS),
  },
  {
    id: '2026-10-17d-resources-page',
    run: async () => {
      await insertPageIfMissing(RESOURCES_PAGE)
      await updatePage('contact', { nav_order: 6 })
    },
  },
  {
    id: '2026-10-17e-real-fees',
    run: () => replaceCollection('services', REAL_SERVICES),
  },
  {
    id: '2026-10-17f-services-payment',
    run: () => replaceBlocks('services', SERVICES_BLOCKS),
  },
  {
    id: '2026-10-17g-expand-directories',
    run: async () => {
      await addEntriesIfMissing('universities', NEW_UNIVERSITIES)
      await addEntriesIfMissing('countries', NEW_DESTINATIONS)
    },
  },
  {
    id: '2026-10-17h-business-settings',
    run: async () => {
      await patchSetting('social', SOCIAL_SETTINGS)
      await patchSetting('contact', CONTACT_PATCH)
    },
  },
  /* ---- second pass: the fee document is the single source of truth ------ */
  {
    id: '2026-10-17i-home-copy',
    run: () => replaceBlocks('home', HOME_BLOCKS),
  },
  {
    id: '2026-10-17j-apply-consultation',
    run: async () => {
      await replaceBlocks('apply', APPLY_BLOCKS)
      await updatePage('apply', {
        title: 'Book a consultation',
        seo_title: 'Book a consultation — International Study Council',
        seo_description:
          'Tell us about your background and what you need help with. An advisor reads every submission and replies within one working day.',
      })
    },
  },
  {
    id: '2026-10-17k-services-fee-copy',
    run: () => replaceBlocks('services', SERVICES_BLOCKS),
  },
  {
    id: '2026-10-17l-fee-list-six',
    run: () => replaceCollection('services', REAL_SERVICES),
  },
  {
    id: '2026-10-17m-plan-copy',
    run: () => replaceBlocks('plan', PLAN_BLOCKS),
  },
  {
    id: '2026-10-17n-contact-copy',
    run: async () => {
      await updatePage('contact', { seo_description: 'Book a consultation, or reach us on WhatsApp.' })
      await patchBlockData('contact', 'contactForm', { title: 'Book a consultation' })
      await patchBlockData('contact', 'richtext', { body: CONTACT_BODY })
    },
  },
  {
    id: '2026-10-17o-cta-label',
    run: async () => {
      for (const [locale, key, value] of CTA_TRANSLATIONS) {
        await setTranslation(locale, key, value)
      }
    },
  },
  {
    id: '2026-10-17p-contact-details',
    run: () => patchSetting('contact', CONTACT_PATCH),
  },
  {
    id: '2026-10-17q-page-seo',
    run: async () => {
      await updatePage('home', {
        seo_title: 'International Study Council — Study abroad, made clear',
        seo_description:
          'Independent advisors for university admission, scholarships and student visas. Six services, priced individually.',
      })
      await updatePage('about', {
        title: 'Who we are',
        seo_title: 'Who we are — International Study Council',
        seo_description: 'The mission, vision, core values and team behind International Study Council.',
      })
    },
  },
  {
    id: '2026-10-17r-contact-header',
    run: async () => {
      await patchBlockData('contact', 'pageHeader', { title: 'Book a consultation' })
      await patchBlockData('contact', 'contactForm', CONTACT_FORM_DATA)
    },
  },
]

/**
 * Apply every migration that has not run yet. Never throws into the request
 * path: a failed migration is logged loudly and the site keeps serving, so a
 * content problem can never take the whole site down.
 */
export async function applyContentMigrations(): Promise<void> {
  const applied = await appliedMigrations()
  const pending = MIGRATIONS.filter((migration) => !applied.includes(migration.id))
  if (!pending.length) return

  const done = [...applied]
  for (const migration of pending) {
    try {
      await migration.run()
      done.push(migration.id)
      await markApplied(done)
      console.info(`[content-migrations] applied ${migration.id}`)
    } catch (error) {
      console.error(`[content-migrations] ${migration.id} failed:`, error)
    }
  }
}
