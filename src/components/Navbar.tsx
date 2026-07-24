import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { siteConfig } from '../data/config'

const NAV_ITEMS = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'skills', num: '02', label: 'Skills' },
  { id: 'education', num: '03', label: 'Education' },
  { id: 'experience', num: '04', label: 'Experience' },
  { id: 'projects', num: '05', label: 'Projects' },
  { id: 'contact', num: '06', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    if (!onHome) return
    const onScroll = () => {
      let current = ''
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = item.id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  const goTo = (id: string) => {
    setOpen(false)
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`/#${id}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-blueprint/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-blueprint">
          {siteConfig.name.split(' ')[0]}
          <span className="text-signal">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`group flex items-center gap-2 rounded-sm px-3 py-2 text-sm transition-colors ${
                active === item.id ? 'text-blueprint' : 'text-steel hover:text-blueprint'
              }`}
            >
              <span
                className={`sheet-label ${
                  active === item.id ? 'text-signal' : 'text-steel/60 group-hover:text-signal'
                }`}
              >
                {item.num}
              </span>
              {item.label}
            </button>
          ))}
          <a
            href={siteConfig.resumeLink}
            download="Pritoma_Paul_Lopa_Resume.pdf"
            className="ml-2 rounded-sm border border-blueprint bg-blueprint px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-blueprint-deep"
          >
            Resume
          </a>
        </nav>

        <button
          className="text-blueprint md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-blueprint/10 bg-paper px-5 pb-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="flex w-full items-center gap-3 border-b border-blueprint/5 py-3 text-left text-sm text-graphite"
            >
              <span className="sheet-label text-signal">{item.num}</span>
              {item.label}
            </button>
          ))}
          <a
            href={siteConfig.resumeLink}
            download="Pritoma_Paul_Lopa_Resume.pdf"
            className="mt-3 block rounded-sm bg-blueprint px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-paper"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}
