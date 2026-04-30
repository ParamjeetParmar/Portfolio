import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Research from './components/Research';
import Education from './components/Education';
import ProfessionalDevelopment from './components/ProfessionalDevelopment';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ParticlesBg from './components/ParticlesBg';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="relative">
      <Cursor />
      <ParticlesBg />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Education />
        <ProfessionalDevelopment />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;
