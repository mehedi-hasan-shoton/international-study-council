/**
 * The ISC mark — the real logo, rebuilt as vector geometry with a physical,
 * 3D feel: an open book with a visible page block, three amber signal arcs
 * that radiate from behind it, and the organisation name curved around the
 * badge. Nothing here is a flat image import — every shape is drawn, and the
 * depth comes from extruded layers, gradients and a soft contact shadow.
 *
 *   viewBox    220 × 220
 *   badge      the wordmark rides ~205° of arc — "International Study Council"
 *   signal     three rounded arcs, each with a darker extrusion beneath it
 *   book       cover (gradient) sitting on a cream page block, page-edge
 *              stripes on the left page, serif "I" on the spine dip
 *
 * `compact` drops the wordmark ring for small sizes (navigation), `animate`
 * plays the signal arcs drawing in and the book dropping onto the page.
 */

/** The arc the wordmark rides: 205° over the top, centred. */
const WORD_ARC = 'M18.3 137.1 A96 96 0 1 1 201.7 137.1'

/** One signal arc: the extrusion underlay plus the gradient face. */
function SignalArc({ r, delay }: { r: number; delay: number }) {
  // 205° → 335°: cos(205°) = -0.9063, sin(205°) = -0.4226
  const dx = r * 0.9063
  const dy = r * -0.4226
  const x1 = 110 - dx
  const x2 = 110 + dx
  const y = 112 + dy
  const d = `M${x1.toFixed(1)} ${y.toFixed(1)} A${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y.toFixed(1)}`
  return (
    <g className="iscl__signal">
      {/* Extrusion: the same arc pushed down, in the amber's dark side. */}
      <path className="iscl__arc iscl__arc--depth" d={d} pathLength={100} transform="translate(0 4.5)" />
      <path
        className="iscl__arc iscl__arc--face"
        d={d}
        pathLength={100}
        style={{ '--d': `${delay}ms` } as React.CSSProperties}
      />
    </g>
  )
}

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
    <svg
      className={`iscl${animate ? ' iscl--animate' : ''}${compact ? ' iscl--compact' : ''}${className ? ` ${className}` : ''}`}
      viewBox="0 0 220 220"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <title>{label}</title>
      <defs>
        <linearGradient id="iscl-cover" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22364C" />
          <stop offset="1" stopColor="#1A2A3E" />
        </linearGradient>
        <linearGradient id="iscl-side" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#16273A" />
          <stop offset="1" stopColor="#101D2E" />
        </linearGradient>
        <linearGradient id="iscl-amber" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#F8BB58" />
          <stop offset="0.52" stopColor="#F4961F" />
          <stop offset="1" stopColor="#E4831A" />
        </linearGradient>
        <linearGradient id="iscl-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FCF8F0" />
          <stop offset="1" stopColor="#EBE1CE" />
        </linearGradient>
        <filter id="iscl-shadow" x="-40%" y="-40%" width="180%" height="190%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0D1B2A" floodOpacity="0.26" />
        </filter>
      </defs>

      {/* The wordmark rides the badge arc. Hidden in compact mode. */}
      {compact ? null : (
        <>
          <path id="iscl-word-arc" d={WORD_ARC} fill="none" stroke="none" />
          <text className="iscl__word">
            <textPath href="#iscl-word-arc" startOffset="50%" text-anchor="middle">
              International Study Council
            </textPath>
          </text>
        </>
      )}

      {/* Signal: three arcs, largest first so the smallest sits on top. */}
      <g filter="url(#iscl-shadow)">
        <SignalArc r={44} delay={0} />
        <SignalArc r={32} delay={140} />
        <SignalArc r={21} delay={280} />
      </g>

      {/* Book: page block, then the cover, then the serif "I". */}
      <g filter="url(#iscl-shadow)" className="iscl__book">
        {/* Cream page block — peeks out beneath and above the cover. */}
        <path
          className="iscl__pages"
          d="M34 106 L110 122 L186 106 L186 156 L110 172 L34 156 Z"
          fill="url(#iscl-page)"
        />
        {/* Navy cover with its vertical gradient. */}
        <path
          className="iscl__cover"
          d="M34 100 L110 116 L186 100 L186 146 L110 162 L34 146 Z"
          fill="url(#iscl-cover)"
        />
        {/* Page-edge stripes along the left page's top surface. */}
        <g className="iscl__stripes" stroke="#F4EDDD" strokeWidth="1.5" strokeLinecap="round" opacity="0.9">
          <path d="M46 108.5 L106 123.5" />
          <path d="M48 113 L104 128" />
          <path d="M50 117.5 L102 132.5" />
        </g>
        {/* Cover edge highlight along the top pages. */}
        <path
          className="iscl__edge"
          d="M36 101.5 L110 117.5 L184 101.5"
          fill="none"
          stroke="#F4EDDD"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Spine fold shading. */}
        <path
          className="iscl__fold"
          d="M110 116 L110 162"
          fill="none"
          stroke="#0E1B2A"
          strokeWidth="1.6"
          opacity="0.35"
        />
        <text className="iscl__i" x="110" y="140" text-anchor="middle">
          I
        </text>
      </g>
    </svg>
  )
}
