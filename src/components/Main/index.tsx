import { useState } from 'react';
import { MainPageStyled } from './styled';
import { BsLightbulb } from 'react-icons/bs';

const Main = () => {
  // 회전 상태를 관리하는 useState
  const [isRotated, setIsRotated] = useState(false);

  // 아이콘 클릭 시 상태 변경 함수
  const handleIconClick = () => {
    setIsRotated((prev) => !prev); // 클릭할 때마다 상태 반전
  };


  // 텍스트를 한 글자씩 나누어 배열로 반환
  const renderText = (text: string) => {
    return text.split('').map((letter: any, index: number) => (
      <span key={index} className="letter">
        {letter === ' ' ? '\u00A0' : letter}
      </span>
    ));
  };

  return (
    <MainPageStyled>
      <section id="main">
        <div className="mainDiv">
          <h2>{renderText('Welcome')}</h2>
          <h2>{renderText('My Portfolio')}</h2>
        </div>
        <div className={`iconDiv ${isRotated ? 'rotate' : ''}`} onClick={handleIconClick}>
          <BsLightbulb className="icon" />
        </div>
      </section>
    </MainPageStyled>
  );
};

export default Main;
