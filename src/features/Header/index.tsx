import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';
import logo from '@/assets/image/PF_logo.png';
import { scroller } from 'react-scroll';
import { FaGithub, FaGithubSquare } from 'react-icons/fa';
const Header = () => {
  // 부드럽게 넘어가는 함수
  // const scrollToSection = (sectionName: any) => {
  //   scroller.scrollTo(sectionName, {
  //     duration: 800, // 부드러운 스크롤 애니메이션 시간 (ms)
  //     delay: 0,
  //     smooth: 'easeInOutQuart', // 부드러운 스크롤 효과
  //   });
  // };

  return (
    <HeaderStyled>
      <div className="header">
        <div className="logoDiv">
          <img
            src={logo.src}
            onClick={() => {
              window.location.href = '#main';
            }}
          />
        </div>
        <div className="navDiv">
          <ul>
            <li>
              <span
                onClick={() => {
                  window.location.href = '#about-me';
                }}
              >
                About Me
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  window.location.href = '#projects';
                }}
              >
                Project
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  window.location.href = '#Skills';
                }}
              >
                Skills
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  window.location.href = '#Contact';
                }}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </div>
      <aside className="sideBar">
        <ul>
          <li>
            <a href="https://github.com/SeyongA/SeyongA.git">
              <FaGithubSquare id="icons" />
            </a>
          </li>
          <li></li>
        </ul>
      </aside>
    </HeaderStyled>
  );
};
export default Header;
