import { siteConfig } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t border-blueprint/10 bg-paper px-5 py-6 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-xs text-steel">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-steel/70">Designed &amp; built by {siteConfig.name.split(' ')[0]}</p>
      </div>
    </footer>
  )
}
