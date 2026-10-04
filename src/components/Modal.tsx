import { ReactNode, useEffect, useRef } from 'react'
export default function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  const closeBtn = useRef<HTMLButtonElement>(null)
  const dialog = useRef<HTMLDivElement>(null)
  const onCloseRef = useRef(onClose)
  useEffect(() => { onCloseRef.current = onClose }, [onClose])
  useEffect(() => {
    if (!open) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab') return
      const container = dialog.current
      if (!container) return
      const focusable = Array.from(container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )).filter(element => !element.hidden && element.getAttribute('aria-hidden') !== 'true')
      if (focusable.length === 0) {
        event.preventDefault()
        container.focus()
        return
      }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) {
        event.preventDefault()
        first.focus()
      }
    }
    document.body.style.overflow = 'hidden'
    addEventListener('keydown', handleKeyDown)
    closeBtn.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      removeEventListener('keydown', handleKeyDown)
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [open])
  if (!open) return null
  return (<div className="fixed inset-0 z-[90] flex items-end sm:items-center justify-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
    <div ref={dialog} tabIndex={-1} className="relative w-full sm:max-w-3xl h-[94svh] sm:h-auto sm:max-h-[88vh] overflow-y-auto overscroll-contain bg-surface border border-line rounded-t-2xl sm:rounded-2xl shadow-2xl animate-[nudge_0s]" style={{ animation: 'none' }}>
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-surface/95 backdrop-blur px-5 sm:px-8 py-4 border-b border-line">
        <h3 id="dialog-title" className="font-bold text-lg">{title}</h3>
        <button ref={closeBtn} onClick={onClose} aria-label="Close dialog" className="w-11 h-11 grid place-items-center rounded-lg hover:bg-line text-xl">✕</button></div>
      <div className="p-5 sm:p-8">{children}</div></div></div>)
}
