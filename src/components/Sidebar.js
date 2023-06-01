import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Link = styled(RouterLink)`
  color: #fff;
  text-decoration: none;
  font-family: 'Rubik', sans-serif;
  font-weight: bold;

  &:hover {
    color: #ddd;
  }
`;

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: #fff;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-in-out;
  padding: 20px;
  z-index: 20;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  text-align: left;
`;


const LoginButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;

  svg {
    margin-right: 10px;
  }
`;


const Sidebar = ({ isOpen, toggleSidebar }) => {
  
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        toggleSidebar();
      }
    };

    // Bind the event listener
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref]);



  return (
    <>
    {isOpen && <Overlay onClick={toggleSidebar} />}
      <Aside isOpen={isOpen}>

      <List>
        <li><Link to="/" onClick={toggleSidebar}><FaHome /> Home</Link></li>
        {/* <li><Link to="/About" onClick={toggleSidebar}><FaNotesMedical />  Blog</Link></li> */}
      </List>
    </Aside>
    </>
  );
};

export default Sidebar;
