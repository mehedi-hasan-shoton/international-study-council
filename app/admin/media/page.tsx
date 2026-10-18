import { listMedia } from '@/lib/kernel/content'
import MediaGrid from '@/components/admin/MediaGrid'

export const dynamic = 'force-dynamic'

/**
 * The media library. Files arrive here whenever one is uploaded through an
 * image field on a page or in a collection — this page is where they can be
 * reviewed, linked to, and deleted.
 */
export default async function AdminMediaPage() {
  const media = await listMedia(240)

  return (
    <>
      <div className="adm-bar">
        <div className="adm-bar__left">
          <span className="adm-bar__title">Media library</span>
          <span className="adm-bar__sub">
            Every file uploaded through an image field lands here — copy a link to reuse it anywhere
          </span>
        </div>
      </div>

      <div className="adm-body">
        {media.length ? (
          <MediaGrid items={media} />
        ) : (
          <p className="adm-hint">
            Nothing uploaded yet. Open any page or record, edit an image field, and upload a file — it
            will appear here straight away.
          </p>
        )}
      </div>
    </>
  )
}
