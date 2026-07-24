import { BookOpen, Music2 } from 'lucide-react'
import { hobbies } from '../data/config'
import SectionFrame from './SectionFrame'

const HOBBY_ICONS: Record<string, any> = {
  'Reading books': BookOpen,
  Dance: Music2,
}

export default function About() {
  return (
    <SectionFrame id="about" index="01 — About" title="About Me">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-graphite/85">
          <p>
            I am a Computer Science & Engineering student who started out learning the
            fundamentals — C, C++, Java, and MySQL — through academic coursework, and then
            went further by completing an intensive, hands-on full-stack web development
            program. That combination gives me a grounding in core engineering principles
            alongside practical, production-style experience with modern web technologies.
          </p>
          <p>
            My programming journey has been built around shipping complete, working
            applications rather than isolated exercises: designing a schema, wiring up
            authentication, building the interface, and deploying the result so it can
            actually be used. I enjoy full-stack work in particular — the process of moving
            between the structure of a backend and the detail of an interface, and seeing how
            decisions on one side shape the other.
          </p>
          <p>
            I am most engaged by problems that involve real constraints: getting an
            authentication flow to fail safely, keeping a deployment consistent across
            environments, or structuring data so it stays reliable as an application grows.
            I care about writing code that is easy to reason about, not just code that works
            once.
          </p>
        </div>

        <div className="space-y-4">
          <p className="sheet-label text-steel">Outside of Programming</p>
          <ul className="space-y-3">
            {hobbies.map((hobby) => {
              const Icon = HOBBY_ICONS[hobby]
              return (
                <li
                  key={hobby}
                  className="flex items-center gap-3 border border-blueprint/10 bg-white/40 px-4 py-3"
                >
                  {Icon && <Icon size={18} className="shrink-0 text-circuit" />}
                  <span className="text-sm text-graphite/85">{hobby}</span>
                </li>
              )
            })}
          </ul>
          <p className="text-sm leading-relaxed text-graphite/70">
            Reading keeps me curious outside of code, and dance is where I get to think in
            movement rather than logic — both are a good reset before returning to a hard
            problem with a clearer head.
          </p>
        </div>
      </div>
    </SectionFrame>
  )
}
