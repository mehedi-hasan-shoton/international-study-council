'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export type MediaItem = {
  id: string
  url: string
  filename: string
  alt: string
  size: number
  created_at: string
}

/**
 * The media library: thumbnails, one-click link copying, and a delete that
 * asks before it removes anything still referenced by a page.
 */
export default function MediaGrid({ items }: { items: MediaItem[] }) {
  const router = useRouter()
  const [busy, setBusy] = useState('')
  const [copied, setCopied] = useState('')

  const copy = async (url: string, id: string) => {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      /* clipboard blocked — the URL is still shown in the title attribute */
    }
    setCopied(id)
    window.setTimeout(() => setCopied(''), 1600)
  }

  const remove = async (item: MediaItem) => {
    const name = item.filename || 'this file'
    const ok = window.confirm(
      `Delete “${name}”? Anything still using this image will show a broken picture until you replace it.`,
    )
    if (!ok) return
    setBusy(item.id)
    try {
      await fetch(`/api/admin/media?id=${encodeURIComponent(item.id)}`, { method: 'DELETE' })
      router.refresh()
    } finally {
      setBusy('')
    }
  }

  return (
    <div className="mgrid">
      {items.map((item) => (
        <figure className="mgrid__item" key={item.id}>
          <div className="mgrid__thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.url} alt={item.alt || item.filename} loading="lazy" title={item.url} />
          </div>
          <figcaption className="mgrid__meta">
            <span className="mgrid__name">{item.filename || 'file'}</span>
            <span className="mgrid__size">{item.size ? `${Math.max(1, Math.round(item.size / 1024))} KB` : '—'}</span>
          </figcaption>
          <div className="mgrid__actions">
            <button type="button" className="adm-btn adm-btn--sm" onClick={() => copy(item.url, item.id)}>
              {copied === item.id ? 'Copied' : 'Copy link'}
            </button>
            <button
              type="button"
              className="adm-btn adm-btn--sm adm-btn--danger"
              disabled={busy === item.id}
              onClick={() => remove(item)}
            >
              {busy === item.id ? 'Deleting…' : 'Delete'}
            </button>
          </div>
        </figure>
      ))}
    </div>
  )
}
