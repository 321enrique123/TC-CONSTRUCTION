import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Commercial Construction | Build-Outs & Commercial Remodels',
  description:
    'TC Construction handles large-scale commercial builds, tenant improvements, and commercial remodels. Licensed contractor serving Riverside, CA and the Inland Empire. CA Lic. #1075627.',
  alternates: { canonical: '/services/commercial-construction' },
}

export default function CommercialConstructionPage() {
  return (
    <ServicePage
      label="Commercial Construction"
      headline="Built for Business."
      headlineAccent="Built to Perform."
      intro={[
        'Large-scale commercial builds handled by a team that knows how to manage scope, timeline, and quality at the same time. We work with business owners, developers, and property managers who need a contractor they can count on.',
        "Commercial construction is different from residential. The stakes are higher, the schedules are tighter, and the margin for error is smaller. We've built the systems to manage it — scheduling, subcontractor coordination, quality control, and communication with your team throughout.",
        'We coordinate directly with your architects, engineers, and project stakeholders. Our goal is to be the most reliable part of your build team.',
      ]}
      includes={[
        'Ground-up commercial builds',
        'Tenant improvements (TI) and build-outs',
        'Commercial remodels and renovations',
        'Structural work and modifications',
        'Shell completions',
        'Coordination with architects and engineers',
        'Permit management and inspections',
        'Site management and subcontractor oversight',
      ]}
      whoItsFor={
        'Business owners building or renovating their space, commercial developers, and property managers overseeing tenant improvements. We work well with clients who are experienced in construction and those who need a contractor to guide them through the process.'
      }
      heroImage="/assets/wide-industrial.jpg"
      heroAlt="Large-scale commercial construction project"
      galleryImages={[
        { src: '/assets/industrial.jpg', alt: 'Commercial construction — industrial project' },
        { src: '/assets/wide-shot.jpg', alt: 'Commercial construction wide view' },
        { src: '/assets/wide-shot-framing.jpg', alt: 'Commercial framing wide shot' },
      ]}
    />
  )
}
