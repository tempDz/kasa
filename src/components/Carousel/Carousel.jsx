import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import arrowImage from '../../assets/fleche carousel.png';
import Data from '../../Data/Data';

const CarouselContainer = styled.div`
  height: 550px;
  max-width: 1240px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const CarouselImageContainer = styled.div`
  height: 415px;
  border-radius: 25px;
  overflow: hidden;
  position: relative;
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
  margin: auto;
  z-index: 1;
`;


const CarouselArrow = styled.div`
  color: white;
  height: 80px;
  width: 50px;
  cursor: pointer;
  background-image: url(${arrowImage});
  background-repeat: no-repeat;
  background-size: 50px 80px;
  &:hover {
    background-color: transparent;
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
  width: auto;
  min-width: 100%;
  max-width: none;
  object-fit: cover;
  user-select: none;
  transition: opacity 0.5s ease-in-out;
  opacity: ${props => (props.isActive ? "1" : "0")};
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

const InfoLogement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 20px 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Tag = styled.div`
  background-color: #f1f1f1;
  color: #555;
  padding: 5px 15px;
  margin: 5px;
  border-radius: 20px;
`;

const RateLogement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 0;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
`;

const Picture = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 10px;
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
        <CarouselArrowContainer>
          <CarouselArrowLeft onClick={handleClickPrev} />
          <CarouselArrowRight onClick={handleClickNext} />
        </CarouselArrowContainer>
      </CarouselImageContainer>
      <InfoContainer>
        <InfoLogement>
          <div>{apartment.title}</div>
          <div>{apartment.location}</div>
          <TagsContainer>
            {apartment.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagsContainer>
        </InfoLogement>
        <RateLogement>
          <NameContainer>
            <Name>{apartment.host.name}</Name>
            <Picture src={apartment.host.picture} alt={apartment.host.name} />            
          </NameContainer>
          <RatingContainer>
            <div>Rating:</div>
            <Rating>{apartment.rating}</Rating>
          </RatingContainer>
        </RateLogement>
      </InfoContainer>
    </CarouselContainer>
  );
}

export default Carousel;
