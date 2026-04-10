import type { Metadata } from 'next'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Free Quote | Start Your Construction Project',
  description:
    'Request a free quote from TC Construction in Riverside, CA. Tell us about your project and Tyler will get back to you within 24 hours.',
  alternates: { canonical: '/get-a-quote' },
}

export default function GetAQuotePage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100" aria-label="Get a quote header">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Free Quote</p>
          <h1 className="section-heading">
            Tell Us About <span className="text-amber">Your Project.</span>
          </h1>
          <p className="text-gray-500 mt-6 text-base leading-relaxed">
            We&apos;ll review it and get back to you within 24 hours.
            No commitment, no pressure — just a straight conversation
            about what your project needs.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="quote-form-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="quote-form-heading" className="sr-only">Quote Request Form</h2>
          <div className="card p-8 md:p-12">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  )
}
