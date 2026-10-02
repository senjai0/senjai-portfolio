import { ReactNode } from 'react'
import { useReveal } from '../hooks'
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLDivElement>(); return <div ref={ref} className={`reveal ${className}`}>{children}</div>
}
export function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id?: string }) {
  return (<div className="mb-10 md:mb-14"><p className="text-hi text-xs sm:text-sm font-semibold tracking-[.2em] uppercase mb-3">{eyebrow}</p>
    <h2 id={id} className="text-[clamp(1.75rem,4.5vw,2.75rem)] font-bold tracking-tight leading-tight">{title}</h2>
    <div className="mt-4 h-px w-16 bg-accent" /></div>)
}
export default function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (<section id={id} aria-labelledby={`${id}-h`} className="px-5 sm:px-8 py-16 md:py-28"><div className="mx-auto max-w-6xl">
    <Reveal><SectionHeading id={`${id}-h`} eyebrow={eyebrow} title={title} /></Reveal>{children}</div></section>)
}
