import React from 'react';
import styled from 'styled-components';
import House from "./House.jpg";

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  color: #333;
  background: url(${House}) no-repeat center center/cover;
`;

const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(250, 250, 250, 0.75);
  padding: 75px;
`;

const MainContent = () => {
  return (
    <Main>
      <TextContainer>
        <h1>Velkommen til <br /><HighlightedText>Bærum<br />Byggfornyelse</HighlightedText></h1>
      </TextContainer>
    </Main>
  );
};  

export default MainContent;
