import React, { useState } from 'react';
import styled from 'styled-components';
import House from './House.jpg';
import HouseDesign from './Housedesign.jpg';
import Trash from './Trash.jpg';

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 300%;
  transition: transform 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 33.33%;
  height: 30vh;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: black;
  font-size: 2em;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const LeftButton = styled(Button)`
  left: 10px;
`;

const RightButton = styled(Button)`
  right: 10px;
`;

const GallerySlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [House, HouseDesign, Trash];

  const handlePrev = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <SliderContainer>
      <LeftButton onClick={handlePrev}>&lt;</LeftButton>
      <ImageContainer style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} src={image} alt="" />
        ))}
      </ImageContainer>
      <RightButton onClick={handleNext}>&gt;</RightButton>
    </SliderContainer>
  );
};

export default GallerySlider;
