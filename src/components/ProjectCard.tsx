import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Project } from '../data/projects'
import ProjectThumb from './ProjectThumb'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group flex h-full flex-col border border-blueprint/10 bg-white/50 transition-all hover:shadow-lg rounded-2xl overflow-visible">
      <ProjectThumb name={project.name} image={project.image} />
      <div className="flex flex-1 flex-col p-5">
        <span className="sheet-label text-signal">{String(index + 1).padStart(2, '0')}</span>
        <h3 className="mt-2 font-display text-xl font-semibold text-graphite">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-graphite/70">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <span key={tech} className="font-mono text-[10px] uppercase tracking-wide text-circuit">
              {tech}
              <span className="text-blueprint/20"> · </span>
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-blueprint transition-colors group-hover:text-signal"
        >
          View Details
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </div>
  )
}
