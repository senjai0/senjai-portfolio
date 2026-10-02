import { nav, profile } from '../data'
import { Social } from './Hero'
export default function Footer() {
  return (<footer className="relative z-10 border-t border-line bg-bg/80 px-5 sm:px-8 py-12"><div className="mx-auto max-w-6xl grid md:grid-cols-3 gap-8">
    <div><p className="font-extrabold tracking-[.25em]">{profile.brand}<span className="text-accent">.</span></p><p className="mt-3 text-sm">{profile.name}</p><p className="text-sm text-mute">{profile.title}</p><p className="mt-3 text-sm text-mute italic">"{profile.tagline}"</p></div>
    <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-1 text-sm">{nav.map(n => <li key={n}><a className="inline-flex items-center min-h-10 text-mute hover:text-ink" href={`#${n.toLowerCase()}`}>{n}</a></li>)}</ul></nav>
    <Social />
    <p className="md:col-span-3 text-xs text-mute pt-6 border-t border-line">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
  </div></footer>)
}
