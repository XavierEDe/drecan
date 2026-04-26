import { MapPin, Package, Calendar, Lock } from 'lucide-react'

const stats = [
  { icon: Package, value: '450,000', label: 'Packages Available', color: 'gold' },
  { icon: MapPin, value: '37', label: 'States + FCT Covered', color: 'forest' },
  { icon: Calendar, value: 'Nov–Dec', label: 'Collection Window 2026', color: 'gold' },
  { icon: Lock, value: 'Oct 2026', label: 'Lock-in Deadline', color: 'forest' },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="section-tag">About the Campaign</span>
            <h2 className="section-heading mb-6">
              A nationwide mission to feed
              <span className="text-forest-600 italic"> every Nigerian family</span> this festive season
            </h2>
            <div className="space-y-4 font-body text-gray-600 text-base leading-relaxed">
              <p>
                <strong className="text-forest-800">Project Feed The Nation</strong> is Drecan Commodities
                Limited's boldest initiative to date — a nationwide festive food campaign that puts
                premium groceries within reach of every Nigerian household, regardless of where they live.
              </p>
              <p>
                With food inflation making Christmas increasingly unaffordable, Drecan has negotiated
                direct from farms and manufacturers to package high-quality items at prices that were
                simply impossible to achieve in a normal market.
              </p>
              <p>
                By paying now or beginning an instalment plan, you lock in today's price. Drecan
                reserves your complete package and you collect it at a designated hub close to you
                between late November and <strong className="text-forest-700">20th December 2026.</strong>
              </p>
              <p className="text-sm text-gray-500 italic border-l-2 border-gold-400 pl-4">
                The lock-in window closes in October 2026 or when all 450,000 packages are sold.
                First come, first served.
              </p>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-2xl p-6 border-2 ${
                  stat.color === 'gold'
                    ? 'bg-gold-50 border-gold-200'
                    : 'bg-forest-50 border-forest-200'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    stat.color === 'gold'
                      ? 'bg-gold-200 text-gold-700'
                      : 'bg-forest-200 text-forest-700'
                  }`}
                >
                  <stat.icon size={18} />
                </div>
                <div
                  className={`font-display text-3xl font-bold mb-1 ${
                    stat.color === 'gold' ? 'text-gold-700' : 'text-forest-700'
                  }`}
                >
                  {stat.value}
                </div>
                <div className="font-body text-sm text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
