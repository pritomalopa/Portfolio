import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'
import ProjectThumb from '../components/ProjectThumb'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-24 text-center">
        <p className="sheet-label text-signal">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-graphite">
          Project not found
        </h1>
        <Link to="/#projects" className="mt-6 inline-block font-mono text-sm text-blueprint underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-14 md:px-8 md:py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-steel transition-colors hover:text-blueprint"
        >
          <ArrowLeft size={14} />
          Back to Projects
        </Link>

        <div className="drawing-frame mt-8 p-6 md:p-10">
          <p className="sheet-label text-signal">Project Spec</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-base text-graphite/70">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-blueprint bg-blueprint px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-blueprint-deep"
            >
              <ExternalLink size={14} />
              Live Project
            </a>
            {project.githubLink ? (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-blueprint/30 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-blueprint transition-colors hover:border-blueprint"
              >
                <Github size={14} />
                Client Repo
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 border border-dashed border-steel/40 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-steel/70">
                <Github size={14} />
                Add repo link in projects.ts
              </span>
            )}
          </div>

          <div className="mt-10 aspect-video w-full overflow-hidden">
            <ProjectThumb name={project.name} image={project.image} />
          </div>

          <section className="mt-10">
            <p className="sheet-label mb-3 text-signal">Main Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="border border-blueprint/15 px-3 py-1.5 font-mono text-xs text-blueprint"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <p className="sheet-label mb-3 text-signal">Description</p>
            <p className="text-base leading-relaxed text-graphite/85">{project.description}</p>
          </section>

          <section className="mt-10">
            <p className="sheet-label mb-3 text-signal">Challenges Faced</p>
            <ul className="space-y-2">
              {project.challenges.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-graphite/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-circuit" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <p className="sheet-label mb-3 text-signal">Potential Improvements</p>
            <ul className="space-y-2">
              {project.improvements.map((c, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-graphite/80">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  {c}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
