import { Link } from 'react-router-dom'
import { ArrowLeft, HelpCircle } from 'lucide-react'
import Accordion from '../components/Accordion'
import { faqs } from '../data/faq'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Page header */}
      <div className="bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-gold-400 hover:text-gold-300 mb-6 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Campaign
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
              <HelpCircle size={18} className="text-gold-400" />
            </div>
            <span className="inline-block bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-body font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              FAQ
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Frequently Asked
            <span className="text-gold-400 italic"> Questions</span>
          </h1>
          <p className="font-body text-gray-400 text-lg max-w-xl leading-relaxed">
            Everything you need to know about Project Feed The Nation — packages, payments,
            collection, and wholesale.
          </p>
        </div>
      </div>

      {/* FAQ content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <Accordion items={faqs} />

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-br from-forest-800 to-forest-900 rounded-3xl p-8 md:p-10 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
            Still have questions?
          </h2>
          <p className="font-body text-gray-400 mb-6 max-w-md mx-auto">
            Our team is ready to help. Reach us by phone or email and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+2349021649580"
              className="btn-primary text-base px-8 py-3.5"
            >
              Call Us Now
            </a>
            <a
              href="mailto:drecanagriculture@gmail.com"
              className="btn-outline text-base px-8 py-3.5"
            >
              Email Us
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10">
            <Link
              to="/"
              className="btn-forest text-sm px-8 py-3"
            >
              ← Back to Campaign Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
