import { Code2, Brain, Layers } from 'lucide-react'
import { profile } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const highlights = [
  {
    icon: Layers,
    title: 'Full Stack Development',
    text: 'End-to-end web apps with Laravel, React, Node.js and relational or NoSQL databases.',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    text: 'Clean architecture, UML, Agile workflows and maintainable, scalable codebases.',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'ML fundamentals, regression models and AI-powered backend services with Python & FastAPI.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="about me" title="Engineering the bridge between web and AI" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {profile.about.map((paragraph, i) => (
              <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
