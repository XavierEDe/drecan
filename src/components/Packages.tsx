import { Check, Star } from 'lucide-react'
import { packages } from '../data/packages'

const fmt = (n: number) =>
  '₦' + n.toLocaleString('en-NG')

export default function Packages() {
  return (
    <section id="packages" className="py-20 md:py-28 bg-forest-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-pattern opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Choose Your Package
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Premium food packages at
            <span className="text-gold-400 italic"> unbeatable prices</span>
          </h2>
          <p className="font-body text-gray-400 text-lg max-w-2xl mx-auto">
            Both packages are verified against open market prices and deliver exceptional value —
            locking in your food security for the 2026 festive season.
          </p>
        </div>

        {/* Package cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl overflow-hidden border-2 transition-transform hover:-translate-y-1 duration-300 ${
                pkg.highlight
                  ? 'border-gold-400 bg-gradient-to-b from-forest-800 to-forest-900 shadow-2xl shadow-gold-500/20'
                  : 'border-white/20 bg-forest-800/60'
              }`}
            >
              {/* Best seller badge */}
              {pkg.highlight && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold-500 text-forest-900 text-xs font-body font-bold px-3 py-1 rounded-full">
                  <Star size={10} fill="currentColor" />
                  Best Value
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="font-body text-sm text-gray-400">{pkg.tagline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-end gap-3">
                    <span className="font-display text-4xl font-bold text-gold-400">
                      {fmt(pkg.price)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="font-body text-sm text-gray-500 line-through">
                      Market value: {fmt(pkg.marketValue)}+
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 mt-3 bg-green-900/60 border border-green-500/30 text-green-400 text-sm font-body font-bold px-3 py-1.5 rounded-full">
                    <span>You save over {fmt(pkg.savings)}</span>
                  </div>
                </div>

                {/* Items list */}
                <div className="mb-8">
                  <p className="font-body text-xs text-gray-500 uppercase tracking-widest font-semibold mb-3">
                    What's included
                  </p>
                  <ul className="space-y-2">
                    {pkg.items.map((item) => (
                      <li key={item.name} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gold-500/20 border border-gold-500/50 flex items-center justify-center">
                          <Check size={9} className="text-gold-400" />
                        </span>
                        <span className="font-body text-sm text-gray-300 leading-snug">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-gray-500 ml-1">— {item.qty}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/2349021649580?text=I'm%20interested%20in%20ordering%20the%20${pkg.name}%20package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-4 rounded-2xl font-body font-bold text-base transition-all duration-200 hover:-translate-y-0.5 ${
                    pkg.highlight
                      ? 'bg-gold-500 hover:bg-gold-400 text-forest-900 shadow-lg shadow-gold-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  Order {pkg.name} — {fmt(pkg.price)}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="rounded-3xl overflow-hidden border border-white/20 bg-forest-800/40">
          <div className="px-6 py-4 border-b border-white/10 flex items-center gap-2">
            <h3 className="font-display text-xl text-white font-semibold">Package Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left font-body text-xs text-gray-500 uppercase tracking-widest px-6 py-3 w-1/2">Feature</th>
                  <th className="font-body text-xs text-gold-400 uppercase tracking-widest px-4 py-3 text-center">Essential Feast</th>
                  <th className="font-body text-xs text-gold-400 uppercase tracking-widest px-4 py-3 text-center">Deluxe Celebration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Price', '₦89,000', '₦189,000'],
                  ['Market Value', 'Over ₦300,000', 'Over ₦450,000'],
                  ['Your Savings', 'Over ₦211,000', 'Over ₦260,000'],
                  ['Best For', 'Small–Medium Families', 'Large Families & Events'],
                  ['50kg Premium Rice', '✓', '✓'],
                  ['Beans, Oil & Spaghetti', '✓', '✓'],
                  ['Breakfast Items (Milo, Oats, etc.)', '✓', '✓'],
                  ['Snacks & Spices', '✓', '✓'],
                  ['10kg Poundo Yam Flour (Extra)', '—', '✓'],
                  ['Malta Guinness (Crate)', '—', '✓'],
                  ['10kg Farm Beef (Frozen)', '—', '✓'],
                  ['Instalment Available', '✓', '✓'],
                ].map(([feature, essential, deluxe]) => (
                  <tr key={feature} className="hover:bg-white/3 transition-colors">
                    <td className="font-body text-sm text-gray-400 px-6 py-3">{feature}</td>
                    <td className={`font-body text-sm text-center px-4 py-3 ${essential === '—' ? 'text-gray-600' : 'text-green-400 font-medium'}`}>{essential}</td>
                    <td className={`font-body text-sm text-center px-4 py-3 ${deluxe === '—' ? 'text-gray-600' : 'text-green-400 font-medium'}`}>{deluxe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
