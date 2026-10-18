/**
 * The ISC mark — the organisation's real logo, used as an image.
 *
 * Two crops of the same source artwork (WebP, transparent background):
 *
 *   • full   — the complete badge with the circular wordmark (hero)
 *   • compact— just the emblem: signal arcs over the open book, the ring of
 *              letters dropped because it is unreadable at nav sizes
 *
 * The PNG twins of both files are kept for the favicon and Open Graph cards,
 * where crawlers expect a raster image.
 */

export default function IscMark({
  label = 'International Study Council',
  animate = false,
  compact = false,
  className = '',
}: {
  label?: string
  animate?: boolean
  compact?: boolean
  className?: string
}) {
  return (
    <img
      className={`iscl${animate ? ' iscl--animate' : ''}${compact ? ' iscl--compact' : ''}${className ? ` ${className}` : ''}`}
      src={compact ? '/isc-mark.webp' : '/isc-logo.webp'}
      alt={label}
      width={compact ? 300 : 700}
      height={compact ? 339 : 543}
      loading="eager"
      decoding="async"
    />
  )
}
