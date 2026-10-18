/**
 * The ISC mark — the organisation's real logo, used as an image.
 *
 * Two crops of the same source artwork (public/isc-logo.png, transparent):
 *
 *   • full   — the complete badge with the circular wordmark (hero, footer,
 *              Open Graph, favicon)
 *   • compact— just the emblem: signal arcs over the open book, the ring of
 *              letters dropped because it is unreadable at nav sizes
 *
 * `animate` fades the mark in; nothing here is drawn, the artwork is the
 * organisation's own.
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
      src={compact ? '/isc-mark.png' : '/isc-logo.png'}
      alt={label}
      width={compact ? 585 : 1249}
      height={compact ? 662 : 970}
      decoding="async"
    />
  )
}
