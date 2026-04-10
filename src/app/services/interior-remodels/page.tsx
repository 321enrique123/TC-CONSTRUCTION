import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Interior Remodels | Full-Room Renovations',
  description:
    'TC Construction handles interior remodels of all sizes — demo through finish. Full-room transformations for homeowners in Riverside, CA and the Inland Empire.',
  alternates: { canonical: '/services/interior-remodels' },
}

export default function InteriorRemodelsPage() {
  return (
    <ServicePage
      label="Interior Remodels"
      headline="Tear It Out."
      headlineAccent="Build It Right."
      intro={[
        'Whole-room transformations. From gut jobs to finish work — TC Construction handles interior remodels of all sizes. If it needs to be torn out and rebuilt right, that\'s what we do.',
        'Whether you\'re starting with bare walls or finishing off a rough space, we manage the full process: demo, framing, mechanical rough-ins, drywall, flooring, trim, paint, and punch-out. One contractor from start to finish means nothing falls through the cracks.',
        'We work in occupied homes and we treat your space with the same care we\'d want in our own. You\'ll always know what\'s happening and what comes next.',
      ]}
      includes={[
        'Demo and removal',
        'Framing and rough carpentry',
        'Drywall and taping',
        'Flooring (hardwood, tile, LVP, and more)',
        'Trim, casing, and finish carpentry',
        'Paint — interior and exterior',
        'Fixture installation',
        'Full-room coordination and project management',
      ]}
      whoItsFor={
        'Homeowners who want a single contractor they can trust to run the entire remodel — from the first swing of a hammer to the final coat of paint. We work on all sizes: a bedroom refresh, a full main-floor renovation, or a complete gut rehab.'
      }
      heroImage="/assets/living-room.jpg"
      heroAlt="Interior remodel — living room transformation"
      galleryImages={[
        { src: '/assets/hallway.jpg', alt: 'Interior remodel hallway' },
        { src: '/assets/fireplace.jpg', alt: 'Interior remodel fireplace' },
        { src: '/assets/living-room.jpg', alt: 'Completed living room remodel' },
      ]}
    />
  )
}
