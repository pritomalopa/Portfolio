import { Code2, Lightbulb, TerminalSquare } from 'lucide-react'

// A few large, very low-opacity icons that drift slowly in the background of
// dark sections. Purely decorative — kept subtle so it never competes with
// the text on top of it.
export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Code2
        className="animate-float-a absolute -right-6 top-10 text-paper/[0.06]"
        size={160}
        strokeWidth={1}
      />
      <Lightbulb
        className="animate-float-b absolute left-[6%] top-1/2 text-paper/[0.05]"
        size={110}
        strokeWidth={1}
      />
      <TerminalSquare
        className="animate-float-c absolute bottom-6 right-[18%] text-paper/[0.05]"
        size={130}
        strokeWidth={1}
      />
    </div>
  )
}
