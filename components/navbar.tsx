'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { navItems, profile } from '@/lib/portfolio-data'
import { GithubIcon } from '@/components/brand-icons'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'glass border-b border-border/60' : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#hero"
          className="flex items-center gap-2 font-heading text-lg font-bold tracking-tight"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Terminal className="size-4" aria-hidden="true" />
          </span>
          <span>
            Ikram<span className="text-primary">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active === item.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.portfolioRepo}
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio source code on GitHub"
            className="flex size-9 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border/60 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                    active === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-primary px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
