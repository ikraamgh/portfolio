'use client'

import { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Errors = { name?: string; email?: string; message?: string }

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) {
      next.message = 'Please enter a message.'
    } else if (values.message.trim().length < 10) {
      next.message = 'Your message is a little short.'
    }
    return next
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    // Open the user's email client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio contact from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  function update(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }))
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="contact"
          title="Let's build something together"
          description="Open to Full Stack Developer and AI-oriented opportunities. Feel free to reach out — I usually reply quickly."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Email</span>
                <span className="font-medium">{profile.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/50 p-5">
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted-foreground">Location</span>
                <span className="font-medium">{profile.location}</span>
              </span>
            </div>

            <div className="flex gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-border bg-card/50 p-4 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
          >
            <div className="grid gap-5">
              <Field label="Name" error={errors.name} htmlFor="name">
                <input
                  id="name"
                  type="text"
                  value={values.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className={inputClass(errors.name)}
                />
              </Field>

              <Field label="Email" error={errors.email} htmlFor="email">
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className={inputClass(errors.email)}
                />
              </Field>

              <Field label="Message" error={errors.message} htmlFor="message">
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={update('message')}
                  placeholder="Tell me about the role or project..."
                  className={cn(inputClass(errors.message), 'resize-none')}
                />
              </Field>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <Send className="size-4" />
                Send Message
              </button>

              {sent && (
                <p className="flex items-center gap-2 text-sm text-accent">
                  <CheckCircle2 className="size-4" />
                  Your email client should now open with your message ready to send.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function inputClass(error?: string) {
  return cn(
    'w-full rounded-lg border bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary',
    error ? 'border-destructive' : 'border-border',
  )
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  )
}
