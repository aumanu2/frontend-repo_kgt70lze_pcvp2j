import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-12 lg:px-16">
          <a href="#home" className="text-lg font-semibold">DK</a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#skills">Skills</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#achievements">Achievements</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-gray-950/80 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Divyansh Kathuria • Built with love and curiosity
      </footer>
    </div>
  );
}
