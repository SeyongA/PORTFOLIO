import styled from 'styled-components';

export const ProjectsPageStyled = styled.div`
  background-color: #fff;

  #projects {
    background-color: #b39c7a;
    position: relative;
    height: 1000vh;
    .horizontal_scroll_wrap {
      position: sticky;
      top: 0;
      left: 0;
      height: 100vh;
      overflow: hidden;
      background-color: #111;
      .horizontal_scroll_content {
        display: flex;
        height: 100vh;
        width: 600vw; /* scroll_width값 설정 - about-project 개수에 따라 */
        will-change: transform;
        .about_project {
          width: 100vw;
          height: 100vh;
          background-color: #111; /* 프로젝트 배경색 */
          padding-left: 200px;
          padding-top: 150px;
          .contentDiv{
            border: 1px solid #333;
            width: 90%;
            margin-left : 70px;
            position: relative;
            .textDiv{
              width: 40%;
              height: 60vh;
              border: 1px solid #333;
              position: absolute;
            }
            .imagesDiv{
              width: 55%;
              border: 1px solid #333;
              height: 60vh;
              position: absolute;
              right: 0;
            }
          }
        }
      }
    }
  }
`;
