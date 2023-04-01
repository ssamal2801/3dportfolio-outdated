import React from 'react';
import './App.css';
import styled from 'styled-components';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Greetings from './components/Greetings/Greetings';
import Intro from './components/Intro/Intro';
import backgroundImg from './assets/img.jpg';

const AppContainer = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
  &::-webkit-scrollbar{
    display: none;
  }
  color: white;
  background: url(${backgroundImg});
`

function App() {

  return (
    <AppContainer>
      <Greetings/>
      <Intro/>
      <Experience/>
      <Contact/>
    </AppContainer>
  )
}

export default App
