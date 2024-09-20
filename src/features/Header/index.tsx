import { useRouter } from 'next/router';
import { HeaderStyled } from './styled';
import logo from '@/assets/image/PF_logo.png';
const Header = () => {
  const router = useRouter();
  return (
    <HeaderStyled>
      <div className="header">
        <div className="logoDiv">
          <img src={logo.src} onClick={()=>{router.push('/')}} />
        </div>
        <div className="navDiv">
          <ul>
            <li>
              <span>About Me</span>
            </li>
            <li>
              <span>Project</span>
            </li>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Contact</span>
            </li>

          </ul>
        </div>
      </div>
      <aside className="sideBar">
        <div>{/* 사이드바 */}</div>
      </aside>
    </HeaderStyled>
  );
};
export default Header;
