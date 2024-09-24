import About from '@/components/About';
import Contact from '@/components/Contact';
import Main from '@/components/Main';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Header from '@/features/Header';
import '@/styles/globals.css';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Element } from 'react-scroll';

const sections = ['section1', 'section2', 'section3', 'section4', 'section5'];

export default function App() {
  // const [currentSection, setCurrentSection] = useState(0); //현재 인덱스
  // const [isScrolling, setIsScrolling] = useState(false); //중복방지
  // const contentRef = useRef<any>();

  // const handleWheel = useCallback(
  //   (event: any) => {
  //     if (isScrolling) return; // 스크롤 중일 때 중복 방지

  //     if (event.deltaY > 0) {
  //       // 휠을 아래로 내리면 다음 섹션으로
  //       setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  //     } else {
  //       // 휠을 위로 올리면 이전 섹션으로
  //       setCurrentSection((prev) => Math.max(prev - 1, 0));
  //     }

  //     setIsScrolling(true); // 스크롤 중 상태 설정
  //     setTimeout(() => {
  //       setIsScrolling(false); // 일정 시간 후 스크롤 중 상태 해제
  //     }, 1000); // 1초 후 스크롤 중 상태 해제
  //   },
  //   [isScrolling]
  // );

  // useEffect(() => {
  //   // 선택된 섹션으로 스크롤
  //   const section = document.getElementById(sections[currentSection]);
  //   if (section) {
  //     section.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }, [currentSection]);


  return (
    <div
    //  onWheel={handleWheel} ref={contentRef} style={{ height: '100vh', overflow : 'hidden'}}
    >
      <Header />
      <Element id="section1" name="main" className="element">
        <Main />
      </Element>
      <Element id="section2" name="about" className="element">
        <About />
      </Element>
      <Element id="section3" name="projects" className="element">
        <Projects />
      </Element>
      <Element id="section4" name="skills" className="element">
        <Skills />
      </Element>
      <Element id="section5" name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
}
