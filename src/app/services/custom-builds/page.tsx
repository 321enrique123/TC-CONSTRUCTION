import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'

export const metadata: Metadata = {
  title: 'Custom Builds | Design-Build & Specialty Construction',
  description:
    "TC Construction handles custom residential builds, unique commercial scopes, and specialty construction projects in Riverside, CA and the Inland Empire. Bring your plans — we'll build it.",
  alternates: { canonical: '/services/custom-builds' },
}

export default function CustomBuildsPage() {
  return (
    <ServicePage
      label="Custom Builds"
      headline="Your Vision."
      headlineAccent="Our Build."
      intro={[
        "If you've got a plan that doesn't fit a standard category — bring it. We've built enough to figure out what it takes.",
        "Some of the best projects we've done didn't fit neatly into a box. A custom residential build with specific material requirements. A commercial space that needed a structural solution nobody had done before. A specialty finish that required real craftsmanship to execute.",
        "We approach custom work the same way we approach everything — figure out what it takes, be straight about scope and cost, and build it right.",
      ]}
      includes={[
        'Custom residential builds — ground-up',
        'Unique commercial scopes and specialty projects',
        'Design-build collaboration with architects and designers',
        'Specialty finishes — concrete, steel, custom millwork',
        'Structural details beyond standard scope',
        'Owner-designed builds and personal projects',
        'Commercial and residential mixed-use construction',
        'One-of-a-kind scopes — bring your plans',
      ]}
      whoItsFor={
        "Homeowners with a specific vision for their property. Developers and commercial clients with scopes that require a contractor willing to think through complex problems. Architects and designers who need a build partner that will execute at the level they design. If your project is unusual, that's a reason to call us, not a reason to hesitate."
      }
      heroImage="/assets/wide-shot.jpg"
      heroAlt="Custom construction project — unique scope and specialty work"
      galleryImages={[
        { src: '/assets/wide-industrial.jpg', alt: 'Large-scale custom commercial build' },
        { src: '/assets/industrial.jpg', alt: 'Industrial custom construction project' },
      ]}
    />
  )
}
