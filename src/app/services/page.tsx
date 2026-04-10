import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | General Contracting — Residential & Commercial',
  description:
    'TC Construction offers a full range of construction services in Riverside, CA: interior remodels, commercial construction, additions & ADU, kitchen & bath, framing & structural, and custom builds.',
  alternates: { canonical: '/services' },
}

const services = [
  {
    title: 'Interior Remodels',
    description:
      'Whole-room transformations. From gut jobs to finish work, we handle interior remodels of all sizes — demo through punch list.',
    href: '/services/interior-remodels',
    image: '/assets/living-room.jpg',
    imageAlt: 'Interior remodel living room',
  },
  {
    title: 'Commercial Construction',
    description:
      'Large-scale commercial builds handled by a team that knows how to manage scope, timeline, and quality at scale.',
    href: '/services/commercial-construction',
    image: '/assets/wide-industrial.jpg',
    imageAlt: 'Commercial construction project',
  },
  {
    title: 'Additions & ADU',
    description:
      'Expand your space without moving. Room additions, garage conversions, and full ADU builds that match the existing structure.',
    href: '/services/additions-and-adu',
    image: '/assets/garage-door.jpg',
    imageAlt: 'Garage and ADU construction',
  },
  {
    title: 'Kitchen & Bath',
    description:
      'The rooms that sell homes and make living in them better. Full kitchen and bathroom remodels with real attention to detail.',
    href: '/services/kitchen-and-bath',
    image: '/assets/very-nice-kitchen.jpg',
    imageAlt: 'High-end kitchen remodel',
  },
  {
    title: 'Framing & Structural',
    description:
      'The bones of the building done right. New construction or structural modifications — framed square, level, and built to last.',
    href: '/services/framing-and-structural',
    image: '/assets/framing.jpg',
    imageAlt: 'Commercial framing project',
  },
  {
    title: 'Custom Builds',
    description:
      "If you've got a plan that doesn't fit a standard category, bring it. We've built enough to figure out what it takes.",
    href: '/services/custom-builds',
    image: '/assets/wide-shot.jpg',
    imageAlt: 'Custom construction project',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100" aria-label="Services header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">What We Do</p>
          <h1 className="section-heading max-w-2xl">
            Every Type of Build. <span className="text-amber">One Team.</span>
          </h1>
          <p className="text-gray-500 mt-6 text-base max-w-xl leading-relaxed">
            From a single-room remodel to a full commercial build-out, TC Construction
            handles the full scope. We don&apos;t subcontract our reputation — our name is on
            every job we take.
          </p>
        </div>
      </section>

      {/* ─── SERVICE GRID ─── */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="services-grid-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-grid-heading" className="sr-only">All Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group card overflow-hidden block"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h2 className="font-display font-bold text-xl uppercase tracking-wide text-gray-900 mb-3 group-hover:text-amber transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-amber text-xs font-display tracking-widest uppercase font-semibold">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Get Started</p>
          <h2 className="section-heading mb-6">
            Not Sure Where to Start? <span className="text-amber">Talk to Us.</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Describe your project and we&apos;ll point you in the right direction. No commitment required.
          </p>
          <Link href="/get-a-quote" className="btn-primary px-10 py-4">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
