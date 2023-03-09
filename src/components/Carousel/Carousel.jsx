import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import arrowImage from '../../assets/fleche carousel.png';
import star from '../../assets/star.png';
import starGray from '../../assets/star_gray.png';
import Data from '../../Data/Data';
import Accordion from "../Accordion/Accordion";

const CarouselContainer = styled.div`
  min-height: 550px;
  width:90%;
  max-width: 1240px;
  margin: 30px auto;
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
`;


const CarouselArrow = styled.div`
  height: 80px;
  width: 50px;
  cursor: pointer;
  background-image: url(${arrowImage});
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
`;

const InfoLogement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 20px 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  color: #FF6060;
  line-height: 142.6%;
`;

const InfoTitreLogement = styled.div`
  font-size: 36px;
  padding-bottom:20px;
`;

const InfoDescriptifLogement= styled.div`
font-size: 18px;
padding-bottom:20px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 142.6%;
  text-align: center;
  color: #FFFFFF;
  background: #FF6060;
  Width:auto;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px; 
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
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 142.6%;
  color: #FF6060;
`;

const Picture = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 20px;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <img key={i} src={star} alt="star" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <img key={i} src={starGray} alt="empty star" />
      ))}
    </>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const accordionWidths = [45];

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
        <InfoTitreLogement>
          <div>{apartment.title}</div>
          </InfoTitreLogement>
          <InfoDescriptifLogement>
          <div>{apartment.location}</div>
          </InfoDescriptifLogement>
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
            <Rating rating={apartment.rating} />
          </RatingContainer>
        </RateLogement>
            </InfoContainer>
            <AccordionContainer>
        <Accordion title="Fiabilité" width={accordionWidths[0]}>
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
            </Accordion>
          <Accordion title="Vente" width={accordionWidths[0]}>
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa.
              Tout comportement discriminatoire ou de perturbation du
              voisinage entraînera une exclusion de notre plateforme.
            </p>
          </Accordion>
        </AccordionContainer>
    </CarouselContainer>
  );
}

export default Carousel;
