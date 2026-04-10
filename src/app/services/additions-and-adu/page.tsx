import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Additions & ADU Construction | Room Additions & Garage Conversions',
  description:
    'TC Construction builds room additions, ADUs, and garage conversions in Riverside, CA and the Inland Empire. Expand your space without moving — foundation to finish.',
  alternates: { canonical: '/services/additions-and-adu' },
}

export default function AdditionsAndADUPage() {
  return (
    <ServicePage
      label="Additions & ADU"
      headline="Expand Your Space."
      headlineAccent="Stay Where You Are."
      intro={[
        "Expand your space without moving. We build additions and ADUs that match the existing structure and maximize your property's potential — foundation to finish.",
        "Adding square footage is one of the highest-ROI investments a property owner can make. Whether you're adding a bedroom, building out above a garage, or converting an existing space into a rentable unit, the process starts with getting the structure right.",
        "We manage permits, coordinate with engineers where needed, and build to match the quality and aesthetic of your existing home or building.",
      ]}
      includes={[
        'Room additions — bedroom, living space, office',
        'Garage conversions to living space',
        'Detached ADU (accessory dwelling unit) construction',
        'Attached ADU builds',
        'Permit coordination and plan review',
        'Foundation and structural work',
        'MEP rough-in coordination (mechanical, electrical, plumbing)',
        'Full finish work — foundation to final punch',
      ]}
      whoItsFor={
        "Homeowners who want to add usable space without the cost and disruption of moving. Also a strong fit for property investors building ADUs to generate rental income or increase resale value. We guide you through the permit process so you know exactly what you're getting into before we start."
      }
      heroImage="/assets/garage-door.jpg"
      heroAlt="Garage door installation — addition and ADU construction"
      galleryImages={[
        { src: '/assets/wide-shot.jpg', alt: 'Addition construction project' },
        { src: '/assets/framing-copy.jpg', alt: 'Framing for new addition' },
      ]}
    />
  )
}
