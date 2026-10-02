import { profile, links } from '../data'
import SocialIcon, { type SocialPlatform } from './SocialIcon'
import heroPortrait from './WebBG_of_Senjai.png'
export function Social({ className = '' }: { className?: string }) {
  const items: { platform: SocialPlatform; href: string; label: string }[] = [
    { platform: 'github', href: links.github, label: 'GitHub profile' },
    { platform: 'linkedin', href: links.linkedin, label: 'LinkedIn profile' },
    { platform: 'facebook', href: links.facebook, label: 'Facebook profile' },
    { platform: 'instagram', href: links.instagram, label: 'Instagram profile' },
    { platform: 'tiktok', href: links.tiktok, label: 'TikTok profile' },
    { platform: 'email', href: links.gmail, label: 'Open Gmail inbox' },
  ]
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {items.map(item => <li key={item.platform}><SocialIcon {...item} /></li>)}
    </ul>
  )
}
export default function Hero() {
  return (<section id="home" className="relative isolate min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8 pt-24 pb-20">
    <img
      src={heroPortrait}
      alt=""
      aria-hidden="true"
      className="pointer-events-none absolute right-[-18vw] bottom-0 z-0 h-[44svh] max-h-[420px] w-auto max-w-none object-contain object-bottom opacity-20 sm:right-[-4vw] sm:h-[72svh] sm:max-h-[520px] sm:opacity-50 lg:right-[7vw] lg:top-1/2 lg:bottom-auto lg:h-[88svh] lg:max-h-[820px] lg:-translate-y-1/2 lg:opacity-100"
    />
    <div className="relative z-10 mx-auto max-w-6xl w-full">
      <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-xs sm:text-sm text-mute"><span className="w-1.5 h-1.5 rounded-full bg-accent" />Computer Science Student</p>
      <h1 className="name-gradient mt-6 text-[clamp(2.35rem,7vw,5rem)] leading-[1.08]">{profile.name}</h1>
      <p className="mt-4 text-[clamp(1.1rem,2.6vw,1.6rem)] font-medium text-hi">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-lg sm:text-xl text-ink/90">{profile.tagline}</p>
      <p className="mt-4 max-w-2xl text-mute leading-relaxed">{profile.intro}</p>
      <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"><a href="#projects" className="btn btn-primary">View My Work</a><a href="#contact" className="btn btn-ghost">Let's Connect</a></div>
      <Social className="mt-8" />
    </div>
    <a href="#about" className="relative z-10 mx-auto mt-8 flex min-h-11 flex-col items-center gap-1 text-xs text-mute hover:text-ink sm:absolute sm:bottom-6 sm:left-1/2 sm:mt-0 sm:-translate-x-1/2">Scroll to explore
      <svg className="animate-[nudge_2s_ease-in-out_infinite]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M12 5v14m0 0l-6-6m6 6l6-6" /></svg></a>
  </section>)
}
