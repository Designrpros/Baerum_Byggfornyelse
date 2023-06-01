import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaBars, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoIosLogIn } from 'react-icons/io';



const StyledIcon = styled(FaBars)`
  color: black;
  margin-right: 15px;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;


const StyledLinkedin = styled(FaLinkedin)`
  color: black;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const StyledLogedIn = styled(IoIosLogIn)`
  color: white;
  font-size: 1.5em;

  &:hover {
    color: #ddd;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  color: #333;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #ddd;
  z-index: 10; // This ensures the navbar stays on top of other elements

  
  &:hover {
    color: #ddd;
  }
`;


const Link = styled(RouterLink)`
  color: #000;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;

  &:hover {
    color: #ddd;
  }
`;

const Div1 = styled.div`
  display: flex;
  align-items: center; // This aligns items vertically in the middle
  //justify-content: center; // This aligns items horizontally in the middle
`;



const Navbar = ({ toggleSidebar }) => {
  return (
    <Nav>
      {/* <StyledIcon onClick={toggleSidebar} /> */}
      <Link to="/">Bærum Byggfornyelse</Link>
      <Div1>
        <StyledLinkedin />
      </Div1>
     
    </Nav>
  );
};

export default Navbar;
