/**
 * The ISC mark — the real logo, rebuilt as vector geometry with a physical,
 * 3D feel: an open book with a visible page block, three amber signal arcs
 * that radiate from behind it, and the organisation name curved around the
 * badge. Nothing here is a flat image import — every shape is drawn, and the
 * depth comes from extruded layers, gradients and a soft contact shadow.
 *
 *   viewBox    220 × 220
 *   badge      the wordmark rides the arc "International Study Council"
 *   signal     three rounded arcs, each with a darker extrusion beneath it
 *   book       cover (gradient) sitting on a cream page block, serif "I" on
 *              the spine dip
 *
 * `compact` drops the wordmark ring for small sizes (navigation), `animate`
 * plays the signal arcs drawing in and the book dropping onto the page.
 */

const WORD_ARC = 'M17.3 124.8 A96 96 0 0 1 202.7 124.8'

/** One signal arc: the extrusion underlay plus the gradient face. */
function SignalArc({ r, delay }: { r: number; delay: number }) {
  const cy = 112 - r * -0.4226
  const x = r * 0.9063
  const d = `M${(110 - x).toFixed(1)} ${cy.toFixed(1)} A${r} ${r} 0 0 1 ${(110 + x).toFixed(1)} ${cy.toFixed(1)}`
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
          <stop offset="0" stopColor="#33485E" />
          <stop offset="1" stopColor="#1F3049" />
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
            <textPath href="#iscl-word-arc" startOffset="50%" textAnchor="middle">
              International Study Council
            </textPath>
          </text>
        </>
      )}

      {/* Signal: three arcs, largest first so the smallest sits on top. */}
      <g filter="url(#iscl-shadow)">
        <SignalArc r={52} delay={0} />
        <SignalArc r={38} delay={140} />
        <SignalArc r={24} delay={280} />
      </g>

      {/* Book: page block, then the cover, then the serif "I". */}
      <g filter="url(#iscl-shadow)" className="iscl__book">
        {/* Cream page block — peeks out beneath and above the cover. */}
        <path
          className="iscl__pages"
          d="M44 108 L110 122 L176 108 L176 153 L110 167 L44 153 Z"
          fill="url(#iscl-page)"
        />
        {/* Navy cover with its vertical gradient. */}
        <path
          className="iscl__cover"
          d="M44 103 L110 117 L176 103 L176 141 L110 155 L44 141 Z"
          fill="url(#iscl-cover)"
        />
        {/* Cover edge highlight along the top pages. */}
        <path
          className="iscl__edge"
          d="M46 104.5 L110 118.5 L174 104.5"
          fill="none"
          stroke="#F4EDDD"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Spine fold shading. */}
        <path
          className="iscl__fold"
          d="M110 117 L110 155"
          fill="none"
          stroke="#0E1B2A"
          strokeWidth="1.6"
          opacity="0.35"
        />
        <text className="iscl__i" x="110" y="139" textAnchor="middle">
          I
        </text>
      </g>
    </svg>
  )
}
