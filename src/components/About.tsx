import Section, { Reveal } from './Section'
import { profile } from '../data'
import profilePhoto from './Prof-Senjai.png'
export function ProfileImagePlaceholder() {
  return <img src={profilePhoto} alt="Portrait of Chinjay D. Arbois" className="mx-auto aspect-square w-full max-w-[200px] rounded-2xl object-cover object-center" />
}
const focus = ['Web development', 'Programming', 'Databases', 'Networking', 'AI-assisted development']
export default function About() {
  return (<Section id="about" eyebrow="About" title="A student who builds to learn">
    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
      <Reveal className="lg:col-span-3 space-y-5 text-mute leading-relaxed text-base sm:text-lg">
        <p>I'm a <span className="text-ink">4th-year BSCS student</span> at {profile.school}, developing my skills in web development, programming, databases, networking, and AI-assisted development.</p>
        <p>I'm interested in building practical software and continuously improving my abilities. My goal is a career in web development, and I'm preparing for it by building systems and solving problems.</p>
        <div><p className="text-ink font-semibold mb-3">Current focus</p><ul className="flex flex-wrap gap-2">{focus.map(f => <li key={f} className="rounded-full border border-line bg-surface/60 px-3 py-1.5 text-sm">{f}</li>)}</ul></div>
      </Reveal>
      <Reveal className="lg:col-span-2"><div className="card p-6 flex flex-col gap-6">
        <ProfileImagePlaceholder />
        <dl className="grid grid-cols-2 gap-x-5 gap-y-4 text-sm">
          {[['Name', `${profile.name} ("${profile.nickname}")`], ['Location', profile.location], ['Degree', 'BS Computer Science'], ['Level', `${profile.level} · Grad. ${profile.graduation}`]].map(([k, v]) =>
            <div key={k} className="min-w-0"><dt className="text-mute text-xs uppercase tracking-wider">{k}</dt><dd className="mt-1 break-words text-ink">{v}</dd></div>)}
        </dl>
      </div></Reveal>
    </div></Section>)
}
