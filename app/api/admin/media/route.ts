import { bad, guard, ok } from '@/lib/kernel/api'
import { deleteMedia, listMedia } from '@/lib/kernel/content'
import { query } from '@/lib/kernel/db'

export async function GET() {
  const g = await guard()
  if ('response' in g) return g.response
  return ok({ media: await listMedia(80) })
}

/** Remove a file from the library — and from Vercel Blob when one is configured. */
export async function DELETE(request: Request) {
  const g = await guard()
  if ('response' in g) return g.response
  const id = new URL(request.url).searchParams.get('id') || ''
  if (!id) return bad('id is required')

  const rows = await query<{ id: string; url: string }>(`select id, url from media where id = $1`, [id])
  const row = rows[0]
  if (!row) return bad('Not found', 404)

  await deleteMedia(id)

  /* The record is gone either way; dropping the stored file is best effort. */
  const token = process.env.BLOB_READ_WRITE_TOKEN
  if (token && /blob\.vercel-storage\.com/.test(row.url)) {
    try {
      const pathname = new URL(row.url).pathname
      await fetch(`https://blob.vercel-storage.com${pathname}`, {
        method: 'DELETE',
        headers: { authorization: `Bearer ${token}` },
      })
    } catch {
      /* ignore — the library entry is already removed */
    }
  }
  return ok()
}
