import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 75% 20%, oklch(0.68 0.16 245 / 0.18), transparent), radial-gradient(50% 40% at 15% 30%, oklch(0.82 0.13 200 / 0.12), transparent)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Open to opportunities
          </span>

          <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-heading text-xl font-medium text-gradient sm:text-2xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            {profile.heroTagline}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            {profile.location}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              View My Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Download className="size-4" />
              View CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex size-11 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex size-11 items-center justify-center rounded-lg border border-border bg-card/50 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl"
            />
            <div className="animate-float relative overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-2xl backdrop-blur-xl">
              {/* Terminal window header */}
              <div className="flex items-center justify-between border-b border-border/70 bg-secondary/50 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-red-500/80" />
                  <span className="size-3 rounded-full bg-amber-500/80" />
                  <span className="size-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">developer.ts</span>
                <span className="font-mono text-xs text-muted-foreground/50">UTF-8</span>
              </div>

              {/* Terminal code snippet */}
              <div className="p-5 font-mono text-xs leading-relaxed sm:text-sm">
                <div className="text-muted-foreground/60">// Full Stack &amp; AI Engineering</div>
                <div className="mt-2">
                  <span className="text-accent">const</span>{' '}
                  <span className="font-semibold text-foreground">developer</span>{' '}
                  <span className="text-muted-foreground">=</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">name:</span>{' '}
                  <span className="text-primary">&apos;Ikram Ghiouan Soussi&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">education:</span>{' '}
                  <span className="text-primary">&apos;ENSI Tanger&apos;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-muted-foreground">status:</span>{' '}
                  <span className="text-emerald-400">&apos;Open to opportunities&apos;</span>,
                </div>
                <div>{'}'}</div>

                <div className="mt-3">
                  <span className="text-accent">const</span>{' '}
                  <span className="font-semibold text-foreground">stack</span>{' '}
                  <span className="text-muted-foreground">=</span> [
                </div>
                <div className="pl-4 text-primary">
                  <span>&apos;Laravel&apos;</span>, <span>&apos;React&apos;</span>, <span>&apos;Next.js&apos;</span>,
                </div>
                <div className="pl-4 text-primary">
                  <span>&apos;Supabase&apos;</span>, <span>&apos;FastAPI&apos;</span>, <span>&apos;Docker&apos;</span>,
                </div>
                <div>];</div>

                <div className="mt-4 flex items-center gap-2 border-t border-border/50 pt-3 text-xs text-muted-foreground">
                  <span className="text-emerald-400">✓</span>
                  <span className="text-foreground/80">Ready to build scalable web &amp; AI apps</span>
                  <span className="inline-block h-3.5 w-1.5 animate-pulse bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
