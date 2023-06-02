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
    height: 50vh;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    height: auto;
  }
`;

const ImageContainer = styled.div`
  background: url(${props => props.image}) no-repeat center center/cover;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
  }
`;

const TextContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
  }
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 20px;
  font: 20px rubik;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
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

  @media (max-width: 768px) {
    position: static;
    transform: none;
    padding: 20px;
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
