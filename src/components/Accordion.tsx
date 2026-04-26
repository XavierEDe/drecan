import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { FAQItem } from '../types'

interface AccordionProps {
  items: FAQItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
              isOpen
                ? 'border-forest-300 bg-white shadow-md'
                : 'border-gray-200 bg-white hover:border-forest-200'
            }`}
          >
            <button
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 focus-visible:ring-inset"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={`font-body font-semibold text-sm md:text-base leading-snug transition-colors ${isOpen ? 'text-forest-700' : 'text-gray-800'}`}>
                {item.question}
              </span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-forest-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`accordion-content ${isOpen ? 'open' : ''}`}
            >
              <div className="px-5 pb-5 pt-0">
                <div className="border-t border-gray-100 pt-4">
                  {item.answer.split('\n\n').map((para, j) => (
                    <p key={j} className={`font-body text-sm text-gray-600 leading-relaxed ${j > 0 ? 'mt-3' : ''}`}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
