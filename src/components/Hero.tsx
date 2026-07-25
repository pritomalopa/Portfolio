import { Github, Linkedin, Twitter, Facebook, Mail, ArrowDown, FileDown } from 'lucide-react'
import { siteConfig } from '../data/config'
import ProfilePhoto from './ProfilePhoto'
import FloatingIcons from './FloatingIcons'
import AnimatedText from './AnimatedText'

const SOCIAL_ICONS: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
}

export default function Hero() {
  const socialEntries = Object.entries(siteConfig.socials).filter(([, url]) => url)

  return (
    <section className="relative overflow-hidden bg-blueprint text-paper">
      <FloatingIcons />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 py-20 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:px-8 md:py-28">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            <AnimatedText text={siteConfig.name} as="h1" delay={40} />
          </h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-widest text-circuit sm:text-base">
            <AnimatedText text={siteConfig.designation} delay={25} />
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg">
            <AnimatedText text={siteConfig.tagline} delay={15} />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.resumeLink}
              download="Pritoma_Paul_Lopa_Resume.pdf"
              className="inline-flex items-center gap-2 border border-signal bg-signal px-5 py-3 font-mono text-xs uppercase tracking-widest text-graphite transition-colors hover:bg-transparent hover:text-signal"
            >
              <FileDown size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 border border-paper/30 px-5 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper/5"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="email"
              className="rounded-full border border-paper/20 p-2.5 text-paper/80 transition-colors hover:border-signal hover:text-signal"
            >
              <Mail size={18} />
            </a>
            {socialEntries.map(([key, url]) => {
              const Icon = SOCIAL_ICONS[key]
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                  className="rounded-full border border-paper/20 p-2.5 text-paper/80 transition-colors hover:border-signal hover:text-signal"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <ProfilePhoto />
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-paper/40 hover:text-signal md:block"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  )
}
