import { ReactNode, useEffect, useRef } from 'react'
export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const closeBtn = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const prev = document.activeElement as HTMLElement | null
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'; addEventListener('keydown', esc); closeBtn.current?.focus()
    return () => { document.body.style.overflow = ''; removeEventListener('keydown', esc); prev?.focus() }
  }, [open, onClose])
  if (!open) return null
  return (<div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true" aria-label={title}>
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <div className="relative w-full sm:max-w-3xl h-[94svh] sm:h-auto sm:max-h-[88vh] overflow-y-auto overscroll-contain bg-surface border border-line rounded-t-2xl sm:rounded-2xl shadow-2xl animate-[nudge_0s]" style={{ animation: 'none' }}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-surface/95 backdrop-blur px-5 sm:px-8 py-4 border-b border-line">
        <h3 className="font-bold text-lg">{title}</h3>
        <button ref={closeBtn} onClick={onClose} aria-label="Close dialog" className="w-11 h-11 grid place-items-center rounded-lg hover:bg-line text-xl">✕</button></div>
      <div className="p-5 sm:p-8">{children}</div></div></div>)
}
