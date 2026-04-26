import { CreditCard, Wallet, Info } from 'lucide-react'

const plans = [
  {
    id: 'full',
    icon: CreditCard,
    label: 'Full Payment',
    badge: 'Best Value',
    highlight: true,
    description: 'Pay once and lock in the best price immediately.',
    rows: [
      { package: 'Essential Feast', amount: '₦89,000', note: '' },
      { package: 'Deluxe Celebration', amount: '₦189,000', note: '' },
    ],
  },
  {
    id: 'instalment',
    icon: Wallet,
    label: 'Instalment Plan',
    badge: 'Flexible',
    highlight: false,
    description: 'Start with a deposit and spread payments over time.',
    rows: [
      { package: 'Essential Feast (Weekly)', amount: '₦20,000/week', note: '× 5 weeks' },
      { package: 'Essential Feast (2-Month)', amount: '₦50,000', note: '× 2 payments' },
      { package: 'Deluxe Celebration (Weekly)', amount: '₦40,000/week', note: '× 5 weeks' },
      { package: 'Deluxe Celebration (2-Month)', amount: '₦100,000', note: '× 2 payments' },
    ],
  },
]

export default function Payment() {
  return (
    <section id="payment" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-tag">Payment Options</span>
          <h2 className="section-heading mb-4">
            Flexible plans to
            <span className="text-forest-600 italic"> fit your budget</span>
          </h2>
          <p className="font-body text-gray-600 max-w-xl mx-auto">
            Choose to pay in full for maximum savings, or start an instalment plan to lock in
            today's price while spreading the cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl overflow-hidden border-2 ${
                plan.highlight
                  ? 'border-gold-400 bg-white shadow-xl shadow-gold-100'
                  : 'border-forest-200 bg-white shadow-md'
              }`}
            >
              <div
                className={`px-6 py-5 border-b ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-gold-500 to-gold-400 border-gold-300'
                    : 'bg-forest-700 border-forest-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <plan.icon
                      size={20}
                      className={plan.highlight ? 'text-forest-900' : 'text-gold-300'}
                    />
                    <h3
                      className={`font-display text-xl font-bold ${
                        plan.highlight ? 'text-forest-900' : 'text-white'
                      }`}
                    >
                      {plan.label}
                    </h3>
                  </div>
                  <span
                    className={`font-body text-xs font-bold px-3 py-1 rounded-full ${
                      plan.highlight
                        ? 'bg-forest-800 text-gold-400'
                        : 'bg-white/20 text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
                <p
                  className={`font-body text-sm mt-2 ${
                    plan.highlight ? 'text-forest-800' : 'text-gray-300'
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left font-body text-xs text-gray-400 uppercase tracking-wider pb-3">Package</th>
                      <th className="text-right font-body text-xs text-gray-400 uppercase tracking-wider pb-3">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {plan.rows.map((row) => (
                      <tr key={row.package}>
                        <td className="font-body text-sm text-gray-700 py-3 pr-4">{row.package}</td>
                        <td className="text-right py-3">
                          <span className="font-body font-bold text-forest-700 text-sm">
                            {row.amount}
                          </span>
                          {row.note && (
                            <span className="block font-body text-xs text-gray-400 mt-0.5">
                              {row.note}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 max-w-2xl mx-auto">
          <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="font-body text-sm text-amber-800 leading-relaxed">
            <strong>Why is the instalment total slightly higher?</strong> Instalment totals include
            a small financing and administrative charge to cover the cost of managing your payment
            plan and reserving your package over an extended period. Full payment remains the best
            value option.
          </p>
        </div>
      </div>
    </section>
  )
}
