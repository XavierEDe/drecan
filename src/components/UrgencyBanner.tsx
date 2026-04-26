const message = "Lock-in closes October 2026 or when 450,000 packages are sold — Don't miss out!"
const items = Array(6).fill(message)

export default function UrgencyBanner() {
  return (
    <div className="bg-forest-700 text-white py-2.5 overflow-hidden border-b border-forest-600">
      <div className="ticker-wrap">
        <div className="ticker font-body font-bold text-sm tracking-wide">
          {items.map((item, i) => (
            <span key={i} className="mx-12 inline-block">{item}</span>
          ))}
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="mx-12 inline-block">{item}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
