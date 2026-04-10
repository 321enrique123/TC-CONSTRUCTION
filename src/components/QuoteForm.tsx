'use client'

import { useState, FormEvent } from 'react'

const projectTypes = [
  'Interior Remodel',
  'Commercial Construction',
  'Addition or ADU',
  'Kitchen or Bathroom',
  'Framing & Structural',
  'Custom Build',
  'Other / Not Sure',
]

const timelines = [
  'ASAP',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just planning/exploring',
]

const hearAboutOptions = [
  'Google',
  'Instagram (@buildwithtc)',
  'Word of mouth / referral',
  'Drove by a job site',
  'Other',
]

interface FormState {
  fullName: string
  phone: string
  email: string
  projectType: string
  projectAddress: string
  timeline: string
  description: string
  hearAbout: string
}

interface Errors {
  fullName?: string
  phone?: string
  email?: string
  projectType?: string
  description?: string
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    projectAddress: '',
    timeline: '',
    description: '',
    hearAbout: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const errs: Errors = {}
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email.'
    }
    if (!form.projectType) errs.projectType = 'Please select a project type.'
    if (!form.description.trim()) errs.description = 'Please describe your project.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  const update = (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }))

  const inputBase = 'w-full bg-white border px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber transition-colors'
  const inputClass = (key: keyof Errors) =>
    `${inputBase} ${errors[key] ? 'border-red-400' : 'border-gray-300'}`

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 bg-amber flex items-center justify-center mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="font-display font-black text-3xl uppercase text-gray-900 mb-4">Got It.</h2>
        <p className="text-gray-500 text-base leading-relaxed max-w-sm mx-auto">
          Tyler will be in touch within 24 hours to talk through your project.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Quote request form">
      <div className="space-y-6">
        {/* Row: Full Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
              Full Name <span className="text-amber" aria-hidden="true">*</span>
            </label>
            <input
              id="fullName" name="fullName" type="text" autoComplete="name"
              value={form.fullName} onChange={update('fullName')}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              className={inputClass('fullName')}
              placeholder="Your full name"
            />
            {errors.fullName && (
              <p id="fullName-error" className="text-red-500 text-xs mt-1" role="alert">{errors.fullName}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
              Phone Number <span className="text-amber" aria-hidden="true">*</span>
            </label>
            <input
              id="phone" name="phone" type="tel" autoComplete="tel"
              value={form.phone} onChange={update('phone')}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={inputClass('phone')}
              placeholder="Your phone number"
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Email Address <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <input
            id="email" name="email" type="email" autoComplete="email"
            value={form.email} onChange={update('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClass('email')}
            placeholder="you@email.com"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>
          )}
        </div>

        {/* Row: Project Type + Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="projectType" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
              Project Type <span className="text-amber" aria-hidden="true">*</span>
            </label>
            <select
              id="projectType" name="projectType"
              value={form.projectType} onChange={update('projectType')}
              aria-invalid={!!errors.projectType}
              aria-describedby={errors.projectType ? 'projectType-error' : undefined}
              className={`${inputClass('projectType')} appearance-none cursor-pointer ${form.projectType === '' ? 'text-gray-400' : ''}`}
            >
              <option value="" disabled>Select type</option>
              {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            {errors.projectType && (
              <p id="projectType-error" className="text-red-500 text-xs mt-1" role="alert">{errors.projectType}</p>
            )}
          </div>
          <div>
            <label htmlFor="timeline" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
              Approximate Timeline
            </label>
            <select
              id="timeline" name="timeline"
              value={form.timeline} onChange={update('timeline')}
              className={`${inputBase} border-gray-300 appearance-none cursor-pointer ${form.timeline === '' ? 'text-gray-400' : ''}`}
            >
              <option value="" disabled>Select timeline</option>
              {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        {/* Project Address */}
        <div>
          <label htmlFor="projectAddress" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Project Address or Location
          </label>
          <input
            id="projectAddress" name="projectAddress" type="text" autoComplete="street-address"
            value={form.projectAddress} onChange={update('projectAddress')}
            className={`${inputBase} border-gray-300`}
            placeholder="City, neighborhood, or full address"
          />
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="description" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Project Description <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <textarea
            id="description" name="description"
            value={form.description} onChange={update('description')}
            aria-invalid={!!errors.description}
            aria-describedby={errors.description ? 'description-error' : undefined}
            rows={5}
            className={`${inputClass('description')} resize-none`}
            placeholder="Tell us what you're building or remodeling. The more detail, the better."
          />
          {errors.description && (
            <p id="description-error" className="text-red-500 text-xs mt-1" role="alert">{errors.description}</p>
          )}
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="hearAbout" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            How Did You Hear About Us?
          </label>
          <select
            id="hearAbout" name="hearAbout"
            value={form.hearAbout} onChange={update('hearAbout')}
            className={`${inputBase} border-gray-300 appearance-none cursor-pointer ${form.hearAbout === '' ? 'text-gray-400' : ''}`}
          >
            <option value="" disabled>Select an option</option>
            {hearAboutOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send My Project Details'}
        </button>

        <p className="text-gray-400 text-xs text-center">
          We&apos;ll review your project and respond within 24 hours. No spam, no pressure.
        </p>
      </div>
    </form>
  )
}
