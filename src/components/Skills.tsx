import Section, { Reveal } from './Section'
import { skillGroups } from '../data'
export function SkillBadge({ name, level }: { name: string; level: string }) {
  return (<li className="card px-4 py-3 flex flex-col"><span className="font-medium text-sm sm:text-base">{name}</span><span className="text-xs text-hi mt-0.5">{level}</span></li>)
}
export default function Skills() {
  return (<Section id="skills" eyebrow="Skills" title="What I work with">
    <p className="-mt-6 mb-10 text-mute max-w-xl">Honest self-assessment, not percentages. Levels reflect where I am today and will keep changing.</p>
    <div className="space-y-10">{skillGroups.map(g => <Reveal key={g.title}>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-mute mb-4">{g.title}</h3>
      <ul className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">{g.items.map(([n, l]) => <SkillBadge key={n} name={n} level={l} />)}</ul></Reveal>)}</div>
  </Section>)
}
