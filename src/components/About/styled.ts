import styled from 'styled-components';

export const AboutPageStyled = styled.div`
  background-color: #111;
  width: 100%;
  height: 100vh;
  section {
    padding: 150px 0 0 150px;
    .content {
      padding: 60px 0 0 120px;
      position: relative;
      opacity: 0;
      transform: rotate(-10deg);
      transition: opacity 1s ease, transform 1.5s ease;
      h1 {
        font-size: 6vw;
        font-weight: 900;
        font-family: 'Segoe UI', Tahoma, 'Geneva', Verdana, sans-serif;
      }
      .aboutTextDiv {
        width: 85%;
        font-family: Verdana, fantasy;
        float: left;
        .text {
          float: left;
          width: 75%;
          h2 {
            font-size: 1.8vw;
          }
          span {
            font-weight: 600;
          }
        }
        .imgDiv {
          float: left;
          width: 16%;
          height: 14vw;
          border: 1px solid #666;
          margin-left: 5vw;
        }
      }
    }
  }
`;
