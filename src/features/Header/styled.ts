import styled from 'styled-components';

export const HeaderStyled = styled.div`
  .header {
    width: 94%;
    height: 90px;
    z-index: 5000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 2%;
    top: 25px;
    opacity: 0;
    border: 1px solid #666;
    backdrop-filter: blur(4px);
    animation: headerFadeIn 1.5s ease-in-out 0.5s forwards;
    .logoDiv img {
      width: 90px;
      height: 90px;
      display: inline-block;
      line-height: 1.4;
      text-align: center;
      margin-left: 3px;
      color: #fff;
      opacity: 0;
      animation: logo 2s forwards;
      animation-delay: 2.2s;
    }
    img:hover {
      margin-left: 0;
      width: 96px;
      height: 96px;
      cursor: pointer;
    }
    .navDiv {
      ul {
        padding-left: 3vw;
        display: block;
        li {
          display: inline-block;
          position: relative;
          margin-right: 4vw;
        }

        li span {
          position: relative;
          cursor: pointer;
          display: inline-block;
          font-weight: 600;
          color: #fff;
          padding: 4px;
        }

        li span::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: #fff;
          transition: 0.5s;
        }

        li span:hover::after {
          width: 100%;
        }
      }
    }
  }

  .sideBar {
    width: 90px;
    height: 80vh;
    padding-bottom: 5vh;
    z-index: 5000;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: fixed;
    left: 2%;
    top: 114px;
    border: 1px solid #666;
    border-top: 0;
    backdrop-filter: blur(4px);
    animation: slideUpSns 1.5s ease-in-out 0.5s forwards;
  }

  @keyframes logo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes width {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes headerFadeIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @keyframes slideUpSns {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
