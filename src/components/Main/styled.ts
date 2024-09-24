import styled from 'styled-components';

export const MainPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000;
  #main {
    width: 100%;
    .mainDiv {
      color: #fff;
      padding-left: 200px;
      padding-top: 260px;
      width: 70%;
      float : left;
      h2 {
        display: flex;
        gap: 0.2em;
        flex-wrap: wrap;
        font-weight: 900;
        font-size: 14vh;
        line-height: 1.4;
        
      }
    }

    .letter {
      display: inline-block;
      opacity: 0;
      animation: flyIn 1.5s ease forwards;
      font-size: inherit;
      transform: translate(100px, 100px); /* 초기 위치 */
    }

    /* 여러 방향에서 날아오는 느낌을 주기 위해 */
    .letter:nth-child(odd) {
      animation-duration: 1.5s;
      transform: translate(100px, -100px);
    }

    .letter:nth-child(even) {
      animation-duration: 1.5s;
      transform: translate(-100px, 100px);
    }

    @keyframes flyIn {
      to {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    .iconDiv {
      float: left;
      position: relative;
      margin-top: 200px;
      margin-left: 0px;
      font-size: 40vh;
      transition: transform 0.6s ease;
      opacity: 0;
      animation: fadeIn 1.5s ease-in-out 2s forwards;
      :hover {
        cursor: pointer;
      }
    }

    .iconDiv.rotate {
      transform: rotateY(180deg); /* Y축으로 180도 회전 */
      .icon {
        fill: #fde98d; /* 회전된 상태에서 아이콘 색상 변경 */
      }
    }

    .fade-in {
      opacity: 0;
      animation: fadeIn 1.5s ease-in-out 2s forwards;
    }

    @keyframes fadeIn {
      to {
        opacity: 1;
      }
    }
  }
`;
