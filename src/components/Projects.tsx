import { useEffect, useRef, useState } from 'react'
import Section, { Reveal } from './Section'
import Modal from './Modal'
import { projects } from '../data'

type PortfolioProject = typeof projects[number]

function ScreenshotCarousel({
  screenshots,
  activeIndex,
  onActiveIndexChange,
}: {
  screenshots: PortfolioProject['screenshots']
  activeIndex: number
  onActiveIndexChange: (index: number) => void
}) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const closePreviewButton = useRef<HTMLButtonElement>(null)
  const activeScreenshot = screenshots[activeIndex]
  const hasMultiple = screenshots.length > 1
  const changeSlide = (direction: number) => {
    onActiveIndexChange((activeIndex + direction + screenshots.length) % screenshots.length)
  }

  useEffect(() => {
    if (!previewOpen) return
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewOpen(false)
      if (event.key === 'ArrowLeft' && hasMultiple) changeSlide(-1)
      if (event.key === 'ArrowRight' && hasMultiple) changeSlide(1)
    }
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', handleKeyDown)
    closePreviewButton.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      removeEventListener('keydown', handleKeyDown)
      previousFocus?.focus()
    }
  }, [previewOpen, hasMultiple, activeIndex])

  if (!activeScreenshot) return null

  return (
    <div className="w-full">
      <div className="group relative overflow-hidden rounded-xl border border-line bg-bg/70">
        <button
          type="button"
          onClick={() => setPreviewOpen(true)}
          aria-label={`View full image: ${activeScreenshot.alt}`}
          className="block aspect-[16/10] w-full cursor-zoom-in"
        >
          <img
            key={`${activeIndex}-${activeScreenshot.src}`}
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            className="h-full w-full object-contain animate-[screenshot-enter_.24s_ease-out]"
          />
          <span className="absolute inset-0 grid place-items-center bg-bg/0 text-sm font-medium text-white opacity-0 transition-[background-color,opacity] duration-200 group-hover:bg-bg/25 group-hover:opacity-100 group-focus-within:bg-bg/25 group-focus-within:opacity-100">
            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-surface/75 px-4 py-2 shadow-lg backdrop-blur">
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.8">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3" />
              </svg>
              View Full Image
            </span>
          </span>
        </button>
        {hasMultiple && <>
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-surface/55 text-white/80 shadow-lg backdrop-blur transition hover:border-white/30 hover:bg-surface/85 hover:text-white focus-visible:outline-offset-2"
          >&lt;</button>
          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-surface/55 text-white/80 shadow-lg backdrop-blur transition hover:border-white/30 hover:bg-surface/85 hover:text-white focus-visible:outline-offset-2"
          >&gt;</button>
          <span className="sr-only" aria-live="polite">{activeScreenshot.alt}</span>
        </>}
      </div>
      {hasMultiple && <div className="mt-4 flex flex-wrap justify-center gap-2" role="group" aria-label="Choose screenshot">
        {screenshots.map((screenshot, index) => (
          <button
            key={`${screenshot.src}-${index}`}
            type="button"
            onClick={() => onActiveIndexChange(index)}
            aria-label={`Show screenshot ${index + 1}: ${screenshot.alt}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-2.5 rounded-full transition-all duration-200 focus-visible:outline-offset-4 ${index === activeIndex ? 'w-6 bg-accent shadow-[0_0_10px_rgba(59,130,246,.5)]' : 'w-2.5 bg-mute/45 hover:bg-mute'}`}
          />
        ))}
      </div>}
      {previewOpen && <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-label="Screenshot preview"
        onClick={() => setPreviewOpen(false)}
      >
        <button
          ref={closePreviewButton}
          type="button"
          onClick={() => setPreviewOpen(false)}
          aria-label="Close image preview"
          className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-surface/70 text-xl text-white transition hover:bg-surface"
        >×</button>
        {hasMultiple && <>
          <button
            type="button"
            onClick={event => { event.stopPropagation(); changeSlide(-1) }}
            aria-label="Previous screenshot"
            className="absolute left-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-surface/70 text-xl text-white transition hover:bg-surface sm:left-6"
          >&lt;</button>
          <button
            type="button"
            onClick={event => { event.stopPropagation(); changeSlide(1) }}
            aria-label="Next screenshot"
            className="absolute right-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-surface/70 text-xl text-white transition hover:bg-surface sm:right-6"
          >&gt;</button>
        </>}
        <figure className="flex max-h-full max-w-full flex-col items-center gap-3" onClick={event => event.stopPropagation()}>
          <img
            key={`preview-${activeIndex}-${activeScreenshot.src}`}
            src={activeScreenshot.src}
            alt={activeScreenshot.alt}
            className="max-h-[82svh] max-w-full rounded-lg object-contain shadow-2xl animate-[screenshot-enter_.24s_ease-out]"
          />
          <figcaption className="text-center text-sm text-white/75">{activeScreenshot.alt}</figcaption>
        </figure>
      </div>}
    </div>
  )
}

const Stack = ({ project }: { project: PortfolioProject }) => <ul className="flex flex-wrap gap-2">{project.stack.map(t => <li key={t} className="rounded-md border border-accent/30 bg-accent/10 text-hi px-2.5 py-1 text-xs font-medium">{t}</li>)}</ul>
function DetailCopy({ text }: { text: string }) {
  return <div className="mt-1 space-y-3 text-mute italic leading-relaxed">
    {text.split('\n\n').map((paragraph, paragraphIndex) => (
      <p key={paragraphIndex}>{paragraph.split(/(\*\*.+?\*\*)/g).map((part, partIndex) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={partIndex} className="font-semibold text-ink/90 not-italic">{part.slice(2, -2)}</strong>
          : part
      )}</p>
    ))}
  </div>
}
export default function Projects() {
  const [open, setOpen] = useState(false)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [screenshotIndices, setScreenshotIndices] = useState<Record<string, number>>({})
  const activeProject = projects[activeProjectIndex]
  const activeScreenshotIndex = screenshotIndices[activeProject.name] ?? 0
  const changeProject = (direction: number) => {
    setOpen(false)
    setActiveProjectIndex(current => (current + direction + projects.length) % projects.length)
  }
  const setActiveScreenshot = (index: number) => {
    setScreenshotIndices(current => ({ ...current, [activeProject.name]: index }))
  }

  return (<Section id="projects" eyebrow="Featured Project" title="Thesis & Projects">
    <Reveal>
      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => changeProject(-1)}
          aria-label={`Previous project: ${projects[(activeProjectIndex - 1 + projects.length) % projects.length].name}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-surface/70 text-2xl text-white/85 shadow-lg transition hover:border-accent/60 hover:bg-surface hover:text-white focus-visible:outline-offset-2 sm:h-14 sm:w-14 sm:text-3xl"
        >&lt;</button>
        <article key={activeProject.name} className="card min-w-0 flex-1 animate-[screenshot-enter_.24s_ease-out] overflow-hidden grid lg:grid-cols-2">
          <div className="min-w-0 bg-bg/40 p-4 sm:p-6 lg:p-8">
            <ScreenshotCarousel
              screenshots={activeProject.screenshots}
              activeIndex={activeScreenshotIndex}
              onActiveIndexChange={setActiveScreenshot}
            />
          </div>
          <div className="flex min-w-0 flex-col gap-5 p-6 sm:p-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">{activeProject.category}</p>
              <h3 className="break-words text-2xl font-bold sm:text-3xl">{activeProject.name}</h3>
              <p className="mt-3 break-words text-mute leading-relaxed">{activeProject.description}</p>
            </div>
            <Stack project={activeProject} />
            {activeProject.features.length > 0 && <ul className={`grid gap-2 text-sm text-ink/90 ${activeProject.name === 'SNSU Memory Keeper' ? 'grid-cols-2' : ''}`}>{activeProject.features.map(feature => <li key={feature} className="flex gap-2"><span className="text-accent">▸</span><span className="min-w-0 break-words">{feature}</span></li>)}</ul>}
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button onClick={() => setOpen(true)} className="btn btn-primary w-full sm:w-auto">View Project Details</button>
              {activeProject.liveUrl.trim() && <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#4ade80]/35 bg-[#4ade80]/[0.08] px-5 text-sm font-semibold text-[#86efac] transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#4ade80]/70 hover:bg-[#4ade80]/[0.14] hover:shadow-[0_0_18px_rgba(74,222,128,.16)] sm:w-auto"
              >
                View Live Project
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.7">
                  <path d="M11 3h6v6m0-6-8 8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>}
              {!activeProject.liveUrl.trim() && <span
                aria-label={`${activeProject.name} is not yet deployed`}
                className="inline-flex min-h-12 w-full cursor-default items-center justify-center rounded-xl border border-line bg-surface/70 px-5 text-sm font-semibold text-mute sm:w-auto"
              >
                Not yet deployed
              </span>}
              {activeProject.sourceUrl.trim() && <a href={activeProject.sourceUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full sm:w-auto">View Source Code</a>}
            </div>
          </div>
        </article>
        <button
          type="button"
          onClick={() => changeProject(1)}
          aria-label={`Next project: ${projects[(activeProjectIndex + 1) % projects.length].name}`}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-surface/70 text-2xl text-white/85 shadow-lg transition hover:border-accent/60 hover:bg-surface hover:text-white focus-visible:outline-offset-2 sm:h-14 sm:w-14 sm:text-3xl"
        >&gt;</button>
      </div>
    </Reveal>
    <p className="mt-6 text-center text-sm text-mute" aria-live="polite">Project {activeProjectIndex + 1} of {projects.length}</p>
    <Modal open={open} onClose={() => setOpen(false)} title={activeProject.name}>
      {activeProject.name === 'CCIS-CodeHub' ? <>
        {activeProject.screenshots[0] && <img src={activeProject.screenshots[0].src} alt={activeProject.screenshots[0].alt} className="aspect-[16/10] w-full rounded-xl border border-line object-cover" />}
        <div className="mt-6"><Stack project={activeProject} /></div>
        <p className="mt-6 text-xs uppercase tracking-wider text-mute">Full thesis title</p><p className="mt-1 leading-relaxed text-ink/90">{activeProject.thesis}</p>
        <div className="mt-8 grid gap-6">{activeProject.details.map(([heading, text]) => <section key={heading}><h4 className="font-semibold">{heading}</h4><DetailCopy text={text} /></section>)}</div>
      </> : <>
        <p className="leading-relaxed text-mute">{activeProject.description}</p>
        {activeProject.features.length > 0 && <section className="mt-6">
          <h4 className="font-semibold">Features</h4>
          <ul className="mt-3 grid gap-2 text-sm text-ink/90">{activeProject.features.map(feature => <li key={feature} className="flex gap-2"><span className="text-accent">▸</span><span>{feature}</span></li>)}</ul>
        </section>}
        <section className="mt-6">
          <h4 className="font-semibold">Technologies</h4>
          {activeProject.stack.length > 0
            ? <div className="mt-3"><Stack project={activeProject} /></div>
            : <p className="mt-2 text-sm text-mute">Technology details to be added.</p>}
        </section>
        <section className="mt-6">
          <h4 className="font-semibold">Screenshots</h4>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {activeProject.screenshots.map(screenshot => <figure key={screenshot.src} className="min-w-0">
              <img src={screenshot.src} alt={screenshot.alt} className="aspect-[16/10] w-full rounded-xl border border-line object-contain" />
              <figcaption className="mt-2 text-xs text-mute">{screenshot.alt}</figcaption>
            </figure>)}
          </div>
        </section>
        <div className="mt-8 grid gap-6">{activeProject.details.map(([heading, text]) => <section key={heading}><h4 className="font-semibold">{heading}</h4><DetailCopy text={text} /></section>)}</div>
      </>}
    </Modal>
  </Section>)
}
