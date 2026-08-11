// Inline SVG sprite for the custom concept icons used by tech-stack chips.
// Referenced elsewhere via <svg><use href="#g-..." /></svg>.
export default function Glyphs() {
  return (
    <svg className="glyphs" aria-hidden="true">
      <symbol id="g-responsive" viewBox="0 0 24 24">
        <rect x="2" y="4" width="12" height="16" rx="1.5" />
        <rect x="15" y="9" width="7" height="11" rx="1.5" />
      </symbol>
      <symbol id="g-api" viewBox="0 0 24 24">
        <path d="M3 9h13l-3.5-3.5M21 15H8l3.5 3.5" />
      </symbol>
      <symbol id="g-async" viewBox="0 0 24 24">
        <path d="M20 12a8 8 0 1 1-2.4-5.7" />
        <path d="M20 3.5V8h-4.5" />
      </symbol>
      <symbol id="g-search" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6" />
        <path d="M20 20l-4.6-4.6" />
        <circle cx="11" cy="11" r="1.4" />
      </symbol>
      <symbol id="g-doc" viewBox="0 0 24 24">
        <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z" />
        <path d="M14 3v5h5" />
        <path d="M8.5 13h7M8.5 17h4.5" />
      </symbol>
      <symbol id="g-scan" viewBox="0 0 24 24">
        <path d="M3 8V5.5A2.5 2.5 0 0 1 5.5 3H8M21 8V5.5A2.5 2.5 0 0 0 18.5 3H16M3 16v2.5A2.5 2.5 0 0 0 5.5 21H8M21 16v2.5A2.5 2.5 0 0 1 18.5 21H16" />
        <path d="M4 12h16" />
      </symbol>
      <symbol id="g-db" viewBox="0 0 24 24">
        <ellipse cx="12" cy="6" rx="7.5" ry="3" />
        <path d="M4.5 6v12c0 1.65 3.36 3 7.5 3s7.5-1.35 7.5-3V6" />
        <path d="M4.5 12c0 1.65 3.36 3 7.5 3s7.5-1.35 7.5-3" />
      </symbol>
      <symbol id="g-pipeline" viewBox="0 0 24 24">
        <circle cx="5" cy="6" r="2.4" />
        <circle cx="5" cy="18" r="2.4" />
        <circle cx="19" cy="12" r="2.4" />
        <path d="M7.4 6h4.1a3 3 0 0 1 3 3v.8M7.4 18h4.1a3 3 0 0 0 3-3v-.8" />
      </symbol>
      <symbol id="g-spark" viewBox="0 0 24 24">
        <path d="M11 3l1.7 4.8L17.5 9.5l-4.8 1.7L11 16l-1.7-4.8L4.5 9.5l4.8-1.7z" />
        <path d="M18 15.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z" />
      </symbol>
    </svg>
  )
}
