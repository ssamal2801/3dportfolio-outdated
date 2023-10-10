import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import worldImg from '/world.png';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const IntroContainer = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Content = styled.div`
    height: 100%;
    scroll-snap-align: center;
    width: 90%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`;

const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
    }
`;

const Title = styled.h1`
    font-size: 5rem;
    @media only screen and (max-width: 768px) {
        text-align: center;
        font-size: 2rem;
        padding: 0.5rem;
    }
`;

const About = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const Subtitle = styled.h2`
    color: #da4ea2;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Description = styled.div`
    font-size: 1.2rem;
    color: lightgray;
    @media only screen and (max-width: 768px) {
        padding: 0 1rem;
        text-align: center;
        font-size: 1rem;
    }
`;

const Img = styled.img`
    width: 45rem;
    height: 45rem;
    object-fit: contain;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 2s infinite ease alternate;
    @media only screen and (max-width: 768px) {
        width: 20rem;
        height: 20rem;
    }
    @keyframes animate {
        to {
            transform: translateY(20px);
        }
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

const Greetings = () => {
    const github = 'https://github.com/ssamal2801';
    return (
        <IntroContainer>
            <Navbar />
            <Content>
                <Left>
                    <Title>Inovate. Develop. Design.</Title>
                    <About>
                        <Subtitle>Full Stack Software Developer</Subtitle>
                    </About>
                    <Description>
                        In a quest to learn more and more from the industry’s
                        top minds out there and make the best out of all
                        opportunities!
                    </Description>
                    <Button onClick={() => window.open(github)}>
                        Check My Work
                    </Button>
                </Left>
                <Right>
                    <Canvas>
                        <Suspense fallback={null}>
                            <OrbitControls enableZoom={false} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[3, 2, 1]} />
                            <Sphere args={[1, 100, 200]} scale={2.4}>
                                <MeshDistortMaterial
                                    color="#da4ea2"
                                    attach="material"
                                    distort={0.5}
                                    speed={1}
                                />
                            </Sphere>
                        </Suspense>
                    </Canvas>
                    <Img src={worldImg} />
                </Right>
            </Content>
        </IntroContainer>
    );
};

export default Greetings;
