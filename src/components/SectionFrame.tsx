import { ReactNode } from 'react'
import FloatingIcons from './FloatingIcons'

type Props = {
  id: string
  index: string
  title: string
  dark?: boolean
  children: ReactNode
}

export default function SectionFrame({ id, index, title, dark, children }: Props) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-hidden ${dark ? 'bg-blueprint text-paper' : 'bg-paper text-graphite'}`}
    >
      {dark && <FloatingIcons />}
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="drawing-frame p-6 md:p-10">
          <div className="mb-10 flex items-baseline gap-4">
            <span className="sheet-label text-signal">{index}</span>
            <div className={`dim-line flex-1 ${dark ? 'text-paper' : 'text-blueprint'}`} />
          </div>
          <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </section>
  )
}
