import React, { useEffect } from 'react';
import styled from 'styled-components';
import House from "./House.jpg";
import Section2 from './Section';
import About from './About';
import GallerySlider from './GallerySlider.js';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';


import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

ReactGA.initialize('G-ZKHW6JDXTX'); 

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

const HighlightedText = styled.span`
  font-weight: bold;
  font-size: 70px;
  font-family: rubik;

  @media (max-width: 768px) {
    font-size: 50px;
  }
`;

const MainContent = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return (
    <>
<Main>
  <OverlayText>
    <h1>
      Velkommen til <br />
      <HighlightedText>Bærum<br />Byggfornyelse</HighlightedText>
    </h1>
    <p>
      <FontAwesomeIcon icon={faPhone} className="icon" />
      <br />
      <a href="tel:+4745241250">45 24 12 50</a> {/* Make the phone number clickable */}
    </p>
    <p>
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <br />
      <a href="mailto:POST@BaerumByggfornyelse.no">Post@BaerumByggfornyelse.no</a> {/* Make the email address clickable */}
    </p>
  </OverlayText>
</Main>
<About />
<Section2 />
<GallerySlider />
<Contact />
    </>
  );
};

export default MainContent;
