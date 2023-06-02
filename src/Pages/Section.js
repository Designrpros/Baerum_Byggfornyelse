import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: center;
  align-content: center;
`;

const SegmentController = styled.div`
  display: flex;
  align-items: center;
`;

const SegmentButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const SegmentText = styled.p`
  display: flex;
  justify-content: center;
  text-align: left;
`;

const QuoteGrid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #555;
  height: 50vh;
  margin-left: -1rem;
`;

const Segment = styled.div`
  display: grid;
  height: 50vh;
  padding: 2rem;
`;

const QuoteText = styled.p`
  text-align: center;
  padding: 4rem;
  padding-top: 0;
  font-size: 1.5rem;
`;

const QuoteIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;
  padding-top: 4rem;
`;

const Section2 = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segmentTexts = [
    'Moderne Byggfornyelse AS har gjennom flere år rehabilitert betong- og murfasader. Manglende vedlikehold og påføring av feil overflatebehandling, har medført fukt-, fukt- og korrosjonsskader. Riktig valg av materialer tilpasset underlaget, kunnskap om bygnings fysikk, kjemi og påførings metoder, er våre kunnskaper og tjenester vi kan tilby våre kunder.',
    'Moderne Byggfornyelse er en solid entreprenørbedrift med røtter helt tilbake til 1930-tallet. Basert på stolte tradisjoner og lang erfaring, har vi spesialisert oss på rehabilitering av eksisterende bygg med fokus på fremtidsrettede løsninger',
    'De siste årene har vi sett stadig større mangel på nye tomter og en økende andel eldre bygningsmasse i Osloregionen. Det gjør behovet for rehabilitering stadig viktigere. I Moderne Byggfornyelse har vi spesialisert oss på nettopp dette'   
  ];

  return (
    <GridContainer>
      <Segment>
        <SegmentController>
          <SegmentButton onClick={() => setActiveSegment(0)}>Fasader</SegmentButton>
          <SegmentButton onClick={() => setActiveSegment(1)}>Boliger og Nybygg</SegmentButton>
          <SegmentButton onClick={() => setActiveSegment(2)}>Ombygging</SegmentButton>
        </SegmentController>
        <SegmentText>{segmentTexts[activeSegment]}</SegmentText>
      </Segment>
      <QuoteGrid>
        <QuoteIcon>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </QuoteIcon>
        <QuoteText>
          Vi vet mye om hvilke utfordringer du står ovenfor og hvilke løsninger som vil fungere i praksis,
          når eldre bygninger må fornyes. Som spesialister på nettopp byggfornyelse og energirehabilitering
          har vi opparbeidet bred kompetanse på akkurat dette området.
        </QuoteText>
      </QuoteGrid>
    </GridContainer>
  );
};

export default Section2;
