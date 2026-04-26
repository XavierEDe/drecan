import { Truck, Users, Building2, ShoppingBag, Percent } from 'lucide-react'

const targets = [
  { icon: ShoppingBag, label: 'Market Traders' },
  { icon: Users, label: 'Cooperative Societies' },
  { icon: Building2, label: 'NGOs & Charities' },
  { icon: Truck, label: 'Corporate Procurement' },
  { icon: Building2, label: 'Staff Welfare Buyers' },
]

const items = [
  { product: 'Drecan Rice', qty: '50kg bag', price: '₦38,000', min: '50 bags' },
  { product: 'Groundnut Oil', qty: '20L keg', price: '₦25,000', min: '20 kegs' },
  { product: 'Poundo Yam Flour', qty: '10kg carton', price: '₦14,500', min: '40 cartons' },
]

export default function Wholesale() {
  return (
    <section id="wholesale" className="py-20 md:py-28 bg-forest-900 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Wholesale Programme
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-4">
            Bulk buying for
            <span className="text-gold-400 italic"> businesses & communities</span>
          </h2>
          <p className="font-body text-gray-400 max-w-xl mx-auto">
            Drecan offers distributor pricing for organisations buying in volume. Minimum orders
            apply, and referring new wholesalers earns you a commission.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Who is it for */}
          <div>
            <p className="font-body text-xs text-gray-500 uppercase tracking-widest font-bold mb-5">
              Who this is for
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {targets.map((t) => (
                <div
                  key={t.label}
                  className="flex flex-col items-center gap-2 bg-forest-800/60 border border-white/10 rounded-2xl px-4 py-5 text-center hover:border-gold-500/40 transition"
                >
                  <t.icon size={20} className="text-gold-400" />
                  <span className="font-body text-xs text-gray-300 font-medium leading-tight">{t.label}</span>
                </div>
              ))}
            </div>

            {/* Referral bonus */}
            <div className="flex items-start gap-4 bg-gold-500/10 border border-gold-500/30 rounded-2xl px-5 py-5">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0">
                <Percent size={18} className="text-gold-400" />
              </div>
              <div>
                <div className="font-body font-bold text-gold-400 text-sm mb-1">
                  2% Referral Commission
                </div>
                <div className="font-body text-xs text-gray-400 leading-relaxed">
                  Distributors who refer new wholesalers to Drecan earn a 2% commission on the
                  new wholesaler's first invoice. No cap on referrals.
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pricing table */}
          <div>
            <p className="font-body text-xs text-gray-500 uppercase tracking-widest font-bold mb-5">
              Distributor pricing
            </p>
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div
                  key={item.product}
                  className="bg-forest-800/60 border border-white/10 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 hover:border-gold-500/30 transition"
                >
                  <div>
                    <div className="font-body font-bold text-white text-sm">{item.product}</div>
                    <div className="font-body text-xs text-gray-500">{item.qty} · Min: {item.min}</div>
                  </div>
                  <div className="font-display text-xl font-bold text-gold-400 flex-shrink-0">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-forest-800/40 border border-white/10 rounded-2xl px-5 py-4 mb-6">
              <p className="font-body text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">
                Minimum Invoice Value
              </p>
              <p className="font-display text-2xl font-bold text-gold-400">₦2,000,000</p>
              <p className="font-body text-xs text-gray-500 mt-1">
                Or meet the individual minimum order quantities above.
              </p>
            </div>

            <a
              href="https://wa.me/2349021649580?text=I'm%20interested%20in%20becoming%20a%20Drecan%20wholesale%20partner"
              className="btn-primary w-full text-center block text-base py-4"
            >
              Enquire About Wholesale
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
