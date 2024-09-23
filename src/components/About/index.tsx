import { useEffect, useRef } from 'react';
import { AboutPageStyled } from './styled';

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry: any) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'rotate(0deg)';
          }
        });
      },
      {
        threshold: 0.4, // 요소가 50% 이상 보일 때만 트리거
      }
    );

    const content = contentRef.current;
    if (content) {
      observer.observe(content);
    }

    return () => {
      if (content) {
        observer.unobserve(content);
      }
    };
  }, []);

  return (
    <AboutPageStyled>
      <section id="about-me">
        <div className="content" ref={contentRef}>
          <h1>About Me</h1>
          <div className="aboutTextDiv">
            <div className="text">
              <h2>프론트엔드 개발자로서의 꿈을 향해 나아가는 저를 소개합니다.</h2>
              <br />
              <p>
                안녕하세요, 저는 <strong>컴퓨터 소프트웨어 전공</strong>을 바탕으로 프론트엔드 개발자로 성장하고 있는 주혜지입니다. 제가 웹
                개발에 끌리게 된 이유는 제 손끝에서 탄생하는 웹사이트들이 언제나 새롭고 흥미로웠기 때문입니다. 이 흥미를 발전시키고자{' '}
                <strong>포스코X코딩온 웹 13기 풀스택 과정</strong>에서
                <span>Vue.js</span>, <span>React</span>, <span>Next.js</span>, <span>JavaScript</span>,<span>CSS</span>, <span>HTML</span>,{' '}
                <span>Node.js</span>와 같은 기술을 체계적으로 배울 수 있었습니다.
              </p>
              <br />
              <p>
                비록 아직 졸업을 앞둔 학생이지만, 다양한 기술을 직접 적용해 보며 경험을 쌓았고, 그 과정에서 프론트엔드 개발의 매력을 깊이
                느끼게 되었습니다. 특히 사용자 경험을 개선하고, 더 나은 UI/UX를 제공하기 위한 코드 작성을 통해 웹이 어떻게 발전하는지
                경험하면서 개발자로서의 성장을 다짐하게 되었습니다.
              </p>
              <br />
              <p>
                앞으로도 웹 프론트엔드 기술을 더 강화해 나갈 계획이며, 빠르게 변화하는 시대에 맞춰 계속해서 새로운 기술을 습득하고 성장하는
                개발자가 되겠습니다. 끊임없이 도전하며 발전해 나가는 제가 되겠습니다. 감사합니다.
              </p>
            </div>
            <figure className="imgDiv">{/* 증명 사진 */}</figure>
          </div>
        </div>
      </section>
    </AboutPageStyled>
  );
};

export default About;
