import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'TC Construction | Contractor for Remodels & Commercial Builds',
  description:
    'TC Construction is a family-owned general contractor serving Riverside, CA and surrounding areas. Interior remodels, commercial construction, additions, kitchen & bath, framing, and custom builds. Licensed & insured. CA Lic. #1075627.',
  alternates: { canonical: '/' },
}

const services = [
  {
    title: 'Interior Remodels',
    description: 'Full-room transformations from gut jobs to finish work.',
    href: '/services/interior-remodels',
    image: '/assets/living-room.jpg',
    imageAlt: 'Interior remodel living room',
  },
  {
    title: 'Commercial Construction',
    description: 'Large-scale builds managed with scope, schedule, and quality.',
    href: '/services/commercial-construction',
    image: '/assets/wide-industrial.jpg',
    imageAlt: 'Commercial construction project',
  },
  {
    title: 'Additions & ADU',
    description: 'Expand your property without moving. Foundation to finish.',
    href: '/services/additions-and-adu',
    image: '/assets/garage-door.jpg',
    imageAlt: 'Addition and ADU construction',
  },
  {
    title: 'Kitchen & Bath',
    description: 'The rooms that matter most — done right.',
    href: '/services/kitchen-and-bath',
    image: '/assets/very-nice-kitchen.jpg',
    imageAlt: 'Kitchen remodel',
  },
  {
    title: 'Framing & Structural',
    description: 'The bones of the building done square, level, and built to last.',
    href: '/services/framing-and-structural',
    image: '/assets/framing.jpg',
    imageAlt: 'Framing and structural work',
  },
  {
    title: 'Custom Builds',
    description: "If it doesn't fit a category, bring it. We'll figure it out.",
    href: '/services/custom-builds',
    image: '/assets/wide-shot.jpg',
    imageAlt: 'Custom construction build',
  },
]

const trustPillars = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Family-Owned & Operated',
    body: "Tyler and the team treat every project like it's their own home. Real people, real accountability.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Licensed & Insured',
    body: 'CA Lic. #1075627. Full coverage on every job, residential and commercial. No shortcuts.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Wide Range of Work',
    body: 'From full commercial builds to kitchen remodels. The range comes from refusing to say no to a good challenge.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Real Communication',
    body: "You'll always know where your project stands. No runaround, no radio silence.",
  },
]

const featuredProjects = [
  {
    image: '/assets/wide-industrial.jpg',
    label: 'Commercial Build',
    description: 'Large-scale industrial project — ground-up construction.',
    alt: 'Large commercial construction project',
  },
  {
    image: '/assets/very-nice-kitchen.jpg',
    label: 'Kitchen Remodel',
    description: 'Full kitchen transformation with custom finishes.',
    alt: 'High-end kitchen remodel with custom cabinetry',
  },
  {
    image: '/assets/framing.jpg',
    label: 'Framing & Structural',
    description: 'New construction framing on a commercial project.',
    alt: 'Commercial project framing',
  },
  {
    image: '/assets/hallway.jpg',
    label: 'Interior Remodel',
    description: 'Full interior renovation — demo to finish.',
    alt: 'Interior remodel hallway',
  },
]

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TC Construction',
  description:
    'Family-owned general contractor specializing in interior remodels, commercial construction, additions, kitchen & bath, framing, and custom builds.',
  url: 'https://buildwithtc.com',
  telephone: '+19519025206',
  email: 'constructionbytc@gmail.com',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riverside',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  hasCredential: 'CA Contractor License #1075627',
  sameAs: ['https://instagram.com/buildwithtc'],
  priceRange: '$$',
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/wide-industrial.jpg"
            alt="TC Construction — large-scale commercial project"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <p className="section-label mb-6">TC Construction · Riverside, CA</p>
          <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8rem] uppercase text-white leading-none tracking-tight mb-6">
            Built Right.
            <br />
            <span className="text-amber">Every Time.</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Family-owned construction for homeowners and commercial clients
            who want it done right the first time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary px-8 py-4 text-sm">
              See Our Work
            </Link>
            <Link href="/get-a-quote" className="btn-outline-light px-8 py-4 text-sm">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="bg-amber py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2 text-white font-display text-xs tracking-widest uppercase font-semibold">
            <span>Family-Owned Since 2020</span>
            <span className="hidden sm:block text-white/40">·</span>
            <span>CA Lic. #1075627</span>
            <span className="hidden sm:block text-white/40">·</span>
            <span>Licensed &amp; Insured</span>
            <span className="hidden sm:block text-white/40">·</span>
            <span>Riverside, CA &amp; Inland Empire</span>
          </div>
        </div>
      </div>

      {/* ─── WHAT WE BUILD ─── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label mb-4">What We Build</p>
            <h2 id="services-heading" className="section-heading max-w-xl">
              One Team. <span className="text-amber">Every Scope.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group card overflow-hidden block"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="relative h-52 w-full overflow-hidden">
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
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-gray-900 mb-2 group-hover:text-amber transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-amber text-xs font-display tracking-widest uppercase mt-4 font-semibold">
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

      {/* ─── WHY TC CONSTRUCTION ─── */}
      <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">Why Choose Us</p>
              <h2 id="why-heading" className="section-heading">
                We Show Up. <span className="text-amber">We Deliver.</span>
              </h2>
              <p className="text-gray-500 mt-6 text-base leading-relaxed max-w-md">
                There&apos;s no shortage of contractors. What&apos;s rare is one who does what they said
                they would, shows up when they&apos;re supposed to, and builds something you&apos;re
                proud of when it&apos;s done.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {trustPillars.map((pillar) => (
                <div key={pillar.title} className="card p-6">
                  <div className="text-amber mb-4">{pillar.icon}</div>
                  <h3 className="font-display font-bold text-base uppercase tracking-wide text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Featured Projects</p>
              <h2 id="projects-heading" className="section-heading">
                The Work <span className="text-amber">Speaks.</span>
              </h2>
            </div>
            <Link href="/projects" className="btn-outline self-start sm:self-auto shrink-0">
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProjects.map((project, i) => (
              <Link
                key={i}
                href="/projects"
                className="group relative overflow-hidden block"
                aria-label={`View ${project.label} project`}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <span className="text-amber font-display text-xs tracking-widest uppercase font-semibold block mb-1">
                      {project.label}
                    </span>
                    <p className="text-white/80 text-xs leading-snug">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Client Reviews</p>
            <h2 id="testimonials-heading" className="section-heading">
              What Our Clients <span className="text-amber">Say.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* REPLACE WITH REAL TESTIMONIAL */}
            {[
              {
                quote:
                  "TC Construction completely transformed our space. Tyler was upfront about everything — timeline, budget, what to expect. The work speaks for itself.",
                name: 'Sarah M.',
                location: 'Riverside, CA — Homeowner',
              },
              {
                quote:
                  "We hired TC for a full commercial build-out and they delivered. On time, on budget, and the quality of work was exactly what we needed.",
                name: 'James R.',
                location: 'Business Owner',
              },
              {
                quote:
                  "Our kitchen remodel was a big investment. TC Construction made sure every detail was right. Couldn't be happier with how it turned out.",
                name: 'Linda K.',
                location: 'Riverside, CA — Homeowner',
              },
            ].map((t, i) => (
              <div key={i} className="card p-8">
                <div className="flex gap-1 mb-5" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#d4763b" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-display font-bold text-gray-900 uppercase tracking-wide text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-24 lg:py-32 overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/parked-trucks.jpg"
            alt="TC Construction trucks — ready to build"
            fill
            className="object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Start Your Project</p>
          <h2 id="cta-heading" className="section-heading-light mb-6">
            Ready to Build <span className="text-amber">Something?</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg mb-10 max-w-lg mx-auto">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/get-a-quote" className="btn-primary px-10 py-4 text-sm">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
