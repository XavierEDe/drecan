import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-gray-400 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Drecan" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  Drecan Commodities Limited
                </div>
                <div className="font-body text-gold-500 text-xs font-semibold tracking-wider">
                  Est. 2014 · RN: 9121211
                </div>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed max-w-xs">
              Connecting Nigerian farmers, manufacturers, and families. Feeding the nation one
              package at a time.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-4">
              Campaign
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {[
                { label: 'Packages', id: 'packages' },
                { label: 'How It Works', id: 'how-it-works' },
                { label: 'Payment Options', id: 'payment' },
                { label: 'Collection Info', id: 'collection' },
                { label: 'Wholesale', id: 'wholesale' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={`/#${link.id}`}
                    className="hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <a href="tel:+2349021649580" className="hover:text-gold-400 transition-colors">
                  +234 902 164 9580
                </a>
              </li>
              <li>
                <a href="mailto:drecanagriculture@gmail.com" className="hover:text-gold-400 transition-colors break-all">
                  drecanagriculture@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.drecan.com" target="_blank" rel="noreferrer" className="hover:text-gold-400 transition-colors">
                  www.drecan.com
                </a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=8.987145, 7.497009" target="_blank" rel="noreferrer" className="text-xs leading-relaxed pt-1">
                  Suite C6, Rosette Plaza,<br />
                  Apo Resettlement, FCT, Nigeria
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-gray-600">
            © {new Date().getFullYear()} Drecan Commodities Limited. All rights reserved. <br/> Operates through product services and a registered multipurpose cooperative society. 
          </p>
          <div className="flex items-center gap-4 font-body text-xs">
            <Link to="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link>
            <span className="text-gray-700">·</span>
            <span className="text-gray-600">Project Feed The Nation 2026</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
