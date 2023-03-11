import React, { useState, useEffect } from 'react'; 
import styled from "styled-components";
import Carousel from '../../components/Carousel/Carousel';
import star from '../../assets/star.png';
import starGray from '../../assets/star_gray.png';
import Accordion from "../../components/Accordion/Accordion";
import Data from '../../Data/Data';
import Error404 from "../../pages/Error 404/Error404";
import  { COLORS, STYLES } from '../../styles/styles';

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
  font-family: ${STYLES.FONT_FAMILY};
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: 14px;
  line-height: 142.6%;
  text-align: center;
  color: #FFFFFF;
  background: ${COLORS.RED};
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
  font-family: ${STYLES.FONT_FAMILY};
  font-style: normal;
  font-weight: ${STYLES.FONT_WEIGHT_BOLD};
  font-size: 18px;
  line-height: 142.6%;
  color: ${COLORS.RED};
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

function FicheLogement() {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("id");
    window.scrollTo(0, 0);
    if (!apartment) {
      const foundApartment = Data.find(item => item.id === id);
      if (foundApartment) {
        setApartment(foundApartment);
      } else {
        console.error(`Appartement avec l'ID ${id} non trouvé`);
      }
    }
  }, [location.search, apartment]);
  
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
            <Picture src={apartment.host.picture} alt={apartment.host.name} />
          </NameContainer>
          <RatingContainer>
            <Rating rating={apartment.rating} />
          </RatingContainer>
        </RateLogement>
      </InfoContainer>
      <AccordionContainer>
        <Accordion title="Description" width={accordionWidths[0]}>
          <p>{apartment.description}</p>
        </Accordion>
        <Accordion title="Équipements" width={accordionWidths[0]}>
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
