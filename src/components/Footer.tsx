import Link from 'next/link'

const services = [
  { label: 'Interior Remodels', href: '/services/interior-remodels' },
  { label: 'Commercial Construction', href: '/services/commercial-construction' },
  { label: 'Additions & ADU', href: '/services/additions-and-adu' },
  { label: 'Kitchen & Bath', href: '/services/kitchen-and-bath' },
  { label: 'Framing & Structural', href: '/services/framing-and-structural' },
  { label: 'Custom Builds', href: '/services/custom-builds' },
]

const navLinks = [
  { label: 'Our Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/get-a-quote' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-amber flex items-center justify-center">
                <span className="font-display font-black text-white text-base leading-none">TC</span>
              </div>
              <span className="font-display font-bold text-offwhite text-xl tracking-wider uppercase">
                Construction
              </span>
            </div>
            <p className="text-offwhite/50 text-sm leading-relaxed max-w-xs mb-4">
              Family-owned general contracting. Interior remodels, commercial builds,
              and everything in between — done right, every time.
            </p>
            <p className="text-offwhite/30 text-xs mb-6">
              Est. 2020 · CA Lic. #1075627 · Licensed &amp; Insured
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+19519025206"
                className="text-offwhite/70 hover:text-amber transition-colors text-sm font-display tracking-wider"
                aria-label="Call TC Construction"
              >
                (951) 902-5206
              </a>
              <a
                href="https://instagram.com/buildwithtc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-offwhite/70 hover:text-amber transition-colors text-sm"
                aria-label="TC Construction on Instagram"
              >
                @buildwithtc
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-offwhite/50 hover:text-offwhite text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-offwhite/50 hover:text-offwhite text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-offwhite/30 text-xs">
            © 2025 TC Construction. All rights reserved.
          </p>
          <p className="text-offwhite/20 text-xs">
            Licensed &amp; Insured · Serving Riverside, CA &amp; Surrounding Areas · CA Lic. #1075627
          </p>
        </div>
      </div>
    </footer>
  )
}
