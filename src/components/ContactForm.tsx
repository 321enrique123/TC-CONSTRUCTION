'use client'

import { useState, FormEvent } from 'react'

const projectTypes = [
  'Interior Remodel',
  'Commercial Construction',
  'Addition or ADU',
  'Kitchen or Bathroom',
  'Framing & Structural',
  'Custom Build',
  'Other',
]

interface FormState {
  name: string
  phone: string
  email: string
  projectType: string
  message: string
}

interface Errors {
  name?: string
  phone?: string
  email?: string
  projectType?: string
  message?: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const errs: Errors = {}
    if (!form.name.trim()) errs.name = 'Name is required.'
    if (!form.phone.trim()) errs.phone = 'Phone number is required.'
    if (!form.email.trim()) {
      errs.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email.'
    }
    if (!form.projectType) errs.projectType = 'Please select a project type.'
    if (!form.message.trim()) errs.message = 'Please describe your project.'
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

  const field = (id: keyof FormState) => ({
    id,
    name: id,
    value: form[id],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [id]: e.target.value })),
    'aria-invalid': !!errors[id],
    'aria-describedby': errors[id] ? `${id}-error` : undefined,
  })

  const inputClass = (key: keyof Errors) =>
    `w-full bg-white border px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-amber transition-colors ${
      errors[key] ? 'border-red-400' : 'border-gray-300'
    }`

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-12 h-12 bg-amber flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl uppercase text-gray-900 mb-3">
          Message Received
        </h3>
        <p className="text-gray-500 text-sm">
          Tyler will be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Full Name <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            autoComplete="name"
            {...field('name')}
            className={inputClass('name')}
            placeholder="Your name"
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Phone <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            autoComplete="tel"
            {...field('phone')}
            className={inputClass('phone')}
            placeholder="Your phone number"
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Email <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            autoComplete="email"
            {...field('email')}
            className={inputClass('email')}
            placeholder="you@email.com"
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="projectType" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Project Type <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <select
            {...field('projectType')}
            className={`${inputClass('projectType')} appearance-none cursor-pointer ${form.projectType === '' ? 'text-gray-400' : ''}`}
          >
            <option value="" disabled>Select project type</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="text-red-500 text-xs mt-1" role="alert">{errors.projectType}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block font-display text-xs tracking-widest uppercase text-gray-500 mb-2">
            Message <span className="text-amber" aria-hidden="true">*</span>
          </label>
          <textarea
            {...field('message')}
            rows={4}
            className={`${inputClass('message')} resize-none`}
            placeholder="Tell us about your project..."
          />
          {errors.message && (
            <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center py-4 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  )
}
