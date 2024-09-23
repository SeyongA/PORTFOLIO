import styled from 'styled-components';

export const MainPageStyled = styled.div`
  background-color: #000;
  width: 100%;
  height: 100vh;
  .mainDiv {
    color: #fff;
    padding-left: 250px;
    padding-top: 200px;
    h2 {
      font-weight: 700;
      font-size: 15vh;
      line-height: 1.6;
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
`;
