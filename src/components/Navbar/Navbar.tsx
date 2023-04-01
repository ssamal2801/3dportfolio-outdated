import styled from 'styled-components';
import logo from '../../assets/logo.png';

const NavbarContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Content = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
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
`;

const ListItem = styled.li`
    cursor: pointer;
`;

const Button = styled.button`
    width: 5rem;
    padding: 10px;
    background-color: #6be2eb;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Logo = styled.img`
    height: 4rem;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Content>
                <Links>
                    <Logo src={logo} />
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Intro</ListItem>
                        <ListItem>Experience</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Button>Hire me!</Button>
                </Icons>
            </Content>
        </NavbarContainer>
    );
};

export default Navbar;
