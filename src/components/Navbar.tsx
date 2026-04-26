import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
const logo = "/logo.png"

const navLinks = [
  { label: 'Home', href: '/#', section: 'hero' },
  { label: 'Packages', href: '/#packages', section: 'packages' },
  { label: 'How It Works', href: '/#how-it-works', section: 'how-it-works' },
  { label: 'Wholesale', href: '/#wholesale', section: 'wholesale' },
  { label: 'FAQ', href: '/faq', section: null },
  { label: 'Contact', href: '/#contact', section: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (section: string | null) => {
  setOpen(false)

  if (section === 'hero' && location.pathname === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  if (section && location.pathname === '/') {
    const el = document.getElementById(section)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-900/98 backdrop-blur-md shadow-xl py-2'
          : 'bg-forest-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/#"
          className="flex items-center gap-3 group"
          onClick={() => {
            setOpen(false)
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <img
            src={logo}
            alt="Drecan Agriculture Logo"
            className="h-10 w-10 object-contain"
          />
          <div className="hidden sm:block">
            <div className="font-display font-lg text-white text-bg leading-tight">
              DRECAN COMMODITIES
            </div>
            <div className="font-body text-gold-400 text-xs font-semibold tracking-wider uppercase">
              Feed The Nation
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href, section }) => (
            <Link
              key={label}
              to={href}
              onClick={() => handleNavClick(section)}
              className="font-body text-sm font-medium text-gray-300 hover:text-gold-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-150"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://wa.me/2349021649580?text=Hello%20Drecan%20Team%2C%20I%20would%20like%20to%20place%20an%20order%20for%20the%202026%20Project%20Feed%20The%20Nation%20package.%20Please%20provide%20me%20with%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="ml-3 btn-primary text-xs px-5 py-2.5"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-forest-900 border-t border-white/10 px-4 pb-6 pt-3 space-y-1">
          {navLinks.map(({ label, href, section }) => (
            <Link
              key={label}
              to={href}
              onClick={() => handleNavClick(section)}
              className="block font-body text-base font-medium text-gray-200 hover:text-gold-400 px-3 py-2.5 rounded-lg hover:bg-white/5 transition"
            >
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              to="/#packages"
              onClick={() => handleNavClick('packages')}
              className="btn-primary w-full text-center text-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
