import { Briefcase } from 'lucide-react'
import { experiences } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="experience"
          title="Professional experience"
          description="Hands-on roles building and maintaining real-world web applications and internal tools."
        />

        <ol className="mt-12 relative border-l border-border/70 pl-6 sm:pl-8">
          {experiences.map((exp, i) => (
            <li key={i} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(1.5rem+1px)] flex size-6 items-center justify-center rounded-full border border-primary/40 bg-background sm:-left-[calc(2rem+1px)]">
                <span className="size-2.5 rounded-full bg-primary" />
              </span>

              <div className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{exp.role}</h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm font-medium text-primary">
                      <Briefcase className="size-4" aria-hidden="true" />
                      {exp.company}
                      {exp.location ? ` · ${exp.location}` : ''}
                    </p>
                  </div>
                  <span className="rounded-md bg-secondary/70 px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
