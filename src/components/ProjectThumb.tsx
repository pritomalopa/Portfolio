import { useState } from 'react'
import { Boxes } from 'lucide-react'

export default function ProjectThumb({ name, image }: { name: string; image?: string }) {
  const [errored, setErrored] = useState(false)
  const showImage = image && !errored

  return (
    <div className="relative aspect-video w-full overflow-hidden border border-blueprint/10 bg-blueprint-deep">
      {showImage ? (
        <img
          src={image}
          alt={`${name} screenshot`}
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-paper/70">
          <Boxes size={26} strokeWidth={1.5} className="text-circuit" />
          <span className="font-mono text-[11px] uppercase tracking-widest">{name}</span>
        </div>
      )}
    </div>
  )
}
