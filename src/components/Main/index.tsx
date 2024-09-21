import { MainPageStyled } from './styled';

const Main = () => {
  return (
    <MainPageStyled>
      <section id="main">
        <div className="mainDiv">
          <h2 className="fade-in">Welcome</h2>
          <h2 className="fade-in">My Portfolio</h2>
        </div>
      </section>
    </MainPageStyled>
  );
};

export default Main;
