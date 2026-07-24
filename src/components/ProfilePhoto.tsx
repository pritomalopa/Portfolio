import { useState } from 'react'
import { Aperture } from 'lucide-react'
import { siteConfig } from '../data/config'

export default function ProfilePhoto() {
  const [errored, setErrored] = useState(false)

  return (
    <div className="drawing-frame relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-paper/25 bg-blueprint-deep text-paper md:max-w-[320px]">
      {!errored ? (
        <img
          src={siteConfig.profilePhoto}
          alt="Profile photo"
          className="h-full w-full object-cover"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 px-6 text-center">
          <Aperture className="text-signal" size={32} strokeWidth={1.5} />
          <p className="font-mono text-[11px] uppercase tracking-widest text-paper/60">
            Add /public/assets/professional-photo.jpg
          </p>
        </div>
      )}
      <span className="sheet-label absolute bottom-2 right-2 text-paper/40">FIG. 01</span>
    </div>
  )
}
