import styled from "styled-components";

const IntroContainer = styled.div`
  height: 100vh;
  scroll-snaps-align: center;
  display: flex;
  flex-direction: column;
  
  `;

  const Content = styled.div`
    height: 100vh;

  `;

const Intro = () => {
  return (
    <IntroContainer>
      Intro
    </IntroContainer>
  )
}

export default Intro;