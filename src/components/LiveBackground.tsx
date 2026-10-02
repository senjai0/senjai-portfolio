import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../hooks'
export default function LiveBackground() {
  const canvas = useRef<HTMLCanvasElement>(null), glow = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const c = canvas.current!, ctx = c.getContext('2d')!, reduced = prefersReducedMotion()
    const fine = matchMedia('(pointer: fine)').matches
    let w = 0, h = 0, raf = 0, mx = 0, my = 0, tx = 0, ty = 0
    type P = { x: number; y: number; vx: number; vy: number; r: number }
    let ps: P[] = []
    const resize = () => {
      w = c.width = innerWidth; h = c.height = innerHeight
      const n = reduced ? 0 : w < 640 ? 14 : w < 1024 ? 28 : 45 // fewer particles on small screens
      ps = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .15, vy: (Math.random() - .5) * .15, r: Math.random() * 1.2 + .4 }))
      if (reduced) ctx.clearRect(0, 0, w, h)
    }
    const frame = () => {
      ctx.clearRect(0, 0, w, h); ctx.fillStyle = 'rgba(96,165,250,.45)'
      for (const p of ps) { p.x = (p.x + p.vx + w) % w; p.y = (p.y + p.vy + h) % h; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill() }
      mx += (tx - mx) * .06; my += (ty - my) * .06
      if (glow.current) glow.current.style.transform = `translate3d(${mx - 300}px,${my - 300}px,0)`
      raf = requestAnimationFrame(frame)
    }
    const start = () => { if (!raf && !reduced) raf = requestAnimationFrame(frame) }
    const stop = () => { cancelAnimationFrame(raf); raf = 0 }
    const vis = () => (document.hidden ? stop() : start()) // pause when tab hidden
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY }
    resize(); start()
    addEventListener('resize', resize); document.addEventListener('visibilitychange', vis)
    if (fine && !reduced) addEventListener('mousemove', move, { passive: true })
    return () => { stop(); removeEventListener('resize', resize); removeEventListener('mousemove', move); document.removeEventListener('visibilitychange', vis) }
  }, [])
  const blob = 'absolute rounded-full blur-3xl motion-safe:animate-[drift_26s_ease-in-out_infinite]'
  return (<div aria-hidden className="fixed inset-0 -z-0 pointer-events-none overflow-hidden bg-bg">
    <div className={`${blob} -top-40 -left-32 w-[32rem] h-[32rem] bg-accent/20`} />
    <div className={`${blob} bottom-[-10rem] right-[-8rem] w-[36rem] h-[36rem] bg-blue-900/30`} style={{ animationDelay: '-9s' }} />
    <div className="site-data-bg absolute inset-0">
      <div className="site-data-glow" />
      <div className="site-data-grid" />
      <div className="site-data-track site-data-track-one" />
      <div className="site-data-track site-data-track-two" />
      <div className="site-code-column site-code-column-one">
        <div className="site-code-copy"><span>const ideas = build();</span><span>{'{}'} =&gt; solutions</span><span>while (learning) {'{}'}</span><span>return progress;</span></div>
        <div className="site-code-copy"><span>const ideas = build();</span><span>{'{}'} =&gt; solutions</span><span>while (learning) {'{}'}</span><span>return progress;</span></div>
      </div>
      <div className="site-code-column site-code-column-two">
        <div className="site-code-copy"><span>01 &nbsp; &lt;section&gt;</span><span>02 &nbsp; data.flow()</span><span>03 &nbsp; async build()</span><span>04 &nbsp; {'</>'}</span></div>
        <div className="site-code-copy"><span>01 &nbsp; &lt;section&gt;</span><span>02 &nbsp; data.flow()</span><span>03 &nbsp; async build()</span><span>04 &nbsp; {'</>'}</span></div>
      </div>
      <div className="site-code-column site-code-column-three">
        <div className="site-code-copy"><span>0101 &nbsp; 1010</span><span>&lt;/&gt; &nbsp; {'{}'}</span><span>010 &nbsp; 1101</span><span>function create()</span></div>
        <div className="site-code-copy"><span>0101 &nbsp; 1010</span><span>&lt;/&gt; &nbsp; {'{}'}</span><span>010 &nbsp; 1101</span><span>function create()</span></div>
      </div>
      <span className="site-data-particle site-data-particle-one" />
      <span className="site-data-particle site-data-particle-two" />
      <span className="site-data-particle site-data-particle-three" />
      <span className="site-data-symbol site-data-symbol-one">&lt;/&gt;</span>
      <span className="site-data-symbol site-data-symbol-two">{'{ }'}</span>
    </div>
    <div className="absolute inset-0 opacity-[.07]" style={{ backgroundImage: 'linear-gradient(#94A3B8 1px,transparent 1px),linear-gradient(90deg,#94A3B8 1px,transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(ellipse at center,#000 30%,transparent 75%)', WebkitMaskImage: 'radial-gradient(ellipse at center,#000 30%,transparent 75%)' }} />
    <canvas ref={canvas} className="absolute inset-0" />
    <div ref={glow} className="hidden [@media(pointer:fine)]:block absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-60" style={{ background: 'radial-gradient(circle,rgba(59,130,246,.10),transparent 65%)' }} />
  </div>)
}
