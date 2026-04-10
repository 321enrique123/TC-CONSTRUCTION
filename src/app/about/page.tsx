import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About TC Construction | Family-Owned General Contractor',
  description:
    'Learn about TC Construction — a family-owned general contracting business founded by Tyler Chelm in Riverside, CA. We build things that last, from interior remodels to large commercial projects.',
  alternates: { canonical: '/about' },
}

const values = [
  {
    title: 'Craftsmanship',
    body: 'Every nail, every seam, every finish — we care about the details because the details are what you live with.',
  },
  {
    title: 'Accountability',
    body: "We say what we'll do, and we do what we say. If something changes, you hear it from us first.",
  },
  {
    title: 'Family',
    body: "This business was built on relationships. With clients, with trade partners, and with each other. That doesn't change.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden" aria-label="About hero">
        <div className="absolute inset-0 z-0">
          {/* INSERT ABOUT PHOTO HERE: Tyler Chelm or team on a job site */}
          <Image
            src="/assets/parked-trucks.jpg"
            alt="TC Construction — family-owned, built on real work"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="section-label mb-3">About Us</p>
          <h1 className="section-heading-light max-w-3xl">
            We&apos;re TC Construction. <br />
            <span className="text-amber">We Build Things That Last.</span>
          </h1>
        </div>
      </section>

      {/* ─── STORY ─── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Our Story</p>
              <h2 id="story-heading" className="section-heading mb-8">
                Good Construction Comes Down to <span className="text-amber">the People.</span>
              </h2>
              <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                <p>
                  Tyler Chelm started TC Construction with one belief — that good construction comes
                  down to the people doing it. As a family-owned business, we bring the same standard
                  to a commercial build that we&apos;d bring to our own home. We&apos;re not the biggest
                  contractor in the room. We&apos;re the one who shows up, does the work, and delivers
                  what we said we would.
                </p>
                <p>
                  Over the years we&apos;ve taken on everything — interior remodels, large commercial
                  projects, additions, custom builds. The range comes from refusing to say no to a good
                  challenge. Every project we take on makes us better at the next one.
                </p>
                <p>
                  TC Construction is based in <strong className="text-gray-900">Riverside, California</strong>,
                  serving homeowners, developers, and business owners throughout the Inland Empire
                  who want a contractor they can actually trust.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <Link href="/get-a-quote" className="btn-primary">
                  Start a Project
                </Link>
                <Link href="/projects" className="btn-outline">
                  See Our Work
                </Link>
              </div>
            </div>

            <div className="relative">
              {/* INSERT ABOUT PHOTO HERE: Job site or team photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/assets/wide-industrial.jpg"
                  alt="TC Construction team on a commercial project"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber z-10" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS BAR ─── */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Established', value: '2020' },
              { label: 'CA License', value: '#1075627' },
              { label: 'Coverage', value: 'Licensed & Insured' },
              { label: 'Service Area', value: 'Riverside & Inland Empire' },
            ].map((c) => (
              <div key={c.label}>
                <p className="text-amber font-display text-xs tracking-widest uppercase font-semibold mb-1">{c.label}</p>
                <p className="text-white font-display font-bold text-sm uppercase tracking-wide">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TEAM ─── */}
      <section className="py-24 lg:py-32 bg-gray-50" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="section-label mb-4">The Team</p>
            <h2 id="team-heading" className="section-heading">
              The People <span className="text-amber">Behind It.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* INSERT TEAM PHOTO: Tyler Chelm */}
            <div className="card overflow-hidden">
              <div className="relative aspect-square w-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center px-4">
                  {/* INSERT TEAM PHOTO: Tyler Chelm, Owner */}
                  PHOTO PLACEHOLDER — Tyler Chelm
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-gray-900">
                  Tyler Chelm
                </h3>
                <p className="text-amber text-xs font-display tracking-widest uppercase mt-1 font-semibold">Founder &amp; Owner</p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  Tyler has spent his career building — not just structures, but a business rooted
                  in doing the work right and treating every client with the same level of care.
                </p>
              </div>
            </div>

            {/* INSERT TEAM PHOTO: Additional team members */}
            <div className="card overflow-hidden">
              <div className="relative aspect-square w-full bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-xs text-center px-4">
                  {/* INSERT TEAM PHOTO: Additional team member */}
                  PHOTO PLACEHOLDER
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-gray-900">
                  {/* INSERT TEAM MEMBER NAME */}
                  Team Member
                </h3>
                <p className="text-amber text-xs font-display tracking-widest uppercase mt-1 font-semibold">
                  {/* INSERT ROLE */}
                  Project Lead
                </p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {/* INSERT BIO */}
                  Dedicated to quality craftsmanship on every project.
                </p>
              </div>
            </div>

            {/* Stats / CTA card */}
            <div className="bg-amber p-8 flex flex-col gap-6">
              <div>
                <p className="font-display font-black text-6xl text-white leading-none">Est.</p>
                <p className="font-display font-black text-6xl text-white leading-none">2020</p>
              </div>
              <div className="border-t border-white/20 pt-5 space-y-3">
                <div>
                  <p className="font-display font-bold text-white text-xs uppercase tracking-widest mb-0.5">CA License</p>
                  <p className="text-white/80 text-sm">#1075627</p>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-xs uppercase tracking-widest mb-0.5">Service Area</p>
                  <p className="text-white/80 text-sm">Riverside, CA &amp; Inland Empire</p>
                </div>
                <div>
                  <p className="font-display font-bold text-white text-xs uppercase tracking-widest mb-0.5">Coverage</p>
                  <p className="text-white/80 text-sm">Licensed &amp; Insured</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-24 lg:py-32 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What We Stand For</p>
            <h2 id="values-heading" className="section-heading">
              Built on <span className="text-amber">Three Things.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="card p-10">
                <p className="text-amber font-display font-black text-5xl mb-6 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-gray-900 mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-amber" aria-labelledby="about-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta-heading" className="font-display font-black text-4xl md:text-5xl uppercase text-white mb-4 leading-none">
            Ready to Work Together?
          </h2>
          <p className="text-white/80 mb-8 text-base md:text-lg">
            Tell us about your project. We&apos;ll get back to you within 24 hours.
          </p>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-display text-sm tracking-widest uppercase px-8 py-4 transition-all duration-200 font-bold"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
