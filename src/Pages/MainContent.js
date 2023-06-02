import React from 'react';
import styled from 'styled-components';
import House from "./House.jpg";
import Housedesign from "./Housedesign.jpg";
import Trash from "./Trash.jpg";
import Section2 from './Section.js';
import About from './About';

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 95vh;
  color: #333;
  background: url(${House}) no-repeat center center/cover;

  @media (max-width: 768px) {
    height: 100vh;
    background-size: cover;
  }
`;


const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(250, 250, 250, 0.75);
  padding: 75px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 75px;
  }
  
  h1 {
    margin: 0;
  }
`;




const MainContent = () => {
  return (
    <>
      <Main>
        <OverlayText>
          <h1>Velkommen til <br /><HighlightedText>Bærum<br />Byggfornyelse</HighlightedText></h1>
        </OverlayText>
      </Main>
      <About />
      <Section2 />
    </>
  );
};  

export default MainContent;
