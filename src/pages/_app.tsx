import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Header from '@/features/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {Element} from 'react-scroll';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Element name="main" className="element">
        <Main />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </>
  );
}
