import React from 'react';
import styled from 'styled-components';
import Housedesign from "./Housedesign.jpg";
import Trash from "./Trash.jpg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
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
    height: 300px; /* Adjust the height as per your needs */
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
    text-align: center;
  }
`;

const TextContainer2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 25px;
  font-size: 18px;
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

const Paragraph = styled.p`
  @media (max-width: 768px) {
    font-size: 16px; /* Adjust the font size as per your needs */
  }
`;

const About = () => {
  return (
    <Grid>
      <TextContainer1 column="1" row="1">
        <h1><HighlightedText>Om Oss</HighlightedText></h1>
      </TextContainer1>
      <ImageContainer image={Housedesign} column="2" row="1" />
      <TextContainer2 column="2" row="2">
        <Paragraph>
          Bærum Byggfornyelse er et anerkjent snekkerfirma som har spesialisert seg på å forvandle boliger og kommersielle eiendommer gjennom omfattende oppussings- og fornyelsesprosjekter. Vi har et team av erfarne håndverkere og entreprenører som er dedikerte til å levere høykvalitetsarbeid. Vi er stolte av vår lange historie med vellykkede prosjekter og fornøyde kunder. Med vår ekspertise og grundige kunnskap innen byggfornyelse, kan vi hjelpe deg med å realisere din visjon for ditt hjem eller din eiendom. Enten det er en enkel oppussing eller en totalrenovering, er vi klare til å ta fatt på ethvert prosjekt.
        </Paragraph>
      </TextContainer2>
      <ImageContainer image={Trash} column="1" row="2" />
    </Grid>
  );
};

export default About;
