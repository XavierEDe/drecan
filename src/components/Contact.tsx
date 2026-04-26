import { Phone, Mail, MapPin } from 'lucide-react'

const contacts = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+234 902 164 9580',
    href: 'tel:+2349021649580',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'drecanagriculture@gmail.com',
    href: 'mailto:drecanagriculture@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Suite C6, Rosette Plaza, Apo Resettlement, FCT, Nigeria',
    href: 'https://maps.google.com/?q=8.987145, 7.497009',
  },
  // {
  //   icon: Globe,
  //   label: 'Website',
  //   value: 'www.drecan.com',
  //   href: 'https://www.drecan.com',
  // },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="section-tag">Contact Us</span>
            <h2 className="section-heading mb-4">
              Ready to lock in?
              <span className="text-forest-600 italic"> Get in touch.</span>
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Have questions about your order, instalment plans, corporate packages, or wholesale
              enquiries? Reach us through any of the channels below and our team will respond
              promptly.
            </p>

            <div className="space-y-4">
              {contacts.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-100 flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-forest-700" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-gray-400 uppercase tracking-wider font-bold">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-forest-800 font-medium hover:text-gold-600 transition-colors text-sm"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-body text-forest-800 font-medium text-sm">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-8 md:p-10 shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 text-gold-400 text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              Slots filling fast
            </div>
            <h3 className="font-display text-3xl font-bold text-white mb-3">
              Don't miss your slot
            </h3>
            <p className="font-body text-gray-400 mb-8 leading-relaxed">
              Lock-in closes October 2026 or when all 450,000 packages are sold. Secure
              your family's festive food package before prices rise.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.open("https://wa.me/2349021649580?text=I'm%20interested%20in%20ordering%20the%20Essential%20Feast%20package","_blank")}
                className="btn-primary w-full text-base py-4"
              >
                Order Essential Feast — ₦89,000
              </button>
              <button
                onClick={() => window.open("https://wa.me/2349021649580?text=I'm%20interested%20in%20ordering%20the%20Deluxe%20Celebration%20package","_blank")}
                className="w-full py-4 rounded-full font-body font-bold text-white border-2 border-white/20 hover:border-gold-400 hover:text-gold-400 transition-all text-base"
              >
                Order Deluxe Celebration — ₦189,000
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
