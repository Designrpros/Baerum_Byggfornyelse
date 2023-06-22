import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  justify-content: center;
  align-content: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SegmentController = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const SegmentButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  text-align: left;
  margin: 0.5rem;

  // Add a border-bottom if the button is selected
  border-bottom: ${props => props.selected ? '2px solid black' : 'none'};

  &:focus {
    outline: none;
  }
`;

const SegmentText = styled.p`
  display: flex;
  justify-content: center;
  text-align: left;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const QuoteGrid = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: #555;
  height: 50vh;
  margin: 0;
  padding: 2rem;

  @media (min-width: 768px) {
    margin: -1rem;
    padding: 4rem;
  }
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
  color: white;

  @media (max-width: 768px) {
    padding: 2rem;
    font-size: 1.25rem;
  }
`;

const QuoteIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 4rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
    font-size: 2rem;
  }
`;

const Section2 = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segmentTexts = [
    'Vi er opptatt av kvalitet og legger stor vekt pa kundens behov og ønsker. Vi jobber stadig for at kunder oppfatter oss som en profesjonell og seriøs akter som leverer til avtalt tid og pris. Optimalisering av funksjoner og gode løsninger skal kjennetegne boliger utviklet av oss, og vi bestreber oss på å ligge i forkant av utvikling og bruk av energibesparende tiltak til boliger.',
    'Bærum Byggfornyelse er Mester Sertifisert, Sentralt Godkjent, og Velux sertifisert',
  ];

  return (
    <GridContainer>
      <Segment>
        <SegmentController>
          <SegmentButton selected={activeSegment === 0} onClick={() => setActiveSegment(0)}>Kvalitet</SegmentButton>
          <SegmentButton selected={activeSegment === 1} onClick={() => setActiveSegment(1)}>Sertifiseringer</SegmentButton>
        </SegmentController>
        <SegmentText>{segmentTexts[activeSegment]}</SegmentText>
      </Segment>
      <QuoteGrid>
        <QuoteIcon>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </QuoteIcon>
        <QuoteText>
          Vi vet mye om hvilke utfordringer du står ovenfor og hvilke løsninger som vil fungere i praksis,
          når eldre bygninger må fornyes.
        </QuoteText>
      </QuoteGrid>
    </GridContainer>
  );
};

export default Section2;
