import Section, { Reveal } from './Section'
import { links } from '../data'
import resumeImage from './Resume.png'
export default function Resume() {
  return (<Section id="resume" eyebrow="Resume" title="My CV">
    <Reveal><div className="card p-6 sm:p-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div><h3 className="text-xl font-semibold">Chinjay D. Arbois: BSCS Student</h3><p className="text-mute mt-1 text-sm">Resume preview and download</p></div>
        <div className="flex flex-col sm:flex-row gap-3">
          <a className="btn btn-ghost" href={links.resumePdf || resumeImage} target="_blank" rel="noreferrer">View Resume</a>
          <a className="btn btn-primary" href={links.resumePdf || resumeImage} download>Download CV</a>
        </div>
      </div>
      <img src={resumeImage} alt="Resume of Chinjay D. Arbois" loading="lazy" decoding="async" className="mt-8 mx-auto w-full max-w-4xl rounded-xl border border-line" />
    </div></Reveal></Section>)
}
