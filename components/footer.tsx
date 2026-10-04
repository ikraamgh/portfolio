import { Mail } from 'lucide-react'
import { profile, navItems } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <a href="#hero" className="font-heading text-lg font-bold">
            {profile.name}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">{profile.title}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
          <p className="text-xs text-muted-foreground">
            © {year} {profile.name}. Built with Next.js & Tailwind CSS.
          </p>
          <a
            href={profile.portfolioRepo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <GithubIcon className="size-3.5" />
            View Source Code
          </a>
        </div>
      </div>

    </footer>
  )
}
