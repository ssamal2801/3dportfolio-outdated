import styled from 'styled-components';
import worldImg from '../../assets/world.png';

const IntroContainer = styled.div`
    height: 100vh;
    scroll-snaps-align: center;
    display: flex;
    justify-content: space-between;
`;

const Content = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
    font-size: 5rem;
    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 2rem;
        padding: .5rem;
    }
`;

const About = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Description = styled.div`
    font-size: 1.2rem;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        padding: 20px;
        text-align: center;
        font-size: 1rem;
    }
`;

const Button = styled.button`
    background-color: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Intro = () => {
    return (
        <IntroContainer>
            <Content>
                <Left>{/* Handle 3d model */}</Left>
                <Right>
                    <Title>Out of box thinking.</Title>
                    <Description>
                        I worked 3 years in customer industry before my professional software development journey. I know the market and understand what the clients want.
                    </Description>
                    <Button>Download my resume</Button>
                </Right>
            </Content>
        </IntroContainer>
    );
};

export default Intro;
