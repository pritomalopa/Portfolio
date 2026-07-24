import SectionFrame from './SectionFrame'

export default function Experience() {
  return (
    <SectionFrame id="experience" index="04 — Experience" title="Experience" dark>
      <div className="max-w-2xl">
        <p className="text-base leading-relaxed text-paper/80">
          I am early in my career and don&rsquo;t yet have formal industry experience — my
          practical experience so far comes from independently designing, building, and
          deploying the full-stack projects below, each covering the complete cycle from
          database schema to a live, publicly accessible deployment.
          {/* TODO: replace or extend this section once you have an internship, freelance
              work, or a part-time role to add. */}
        </p>
      </div>
    </SectionFrame>
  )
}
