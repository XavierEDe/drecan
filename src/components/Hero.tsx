import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, TrendingDown, Calendar, Users } from 'lucide-react'
import UrgencyBanner from './UrgencyBanner'
const hero = "/products-hero.jpg"

const trustHighlights = [
  {
    icon: Users,
    title: 'Community Support',
    description: '450,000 families across all 36 states & FCT',
  },
  {
    icon: TrendingDown,
    title: 'Financial Savings',
    description: '60–70% below open market value',
  },
  {
    icon: Calendar,
    title: 'Early Planning',
    description: 'Lock in today, collect in December 2026',
  },
  {
    icon: ShieldCheck,
    title: 'Inflation Protection',
    description: 'Your price is frozen the moment you pay',
  },
]

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Product image background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* Deep green gradient — heavy on left for text legibility, fades right to show products */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/97 via-forest-900/88 to-forest-800/55" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-forest-950/70 to-transparent" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-10 hero-pattern" />

      {/* Urgency banner */}
      <div className="relative z-10 mt-[64px] sm:mt-[68px]">
        <UrgencyBanner />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 w-full">
          <div className="max-w-2xl">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-body font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-7">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-400" />
              </span>
              Drecan Commodities Ltd. — 2026 Campaign
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.05] text-white mb-5">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Feed The Nation
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-forest-300 mt-1">
                Project
              </span>
            </h1>

            <p className="font-display italic text-lg sm:text-xl md:text-2xl text-white mb-5 leading-snug">
              "Don't pay triple this Christmas.
              <br className="hidden sm:block" />
              Lock in your savings now."
            </p>

            <p className="font-body text-sm sm:text-base text-white mb-10 leading-relaxed max-w-xl">
              Drecan Commodities is helping{' '}
              <strong className="text-white font-bold">450,000 Nigerian families</strong> secure
              premium food packages for the 2026 festive season at{' '}
              <strong className="text-white font-bold">60–70% below open market value.</strong>{' '}
              Lock in today's price. Collect your complete package from late November to 20th December 2026.
            </p>

            {/* CTA — green + white only */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => scrollTo('packages')}
                className="inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-400 text-white font-body font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-xs md:text-sm group"
              >
                Order Deluxe Celebration
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('packages')}
                className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white font-body font-bold px-4 py-2 rounded-full transition-all duration-200 text-xs md:text-sm group"
              >
                Order Essential Feast 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/faq"
                className="inline-flex items-center justify-center border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-body font-bold px-7 py-4 rounded-full transition-all duration-200 text-xs md:text-sm group"
              >
                View FAQ
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative z-10 border-t border-white/10 bg-forest-950/75 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustHighlights.map((item) => (
              <div key={item.title} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-forest-500/30 border border-forest-400/40 flex items-center justify-center group-hover:bg-forest-500/50 transition">
                  <item.icon size={15} className="text-forest-300" />
                </div>
                <div>
                  <div className="font-body font-bold text-white text-sm leading-tight">{item.title}</div>
                  <div className="font-body text-white/50 text-xs leading-tight mt-0.5">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
