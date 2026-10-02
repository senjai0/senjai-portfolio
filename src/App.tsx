import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LiveBackground from './components/LiveBackground'
import CustomCursor from './components/CustomCursor'
export default function App() {
  return (<>
    <LiveBackground /><CustomCursor />
    <a href="#about" className="sr-only focus:not-sr-only fixed top-3 left-3 z-[100] bg-accent text-white px-4 py-2 rounded-lg">Skip to content</a>
    <Navbar />
    <main className="relative z-10"><Hero /><About /><Skills /><Projects /><Education /><Achievements /><Resume /><Contact /></main>
    <Footer />
  </>)
}
