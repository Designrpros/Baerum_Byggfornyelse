import React, { useState } from 'react';
import styled from 'styled-components';

const SegmentController = styled.div`
  display: flex;
  margin: 2rem;
  
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
  text-align: left;
  margin: 1rem;
  
`;

const Section2 = () => {
  const [activeSegment, setActiveSegment] = useState(0);

  const segmentTexts = [
    'Moderne Byggfornyelse AS har gjennom flere år rehabilitert betong- og murfasader. Manglende vedlikehold og påføring av feil overflatebehandling, har medført fukt-, fukt- og korrosjonsskader. Riktig valg av materialer tilpasset underlaget, kunnskap om bygnings fysikk, kjemi og påførings metoder, er våre kunnskaper og tjenester vi kan tilby våre kunder.',
    'Moderne Byggfornyelse er en solid entreprenørbedrift med røtter helt tilbake til 1930-tallet. Basert på stolte tradisjoner og lang erfaring, har vi spesialisert oss på rehabilitering av eksisterende bygg med fokus på fremtidsrettede løsninger. De siste årene har vi sett stadig større mangel på nye tomter og en økende andel eldre bygningsmasse i Osloregionen. Det gjør behovet for rehabilitering stadig viktigere. I Moderne Byggfornyelse har vi spesialisert oss på nettopp dette',
    'Moderne Byggfornyelse AS har gjennom flere år rehabilitert betong- og murfasader. Manglende vedlikehold og påføring av feil overflatebehandling, har medført fukt-, fukt- og korrosjonsskader. Riktig valg av materialer tilpasset underlaget, kunnskap om bygnings fysikk, kjemi og påførings metoder, er våre kunnskaper og tjenester vi kan tilby våre kunder.'
  ];

  return (
    <>
      <SegmentController>
        <SegmentButton onClick={() => setActiveSegment(0)}>Fasader</SegmentButton>
        <SegmentButton onClick={() => setActiveSegment(1)}>Boliger og Nybygg</SegmentButton>
        <SegmentButton onClick={() => setActiveSegment(2)}>Ombygging</SegmentButton>
      </SegmentController>
      <SegmentText>{segmentTexts[activeSegment]}</SegmentText>
    </>
  );
};

export default Section2;
