import { useEffect, useRef, useState } from 'react'
import Section, { Reveal } from './Section'
import asasPhoto from './ASASHS-ss_view.png'
import cvdiezPhoto from './CVdiez-ss_view.png'
import snnhsPhoto from './SNNHS-ss_view.png'
import snsuPhoto from './SNSU-ss_view.png'

type SchoolId = 'snsu' | 'snnhs' | 'asashs' | 'cvdiez'
type EducationItem = { id: string; school: SchoolId; title: string; sub: string; meta: string[] }

const schoolPreview: Record<SchoolId, { image: string; alt: string; latitude: string; longitude: string }> = {
  snsu: {
    image: snsuPhoto,
    alt: 'Surigao del Norte State University',
    latitude: '9.787775600692033',
    longitude: '125.494623070492',
  },
  snnhs: {
    image: snnhsPhoto,
    alt: 'Surigao del Norte National High School',
    latitude: '9.78568413409862',
    longitude: '125.49288834046354',
  },
  asashs: {
    image: asasPhoto,
    alt: 'Alegria Stand Alone Senior High School',
    latitude: '9.467320285760826',
    longitude: '125.57940771817458',
  },
  cvdiez: {
    image: cvdiezPhoto,
    alt: 'Clementino V. Diez Elementary School',
    latitude: '9.785545208113152',
    longitude: '125.48927683790782',
  },
}

function SchoolPreview({ school }: { school: SchoolId }) {
  const preview = schoolPreview[school]
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${preview.latitude},${preview.longitude}`

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-xl shadow-black/20">
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${preview.alt} in Google Maps`}
        className="group relative block aspect-[4/3] overflow-hidden bg-bg p-1 focus-visible:outline-offset-[-3px]"
      >
        <img
          src={preview.image}
          alt={preview.alt}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
        />
        <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/75 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-hi" stroke="currentColor" strokeWidth="1.6">
            <path d="M16 8.2c0 4.4-6 9-6 9s-6-4.6-6-9a6 6 0 1 1 12 0Z" />
            <circle cx="10" cy="8" r="2" />
          </svg>
          School location
        </span>
      </a>
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5">
        <p className="min-w-0 flex-1 break-words text-sm font-medium text-ink">{preview.alt}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-sm font-medium text-hi transition-colors hover:border-accent/60 hover:bg-accent/20"
        >
          View on Google Maps <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  )
}

export function Timeline({
  items,
  activeId,
  displayId,
  onSelect,
}: {
  items: EducationItem[]
  activeId: string | null
  displayId: string | null
  onSelect: (item: EducationItem | null) => void
}) {
  const lastInputWasTouch = useRef(false)
  return (
    <ol className="relative ml-3 space-y-6 border-l border-line sm:space-y-8">
      {items.map(item => {
        const active = item.id === activeId
        const showPreview = item.id === activeId
        const keepPreview = item.id === displayId
        return (
          <li key={item.id} className="relative min-w-0 pl-6 sm:pl-8">
            <span className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-bg transition-colors ${active ? 'bg-hi' : 'bg-accent'}`} />
            <div
              role="button"
              data-education-card
              tabIndex={0}
              aria-pressed={active}
              onPointerDown={event => { lastInputWasTouch.current = event.pointerType === 'touch' }}
              onPointerEnter={event => {
                if (event.pointerType === 'mouse') onSelect(item)
              }}
              onPointerLeave={event => {
                if (event.pointerType === 'mouse') onSelect(null)
              }}
              onFocus={() => {
                if (!lastInputWasTouch.current) onSelect(item)
              }}
              onClick={() => {
                if (lastInputWasTouch.current) onSelect(active ? null : item)
                else onSelect(item)
                lastInputWasTouch.current = false
              }}
              onKeyDown={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault()
                  onSelect(item)
                }
              }}
              className={`card min-w-0 cursor-pointer p-5 transition-colors sm:p-6 ${active ? 'border-accent/50' : ''}`}
            >
              <h3 className="break-words text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-1 break-words text-sm text-hi">{item.sub}</p>
              <ul className="mt-3 flex flex-wrap gap-2">{item.meta.map(meta => <li key={meta} className="max-w-full break-words rounded-full border border-line px-3 py-1 text-xs text-mute">{meta}</li>)}</ul>
            </div>
            {keepPreview && <div
              data-school-preview
              aria-hidden={!showPreview}
              className={`mt-4 overflow-hidden transition-[max-height,opacity,transform,visibility] duration-200 ease-out sm:hidden ${showPreview ? 'visible max-h-[1000px] translate-y-0 opacity-100' : 'invisible pointer-events-none max-h-0 translate-y-2 opacity-0'}`}
            >
              <SchoolPreview school={item.school} />
            </div>}
          </li>
        )
      })}
    </ol>
  )
}

export default function Education() {
  const items: EducationItem[] = [
    { id: 'snsu', school: 'snsu', title: 'Surigao del Norte State University', sub: 'Bachelor of Science in Computer Science', meta: ['2023 – Present', 'Expected Graduation: 2027'] },
    { id: 'snnhs-senior', school: 'snnhs', title: 'Surigao del Norte National High School', sub: 'Senior High School', meta: ['2022 – 2023', 'With Honors'] },
    { id: 'asashs', school: 'asashs', title: 'Alegria Stand Alone Senior High School', sub: 'Senior High School', meta: ['2021 – 2022'] },
    { id: 'snnhs-junior', school: 'snnhs', title: 'Surigao del Norte National High School', sub: 'Junior High School', meta: ['2017 – 2021'] },
    { id: 'cvdiez', school: 'cvdiez', title: 'Clementino V. Diez Elementary School', sub: 'Elementary Education', meta: ['2011 – 2017'] },
  ]
  const [activeId, setActiveId] = useState<string | null>(null)
  const [displayItem, setDisplayItem] = useState<EducationItem | null>(null)

  useEffect(() => {
    const selectedItem = items.find(item => item.id === activeId) ?? null
    if (selectedItem) {
      setDisplayItem(selectedItem)
      return
    }
    const timeout = window.setTimeout(() => setDisplayItem(null), 200)
    return () => window.clearTimeout(timeout)
  }, [activeId])

  useEffect(() => {
    const dismissOutsideCards = (event: PointerEvent) => {
      const target = event.target
      if (target instanceof Element && !target.closest('[data-education-card], [data-school-preview]')) {
        setActiveId(null)
      }
    }
    document.addEventListener('pointerdown', dismissOutsideCards)
    return () => document.removeEventListener('pointerdown', dismissOutsideCards)
  }, [])

  const selectItem = (item: EducationItem | null) => setActiveId(item?.id ?? null)
  const displaySchool = displayItem?.school
  const previewVisible = activeId !== null && displayItem?.id === activeId

  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] xl:gap-12">
        <Reveal className="min-w-0">
          <Timeline items={items} activeId={activeId} displayId={displayItem?.id ?? null} onSelect={selectItem} />
        </Reveal>
        <Reveal className="hidden min-w-0 self-start xl:sticky xl:top-24 xl:block">
          <div
            data-school-preview
            aria-hidden={!previewVisible}
            className={`overflow-hidden transition-[max-height,opacity,transform,visibility] duration-200 ease-out ${previewVisible ? 'visible max-h-[1000px] translate-y-0 opacity-100' : 'invisible pointer-events-none max-h-0 translate-y-2 opacity-0'}`}
          >
            {displaySchool && <SchoolPreview key={displayItem.id} school={displaySchool} />}
          </div>
        </Reveal>
      </div>
      <div
        data-school-preview
        aria-hidden={!previewVisible}
        className={`mt-8 hidden overflow-hidden transition-[max-height,opacity,transform,visibility] duration-200 ease-out sm:block xl:hidden ${previewVisible ? 'visible max-h-[1000px] translate-y-0 opacity-100' : 'invisible pointer-events-none max-h-0 translate-y-2 opacity-0'}`}
      >
        {displaySchool && <SchoolPreview key={displayItem.id} school={displaySchool} />}
      </div>
    </Section>
  )
}
