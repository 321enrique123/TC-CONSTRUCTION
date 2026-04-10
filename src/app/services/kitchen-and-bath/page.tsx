import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodels | Custom Kitchen & Bathroom Renovation',
  description:
    'TC Construction delivers full kitchen and bathroom remodels in Riverside, CA and the Inland Empire. Demo through finish — the rooms that matter most, done right.',
  alternates: { canonical: '/services/kitchen-and-bath' },
}

export default function KitchenAndBathPage() {
  return (
    <ServicePage
      label="Kitchen & Bath"
      headline="The Rooms That Matter."
      headlineAccent="Done Right."
      intro={[
        "The rooms that sell homes and make living in them better. We handle full kitchen and bathroom remodels with the same care we bring to larger commercial work — because detail matters here more than anywhere.",
        "A kitchen remodel is a significant investment, and the difference between a great outcome and a frustrating one usually comes down to the contractor. We manage the full scope: demo, rough-in coordination, cabinetry, tile, countertops, fixtures — all of it.",
        "No phase gets handed off and forgotten. We stay on the job until the last tile is set and the last light is hung.",
      ]}
      includes={[
        'Full demo and structural preparation',
        'Custom cabinetry coordination and installation',
        'Tile work — floors, backsplash, shower surrounds',
        'Countertop installation (stone, quartz, butcher block, and more)',
        'Plumbing rough-in coordination',
        'Electrical rough-in coordination (under-cabinet lighting, outlets)',
        'Fixture installation — sinks, faucets, hardware',
        'Paint and finish work',
      ]}
      whoItsFor={
        "Homeowners who are ready to invest in a kitchen or bathroom renovation and want a contractor who will manage it like a real project — not a side job. We work well with clients who have a design in mind and clients who need help thinking through the selections. Either way, we make sure the result is something you'll be happy with for years."
      }
      heroImage="/assets/very-nice-kitchen.jpg"
      heroAlt="High-end kitchen remodel with custom cabinetry and finishes"
      galleryImages={[
        { src: '/assets/kitchen.jpg', alt: 'Kitchen remodel project' },
        { src: '/assets/very-nice-kitchen.jpg', alt: 'Premium kitchen renovation' },
      ]}
    />
  )
}
