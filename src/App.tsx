import React from 'react';
import './App.css';
import styled from 'styled-components';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Greetings from './components/Greetings/Greetings';
import Thinkbox from './components/Thinkbox/Thinkbox';

const AppContainer = styled.div`
    /* height: 100vh; */
    /* scroll-snap-type: y mandatory; */
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: black;
    &::-webkit-scrollbar {
        display: none;
    }
    @media only screen and (max-width: 768px) {
        height: auto;
        scroll-snap-type: none;
    }
`;

function App() {
    return (
        <AppContainer>
            <Greetings />
            <Thinkbox />
            <Experience />
            <Contact />
        </AppContainer>
    );
}

export default App;
