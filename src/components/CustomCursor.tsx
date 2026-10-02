import { useEffect, useRef, useState } from 'react'

const INTERACTIVE = 'a,button,[role="button"],[data-hover],input,textarea,select,summary,[contenteditable="true"]'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const pos = useRef<HTMLDivElement>(null)
  const trail = useRef<HTMLDivElement>(null)
  useEffect(() => { // only for devices with a precise pointer (mouse/trackpad)
    const mq = matchMedia('(pointer: fine) and (hover: hover)'); setEnabled(mq.matches)
    const on = () => setEnabled(mq.matches); mq.addEventListener('change', on); return () => mq.removeEventListener('change', on)
  }, [])
  useEffect(() => {
    if (!enabled) return
    let x = -100, y = -100, cx = -100, cy = -100, tx = -100, ty = -100, raf = 0
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    const follow = reducedMotion ? .55 : .3
    const trailFollow = reducedMotion ? .4 : .14
    const schedule = () => { if (!raf && !document.hidden) raf = requestAnimationFrame(loop) }
    const move = (e: MouseEvent) => { x = e.clientX; y = e.clientY; schedule() }
    const over = (e: MouseEvent) => {
      const active = !!(e.target as Element).closest?.(INTERACTIVE)
      pos.current?.toggleAttribute('data-active', active)
      trail.current?.toggleAttribute('data-active', active)
    }
    const loop = () => {
      cx += (x - cx) * follow
      cy += (y - cy) * follow
      tx += (x - tx) * trailFollow
      ty += (y - ty) * trailFollow
      if (pos.current) pos.current.style.transform = `translate3d(${cx}px,${cy}px,0)`
      if (trail.current) {
        trail.current.style.transform = `translate3d(${tx}px,${ty}px,0)`
        const lag = Math.hypot(cx - tx, cy - ty)
        trail.current.style.opacity = String(Math.min(.32, lag / 70 * .32))
      }
      if (Math.hypot(x - cx, y - cy) < .1 && Math.hypot(x - tx, y - ty) < .1) {
        cx = tx = x
        cy = ty = y
        raf = 0
        return
      }
      raf = requestAnimationFrame(loop)
    }
    const vis = () => {
      if (document.hidden) { cancelAnimationFrame(raf); raf = 0 }
      else schedule()
    }
    addEventListener('mousemove', move, { passive: true }); addEventListener('mouseover', over, { passive: true }); document.addEventListener('visibilitychange', vis)
    return () => { cancelAnimationFrame(raf); removeEventListener('mousemove', move); removeEventListener('mouseover', over); document.removeEventListener('visibilitychange', vis) }
  }, [enabled])
  if (!enabled) return null
  return (<>
    <div ref={trail} aria-hidden className="cursor-trail fixed top-0 left-0 z-[199] pointer-events-none will-change-transform" />
    <div ref={pos} aria-hidden className="cursor-glow fixed top-0 left-0 z-[200] pointer-events-none will-change-transform">
      <div className="cursor-aura" />
    </div>
  </>)
}
