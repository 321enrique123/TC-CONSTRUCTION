import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Reach TC Construction',
  description:
    'Contact TC Construction in Riverside, CA for your next remodel or commercial build. Call (951) 902-5206 or fill out the form — we respond within 24 hours.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100" aria-label="Contact header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="section-label mb-4">Get in Touch</p>
          <h1 className="section-heading max-w-2xl">
            Let&apos;s Talk About <span className="text-amber">Your Project.</span>
          </h1>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="contact-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-content-heading" className="sr-only">Contact Information and Form</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Info column */}
            <div>
              <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-md">
                Fill out the form or reach out directly. We respond within 24 hours and
                are happy to talk through your project before you commit to anything.
              </p>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <p className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+19519025206"
                    className="text-gray-900 hover:text-amber transition-colors font-display font-bold text-2xl uppercase tracking-wide"
                    aria-label="Call TC Construction"
                  >
                    (951) 902-5206
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-2">
                    Email
                  </p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="mailto:constructionbytc@gmail.com"
                      className="text-gray-900 hover:text-amber transition-colors font-display font-bold text-lg uppercase tracking-wide"
                      aria-label="Email TC Construction"
                    >
                      constructionbytc@gmail.com
                    </a>
                    <a
                      href="mailto:buildwithtc@yahoo.com"
                      className="text-gray-500 hover:text-amber transition-colors font-display text-base uppercase tracking-wide"
                      aria-label="Email TC Construction (alternate)"
                    >
                      buildwithtc@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div>
                  <p className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/buildwithtc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-amber transition-colors font-display font-bold text-2xl uppercase tracking-wide"
                    aria-label="TC Construction on Instagram"
                  >
                    @buildwithtc
                  </a>
                </div>

                {/* Service area */}
                <div>
                  <p className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-2">
                    Service Area
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Riverside, California and surrounding areas including the Inland Empire.
                  </p>
                </div>

                {/* License */}
                <div>
                  <p className="font-display text-xs tracking-[0.25em] uppercase text-amber font-semibold mb-2">
                    License
                  </p>
                  <p className="text-gray-600 text-sm">
                    CA Contractor License #1075627 · Licensed &amp; Insured
                  </p>
                </div>
              </div>
            </div>

            {/* Form column */}
            <div className="card p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
