import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import arrowImage from '../../assets/fleche carousel.png';
import Data from '../../Data/Data';
import  { COLORS, STYLES } from '../../styles/styles';

const CarouselContainer = styled.div`
  width:90%;
  max-width: 1240px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 255px;
    margin: 0 auto;
    }

`;

const CarouselImageContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    border-radius: 10px;
    // width: 335px;
    }

`;

const CarouselArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50px;
  right: 50px;

  @media screen and (max-width: 768px) {
    left: 0;
    right: 0;
    width: 100%;
    padding: 10px;
  }
`;


const CarouselArrow = styled.div`
  height: 80px;
  width: 50px;
  cursor: pointer;
  background-image: url(${arrowImage});

  @media screen and (max-width: 768px) {
    height: 25px;
    width: 15px;
    background-size: contain;
  }

`;

const CarouselArrowLeft = styled(CarouselArrow)`
  background-position: right center;
  transform: rotateY(180deg);
`;

const CarouselArrowRight = styled(CarouselArrow)`
  background-position: left center;
`;

const CarouselImage = styled.img`
  height: 100%;
  min-width: 100%;
  object-fit: cover;
  user-select: none;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.isActive ? "1" : "0")};
  position: absolute;
`;

const CounterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CounterText = styled.span`
font-family: ${STYLES.FONT_FAMILY};
font-weight: ${STYLES.FONT_WEIGHT_BOLD};
font-size: 25px;
Line height:25.67px;
color: ${COLORS.WHITE};
  z-index: 1;
`;

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const apartment = Data.find(item => item.id === props.apartmentId);
  const images = apartment.pictures;

  const handleClickPrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prevIndex =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const handleClickNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  }, [currentIndex]);

  return (
    <CarouselContainer>
      <CarouselImageContainer>
        {images.map((image, index) => (
          <CarouselImage
            key={index}
            src={image}
            isActive={index === currentIndex}
          />
        ))}
        {images.length > 1 && (
  <CarouselArrowContainer>
    <CarouselArrowLeft onClick={handleClickPrev} />
    <CarouselArrowRight onClick={handleClickNext} />
  </CarouselArrowContainer>
        )}
        {images.length > 1 && (
          <CounterContainer>
    <CounterText>{currentIndex + 1}/{images.length}</CounterText>
  </CounterContainer>
  )}
      </CarouselImageContainer>
    </CarouselContainer>
  );
  
}

export default Carousel;
