import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/15 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-sky-500 to-teal-400 shadow-md grid place-items-center">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-white/90 font-semibold tracking-tight">Velar</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#get-started" className="inline-flex items-center rounded-xl bg-white text-gray-900 px-4 py-2 font-medium hover:shadow-lg transition-all">
                Get Started
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/20 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-4 py-2 font-medium">
                  Get Started
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
