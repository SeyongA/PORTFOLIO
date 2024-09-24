import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ProjectsPageStyled } from './styled';

const Projects = () => {
  const scrollSectionRef = useRef<HTMLElement | null>(null);
  const scrollContentRef = useRef<any>(null);

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    if (!scrollSection || !scrollContent) return; // DOM 요소가 존재하지 않으면 실행하지 않음

    const handleScroll = () => {
      const scrolled = window.scrollY; // window.pageYOffset 대신 window.scrollY 사용
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight);

      if (scrollSection.offsetTop <= scrolled && notReachedBottom > 0) {
        gsap.to(scrollContent, {
          x: -sectionOffset,
          ease: 'none', // 애니메이션 이징 설정
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // 컴포넌트가 언마운트 될 때 이벤트 리스너 제거
    };
  }, []);

  return (
    <ProjectsPageStyled>
      <section id="projects" ref={scrollSectionRef}>
        <div className="horizontal_scroll_wrap">
          <div className="horizontal_scroll_content" ref={scrollContentRef}>
            <div className="about_project">
              <div className='contentDiv'>
                <div className='textDiv'>
                  <h2>제목</h2>
                  <h3>Publishing Project</h3>
                  <p>내용</p>
                </div>
                <div className='imagesDiv'>
                  
                </div>
              </div>
            </div>
            <div className="about_project">
              <div className='contentDiv'>
                <div className='textDiv'>
                  <h2>제목</h2>
                  <h3>Publishing Project</h3>
                  <p>내용</p>
                </div>
                <div className='imagesDiv'>
                  
                </div>
              </div>
            </div>
            <div className="about_project">
              <div className='contentDiv'>
                <div className='textDiv'>
                  <h2>제목</h2>
                  <h3>Publishing Project</h3>
                  <p>내용</p>
                </div>
                <div className='imagesDiv'>
                  
                </div>
              </div>
            </div>
            <div className="about_project">
              <div className='contentDiv'>
                <div className='textDiv'>
                  <h2>제목</h2>
                  <h3>Publishing Project</h3>
                  <p>내용</p>
                </div>
                <div className='imagesDiv'>
                  
                </div>
              </div>
            </div>
            <div className="about_project">
              <div className='contentDiv'>
                <div className='textDiv'>
                  <h2>제목</h2>
                  <h3>Publishing Project</h3>
                  <p>내용</p>
                </div>
                <div className='imagesDiv'>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </ProjectsPageStyled>
  );
};

export default Projects;
