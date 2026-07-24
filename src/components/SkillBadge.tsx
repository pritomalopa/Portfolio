import { useState } from 'react'

type Skill = { name: string; icon?: string; color?: string }

export default function SkillBadge({ skill }: { skill: Skill }) {
  const [errored, setErrored] = useState(false)
  const hasIcon = Boolean(skill.icon) && !errored

  return (
    <div className="flex items-center gap-2 border border-paper/15 bg-paper/[0.03] px-3 py-2">
      {hasIcon ? (
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/${skill.color || 'FFFFFF'}`}
          alt=""
          width={16}
          height={16}
          className="shrink-0"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
      )}
      <span className="font-mono text-xs text-paper/85">{skill.name}</span>
    </div>
  )
}
