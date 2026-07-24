import { education } from '../data/config'
import SectionFrame from './SectionFrame'
import InstituteLogo from './InstituteLogo'

export default function Education() {
  return (
    <SectionFrame id="education" index="03 — Education" title="Educational Qualification">
      <div className="divide-y divide-blueprint/10 border-y border-blueprint/10">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <InstituteLogo src={item.logo} alt={item.institute} />
              <div>
                <p className="font-display text-lg font-medium leading-snug text-graphite">
                  {item.level}
                </p>
                <p className="text-sm text-graphite/70">{item.institute}</p>
                <p className="text-sm text-graphite/50">{item.year}</p>
              </div>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest text-circuit sm:pl-4">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </SectionFrame>
  )
}
