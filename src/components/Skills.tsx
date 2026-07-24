import { skillGroups } from '../data/config'
import SectionFrame from './SectionFrame'
import SkillBadge from './SkillBadge'

export default function Skills() {
  return (
    <SectionFrame id="skills" index="02 — Skills" title="Technical Skills" dark>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <div key={group.id}>
            <p className="sheet-label mb-4 text-signal">
              {String(i + 1).padStart(2, '0')} — {group.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionFrame>
  )
}
