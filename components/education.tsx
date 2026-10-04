import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="education"
          title="Academic background"
          description="From a Full-Stack development diploma to an engineering degree specialized in Artificial Intelligence."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {education.map((item, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50"
            >
              {item.current && (
                <span className="absolute right-4 top-4 rounded-full bg-accent/15 px-2.5 py-0.5 text-xs font-medium text-accent">
                  Current
                </span>
              )}
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/12 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <span className="mt-4 font-mono text-xs text-muted-foreground">{item.period}</span>
              <h3 className="mt-1 font-heading font-semibold leading-snug text-balance">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">{item.school}</p>
              {item.detail && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
