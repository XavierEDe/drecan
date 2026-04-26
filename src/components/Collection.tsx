import { Church, Building, Store, AlertTriangle } from 'lucide-react'

const hubTypes = [
  { icon: Church, label: 'Partner Churches', desc: 'Community-based collection points' },
  { icon: Church, label: 'Partner Mosques', desc: 'Accessible to all communities' },
  { icon: Building, label: 'LG Secretariats', desc: 'Government-backed hub locations' },
  { icon: Store, label: 'Drecan Pop-Up Shops', desc: 'Temporary branded collection centres' },
]

export default function Collection() {
  return (
    <section id="collection" className="py-20 md:py-28 bg-gradient-to-br from-forest-50 to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <span className="section-tag">Collection Info</span>
            <h2 className="section-heading mb-6">
              Nationwide collection hubs —
              <span className="text-forest-600 italic"> close to you</span>
            </h2>
            <div className="space-y-4 font-body text-gray-600 leading-relaxed">
              <p>
                To keep costs low and pass the maximum savings to you, Drecan does{' '}
                <strong className="text-forest-800">not offer home delivery.</strong> Instead, we
                have partnered with trusted community institutions to establish collection hubs
                across every state.
              </p>
              <p>
                Collection runs from <strong className="text-forest-700">late November</strong> to{' '}
                <strong className="text-forest-700">20th December 2026.</strong> Exact hub addresses
                and collection schedules will be communicated to all confirmed buyers as the
                collection window approaches.
              </p>
            </div>

            {/* Warning */}
            <div className="mt-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl px-5 py-4">
              <AlertTriangle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-red-700">
                <strong>Important:</strong> No payment confirmation = No collection.
                Please ensure your payment is completed and confirmed before visiting a hub.
              </p>
            </div>
          </div>

          {/* Right: Hub types */}
          <div>
            <p className="font-body text-sm font-bold text-gray-500 uppercase tracking-widest mb-5">
              Hub Location Types
            </p>
            <div className="space-y-3">
              {hubTypes.map((hub) => (
                <div
                  key={hub.label}
                  className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-forest-100 shadow-sm hover:shadow-md hover:border-forest-200 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <hub.icon size={18} className="text-forest-600" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-forest-800 text-sm">{hub.label}</div>
                    <div className="font-body text-xs text-gray-500">{hub.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-forest-800 rounded-2xl px-5 py-4">
              <p className="font-body font-bold text-gold-400 text-sm mb-1">
                All 36 States + FCT
              </p>
              <p className="font-body text-xs text-gray-400">
                Hubs will be available nationwide so no Nigerian family is left behind,
                regardless of location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
