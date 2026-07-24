import { Mail, Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '../data/config'
import SectionFrame from './SectionFrame'

export default function Contact() {
  return (
    <SectionFrame id="contact" index="06 — Contact" title="Get In Touch" dark>
      <p className="max-w-xl text-base leading-relaxed text-paper/75">
        I&rsquo;m open to frontend and full-stack developer roles, internships, and
        collaboration. The easiest way to reach me is by email.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-3 border border-paper/15 px-5 py-4 text-paper/85 transition-colors hover:border-signal hover:text-signal"
        >
          <Mail size={18} />
          <span className="font-mono text-sm">{siteConfig.email}</span>
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center gap-3 border border-paper/15 px-5 py-4 text-paper/85 transition-colors hover:border-signal hover:text-signal"
        >
          <Phone size={18} />
          <span className="font-mono text-sm">{siteConfig.phone}</span>
        </a>
        {siteConfig.whatsapp && (
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 border border-paper/15 px-5 py-4 text-paper/85 transition-colors hover:border-signal hover:text-signal"
          >
            <MessageCircle size={18} />
            <span className="font-mono text-sm">WhatsApp</span>
          </a>
        )}
      </div>
    </SectionFrame>
  )
}
