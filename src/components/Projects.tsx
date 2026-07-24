import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import SectionFrame from './SectionFrame'

export default function Projects() {
  return (
    <SectionFrame id="projects" index="05 — Projects" title="Selected Projects">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </SectionFrame>
  )
}
