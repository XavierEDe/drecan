import { ShoppingCart, Banknote, Package, MapPin } from 'lucide-react'

const steps = [
  {
    step: 1,
    icon: ShoppingCart,
    title: 'Choose Your Package',
    description:
      'Select the Essential Feast (₦89,000) for individuals and small families, or the Deluxe Celebration (₦189,000) for large families, parties, and gifts.',
  },
  {
    step: 2,
    icon: Banknote,
    title: 'Pay in Full or Begin Instalment',
    description:
      'Complete your full payment or start your instalment plan. Your place is reserved only after payment confirmation. Bank details are provided on registration.',
  },
  {
    step: 3,
    icon: Package,
    title: 'Drecan Reserves Your Package',
    description:
      'As soon as your payment is confirmed, Drecan immediately reserves your complete food package under your name — your price is locked in from that moment.',
  },
  {
    step: 4,
    icon: MapPin,
    title: 'Collect from Your Hub',
    description:
      'Pick up your packed food box from a designated collection hub near you between late November and 20th December 2026. Hubs are available across all 36 states and FCT.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="section-tag">How It Works</span>
          <h2 className="section-heading mb-4">
            Four simple steps to
            <span className="text-forest-600 italic"> secure your feast</span>
          </h2>
          <p className="font-body text-gray-500 max-w-xl mx-auto">
            The entire process is designed to be simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={step.step} className="relative">
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] right-0 h-px bg-gradient-to-r from-gold-300 to-transparent z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Step number + icon */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center shadow-lg shadow-forest-200">
                    <step.icon size={28} className="text-gold-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold-400 text-forest-900 font-body font-bold text-xs flex items-center justify-center shadow">
                    {step.step}
                  </div>
                </div>

                <h3 className="font-display text-lg font-bold text-forest-900 mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base px-10 py-4"
          >
            Start Now — Choose Your Package
          </button>
        </div>
      </div>
    </section>
  )
}
