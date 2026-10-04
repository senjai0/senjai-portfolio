import { FormEvent, ReactNode, useState } from 'react'
import Section, { Reveal } from './Section'
import { Social } from './Hero'
import { links } from '../data'
type F = { name: string; email: string; message: string }
const field = 'w-full min-h-12 rounded-xl bg-bg/70 border border-line px-4 py-3 text-base placeholder:text-mute/60 focus:border-hi outline-none transition-colors'

function Field({ name, label, error, children }: { name: keyof F; label: string; error?: string; children: ReactNode }) {
  return <div>
    <label htmlFor={name} className="block text-sm mb-2 text-mute">{label}</label>
    {children}
    {error && <p id={`${name}-e`} role="alert" className="mt-1.5 text-sm text-red-400">{error}</p>}
  </div>
}

export default function Contact() {
  const [v, setV] = useState<F>({ name: '', email: '', message: '' }), [err, setErr] = useState<Partial<F>>({}), [status, setStatus] = useState('')
  const submit = (e: FormEvent) => {
    e.preventDefault(); const x: Partial<F> = {}
    if (v.name.trim().length < 2) x.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) x.email = 'Please enter a valid email.'
    if (v.message.trim().length < 10) x.message = 'Message should be at least 10 characters.'
    setErr(x); setStatus('')
    if (Object.keys(x).length) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${v.name.trim()}`)
    const body = encodeURIComponent(`Name: ${v.name.trim()}\nEmail: ${v.email.trim()}\n\n${v.message.trim()}`)
    window.location.href = `mailto:${links.email}?subject=${subject}&body=${body}`
    setStatus(`Your email app should open with your message. If it doesn't, email ${links.email} directly.`)
  }
  const set = (k: keyof F) => (e: { target: { value: string } }) => setV({ ...v, [k]: e.target.value })
  return (<Section id="contact" eyebrow="Contact" title="Let's Build Something Meaningful.">
    <div className="grid lg:grid-cols-5 gap-10">
      <Reveal className="lg:col-span-2 space-y-6"><p className="text-mute leading-relaxed">Whether you're a recruiter, a collaborator, or someone with an idea worth building, I'd be glad to hear from you.</p>
        <p className="text-sm text-mute">Email: <a className="text-ink underline decoration-line underline-offset-4 hover:text-hi" href={`mailto:${links.email}`}>{links.email}</a></p><Social /></Reveal>
      <Reveal className="lg:col-span-3"><form onSubmit={submit} noValidate className="card p-5 sm:p-8 space-y-5 hover:!transform-none">
        <Field name="name" label="Name" error={err.name}><input id="name" className={field} autoComplete="name" value={v.name} onChange={set('name')} aria-invalid={!!err.name} aria-describedby={err.name ? 'name-e' : undefined} /></Field>
        <Field name="email" label="Email" error={err.email}><input id="email" type="email" className={field} autoComplete="email" value={v.email} onChange={set('email')} aria-invalid={!!err.email} aria-describedby={err.email ? 'email-e' : undefined} /></Field>
        <Field name="message" label="Message" error={err.message}><textarea id="message" rows={5} className={field} value={v.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby={err.message ? 'message-e' : undefined} /></Field>
        <button className="btn btn-primary w-full sm:w-auto" type="submit">Open Email App</button>
        <p role="status" className="text-sm text-hi">{status}</p>
      </form></Reveal></div></Section>)
}
