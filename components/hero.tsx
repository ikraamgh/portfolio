import Image from 'next/image'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'

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
            Available for opportunities
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

          <div className="mt-8 flex flex-wrap gap-3">
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
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:150ms]">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="animate-float relative h-full w-full overflow-hidden rounded-3xl border border-border/60 bg-card/40">
              <Image
                src="/hero-visual.png"
                alt="Abstract visualization of full stack development and artificial intelligence"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
