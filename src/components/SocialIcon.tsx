import type { ReactNode } from 'react'

export type SocialPlatform = 'github' | 'linkedin' | 'facebook' | 'instagram' | 'tiktok' | 'email'

type SocialIconProps = {
  platform: SocialPlatform
  href: string
  label: string
}

const icons: Record<SocialPlatform, ReactNode> = {
  github: <path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.1-1.24-5.1-5.53 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.45 3.06-1.15 3.06-1.15.61 1.54.23 2.67.11 2.96.72.78 1.16 1.78 1.16 3 0 4.3-2.62 5.24-5.12 5.52.4.35.76 1.03.76 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />,
  linkedin: <><path fill="currentColor" d="M5.2 8.6H1.8V22h3.4V8.6ZM3.5 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM22 14.3c0-4.03-2.15-5.9-5.02-5.9a4.34 4.34 0 0 0-3.9 2.14V8.6H9.7V22h3.4v-6.63c0-1.75.33-3.44 2.5-3.44 2.14 0 2.17 2 2.17 3.55V22H22v-7.7Z" /></>,
  facebook: <path fill="currentColor" d="M13.3 21v-8.2h2.8l.42-3.2H13.3V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.34-.14-2.55-.14-2.53 0-4.26 1.54-4.26 4.38V9.6H6.93v3.2h2.86V21h3.51Z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.8" /><circle cx="17.6" cy="6.6" r="1.15" fill="currentColor" /></>,
  tiktok: <path fill="currentColor" d="M19.6 7.3a6.6 6.6 0 0 1-4.1-1.4v8.2a5.7 5.7 0 1 1-5-5.65v3.2a2.55 2.55 0 1 0 1.8 2.44V2.5h3.2c.2 2.36 1.68 4.1 4.1 4.35v.45Z" />,
  email: <><rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" /><path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></>,
}

export default function SocialIcon({ platform, href, label }: SocialIconProps) {
  const content = <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">{icons[platform]}</svg>
  const className = 'group inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-surface/60 text-mute transition-all duration-300 ease-out hover:scale-[1.15] hover:border-hi hover:text-hi hover:shadow-[0_0_18px_rgba(59,130,246,.25)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-hi'

  if (!href) {
    return <span role="img" aria-label={`${label} (coming soon)`} title={`${label} coming soon`} className={`${className} cursor-not-allowed opacity-45`}>{content}</span>
  }

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className={className}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    >
      {content}
    </a>
  )
}
