import styled from 'styled-components';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";


const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
    width: 100%;
`;
const Content = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Links = styled.div`
    align-items: center;
    display: flex;
    gap: 2rem;
`;

const Icons = styled.div`
    align-items: center;
    display: flex;
    gap: 2rem;
`;

const List = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;

    @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Button = styled.button`
    width: 5rem;
    padding: 10px;
    background-color: #50b0cf;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Logo = styled.img`
    height: 4rem;
`;

const Navbar = () => {
    const linkedin = 'https://www.linkedin.com/in/ssamal94/';
    return (
        <NavbarContainer>
            <Content>
                <Links>
                    <Logo src={logo} />
                    <List>
                        <ListItem>Intro</ListItem>
                        <ListItem>Experience</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button onClick={() => window.open(linkedin)}>Hire me!</Button>
                </Icons>
            </Content>
        </NavbarContainer>
    );
};

export default Navbar;
