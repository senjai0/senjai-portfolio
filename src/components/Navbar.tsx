import { useEffect, useState } from 'react'
import { nav, links, profile } from '../data'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setScrolled(scrollY > 12); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    addEventListener('keydown', esc); return () => { removeEventListener('keydown', esc); document.body.style.overflow = '' }
  }, [open])
  const href = (n: string) => `#${n.toLowerCase()}`
  return (<header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 border-b ${scrolled || open ? 'bg-bg/70 backdrop-blur-md border-line' : 'border-transparent'}`}>
    <nav aria-label="Primary" className="mx-auto max-w-6xl h-16 px-5 sm:px-8 flex items-center justify-between">
      <a href="#home" className="font-extrabold tracking-[.25em] text-sm" onClick={() => setOpen(false)}>{profile.brand}<span className="text-accent">.</span></a>
      <ul className="hidden xl:flex items-center gap-6 2xl:gap-8">{[...nav, 'Resume'].map(n => <li key={n}><a href={href(n)} className="whitespace-nowrap text-sm text-mute hover:text-ink transition-colors">{n}</a></li>)}</ul>
      <div className="flex items-center gap-3">
        <button className="xl:hidden w-11 h-11 grid place-items-center rounded-lg" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
          <span className="relative w-6 h-4 block">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all duration-300 ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span></button>
      </div>
    </nav>
    <div id="mobile-menu" aria-hidden={!open} className={`xl:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto overscroll-contain bg-bg/95 backdrop-blur-lg px-5 pt-6 pb-8 transition-all duration-300 ease-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3 pointer-events-none'}`}>
      <ul className="flex flex-col">{[...nav, 'Resume'].map(n => <li key={n} className="border-b border-line"><a href={href(n)} onClick={() => setOpen(false)} className="flex items-center min-h-16 text-2xl font-semibold">{n}</a></li>)}</ul>
      {!links.email && <p className="mt-8 text-sm text-mute">{profile.location}</p>}
    </div>
  </header>)
}
