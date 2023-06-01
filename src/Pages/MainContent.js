import React from 'react';
import styled from 'styled-components';
import House from "./House.jpg";
import Housedesign from "./Housedesign.jpg";
import Trash from "./Trash.jpg";

const Main = styled.main`
  position: relative;
  width: 100%;
  height: 90vh;
  color: #333;
  background: url(${House}) no-repeat center center/cover;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
`;

const ImageContainer = styled.div`
  background: url(${props => props.image}) no-repeat center center/cover;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
`;

const TextContainer1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-column: ${props => props.column};
  grid-row: ${props => props.row};
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
`;

const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;
`;

const OverlayText = styled.div`
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
    <>
      <Main>
        <OverlayText>
          <h1>Velkommen til <br /><HighlightedText>Bærum<br />Byggfornyelse</HighlightedText></h1>
        </OverlayText>
      </Main>
      <Grid>
        <ImageContainer image={Housedesign} column="1" row="1" />
        <TextContainer1 column="2" row="1">
          <h1><HighlightedText>Om Oss</HighlightedText></h1>
        </TextContainer1>
        <TextContainer2 column="1" row="2">
          <p>Bærum Byggfornyelse er et anerkjent snekkerfirma som har spesialisert seg på å forvandle boliger og kommersielle eiendommer gjennom omfattende oppussings- og fornyelsesprosjekter. Vi har et team av erfarne håndverkere og entreprenører som er dedikerte til å levere høykvalitetsarbeid.
Vi er stolte av vår lange historie med vellykkede prosjekter og fornøyde kunder. Med vår ekspertise og grundige kunnskap innen byggfornyelse, kan vi hjelpe deg med å realisere din visjon for ditt hjem eller din eiendom. Enten det er en enkel oppussing eller en totalrenovering, er vi klare til å ta fatt på ethvert prosjekt.
Vårt motto er å levere kvalitet i alle ledd. Vi legger stor vekt på håndverksmessig dyktighet, nøye planlegging og en grundig forståelse av kundens behov. Vi er opptatt av å skape varige resultater som både er funksjonelle og estetisk tiltalende.</p>
        </TextContainer2>
        <ImageContainer image={Trash} column="2" row="2" />
      </Grid>
    </>
  );
};  

export default MainContent;
