import Section, { Reveal } from './Section'
import { profile } from '../data'
const items: { title: string; note: string }[] = [{ title: profile.honors, note: 'Surigao del Norte National High School' }] // add certifications here later
export default function Achievements() {
  return (<Section id="achievements" eyebrow="Achievements" title="Recognition & certifications">
    <Reveal className="grid sm:grid-cols-2 gap-4">
      {items.map(i => <div key={i.title} className="card p-6"><p className="text-hi text-xs uppercase tracking-wider">Academic</p><h3 className="mt-2 font-semibold text-lg">{i.title}</h3><p className="text-mute text-sm mt-1">{i.note}</p></div>)}
      <div className="rounded-2xl border border-dashed border-line p-6 grid place-items-center text-center text-mute text-sm">More achievements coming soon</div>
    </Reveal></Section>)
}
