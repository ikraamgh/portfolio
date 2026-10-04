'use client'

import { useState } from 'react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { projects, projectCategories } from '@/lib/portfolio-data'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>('All')

  const filtered =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="projects"
          title="Featured projects"
          description="A selection of projects reflecting my technical profile. Links are placeholders and will be updated with real repositories and demos."
        />

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'rounded-lg border px-4 py-2 text-sm font-medium transition-colors',
                filter === cat
                  ? 'border-primary bg-primary/12 text-primary'
                  : 'border-border bg-card/40 text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-md bg-accent/12 px-2.5 py-1 text-xs font-medium text-accent">
                  {project.category}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mt-4 font-heading text-lg font-semibold text-balance">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border/70 bg-secondary/50 px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground/80">Features: </span>
                {project.features.join(' · ')}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                <a
                  href={project.github}
                  target={project.github.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon className="size-4" />
                  Code
                </a>
                {project.demo.startsWith('http') ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <ExternalLink className="size-4" />
                    Live demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
                    <ExternalLink className="size-4" />
                    {project.demo}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
