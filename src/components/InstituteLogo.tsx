import { useState } from 'react'
import { GraduationCap } from 'lucide-react'

export default function InstituteLogo({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false)
  const showImage = src && !errored

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-blueprint/10 bg-white/60">
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain p-1.5"
          onError={() => setErrored(true)}
        />
      ) : (
        <GraduationCap size={20} className="text-circuit" strokeWidth={1.5} />
      )}
    </div>
  )
}
