'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    src: '/assets/wide-industrial.jpg',
    alt: 'Large-scale industrial commercial build',
    category: 'Commercial',
    title: 'Commercial Build',
    description: 'Ground-up industrial construction project',
  },
  {
    src: '/assets/very-nice-kitchen.jpg',
    alt: 'High-end custom kitchen remodel',
    category: 'Kitchen & Bath',
    title: 'Kitchen Renovation',
    description: 'Full kitchen transformation with custom finishes',
  },
  {
    src: '/assets/framing.jpg',
    alt: 'Commercial framing project',
    category: 'Commercial',
    title: 'Structural Framing',
    description: 'Large commercial project framing',
  },
  {
    src: '/assets/living-room.jpg',
    alt: 'Interior living room remodel',
    category: 'Residential',
    title: 'Living Room Remodel',
    description: 'Full interior remodel — demo to finish',
  },
  {
    src: '/assets/hallway.jpg',
    alt: 'Interior hallway remodel',
    category: 'Residential',
    title: 'Interior Renovation',
    description: 'Interior hallway and finish work',
  },
  {
    src: '/assets/industrial.jpg',
    alt: 'Industrial commercial project',
    category: 'Commercial',
    title: 'Industrial Project',
    description: 'Commercial construction — industrial scope',
  },
  {
    src: '/assets/wide-shot.jpg',
    alt: 'Wide shot of construction site',
    category: 'Commercial',
    title: 'Commercial Construction',
    description: 'Full-scope commercial project',
  },
  {
    src: '/assets/fireplace.jpg',
    alt: 'Interior fireplace remodel',
    category: 'Residential',
    title: 'Fireplace Renovation',
    description: 'Interior remodel with custom fireplace',
  },
  {
    src: '/assets/framing-copy.jpg',
    alt: 'Detailed framing construction',
    category: 'Commercial',
    title: 'Framing Detail',
    description: 'Precision framing on commercial project',
  },
  {
    src: '/assets/garage-door.jpg',
    alt: 'Garage door installation for addition project',
    category: 'Additions',
    title: 'Addition Project',
    description: 'Garage and addition construction',
  },
  {
    src: '/assets/kitchen.jpg',
    alt: 'Kitchen remodel project',
    category: 'Kitchen & Bath',
    title: 'Kitchen Remodel',
    description: 'Full kitchen renovation',
  },
  {
    src: '/assets/wide-shot-framing.jpg',
    alt: 'Wide shot framing on commercial site',
    category: 'Commercial',
    title: 'Commercial Framing',
    description: 'Wide-scale framing on commercial project',
  },
  {
    src: '/assets/parked-trucks.jpg',
    alt: 'TC Construction branded trucks ready for work',
    category: 'Residential',
    title: 'TC Construction Fleet',
    description: 'Ready for the next job',
  },
]

const filters = ['All', 'Residential', 'Commercial', 'Kitchen & Bath', 'Additions'] as const
type Filter = (typeof filters)[number]

export default function ProjectsGallery() {
  const [active, setActive] = useState<Filter>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section className="pb-0 bg-white" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="gallery-heading" className="sr-only">Project Gallery</h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter projects by category">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`font-display text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-200 ${
                active === f
                  ? 'bg-amber border-amber text-white'
                  : 'border-gray-300 text-gray-500 hover:border-amber hover:text-amber'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project) => (
            <div
              key={project.src + project.title}
              className="group relative overflow-hidden break-inside-avoid block"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-end p-5">
                  <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-amber font-display text-xs tracking-widest uppercase font-semibold block mb-1">
                      {project.category}
                    </span>
                    <p className="text-white font-display font-bold text-base uppercase">{project.title}</p>
                    <p className="text-white/60 text-xs mt-1">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-gray-400 text-center py-20">No projects in this category yet.</p>
        )}

        <div className="mt-16 pb-16 text-center">
          <p className="text-gray-400 text-sm mb-6">
            More photos added regularly. Follow{' '}
            <a
              href="https://instagram.com/buildwithtc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber hover:underline"
              aria-label="TC Construction Instagram"
            >
              @buildwithtc
            </a>{' '}
            for the latest.
          </p>
          <Link href="/get-a-quote" className="btn-primary px-10 py-4">
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}
