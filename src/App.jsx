import Spotlight from './components/Spotlight.jsx';
import Intro from './components/Intro.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to Content</a>
      <Spotlight />
      <div className="page" id="top">
        <div className="layout">
          <Intro />
          <main id="main" className="content">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
