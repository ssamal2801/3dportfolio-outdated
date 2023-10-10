import React, { useRef, useEffect } from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import styled from 'styled-components';

const Img = styled.img``;

const Cube = () => {
    const textRef = useRef({ position: { x: 0 } });
    const cubeRef = useRef<THREE.Mesh>();

    const handleScroll = () => {
        const scrollValue =
            window.scrollY / (document.body.scrollHeight - window.innerHeight);
        const rotationValue = scrollValue * Math.PI * 2;
        if (cubeRef.current) {
            cubeRef.current.rotation.y = rotationValue * 3;
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <mesh ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial>
                <RenderTexture attach="map" sourceFile="">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <color attach="background" args={['#dc9dcd']} />
                    <Text ref={textRef} fontSize={.8} color="#555">
                        Dream Big
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    );
};

export default Cube;
