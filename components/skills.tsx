import {
  Code2,
  Server,
  Database,
  Wrench,
  BrainCircuit,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { skillGroups } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/section-heading'

const categoryIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  Tools: Wrench,
  'AI / Data': BrainCircuit,
  Other: Sparkles,
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="skills"
          title="Technical toolkit"
          description="A practical stack built across professional experience and continuous learning, spanning the full web lifecycle and AI development."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = categoryIcons[group.category] ?? Sparkles
            return (
              <div
                key={group.category}
                className="group rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading font-semibold">{group.category}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-border/70 bg-secondary/60 px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
