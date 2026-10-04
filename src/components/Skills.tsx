import Section, { Reveal } from './Section'
import { skillGroups } from '../data'
import aiAssistedDevelopmentIcon from './AI-assisted Development.png'
import basicUiDesignIcon from './BasicUIDesign.png'
import basicAiIntegrationIcon from './Basic_AI _Integration.png'
import cppIcon from './C++.png'
import cIcon from './C.png'
import cssIcon from './CSS.webp'
import packetTracerIcon from './CiscoPacketTracer.webp'
import djangoIcon from './DJango.png'
import databaseDesignIcon from './Database_Design.webp'
import djangoRestFrameworkIcon from './Django_REST_Framework.png'
import firebaseFirestoreIcon from './Firebase_Firestore.png'
import gitIcon from './Git.png'
import githubIcon from './Github1.webp'
import htmlIcon from './HTML.png'
import javaIcon from './Java.png'
import javascriptIcon from './JavaScript.webp'
import mysqlIcon from './MySQL.png'
import phpIcon from './PHP.webp'
import postgresqlIcon from './PostgreSQL.png'
import pythonIcon from './Python.png'
import restApiIcon from './REST API.png'
import reactIcon from './React.webp'
import responsiveWebDevelopmentIcon from './ResponsiveWebDevelopment.png'
import sqlIcon from './SQL.jpg'
import technicalDocumentationIcon from './Technical Documentation.webp'
import typescriptIcon from './TypeScript.png'
import uiUxIcon from './UI-vs-UX.webp'
import videoEditingIcon from './Video Editing.webp'

const skillIcons: Record<string, { src: string; alt: string }[]> = {
  HTML: [{ src: htmlIcon, alt: 'HTML' }],
  CSS: [{ src: cssIcon, alt: 'CSS' }],
  JavaScript: [{ src: javascriptIcon, alt: 'JavaScript' }],
  TypeScript: [{ src: typescriptIcon, alt: 'TypeScript' }],
  Python: [{ src: pythonIcon, alt: 'Python' }],
  Java: [{ src: javaIcon, alt: 'Java' }],
  'C/C++': [{ src: cIcon, alt: 'C' }, { src: cppIcon, alt: 'C++' }],
  PHP: [{ src: phpIcon, alt: 'PHP' }],
  SQL: [{ src: sqlIcon, alt: 'SQL' }],
  React: [{ src: reactIcon, alt: 'React' }],
  Django: [{ src: djangoIcon, alt: 'Django' }],
  'Django REST Framework': [{ src: djangoRestFrameworkIcon, alt: 'Django REST Framework' }],
  'REST API Development': [{ src: restApiIcon, alt: 'REST API' }],
  Git: [{ src: gitIcon, alt: 'Git' }],
  GitHub: [{ src: githubIcon, alt: 'GitHub' }],
  'Responsive Web Development': [{ src: responsiveWebDevelopmentIcon, alt: 'Responsive Web Development' }],
  'Basic UI/UX': [{ src: uiUxIcon, alt: 'UI and UX' }],
  PostgreSQL: [{ src: postgresqlIcon, alt: 'PostgreSQL' }],
  MySQL: [{ src: mysqlIcon, alt: 'MySQL' }],
  'Firebase/Firestore': [{ src: firebaseFirestoreIcon, alt: 'Firebase and Firestore' }],
  'Database Design': [{ src: databaseDesignIcon, alt: 'Database Design' }],
  'Cisco Packet Tracer / Networking': [{ src: packetTracerIcon, alt: 'Cisco Packet Tracer' }],
  'Basic AI Integration': [{ src: basicAiIntegrationIcon, alt: 'AI Integration' }],
  'AI-assisted Development': [{ src: aiAssistedDevelopmentIcon, alt: 'AI-assisted Development' }],
  'Technical Documentation': [{ src: technicalDocumentationIcon, alt: 'Technical Documentation' }],
  'Basic UI Design': [{ src: basicUiDesignIcon, alt: 'UI Design' }],
  'Video Editing': [{ src: videoEditingIcon, alt: 'Video Editing' }],
}

function SkillCard({ name }: { name: string }) {
  const icons = skillIcons[name]

  return (
    <li className="card group flex min-h-32 flex-col items-center justify-center gap-3 p-4 text-center sm:min-h-36 sm:gap-4 sm:p-5">
      <div className="flex h-12 items-center justify-center gap-2 sm:h-14" aria-label={`${name} icon`}>
        {icons.map(icon => (
          <img
            key={icon.src}
            src={icon.src}
            alt={icon.alt}
            loading="lazy"
            decoding="async"
            className="h-11 w-11 object-contain transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_9px_rgba(96,165,250,0.4)] sm:h-12 sm:w-12"
          />
        ))}
      </div>
      <span className="text-sm font-medium leading-snug text-ink sm:text-base">{name}</span>
    </li>
  )
}

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      <p className="-mt-6 mb-10 max-w-xl text-mute">
        Technologies and tools I use to build practical projects.
      </p>
      <div className="space-y-10">
        {skillGroups.map(group => (
          <Reveal key={group.title}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-mute">{group.title}</h3>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {group.items.map(name => <SkillCard key={name} name={name} />)}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
