import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const GreetingsContainer = styled.div({
  height: '100vh',
  'scrollSnapAlign': 'center'
})

const Greetings = () => {
  return (
    <GreetingsContainer>
      <Navbar/>
    </GreetingsContainer>
  )
}

export default Greetings;