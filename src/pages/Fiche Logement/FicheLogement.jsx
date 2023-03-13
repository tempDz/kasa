import React, { useState, useEffect } from 'react'; 
import styled from "styled-components";
import Carousel from '../../components/Carousel/Carousel';
import star from '../../assets/star.png';
import starGray from '../../assets/star_gray.png';
import Accordion from "../../components/Accordion/Accordion";
import Data from '../../Data/Data';
import Error404 from "../../pages/Error 404/Error404";
import  { COLORS, STYLES } from '../../styles/styles';

const location = window.location;

const FicheLogementContainer = styled.div`  
  display: flex;
  flex-direction: column;
  width:90%;
  max-width: 1240px;
  margin: auto;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    }
`;

const InfoLogement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0 20px 0;
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  color: ${COLORS.RED};
  line-height: 142.6%;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
    }
`;

const InfoTitreLogement = styled.div`
  font-size: 36px;
  padding-bottom:20px;
  
  @media screen and (max-width: 768px) {
    font-size: 18px;
    }
`;

const InfoDescriptifLogement= styled.div`
  font-size: 18px;
  padding-bottom:20px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: 14px;
  line-height: 142.6%;
  color: #FFFFFF;
  background: ${COLORS.RED};
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    height: 18px;
    border-radius: 5px;
  }
`;


const RateLogement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 20px 0;

  @media screen and (max-width: 768px) {
    flex-direction: row-reverse;
    }
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;

`;

const Name = styled.div`
  font-family: ${STYLES.FONT_FAMILY};
  font-style: normal;
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: 18px;
  line-height: 142.6%;
  color: ${COLORS.RED};

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 63px;
    text-align: end;
    }
`;

const Picture = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 20px;

  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    }

`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StarImage = styled.img`
  ${({ theme }) => `
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
      width: 15px;
      height: 15px;
    }
  `}
`;

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <StarImage
          key={i}
          src={star}
          alt="star"
        />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <img
          key={i}
          src={starGray}
          alt="empty star"
          style={{ width: "30px", height: "30px" }}
        />
      ))}
    </>
  );
};

const AccordionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 50px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const accordionWidths = {
  small: [100],
  medium: [45],
};

function FicheLogement() {
  const [apartment, setApartment] = useState(null);
  const [screenSize, setScreenSize] = useState("medium");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    window.scrollTo(0, 0);
    if (!apartment) {
      const foundApartment = Data.find((item) => item.id === id);
      if (foundApartment) {
        setApartment(foundApartment);
      } else {
        console.error(`Appartement avec l'ID ${id} non trouvé`);
      }
    }
  }, [location.search, apartment]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize("small");
      } else {
        setScreenSize("medium");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!apartment) {
    return <Error404 />;
  }
  return (
    <>
      <Carousel apartmentId={apartment.id} />
      <FicheLogementContainer>
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
              <Picture
                src={apartment.host.picture}
                alt={apartment.host.name}
              />
            </NameContainer>
            <RatingContainer>
              <Rating rating={apartment.rating} />
            </RatingContainer>
          </RateLogement>
        </InfoContainer>
        <AccordionContainer>
          <Accordion
            title="Description"
            width={accordionWidths[screenSize][0]}
          >
            <p>{apartment.description}</p>
          </Accordion>
          <Accordion
            title="Équipements"
            width={accordionWidths[screenSize][0]}
          >
            {apartment.equipments.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </Accordion>
        </AccordionContainer>
      </FicheLogementContainer>
    </>
  );
}

export default FicheLogement;
