import React, { Suspense } from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import resume from '/resume.pdf';

const ThinkboxContainer = styled.div`
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
    @media only screen and (max-width: 768px) {
        display: block;
        width: 100%;
    }
`;

const Left = styled.div`
    flex: 1;
    @media only screen and (max-width: 768px) {
        height: 50vh;
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
        padding: 0.5rem;
    }
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

const Thinkbox = () => {
    return (
        <ThinkboxContainer>
            <Content>
                <Left>
                    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube />
                            <OrbitControls enableZoom={false} autoRotate />
                        </Suspense>
                    </Canvas>
                </Left>
                <Right>
                    <Title>Out of box thinking.</Title>
                    <Description>
                        I worked 3 years in customer industry before my
                        professional software development journey. I understand the
                        market and prioritize client focused development.
                    </Description>
                    <Button onClick={()=>window.open(resume)}>Download my resume</Button>
                </Right>
            </Content>
        </ThinkboxContainer>
    );
};

export default Thinkbox;
