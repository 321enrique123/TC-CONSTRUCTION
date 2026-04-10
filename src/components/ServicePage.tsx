import Image from 'next/image'
import Link from 'next/link'

interface ServicePageProps {
  label: string
  headline: string
  headlineAccent: string
  intro: string[]
  includes: string[]
  whoItsFor: string
  heroImage: string
  heroAlt: string
  galleryImages?: { src: string; alt: string }[]
}

export default function ServicePage({
  label,
  headline,
  headlineAccent,
  intro,
  includes,
  whoItsFor,
  heroImage,
  heroAlt,
  galleryImages,
}: ServicePageProps) {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden" aria-label={`${label} hero`}>
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={heroAlt}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <p className="section-label mb-3">{label}</p>
          <h1 className="section-heading-light max-w-3xl">
            {headline} <span className="text-amber">{headlineAccent}</span>
          </h1>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: copy */}
            <div>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-12">
                {intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mb-12">
                <h2 className="font-display font-bold text-xl uppercase tracking-wide text-gray-900 mb-6">
                  What&apos;s Included
                </h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-amber rounded-full mt-2 shrink-0" aria-hidden="true" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="font-display font-bold text-xl uppercase tracking-wide text-gray-900 mb-4">
                  Who It&apos;s For
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">{whoItsFor}</p>
              </div>

              <Link href="/get-a-quote" className="btn-primary px-8 py-4">
                Get a Free Quote
              </Link>
            </div>

            {/* Right: gallery */}
            <div className="space-y-4">
              {galleryImages && galleryImages.length > 0 ? (
                galleryImages.map((img, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden rounded-sm">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                ))
              ) : (
                <div className="bg-gray-100 border border-gray-200 aspect-video flex items-center justify-center">
                  <p className="text-gray-400 text-xs text-center px-8">
                    {/* INSERT PROJECT PHOTOS: [service name] */}
                    PROJECT PHOTOS — Drop images here
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="section-label mb-4">Ready to Move Forward?</p>
          <h2 className="section-heading mb-6">
            Tell Us About <span className="text-amber">Your Project.</span>
          </h2>
          <p className="text-gray-500 mb-8">
            We&apos;ll review your project details and get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-a-quote" className="btn-primary px-10 py-4">
              Get a Free Quote
            </Link>
            <Link href="/projects" className="btn-outline px-10 py-4">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
