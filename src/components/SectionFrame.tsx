import { ReactNode } from 'react'
import FloatingIcons from './FloatingIcons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

type Props = {
  id: string
  index: string
  title: string
  dark?: boolean
  children: ReactNode
}

export default function SectionFrame({ id, index, title, dark, children }: Props) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' })

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden ${dark ? 'bg-blueprint text-paper' : 'bg-paper text-graphite'}`}
    >
      {dark && <FloatingIcons />}
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="drawing-frame p-6 md:p-10">
          <div
            ref={ref}
            className={`mb-10 flex items-baseline gap-4 scroll-animate ${isVisible ? 'visible' : ''}`}
          >
            <span className="sheet-label text-signal">{index}</span>
            <div className={`dim-line flex-1 ${dark ? 'text-paper' : 'text-blueprint'}`} />
          </div>
          <h2
            ref={ref}
            className={`mb-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl scroll-animate ${isVisible ? 'visible' : ''}`}
          >
            {title}
          </h2>
          <div ref={ref} className={`scroll-animate ${isVisible ? 'visible' : ''}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
