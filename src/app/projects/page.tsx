import type { Metadata } from 'next'
import Link from 'next/link'
import ProjectsGallery from '@/components/ProjectsGallery'

export const metadata: Metadata = {
  title: 'Projects | Construction Portfolio',
  description:
    'Browse the TC Construction project portfolio — interior remodels, commercial construction, kitchen & bath, framing, and custom builds in Riverside, CA and the Inland Empire.',
  alternates: { canonical: '/projects' },
}

export default function ProjectsPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100" aria-label="Projects header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Our Work</p>
          <h1 className="section-heading max-w-2xl">
            The Work <span className="text-amber">Speaks for Itself.</span>
          </h1>
          <p className="text-gray-500 mt-6 text-base max-w-xl leading-relaxed">
            Every project here was built by our team. Browse by category or
            scroll through — this is what TC Construction does.
          </p>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <div className="pt-12 bg-white">
        <ProjectsGallery />
      </div>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Like What You See?</p>
          <h2 className="section-heading mb-6">
            Let&apos;s Talk About <span className="text-amber">Your Project.</span>
          </h2>
          <p className="text-gray-500 mb-8">
            Tell us what you&apos;re building and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/get-a-quote" className="btn-primary px-10 py-4 inline-flex items-center gap-2 text-sm">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
