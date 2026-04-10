import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Framing & Structural Construction | Wood & Steel Framing',
  description:
    'TC Construction provides wood and steel framing, structural modifications, and load-bearing wall work in Riverside, CA and the Inland Empire. Built square, level, and to last.',
  alternates: { canonical: '/services/framing-and-structural' },
}

export default function FramingAndStructuralPage() {
  return (
    <ServicePage
      label="Framing & Structural"
      headline="The Bones of the Building."
      headlineAccent="Done Right."
      intro={[
        "The bones of the building done right. Whether it's a new build or a structural modification, we frame it square, level, and built to last. What gets covered up with drywall is what determines whether a building holds up for 50 years.",
        "Our framing crews have worked on everything from custom residential builds to large commercial structures. We know how to read plans, coordinate with engineers, and execute the structural scope without cutting corners.",
        "If the scope involves moving or removing load-bearing walls, structural modifications, or new construction framing — we're the call to make.",
      ]}
      includes={[
        'Wood framing — residential and light commercial',
        'Steel framing (metal stud)',
        'Structural modifications and additions',
        'Load-bearing wall removal and beam installation',
        'Subfloor systems and floor framing',
        'Roof framing — conventional and engineered',
        'Sheathing and weather barrier installation',
        'Coordination with structural engineers',
      ]}
      whoItsFor={
        "General contractors who need a reliable framing subcontractor, owner-builders who want experienced framing crews on their new construction, and homeowners or developers doing structural work that requires more than a standard handyman. We also frame for our own projects — if TC is building it, we frame it."
      }
      heroImage="/assets/framing.jpg"
      heroAlt="Commercial framing project — structural steel and wood framing"
      galleryImages={[
        { src: '/assets/wide-shot-framing.jpg', alt: 'Wide view of framing project' },
        { src: '/assets/framing-copy.jpg', alt: 'Close-up structural framing' },
        { src: '/assets/framing.jpg', alt: 'Commercial project framing' },
      ]}
    />
  )
}
